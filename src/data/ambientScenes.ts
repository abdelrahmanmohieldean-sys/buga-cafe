/**
 * BU-GA CAFÉ — LIVING ATMOSPHERE BACKGROUND ENGINE
 * Unmistakably visible, rich cinematic presets for all 12 menu categories.
 * 
 * Master Visual Palette:
 * - Deep Forest Green: #041109
 * - Espresso Brown:    #120906
 * - Warm Cream:        #F7F4ED
 * - Muted Copper:      #C87D55
 */

export interface BaseGradientConfig {
  from: string;
  via: string;
  to: string;
  angle: string;
}

export interface AmbientLightConfig {
  color: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: string;
  pulseDuration: string; // e.g. '12s'
}

export type OrganicMotionType =
  | "steam"
  | "liquid-wave"
  | "chilled-refraction"
  | "creamy-flow"
  | "effervescence"
  | "sunlight-glow";

export interface OrganicMotionConfig {
  type: OrganicMotionType;
  accentColor: string;
  secondaryColor: string;
  opacity: number;
  duration: string; // e.g. '14s'
}

export interface AccentHighlightConfig {
  glowColor: string;
  x: number;
  y: number;
  spread: string;
  opacity: number;
}

export interface BackgroundMotionConfig {
  scaleRange: [number, number];
  translateRange: [string, string];
  duration: string;
}

export interface AmbientCategoryPreset {
  id: string;
  name: string;
  mood: string;
  backgroundImage?: string;
  backgroundMotion?: BackgroundMotionConfig;
  baseGradient: BaseGradientConfig;
  primaryLight: AmbientLightConfig;
  secondaryLight: AmbientLightConfig;
  organicMotion: OrganicMotionConfig;
  accent: AccentHighlightConfig;
  textureOpacity: number;
}

