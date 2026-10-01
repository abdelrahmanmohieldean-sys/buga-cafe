"use client";

import React, { useMemo } from "react";
import {
  AmbientCategoryPreset,
  getAmbientPreset,
  OrganicMotionType,
} from "@/data/ambientScenes";

interface AmbientBackgroundProps {
  categoryId: string;
  className?: string;
  priority?: boolean;
}

/**
 * Organic SVG Motion Renderer according to category preset
 * Unmistakably visible, rich cinematic lighting and fluid shapes.
 */
const OrganicMotionLayer: React.FC<{
  type: OrganicMotionType;
  accentColor: string;
  secondaryColor: string;
  opacity: number;
  duration: string;
  idPrefix: string;
}> = ({ type, accentColor, secondaryColor, opacity, duration, idPrefix }) => {
  switch (type) {
    case "steam":
      return (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-1000"
          style={{ opacity }}
        >
          {/* Luminous Rising Steam Ribbon 1 */}
          <svg
            className="absolute left-[10%] sm:left-[20%] bottom-[-5%] w-[400px] sm:w-[580px] h-[800px] blur-2xl will-change-transform"
            style={{
              animation: `steam-drift-1 ${duration} ease-in-out infinite`,
            }}
            viewBox="0 0 400 800"
            fill="none"
          >
            <defs>
              <linearGradient id={`${idPrefix}-steam-grad-1`} x1="0%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
                <stop offset="50%" stopColor={accentColor} stopOpacity="0.5" />
                <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M160 800 C60 600, 320 450, 180 250 C120 120, 240 60, 200 0 C260 60, 340 220, 270 400 C210 580, 300 700, 220 800 Z"
              fill={`url(#${idPrefix}-steam-grad-1)`}
            />
          </svg>

          {/* Luminous Rising Steam Ribbon 2 */}
          <svg
            className="absolute right-[10%] sm:right-[22%] bottom-[-8%] w-[420px] sm:w-[620px] h-[850px] blur-2xl will-change-transform"
            style={{
              animation: `steam-drift-2 16s ease-in-out infinite`,
            }}
            viewBox="0 0 450 850"
            fill="none"
          >
            <defs>
              <linearGradient id={`${idPrefix}-steam-grad-2`} x1="100%" y1="100%" x2="30%" y2="0%">
                <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.7" />
                <stop offset="60%" stopColor={accentColor} stopOpacity="0.45" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M220 850 C320 620, 100 480, 240 280 C300 160, 200 90, 230 0 C190 90, 130 220, 170 420 C220 600, 130 720, 220 850 Z"
              fill={`url(#${idPrefix}-steam-grad-2)`}
            />
          </svg>
        </div>
      );

    case "liquid-wave":
      return (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-1000"
          style={{ opacity }}
        >
          {/* Molten Liquid Wave 1 */}
          <svg
            className="absolute -top-[15%] -left-[10%] w-[120%] h-[120%] blur-2xl will-change-transform"
            style={{
              animation: `liquid-swell-1 ${duration} ease-in-out infinite`,
            }}
            viewBox="0 0 1000 1000"
            fill="none"
          >
            <defs>
              <linearGradient id={`${idPrefix}-wave-grad-1`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.85" />
                <stop offset="60%" stopColor={secondaryColor} stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 250 C350 120, 650 420, 1000 220 L1000 1000 L0 1000 Z"
              fill={`url(#${idPrefix}-wave-grad-1)`}
            />
          </svg>

          {/* Deep Counter Wave 2 */}
          <svg
            className="absolute -bottom-[20%] -right-[10%] w-[120%] h-[120%] blur-2xl will-change-transform"
            style={{
              animation: `liquid-swell-2 18s ease-in-out infinite`,
            }}
            viewBox="0 0 1000 1000"
            fill="none"
          >
            <defs>
              <linearGradient id={`${idPrefix}-wave-grad-2`} x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.75" />
                <stop offset="70%" stopColor={accentColor} stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 600 C380 720, 620 480, 1000 650 L1000 1000 L0 1000 Z"
              fill={`url(#${idPrefix}-wave-grad-2)`}
            />
          </svg>
        </div>
      );

    case "chilled-refraction":
      return (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-1000"
          style={{ opacity }}
        >
          {/* Chilled Prismatic Flare 1 */}
          <div
            className="absolute -top-[10%] left-[15%] w-[680px] h-[680px] rounded-full blur-[65px] will-change-transform"
            style={{
              background: `radial-gradient(circle at center, ${accentColor} 0%, rgba(130, 215, 180, 0.2) 45%, transparent 70%)`,
              animation: `chilled-caustic ${duration} ease-in-out infinite`,
            }}
          />
          {/* Icy Reflection 2 */}
          <div
            className="absolute bottom-[5%] right-[15%] w-[620px] h-[620px] rounded-full blur-[60px] will-change-transform"
            style={{
              background: `radial-gradient(circle at center, ${secondaryColor} 0%, rgba(247, 244, 237, 0.15) 50%, transparent 68%)`,
              animation: `chilled-caustic 16s ease-in-out infinite reverse`,
            }}
          />
        </div>
      );

    case "creamy-flow":
      return (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-1000"
          style={{ opacity }}
        >
          {/* Voluptuous Cream Ribbon 1 */}
          <svg
            className="absolute top-[0%] left-[0%] w-[115%] h-[115%] blur-2xl will-change-transform"
            style={{
              animation: `creamy-swirl-1 ${duration} ease-in-out infinite`,
            }}
            viewBox="0 0 1200 800"
            fill="none"
          >
            <defs>
              <linearGradient id={`${idPrefix}-cream-grad-1`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
                <stop offset="50%" stopColor={secondaryColor} stopOpacity="0.45" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M80 180 C380 80, 820 320, 1120 150 C1180 380, 920 620, 620 520 C320 420, 30 580, 80 180 Z"
              fill={`url(#${idPrefix}-cream-grad-1)`}
            />
          </svg>

          {/* Velvet Nuance Bloom 2 */}
          <div
            className="absolute -bottom-[5%] right-[12%] w-[650px] h-[650px] rounded-full blur-[70px] will-change-transform"
            style={{
              background: `radial-gradient(circle, ${secondaryColor} 0%, rgba(245, 175, 195, 0.2) 50%, transparent 70%)`,
              animation: `creamy-swirl-1 18s ease-in-out infinite reverse`,
            }}
          />
        </div>
      );

    case "effervescence":
      return (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-1000"
          style={{ opacity }}
        >
          {/* Sparkling Mint Primary Bloom */}
          <div
            className="absolute top-[15%] left-[20%] w-[600px] h-[600px] rounded-full blur-[65px]"
            style={{
              background: `radial-gradient(circle, ${accentColor} 0%, rgba(105, 230, 150, 0.2) 45%, transparent 70%)`,
              animation: `ambient-light-breathe-1 ${duration} ease-in-out infinite`,
            }}
          />
          {/* Zesty Lime Secondary Bloom */}
          <div
            className="absolute bottom-[20%] right-[18%] w-[580px] h-[580px] rounded-full blur-[60px]"
            style={{
              background: `radial-gradient(circle, ${secondaryColor} 0%, rgba(205, 250, 165, 0.18) 50%, transparent 70%)`,
              animation: `ambient-light-breathe-2 14s ease-in-out infinite`,
            }}
          />

          {/* Distinct Luminous Rising Micro-Bubbles */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
            <circle cx="220" cy="750" r="3.5" fill="#a8ffc4" opacity="0.85">
              <animate attributeName="cy" values="750;150" dur="9s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0" dur="9s" repeatCount="indefinite" />
            </circle>
            <circle cx="420" cy="850" r="2.8" fill="#f7f4ed" opacity="0.8">
              <animate attributeName="cy" values="850;200" dur="11s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.8;0" dur="11s" repeatCount="indefinite" />
            </circle>
            <circle cx="680" cy="800" r="4.0" fill="#a8ffc4" opacity="0.9">
              <animate attributeName="cy" values="800;180" dur="10s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.95;0" dur="10s" repeatCount="indefinite" />
            </circle>
            <circle cx="840" cy="780" r="3.0" fill="#f7f4ed" opacity="0.85">
              <animate attributeName="cy" values="780;120" dur="12s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.85;0" dur="12s" repeatCount="indefinite" />
            </circle>
            <circle cx="320" cy="650" r="2.5" fill="#a8ffc4" opacity="0.75">
              <animate attributeName="cy" values="650;100" dur="8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.8;0" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="560" cy="700" r="3.2" fill="#d9ffea" opacity="0.85">
              <animate attributeName="cy" values="700;140" dur="10.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.9;0" dur="10.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      );

    case "sunlight-glow":
    default:
      return (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-1000"
          style={{ opacity }}
        >
          {/* Radiant Sunbeam Canopy 1 */}
          <div
            className="absolute -top-[5%] left-[25%] w-[720px] h-[720px] rounded-full blur-[70px] will-change-transform"
            style={{
              background: `radial-gradient(circle, ${accentColor} 0%, rgba(245, 180, 45, 0.25) 45%, transparent 70%)`,
              animation: `sunlight-dapple ${duration} ease-in-out infinite`,
            }}
          />
          {/* Lush Orchard Glow 2 */}
          <div
            className="absolute bottom-[5%] right-[15%] w-[650px] h-[650px] rounded-full blur-[65px] will-change-transform"
            style={{
              background: `radial-gradient(circle, ${secondaryColor} 0%, rgba(105, 195, 75, 0.2) 50%, transparent 70%)`,
              animation: `sunlight-dapple 16s ease-in-out infinite reverse`,
            }}
          />
        </div>
      );
  }
};

/**
 * BU-GA Living Atmosphere Background Engine
 */
export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({
  categoryId,
  className = "",
}) => {
  // Retrieve current category atmospheric preset
  const preset: AmbientCategoryPreset = useMemo(
    () => getAmbientPreset(categoryId),
    [categoryId]
  );

  const { baseGradient, primaryLight, secondaryLight, organicMotion, accent, textureOpacity, backgroundImage, backgroundMotion } = preset;

  // When a real photo exists, we use an image-forward rendering path
  // that makes the photo clearly visible with a lightweight cinematic vignette
  const hasPhoto = !!backgroundImage;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      {/* =================================================================
          LAYER 1: Base Brand Gradient
          Always rendered as the deepest foundation
          ================================================================= */}
      <div
        className="absolute inset-0 w-full h-full transition-all duration-1000 ease-out"
        style={{
          background: `linear-gradient(${baseGradient.angle}, ${baseGradient.from} 0%, ${baseGradient.via} 50%, ${baseGradient.to} 100%)`,
        }}
      />

      {/* =================================================================
          LAYER 1b: Photographic Background Image (when available)
          The photo is the HERO — clearly visible and cinematic.
          Uses Ken Burns slow-motion parallax for the alive feeling.
          ================================================================= */}
      {hasPhoto && (
        <>
          {/* The photo — full-bleed, mobile-portrait optimized, animated */}
          <div
            className="absolute inset-[-8%] w-[116%] h-[116%] will-change-transform"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              backgroundRepeat: "no-repeat",
              animation: backgroundMotion
                ? `bg-cinematic-breathe ${backgroundMotion.duration} ease-in-out infinite alternate`
                : "bg-cinematic-breathe 22s ease-in-out infinite alternate",
            }}
          />

          {/* Cinematic vignette: dark edges for readability, transparent center to show photo */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: `
                radial-gradient(ellipse 85% 70% at 50% 45%, transparent 0%, ${baseGradient.from}40 55%, ${baseGradient.from}90 100%)
              `,
            }}
          />

          {/* Top edge fade — ensures category header text readability */}
          <div
            className="absolute inset-x-0 top-0 h-36 sm:h-44 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, ${baseGradient.from}cc 0%, ${baseGradient.from}80 40%, transparent 100%)`,
            }}
          />

          {/* Bottom edge fade — ensures card area has enough contrast */}
          <div
            className="absolute inset-x-0 bottom-0 h-28 sm:h-36 pointer-events-none"
            style={{
              background: `linear-gradient(to top, ${baseGradient.from}bb 0%, ${baseGradient.from}60 40%, transparent 100%)`,
            }}
          />

          {/* Subtle brightness breathing overlay — makes the image feel alive */}
          <div
            className="absolute inset-0 w-full h-full mix-blend-soft-light pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 90% 80% at 40% 45%, rgba(255,255,255,0.06) 0%, transparent 70%)`,
              animation: "bg-light-breathe 8s ease-in-out infinite alternate",
            }}
          />
        </>
      )}

      {/* =================================================================
          LAYER 2: Atmospheric Light Blooms
          When photo is present, these are very subtle accent glows.
          When no photo, they are the primary visual atmosphere.
          ================================================================= */}
      {/* Primary Light Bloom */}
      <div
        className="absolute rounded-full will-change-transform transition-all duration-1000"
        style={{
          width: hasPhoto ? "400px" : primaryLight.size,
          height: hasPhoto ? "400px" : primaryLight.size,
          left: `calc(${primaryLight.x}% - ${hasPhoto ? "400px" : primaryLight.size} / 2)`,
          top: `calc(${primaryLight.y}% - ${hasPhoto ? "400px" : primaryLight.size} / 2)`,
          background: `radial-gradient(circle, ${primaryLight.color} 0%, transparent 68%)`,
          filter: hasPhoto ? "blur(80px)" : "blur(65px)",
          opacity: hasPhoto ? 0.25 : 1,
          animation: `ambient-light-breathe-1 ${primaryLight.pulseDuration} ease-in-out infinite`,
        }}
      />

      {/* Secondary Light Bloom */}
      <div
        className="absolute rounded-full will-change-transform transition-all duration-1000"
        style={{
          width: hasPhoto ? "350px" : secondaryLight.size,
          height: hasPhoto ? "350px" : secondaryLight.size,
          left: `calc(${secondaryLight.x}% - ${hasPhoto ? "350px" : secondaryLight.size} / 2)`,
          top: `calc(${secondaryLight.y}% - ${hasPhoto ? "350px" : secondaryLight.size} / 2)`,
          background: `radial-gradient(circle, ${secondaryLight.color} 0%, transparent 70%)`,
          filter: hasPhoto ? "blur(85px)" : "blur(70px)",
          opacity: hasPhoto ? 0.2 : 1,
          animation: `ambient-light-breathe-2 ${secondaryLight.pulseDuration} ease-in-out infinite`,
        }}
      />

      {/* =================================================================
          LAYER 3: Category-Specific Organic Movement
          When photo is present, this is very subdued so it doesn't cover the image.
          When no photo, it's the primary visual motion.
          ================================================================= */}
      {!hasPhoto && (
        <OrganicMotionLayer
          type={organicMotion.type}
          accentColor={organicMotion.accentColor}
          secondaryColor={organicMotion.secondaryColor}
          opacity={organicMotion.opacity}
          duration={organicMotion.duration}
          idPrefix={categoryId}
        />
      )}

      {/* =================================================================
          LAYER 4: Filmic Texture & Micro-Grain Depth
          Very subtle — adds tactile depth to both photo and gradient modes
          ================================================================= */}
      <div
        className="absolute inset-0 w-full h-full mix-blend-overlay pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: hasPhoto ? 0.02 : textureOpacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* =================================================================
          LAYER 5: Category Accent Glow
          When photo exists, this is hidden — the photo IS the accent.
          ================================================================= */}
      {!hasPhoto && (
        <div
          className="absolute rounded-full blur-[60px] transition-all duration-1000"
          style={{
            width: accent.spread,
            height: accent.spread,
            left: `calc(${accent.x}% - ${accent.spread} / 2)`,
            top: `calc(${accent.y}% - ${accent.spread} / 2)`,
            background: `radial-gradient(circle, ${accent.glowColor} 0%, transparent 65%)`,
            opacity: accent.opacity,
          }}
        />
      )}

      {/* Edge transitions — only for non-photo mode (photo mode has its own vignette above) */}
      {!hasPhoto && (
        <>
          <div className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-[#041109]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-[#041109]/40 to-transparent" />
        </>
      )}
    </div>
  );
};
