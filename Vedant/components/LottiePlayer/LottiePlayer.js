import { useEffect, useRef } from "react";

// Decorative Lottie animation from /public/lottie. Loads lottie-web and the JSON
// only when the element nears the viewport, pauses while off-screen, and shows a
// still frame for visitors who prefer reduced motion.
const LottiePlayer = ({ src, className = "", loop = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animation;
    let isVisible = false;
    let cancelled = false;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const load = async () => {
      const lottie = (await import("lottie-web")).default;
      if (cancelled) return;
      animation = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop,
        autoplay: false,
        path: src,
      });
      animation.addEventListener("DOMLoaded", () => {
        if (reduceMotion) animation.goToAndStop(animation.totalFrames / 2, true);
        else if (isVisible) animation.play();
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animation) load();
        if (!animation || reduceMotion) return;
        isVisible ? animation.play() : animation.pause();
      },
      { rootMargin: "200px" }
    );
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      animation?.destroy();
    };
  }, [src, loop]);

  // A span, so it can also sit inline inside text (e.g. the footer line)
  return <span ref={containerRef} className={className} aria-hidden="true" />;
};

export default LottiePlayer;
