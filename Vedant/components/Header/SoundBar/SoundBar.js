import { useEffect, useRef, useState } from "react";
import { PLAYLIST } from "../../../constants";

const NUDGE_KEY = "vd-music-tried";
const SPOTIFY_API = "https://open.spotify.com/embed/iframe-api/v1";

// Loads Spotify's iFrame API once (only after a visitor asks for music) and
// mounts an embed controller inside `host`.
const createSpotifyController = (host, uri) =>
  new Promise((resolve) => {
    const create = (IFrameAPI) => {
      const el = document.createElement("div");
      host.appendChild(el);
      IFrameAPI.createController(el, { uri, width: "100%", height: 152 }, resolve);
    };

    if (window.vdSpotifyIframeApi) return create(window.vdSpotifyIframeApi);

    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      window.vdSpotifyIframeApi = IFrameAPI;
      create(IFrameAPI);
    };
    const script = document.createElement("script");
    script.src = SPOTIFY_API;
    script.async = true;
    document.body.appendChild(script);
  });

const SoundBar = () => {
  const audioRef = useRef(null);
  const spotifyHostRef = useRef(null);
  const controllerRef = useRef(null);
  // Mirrors `current` for event listeners, which would otherwise see a stale value
  const currentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(null);
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

  const playSpotify = async (track) => {
    audioRef.current.pause();
    if (!controllerRef.current) {
      const controller = await createSpotifyController(
        spotifyHostRef.current,
        track.uri
      );
      controller.addListener("playback_update", (e) => {
        if (!currentRef.current?.src) setIsPlaying(!e.data.isPaused);
      });
      controller.addListener("ready", () => controller.play());
      controllerRef.current = controller;
    } else {
      controllerRef.current.loadUri(track.uri);
      controllerRef.current.play();
    }
  };

  const playTrack = (track) => {
    if (current?.id === track.id) {
      // Same track: toggle pause/resume
      if (track.src) {
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
      } else {
        controllerRef.current?.togglePlay();
      }
      return;
    }

    setCurrent(track);
    currentRef.current = track;
    if (track.src) {
      controllerRef.current?.pause();
      audioRef.current.play();
    } else {
      playSpotify(track);
    }
  };

  const handleButton = () => {
    if (needsNudge) {
      setNeedsNudge(false);
      setShowNudge(false);
      try {
        localStorage.setItem(NUDGE_KEY, "1");
      } catch (e) {}
    }
    if (!current) {
      setIsOpen(true);
      playTrack(PLAYLIST[0]);
    } else {
      setIsOpen((open) => !open);
    }
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
        onClick={handleButton}
        aria-label={isOpen ? "Hide music player" : "Open music player"}
        aria-expanded={isOpen}
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

      <div
        className={`fixed right-4 top-20 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl bg-gray-dark-4 p-4 shadow-2xl outline outline-1 outline-gray-dark-1 transition-all duration-300 sm:right-8 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-gray-light-3">
            Deploy soundtrack
          </p>
          <button
            type="button"
            className="link text-lg leading-none text-gray-light-3 hover:text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close music player"
          >
            ×
          </button>
        </div>

        <div
          ref={spotifyHostRef}
          className={current && !current.src ? "mb-3" : "hidden"}
        />

        <ul className="space-y-1">
          {PLAYLIST.map((track) => {
            const active = current?.id === track.id;
            return (
              <li key={track.id}>
                <button
                  type="button"
                  onClick={() => playTrack(track)}
                  className={`link flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors ${
                    active ? "bg-gray-dark-2" : "hover:bg-gray-dark-3"
                  }`}
                >
                  <span className="w-4 font-mono text-indigo-light">
                    {active && isPlaying ? "❚❚" : "▶"}
                  </span>
                  <span>
                    <span className="block text-white">{track.title}</span>
                    <span className="block text-xs text-gray-light-3">
                      {track.artist}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-[0.7rem] leading-snug text-gray-light-4">
          Spotify plays full tracks if you&apos;re signed in to Spotify, 30-second previews otherwise.
        </p>
      </div>

      <audio
        ref={audioRef}
        src="/sounds/song.mp3"
        loop
        preload="none"
        onPlay={() => currentRef.current?.src && setIsPlaying(true)}
        onPause={() => currentRef.current?.src && setIsPlaying(false)}
      />
    </div>
  );
};

export default SoundBar;
