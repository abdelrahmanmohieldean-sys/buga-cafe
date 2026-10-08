# BU-GA Café — Drink & Product Photography

This directory holds the high-end commercial food and beverage photography for individual BU-GA Café menu items.

---

## Technical Specifications

1. **Aspect Ratio:**
   - **4:3 Landscape** (Recommended: `1200x900` px or `800x600` px) — Matches the `<DrinkCard>` media container perfectly on both mobile and desktop.
   - Alternatively: **1:1 Square** (`800x800` px or `1000x1000` px).
2. **Format:** **WebP** (`.webp`) preferred for small file size and high fidelity. Optimized `.jpg` / `.png` also supported.
3. **Target File Size:** Under 100 KB – 180 KB per image.
4. **Resolution:** 72 DPI (web optimized).

---

## Art Direction & Photography Guidelines

Every drink photo must follow **one unified visual identity**:

- **Lighting:** Warm directional key light simulating gentle afternoon sunlight through a vintage salon window. Soft dark-forest green shadow fill. Warm amber/copper rim light highlighting the rim of the glassware or cup.
- **Background / Surface:** Warm dark espresso timber, dark forest velvet, or polished dark green marble. Keep the background clean, uncluttered, and slightly out of focus.
- **Accents & Garnishes:** 2–3 roasted whole coffee beans, a natural dark green coffee leaf, a cinnamon quill, or fresh fruit slice placed organically on the wood beside the vessel.
- **Glassware & Cups:** Authentic BU-GA branded porcelain cups, clear ribbed glasses with cold condensation droplets, or elegant clear takeaway cups with the embossed silver insignia.
- **Color Grading:** Deep rich blacks, warm espresso crema, glowing amber highlights, and natural botanical greens. Avoid cold blue or harsh neon tones.

---

## Master Catalog & Complete Prompt Engineering Guide

For the full item-by-item prompt specifications across all 112 menu items, see:
[`IMAGE_CATALOG_AND_PROMPTS.md`](./IMAGE_CATALOG_AND_PROMPTS.md)

---

## Active Product Images (Live in Menu)

- `turkish-coffee.png` (Item: `hc-1` Turkish Coffee / قهوة تركي)
- `double-turkish-coffee.png` (Item: `hc-2` Double Turkish Coffee / قهوة تركي دابل)
- `french-coffee.png` (Item: `hc-3` French Coffee / قهوة فرنسي)
- `hazelnut-coffee.png` (Item: `hc-4` Hazelnut Coffee / قهوة بندق)
- `single-espresso.jpg` (Item: `hc-6` Single Espresso / اسبريسو سنجل)
- `double-espresso.jpg` (Item: `hc-7` Double Espresso / اسبريسو دبل)
- `caffe-latte.jpg` (Item: `hc-9` Caffè Latte / لاتيه)
- `cappuccino.jpg` (Item: `hc-12` Cappuccino / كابتشينو)
- `iced-spanish-latte.jpg` (Item: `cc-4` Iced Spanish Latte / آيس سبانيش لاتيه)
- `iced-pistachio-latte.jpg` (Item: `cc-5` Iced Pistachio Latte / آيس بستاشيو لاتيه)

---

## Recommended File Naming Structure

Match each image to its category and item name, then reference it in `src/data/menuData.ts` under the `image` field:

### 1. Hot Coffee (`/images/drinks/hot-coffee/...`)
- `turkish-coffee.webp`
- `double-turkish-coffee.webp`
- `french-coffee.webp`
- `hazelnut-coffee.webp`
- `nutella-coffee.webp`
- `espresso-single.webp`
- `espresso-double.webp`
- `macchiato.webp`
- `latte.webp`
- `flavored-latte.webp`
- `flat-white.webp`
- `cappuccino.webp`
- `mocha.webp`
- `americano.webp`
- `cortado.webp`
- `piccolo.webp`

### 2. Cold Coffee (`/images/drinks/cold-coffee/...`)
- `iced-chocolate.webp`
- `iced-latte.webp`
- `iced-mocha.webp`
- `iced-spanish-latte.webp`
- `iced-pistachio-latte.webp`
- `iced-cappuccino.webp`
- `iced-caramel-macchiato.webp`
- `iced-americano.webp`
- `frappuccino-classic.webp`
- `frappuccino-flavored.webp`
- `frappuccino-oreo.webp`
- `frappuccino-nutella.webp`
- `frappuccino-kinder.webp`
- `frappe-classic.webp`
- `frappe-flavored.webp`

