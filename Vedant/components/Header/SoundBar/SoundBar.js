import { useEffect, useRef, useState } from "react";
import { PLAYLIST } from "../../../constants";

const NUDGE_KEY = "vd-music-tried";
const FADE_IN = 0.4; // seconds
const FADE_OUT = 2.5; // seconds, at the end of a clip
const STOP_FADE = 0.5; // seconds, when the visitor stops the music

// Random order without repeats until every track has played once.
const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// Press = play a random track; press again = fade out and stop. Clip tracks fade out
// after `clip` seconds and the next random track starts on its own. Volume fades use
// a Web Audio gain node because iOS Safari ignores audio.volume.
const SoundBar = () => {
  const audioRef = useRef(null);
  const ctxRef = useRef(null);
  const gainRef = useRef(null);
  const queueRef = useRef([]);
  const timersRef = useRef([]);
  const lastRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState(null);
  const [needsNudge, setNeedsNudge] = useState(false);

  useEffect(() => {
    try {
      setNeedsNudge(localStorage.getItem(NUDGE_KEY) !== "1");
    } catch (e) {}
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  // Must run inside the click handler: browsers only allow audio after a user gesture
  const ensureAudioGraph = () => {
    if (ctxRef.current) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const gain = ctx.createGain();
    ctx.createMediaElementSource(audioRef.current).connect(gain).connect(ctx.destination);
    ctxRef.current = ctx;
    gainRef.current = gain;
  };

  const rampTo = (value, seconds) => {
    const { gain } = gainRef.current;
    const now = ctxRef.current.currentTime;
    gain.cancelScheduledValues(now);
    gain.setValueAtTime(gain.value, now);
    gain.linearRampToValueAtTime(value, now + seconds);
  };

  const nextTrack = () => {
    if (!queueRef.current.length) {
      let queue = shuffle(PLAYLIST);
      // don't play the same track twice in a row across reshuffles
      if (queue.length > 1 && queue[0] === lastRef.current) queue.push(queue.shift());
      queueRef.current = queue;
    }
    return queueRef.current.shift();
  };

  const play = (next) => {
    clearTimers();
    const audio = audioRef.current;
    setTrack(next);
    lastRef.current = next;
    audio.src = next.src;
    audio.currentTime = 0;
    gainRef.current.gain.setValueAtTime(0, ctxRef.current.currentTime);
    audio
      .play()
      .then(() => rampTo(1, FADE_IN))
      .catch(() => setIsPlaying(false));

    if (next.clip) {
      // fade out over the last FADE_OUT seconds of the clip, then move on
      timersRef.current.push(
        setTimeout(() => rampTo(0, FADE_OUT), (next.clip - FADE_OUT) * 1000),
        setTimeout(() => play(nextTrack()), next.clip * 1000)
      );
    }
  };

  const stop = () => {
    clearTimers();
    rampTo(0, STOP_FADE);
    timersRef.current.push(
      setTimeout(() => audioRef.current.pause(), STOP_FADE * 1000)
    );
    setIsPlaying(false);
  };

  const handleClick = () => {
    if (needsNudge) {
      setNeedsNudge(false);
      try {
        localStorage.setItem(NUDGE_KEY, "1");
      } catch (e) {}
    }

    ensureAudioGraph();
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();

    if (isPlaying) return stop();
    setIsPlaying(true);
    play(nextTrack());
  };

  return (
    <div className="relative flex items-center">
      {needsNudge && (
        // Pulsing halo so first-time visitors notice the music button
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-light/40 animate-ping"
        />
      )}
      <button
        type="button"
        className={`soundBars link relative flex items-center justify-center ${
          isPlaying ? "play" : ""
        }`}
        onClick={handleClick}
        aria-label={
          isPlaying && track
            ? `Stop music (${track.title} by ${track.artist})`
            : "Play music"
        }
      >
        <span />
        <span />
        <span />
        <span />
      </button>
      <audio
        ref={audioRef}
        preload="none"
        // full-length tracks roll into the next random one when they end
        // (clip tracks advance on their own timer)
        onEnded={() => isPlaying && !lastRef.current?.clip && play(nextTrack())}
      />
    </div>
  );
};

export default SoundBar;
