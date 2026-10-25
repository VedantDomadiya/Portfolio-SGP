import { useEffect, useRef, useState } from "react";
import { PLAYLIST } from "../../../constants";

const NUDGE_KEY = "vd-music-tried";

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

// One click plays, the next pauses. Tracks are shuffled and the next one starts
// when the current one ends; the order reshuffles after each full pass.
const SoundBar = () => {
  const audioRef = useRef(null);
  const queueRef = useRef([]);
  const indexRef = useRef(-1);
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsNudge, setNeedsNudge] = useState(false);
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    let tried = false;
    try {
      tried = localStorage.getItem(NUDGE_KEY) === "1";
    } catch (e) {}
    if (tried) return;
    setNeedsNudge(true);
    const timer = setTimeout(() => setShowNudge(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const playNext = () => {
    indexRef.current += 1;
    if (indexRef.current >= queueRef.current.length) {
      queueRef.current = shuffle(PLAYLIST);
      indexRef.current = 0;
    }
    const next = queueRef.current[indexRef.current];
    setTrack(next);
    audioRef.current.src = next.src;
    audioRef.current.play().catch(() => setIsPlaying(false));
  };

  const handleClick = () => {
    if (needsNudge) {
      setNeedsNudge(false);
      setShowNudge(false);
      try {
        localStorage.setItem(NUDGE_KEY, "1");
      } catch (e) {}
    }

    const audio = audioRef.current;
    if (!track) playNext();
    else if (audio.paused) audio.play();
    else audio.pause();
  };

  const label = track
    ? `${isPlaying ? "Pause" : "Play"} music (${track.title} by ${track.artist})`
    : "Play music";

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
        aria-label={label}
        title={track ? `${track.title} · ${track.artist}` : "Play music"}
      >
        <span />
        <span />
        <span />
        <span />
      </button>

      {showNudge && (
        <div className="pointer-events-none absolute right-0 top-10 w-max animate-bounce rounded-full bg-indigo-dark px-3 py-1.5 font-mono text-xs text-snow shadow-lg">
          ▶ Tap for my deploy soundtrack
        </div>
      )}

      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={playNext}
      />
    </div>
  );
};

export default SoundBar;