export const AMBIENT_PRESETS: Record<string, AmbientCategoryPreset> = {
  // 1. HOT COFFEE: High-end photographic coffee visual source with rising steam, warm light, and subtle parallax
  "hot-coffee": {
    id: "hot-coffee",
    name: "Hot Coffee",
    mood: "Warm, roasted, intimate",
    backgroundImage: "/images/categories/hot-coffee-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.08],
      translateRange: ["0px, 0px", "-15px, -12px"],
      duration: "22s",
    },
    baseGradient: {
      from: "#05160b",
      via: "#241108", // Visible warm espresso-copper core
      to: "#071a0e",
      angle: "150deg",
    },
    primaryLight: {
      color: "rgba(223, 139, 95, 0.45)", // Vivid warm copper glow
      x: 35,
      y: 35,
      size: "650px",
      pulseDuration: "10s",
    },
    secondaryLight: {
      color: "rgba(185, 90, 45, 0.40)", // Roasted amber
      x: 75,
      y: 65,
      size: "600px",
      pulseDuration: "14s",
    },
    organicMotion: {
      type: "steam",
      accentColor: "rgba(223, 139, 95, 0.50)",
      secondaryColor: "rgba(247, 244, 237, 0.28)",
      opacity: 0.95,
      duration: "12s",
    },
    accent: {
      glowColor: "rgba(223, 139, 95, 0.35)",
      x: 50,
      y: 40,
      spread: "550px",
      opacity: 0.8,
    },
    textureOpacity: 0.04,
  },

  // 2. COLD COFFEE: Chilled liquid jade, iced espresso core, cool cream caustic waves
  "cold-coffee": {
    id: "cold-coffee",
    name: "Cold Coffee",
    mood: "Chilled, refined, refreshing",
    backgroundImage: "/images/categories/cold-coffee-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.06],
      translateRange: ["0px, 0px", "12px, -8px"],
      duration: "28s",
    },
    baseGradient: {
      from: "#031409",
      via: "#0e2a1d", // Chilled deep emerald core
      to: "#171f18",
      angle: "165deg",
    },
    primaryLight: {
      color: "rgba(130, 215, 180, 0.45)", // Luminous chilled jade
      x: 70,
      y: 30,
      size: "620px",
      pulseDuration: "11s",
    },
    secondaryLight: {
      color: "rgba(200, 140, 95, 0.32)", // Muted coffee depth
      x: 25,
      y: 70,
      size: "650px",
      pulseDuration: "15s",
    },
    organicMotion: {
      type: "chilled-refraction",
      accentColor: "rgba(140, 225, 190, 0.45)",
      secondaryColor: "rgba(247, 244, 237, 0.30)",
      opacity: 0.9,
      duration: "13s",
    },
    accent: {
      glowColor: "rgba(247, 244, 237, 0.25)",
      x: 60,
      y: 35,
      spread: "500px",
      opacity: 0.75,
    },
    textureOpacity: 0.035,
  },

  // 3. HOT CHOCOLATE: Molten cocoa, dark chocolate waves, warm copper radiance
  "hot-chocolate": {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    mood: "Rich, indulgent, luxurious",
    backgroundImage: "/images/categories/hot-chocolate-bg.png",
    backgroundMotion: {
      scaleRange: [1.03, 1.09],
      translateRange: ["0px, 0px", "-10px, 14px"],
      duration: "25s",
    },
    baseGradient: {
      from: "#061309",
      via: "#2c1207", // Deep molten cocoa
      to: "#08190d",
      angle: "140deg",
    },
    primaryLight: {
      color: "rgba(220, 110, 50, 0.50)", // Rich copper cocoa glow
      x: 40,
      y: 40,
      size: "680px",
      pulseDuration: "11s",
    },
    secondaryLight: {
      color: "rgba(165, 70, 30, 0.45)", // Dark roast chocolate
      x: 80,
      y: 60,
      size: "600px",
      pulseDuration: "15s",
    },
    organicMotion: {
      type: "liquid-wave",
      accentColor: "rgba(215, 115, 55, 0.55)",
      secondaryColor: "rgba(150, 60, 25, 0.40)",
      opacity: 0.95,
      duration: "14s",
    },
    accent: {
      glowColor: "rgba(223, 139, 95, 0.38)",
      x: 45,
      y: 45,
      spread: "550px",
      opacity: 0.85,
    },
    textureOpacity: 0.04,
  },

  // 4. HOT DRINKS: Comforting amber tea glow, traditional herbal warmth, vertical steam
  "hot-drinks": {
    id: "hot-drinks",
    name: "Hot Drinks",
    mood: "Comforting, traditional, warm",
    backgroundImage: "/images/categories/hot-drinks-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.06],
      translateRange: ["0px, 0px", "-6px, -10px"],
      duration: "24s",
    },
    baseGradient: {
      from: "#041309",
      via: "#261907", // Golden tea amber
      to: "#081c10",
      angle: "155deg",
    },
    primaryLight: {
      color: "rgba(235, 160, 60, 0.48)", // Radiant amber
      x: 30,
      y: 35,
      size: "640px",
      pulseDuration: "10s",
    },
    secondaryLight: {
      color: "rgba(200, 125, 50, 0.38)", // Cinnamon honey
      x: 75,
      y: 70,
      size: "620px",
      pulseDuration: "14s",
    },
    organicMotion: {
      type: "steam",
      accentColor: "rgba(235, 165, 65, 0.48)",
      secondaryColor: "rgba(247, 244, 237, 0.25)",
      opacity: 0.9,
      duration: "12s",
    },
    accent: {
      glowColor: "rgba(235, 160, 60, 0.35)",
      x: 35,
      y: 40,
      spread: "520px",
      opacity: 0.8,
    },
    textureOpacity: 0.04,
  },

  // 5. MILKSHAKE: Creamy strawberry-rose swirls, velvety vanilla cream flow
  "milkshake": {
    id: "milkshake",
    name: "Milkshake",
    mood: "Playful but premium, creamy, indulgent",
    backgroundImage: "/images/categories/milkshake-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.07],
      translateRange: ["0px, 0px", "8px, -10px"],
      duration: "26s",
    },
    baseGradient: {
      from: "#05130b",
      via: "#29121f", // Rich dessert berry-espresso
      to: "#091a11",
      angle: "150deg",
    },
    primaryLight: {
      color: "rgba(245, 165, 185, 0.48)", // Luminous berry cream
      x: 65,
      y: 35,
      size: "660px",
      pulseDuration: "11s",
    },
    secondaryLight: {
      color: "rgba(247, 235, 220, 0.35)", // Warm rich milk cream
      x: 30,
      y: 65,
      size: "620px",
      pulseDuration: "15s",
    },
    organicMotion: {
      type: "creamy-flow",
      accentColor: "rgba(245, 175, 195, 0.50)",
      secondaryColor: "rgba(247, 244, 237, 0.35)",
      opacity: 0.95,
      duration: "13s",
    },
    accent: {
      glowColor: "rgba(245, 185, 205, 0.35)",
      x: 55,
      y: 40,
      spread: "550px",
      opacity: 0.8,
    },
    textureOpacity: 0.035,
  },

  // 6. FRESH JUICE: Radiant citrus sunbeams, vibrant orchard gold, fresh botanical green
  "fresh-juice": {
    id: "fresh-juice",
    name: "Fresh Juice",
    mood: "Fresh, natural, energetic but sophisticated",
    backgroundImage: "/images/categories/fresh-juice-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.06],
      translateRange: ["0px, 0px", "-10px, -8px"],
      duration: "20s",
    },
    baseGradient: {
      from: "#04150a",
      via: "#281f06", // Sunlit citrus core
      to: "#0c2413",
      angle: "160deg",
    },
    primaryLight: {
      color: "rgba(245, 180, 45, 0.52)", // Brilliant citrus sunbeam
      x: 45,
      y: 30,
      size: "680px",
      pulseDuration: "9s",
    },
    secondaryLight: {
      color: "rgba(105, 195, 75, 0.42)", // Fresh botanical leaf
      x: 80,
      y: 65,
      size: "640px",
      pulseDuration: "13s",
    },
    organicMotion: {
      type: "sunlight-glow",
      accentColor: "rgba(245, 185, 55, 0.52)",
      secondaryColor: "rgba(125, 210, 95, 0.38)",
      opacity: 0.95,
      duration: "11s",
    },
    accent: {
      glowColor: "rgba(245, 185, 50, 0.40)",
      x: 45,
      y: 35,
      spread: "540px",
      opacity: 0.85,
    },
    textureOpacity: 0.035,
  },

  // 7. ZADO: Honey-gold nectar swirls, warm royal copper glow
  "zado": {
    id: "zado",
    name: "Zado",
    mood: "Natural, creamy, premium honey-infused",
    backgroundImage: "/images/categories/zado-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.07],
      translateRange: ["0px, 0px", "9px, 11px"],
      duration: "27s",
    },
    baseGradient: {
      from: "#041309",
      via: "#281b08", // Golden honey bronze
      to: "#091e12",
      angle: "145deg",
    },
    primaryLight: {
      color: "rgba(240, 180, 60, 0.52)", // Luminous liquid honey
      x: 40,
      y: 35,
      size: "680px",
      pulseDuration: "11s",
    },
    secondaryLight: {
      color: "rgba(215, 130, 60, 0.42)", // Royal honey copper
      x: 75,
      y: 65,
      size: "620px",
      pulseDuration: "15s",
    },
    organicMotion: {
      type: "creamy-flow",
      accentColor: "rgba(240, 185, 70, 0.52)",
      secondaryColor: "rgba(247, 244, 237, 0.32)",
      opacity: 0.95,
      duration: "13s",
    },
    accent: {
      glowColor: "rgba(240, 180, 70, 0.38)",
      x: 50,
      y: 40,
      spread: "560px",
      opacity: 0.85,
    },
    textureOpacity: 0.04,
  },

  // 8. SMOOTHIE: Velvet wild berry, kiwi botanical green, rich fruit-infused motion
  "smoothie": {
    id: "smoothie",
    name: "Smoothie",
    mood: "Fresh, modern, vibrant without being loud",
    backgroundImage: "/images/categories/smoothie-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.07],
      translateRange: ["0px, 0px", "-11px, 8px"],
      duration: "23s",
    },
    baseGradient: {
      from: "#04130a",
      via: "#26111f", // Rich pomegranate & blackberry
      to: "#091e11",
      angle: "155deg",
    },
    primaryLight: {
      color: "rgba(215, 90, 135, 0.48)", // Luminous berry nectar
      x: 35,
      y: 35,
      size: "650px",
      pulseDuration: "10s",
    },
    secondaryLight: {
      color: "rgba(75, 160, 95, 0.40)", // Kiwi mint vitality
      x: 75,
      y: 70,
      size: "620px",
      pulseDuration: "14s",
    },
    organicMotion: {
      type: "liquid-wave",
      accentColor: "rgba(220, 95, 140, 0.48)",
      secondaryColor: "rgba(85, 175, 105, 0.35)",
      opacity: 0.92,
      duration: "13s",
    },
    accent: {
      glowColor: "rgba(225, 105, 145, 0.38)",
      x: 45,
      y: 35,
      spread: "520px",
      opacity: 0.8,
    },
    textureOpacity: 0.035,
  },

  // 9. SODA SPECIALS & MOJITOS: Effervescent sparkling lime-mint, crisp upward micro-bubbles
  "soda-drinks": {
    id: "soda-drinks",
    name: "Soda Specials & Mojitos",
    mood: "Refreshing, sparkling, elegant",
    backgroundImage: "/images/categories/soda-drinks-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.06],
      translateRange: ["0px, 0px", "-6px, -12px"],
      duration: "21s",
    },
    baseGradient: {
      from: "#021206",
      via: "#0b2b1a", // Crisp sparkling mojito emerald
      to: "#05170d",
      angle: "170deg",
    },
    primaryLight: {
      color: "rgba(105, 230, 150, 0.52)", // Brilliant sparkling mint
      x: 50,
      y: 30,
      size: "680px",
      pulseDuration: "9s",
    },
    secondaryLight: {
      color: "rgba(205, 250, 165, 0.38)", // Zesty lime highlight
      x: 80,
      y: 65,
      size: "620px",
      pulseDuration: "13s",
    },
    organicMotion: {
      type: "effervescence",
      accentColor: "rgba(115, 240, 160, 0.55)",
      secondaryColor: "rgba(247, 244, 237, 0.35)",
      opacity: 0.95,
      duration: "10s",
    },
    accent: {
      glowColor: "rgba(115, 235, 155, 0.40)",
      x: 50,
      y: 30,
      spread: "540px",
      opacity: 0.85,
    },
    textureOpacity: 0.035,
  },

  // 10. SOFT DRINKS: Crisp iced reflections, cool carbonated glass caustics
  "soft-drinks": {
    id: "soft-drinks",
    name: "Soft Drinks",
    mood: "Crisp, cool, minimal",
    backgroundImage: "/images/categories/soft-drinks-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.06],
      translateRange: ["0px, 0px", "8px, -10px"],
      duration: "24s",
    },
    baseGradient: {
      from: "#031308",
      via: "#11261a", // Cool ice & espresso nuance
      to: "#07160e",
      angle: "160deg",
    },
    primaryLight: {
      color: "rgba(150, 220, 190, 0.42)", // Clear icy reflection
      x: 60,
      y: 30,
      size: "640px",
      pulseDuration: "11s",
    },
    secondaryLight: {
      color: "rgba(195, 130, 80, 0.32)", // Caramel cola depth
      x: 30,
      y: 70,
      size: "600px",
      pulseDuration: "15s",
    },
    organicMotion: {
      type: "chilled-refraction",
      accentColor: "rgba(160, 230, 200, 0.42)",
      secondaryColor: "rgba(247, 244, 237, 0.28)",
      opacity: 0.9,
      duration: "12s",
    },
    accent: {
      glowColor: "rgba(247, 244, 237, 0.25)",
      x: 55,
      y: 30,
      spread: "480px",
      opacity: 0.75,
    },
    textureOpacity: 0.035,
  },

  // 11. ICE CREAM: Luscious vanilla gelato, strawberry pastel warmth, creamy dessert waves
  "ice-cream": {
    id: "ice-cream",
    name: "Ice Cream",
    mood: "Soft, elegant, dessert-focused",
    backgroundImage: "/images/categories/ice-cream-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.07],
      translateRange: ["0px, 0px", "-8px, 12px"],
      duration: "26s",
    },
    baseGradient: {
      from: "#05140b",
      via: "#271b17", // Creamy vanilla-cocoa
      to: "#0a1c12",
      angle: "145deg",
    },
    primaryLight: {
      color: "rgba(250, 225, 200, 0.50)", // Warm vanilla gelato bloom
      x: 40,
      y: 35,
      size: "680px",
      pulseDuration: "12s",
    },
    secondaryLight: {
      color: "rgba(240, 160, 150, 0.40)", // Strawberry pastel swirl
      x: 75,
      y: 65,
      size: "640px",
      pulseDuration: "16s",
    },
    organicMotion: {
      type: "creamy-flow",
      accentColor: "rgba(250, 230, 210, 0.52)",
      secondaryColor: "rgba(245, 175, 165, 0.40)",
      opacity: 0.95,
      duration: "14s",
    },
    accent: {
      glowColor: "rgba(250, 230, 210, 0.40)",
      x: 45,
      y: 35,
      spread: "560px",
      opacity: 0.85,
    },
    textureOpacity: 0.035,
  },

  // 12. FRUIT SALAD: Golden orchard peach, honey fig, lush botanical canopy
  "fruit-salad": {
    id: "fruit-salad",
    name: "Fruit Salad",
    mood: "Natural, fresh, premium orchard harvest",
    backgroundImage: "/images/categories/fruit-salad-bg.png",
    backgroundMotion: {
      scaleRange: [1.02, 1.06],
      translateRange: ["0px, 0px", "-8px, -10px"],
      duration: "22s",
    },
    baseGradient: {
      from: "#04140a",
      via: "#2a1c0b", // Warm orchard peach & fig
      to: "#0d2313",
      angle: "150deg",
    },
    primaryLight: {
      color: "rgba(245, 150, 75, 0.52)", // Golden peach sunshine
      x: 55,
      y: 35,
      size: "680px",
      pulseDuration: "10s",
    },
    secondaryLight: {
      color: "rgba(95, 180, 85, 0.42)", // Orchard canopy leaf
      x: 25,
      y: 65,
      size: "640px",
      pulseDuration: "14s",
    },
    organicMotion: {
      type: "sunlight-glow",
      accentColor: "rgba(245, 160, 85, 0.52)",
      secondaryColor: "rgba(115, 200, 95, 0.40)",
      opacity: 0.95,
      duration: "12s",
    },
    accent: {
      glowColor: "rgba(245, 160, 85, 0.40)",
      x: 50,
      y: 35,
      spread: "540px",
      opacity: 0.85,
    },
    textureOpacity: 0.035,
  },
};

export const DEFAULT_AMBIENT_PRESET: AmbientCategoryPreset = AMBIENT_PRESETS["hot-coffee"];

export function getAmbientPreset(categoryId: string): AmbientCategoryPreset {
  return AMBIENT_PRESETS[categoryId] || DEFAULT_AMBIENT_PRESET;
}