### 3. Hot Chocolate (`/images/drinks/hot-chocolate/...`)
- `hot-chocolate-classic.webp`
- `hot-chocolate-nutella.webp`
- `hot-chocolate-white.webp`
- `hot-chocolate-oreo.webp`

### 4. Hot Drinks (`/images/drinks/hot-drinks/...`)
- `tea-egyptian.webp`
- `tea-green.webp`
- `tea-milk.webp`
- `herbal-infusion.webp`
- `hot-mix-booster.webp`
- `hot-lemon.webp`
- `apple-cider.webp`
- `nescafe-black.webp`
- `nescafe-milk.webp`
- `sahlab-nuts.webp`

### 5. Milkshake (`/images/drinks/milkshake/...`)
- `shake-vanilla.webp`
- `shake-chocolate.webp`
- `shake-strawberry.webp`
- `shake-mango.webp`
- `shake-caramel.webp`
- `shake-blueberry.webp`
- `shake-snickers.webp`
- `shake-pistachio.webp`
- `shake-banana.webp`
- `shake-nutella.webp`
- `shake-kinder.webp`
- `shake-lotus.webp`
- `shake-oreo.webp`
- `shake-white-oreo.webp`
- `shake-kitkat.webp`
- `shake-white-kitkat.webp`

### 6. Fresh Juice (`/images/drinks/fresh-juice/...`)
- `juice-mango.webp`
- `juice-strawberry.webp`
- `juice-guava.webp`
- `juice-guava-milk.webp`
- `juice-lemon.webp`
- `juice-lemon-mint.webp`
- `juice-watermelon.webp`
- `juice-watermelon-mint.webp`
- `juice-banana-milk.webp`
- `juice-orange.webp`
- `mix-mango-kiwi.webp`
- `mix-mango-peach.webp`
- `mix-mango-strawberry.webp`
- `mix-berry.webp`
- `mix-peach-strawberry.webp`
- `cocktail-florida.webp`
- `juice-guava-coconut.webp`

### 7. Zado (`/images/drinks/zado/...`)
- `zado-honey.webp`
- `zado-mango.webp`
- `zado-strawberry.webp`
- `zado-kiwi.webp`
- `zado-blueberry.webp`
- `zado-fruit.webp`

### 8. Smoothie (`/images/drinks/smoothie/...`)
- `smoothie-mango.webp`
- `smoothie-strawberry.webp`
- `smoothie-watermelon.webp`
- `smoothie-lemon-mint.webp`
- `smoothie-blueberry.webp`
- `smoothie-cola.webp`
- `smoothie-peach.webp`
- `smoothie-cantaloupe.webp`
- `smoothie-kiwi.webp`

### 9. Soda Specials & Mojitos (`/images/drinks/soda/...`)
- `mojito-classic.webp`
- `mojito-special.webp`
- `espresso-soda.webp`
- `espresso-twist.webp`
- `sunshine-refresher.webp`

### 10. Soft Drinks (`/images/drinks/soft-drinks/...`)
- `soft-drinks-selection.webp`
- `schweppes.webp`
- `fayrouz.webp`
- `cherry-cola.webp`
- `red-bull.webp`
- `mineral-water.webp`

### 11. Ice Cream (`/images/drinks/ice-cream/...`)
- `ice-cream-1-scoop.webp`
- `ice-cream-2-scoops.webp`
- `ice-cream-3-scoops.webp`
- `ice-buga-fruit-bowl.webp`

### 12. Fruit Salad (`/images/drinks/fruit-salad/...`)
- `fruit-salad-slices.webp`
- `fruit-salad-basket.webp`
- `fruit-salad-ice-cream.webp`

---

## Linking an Image to an Item

Once an image file is added, simply update the item in [`src/data/menuData.ts`](../../src/data/menuData.ts):

```typescript
{
  id: "hc-1",
  nameEn: "Turkish Coffee",
  nameAr: "قهوة تركي",
  price: 40.0,
  formattedPrice: "40.00 EGP",
  image: "/images/drinks/turkish-coffee.webp",
  imageAlt: "Authentic Turkish Coffee in BU-GA porcelain cup",
  isAvailable: true,
}
```
