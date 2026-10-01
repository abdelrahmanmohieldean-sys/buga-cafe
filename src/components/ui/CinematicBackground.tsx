"use client";

import React, { useEffect, useRef, useState } from "react";

export interface CinematicBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
  overlayGradient?: string;
  priority?: boolean;
  className?: string;
}

export const CinematicBackground: React.FC<CinematicBackgroundProps> = ({
  videoSrc,
  posterSrc,
  overlayGradient,
  priority = false,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [hasVideoError, setHasVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Subscribe to prefers-reduced-motion with SSR-safe useSyncExternalStore
  const prefersReducedMotion = React.useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    () => false
  );

  // Autoplay and muted property enforcement directly on DOM node
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion || hasVideoError) return;

    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoLoaded(true);
          })
          .catch((err) => {
            // If autoplay is delayed, keep poster visible
            console.warn("Video autoplay waiting for interaction or idle:", err);
          });
      }
    };

    // If priority (like Hero), attempt to play immediately
    if (priority) {
      playVideo();
    }

    // IntersectionObserver to pause when off-screen and resume when in view
    let isIntersecting = priority;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
          if (entry.isIntersecting) {
            playVideo();
          } else {
            video.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: "120px 0px",
        threshold: 0.05,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Pause on tab switch, resume on tab focus
    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else if (isIntersecting) {
        playVideo();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [priority, prefersReducedMotion, hasVideoError]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Temporarily removed fallback background and all overlays to see raw video rendering */}
      {!prefersReducedMotion && !hasVideoError && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setIsVideoLoaded(true)}
          onPlaying={() => setIsVideoLoaded(true)}
          onError={(e) => {
            console.error("Video element error event:", e);
            setHasVideoError(true);
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
        />
      )}
    </div>
  );
};
