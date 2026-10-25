import { useEffect, useRef, useState } from "react";
import { PLAYLIST } from "../../../constants";

const NUDGE_KEY = "vd-music-tried";
const YT_STATE = { ENDED: 0, PLAYING: 1, PAUSED: 2 };

// Loads YouTube's IFrame API once and resolves with a player mounted in `host`.
// Uses the privacy-enhanced (no-cookie) host.
const createYouTubePlayer = (host, videoId, onStateChange) =>
  new Promise((resolve) => {
    const create = () => {
      const el = document.createElement("div");
      host.appendChild(el);
      new window.YT.Player(el, {
        host: "https://www.youtube-nocookie.com",
        width: "100%",
        height: "100%",
        videoId,
        playerVars: { playsinline: 1, rel: 0, controls: 0, disablekb: 1 },
        events: {
          onReady: (e) => resolve(e.target),
          onStateChange: (e) => onStateChange(e.data),
        },
      });
    };

    if (window.YT?.Player) return create();
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      create();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);
  });

// Play -> the next song's chosen section; press again -> stop. The next press plays
// the following song. A section that reaches its end simply stops.
const SoundBar = () => {
  const audioRef = useRef(null);
  const ytHostRef = useRef(null);
  const ytPlayerRef = useRef(null);
  const ytPromiseRef = useRef(null);
  const indexRef = useRef(-1);
  const audioTimerRef = useRef(null);
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsNudge, setNeedsNudge] = useState(false);

  useEffect(() => {
    try {
      setNeedsNudge(localStorage.getItem(NUDGE_KEY) !== "1");
    } catch (e) {}
    return () => clearTimeout(audioTimerRef.current);
  }, []);

  const firstYouTubeId = PLAYLIST.find((t) => t.youtubeId)?.youtubeId;

  // Prepare the YouTube player on hover/focus/touch so the click can start it instantly
  const warmUp = () => {
    if (ytPromiseRef.current || !firstYouTubeId) return ytPromiseRef.current;
    ytPromiseRef.current = createYouTubePlayer(
      ytHostRef.current,
      firstYouTubeId,
      (state) => {
        if (state === YT_STATE.PLAYING) setIsPlaying(true);
        if (state === YT_STATE.PAUSED || state === YT_STATE.ENDED) setIsPlaying(false);
      }
    ).then((player) => (ytPlayerRef.current = player));
    return ytPromiseRef.current;
  };

  const stop = () => {
    ytPlayerRef.current?.pauseVideo();
    audioRef.current.pause();
    clearTimeout(audioTimerRef.current);
    setIsPlaying(false);
  };

  const playSection = async (next) => {
    setTrack(next);
    if (next.youtubeId) {
      setIsPlaying(true); // show the player card right away
      const options = {
        videoId: next.youtubeId,
        startSeconds: next.start,
        endSeconds: next.end,
      };
      if (ytPlayerRef.current) ytPlayerRef.current.loadVideoById(options);
      else (await warmUp()).loadVideoById(options);
    } else {
      const audio = audioRef.current;
      audio.src = next.src;
      audio.currentTime = next.start;
      audio.play().catch(() => setIsPlaying(false));
      clearTimeout(audioTimerRef.current);
      audioTimerRef.current = setTimeout(
        () => audio.pause(),
        (next.end - next.start) * 1000
      );
    }
  };

  const handleClick = () => {
    if (needsNudge) {
      setNeedsNudge(false);
      try {
        localStorage.setItem(NUDGE_KEY, "1");
      } catch (e) {}
    }

    if (isPlaying) return stop();
    indexRef.current = (indexRef.current + 1) % PLAYLIST.length;
    playSection(PLAYLIST[indexRef.current]);
  };

  const showCard = isPlaying && !!track?.youtubeId;

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
        onPointerEnter={warmUp}
        onFocus={warmUp}
        onTouchStart={warmUp}
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

      {/* YouTube's API terms require the player to be visible while it plays */}
      <div
        className={`fixed bottom-4 right-4 z-50 overflow-hidden rounded-2xl bg-gray-dark-4 shadow-2xl outline outline-1 outline-gray-dark-1 transition-all duration-500 ${
          showCard
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-3 py-2">
          <p className="font-mono text-xs text-gray-light-3">
            ♪ {track?.title} · {track?.artist}
          </p>
          <button
            type="button"
            className="link text-lg leading-none text-gray-light-3 hover:text-white"
            onClick={stop}
            aria-label="Stop music"
          >
            ×
          </button>
        </div>
        <div ref={ytHostRef} className="h-[200px] w-[min(356px,calc(100vw-2rem))]" />
      </div>

      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default SoundBar;
