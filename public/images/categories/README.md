# BU-GA Café — Category Posters & Still Assets

This directory holds the still poster frames and visual assets corresponding to each menu category.

---

## Purpose of Category Posters

Each category video background in [`src/data/menuData.ts`](../../src/data/menuData.ts) specifies a `posterSrc` pointing to this directory (e.g., `/images/categories/hot-coffee-poster.webp`).

These posters serve three critical performance and accessibility roles:
1. **Pre-load Display:** Renders instantaneously before the background video starts playing, preventing any blank flash or layout shift.
2. **Reduced Motion Fallback:** Displays a subtle, static Ken Burns drift instead of playing video for users with `prefers-reduced-motion: reduce`.
3. **Battery Saver Fallback:** Provides an aesthetic background on mobile devices when battery-saving mode blocks video autoplay.

---

## Required Category Poster Files

Place the following `.webp` (or `.jpg`) still frames in this directory (`public/images/categories/`):

| File Name | Menu Category | Recommended Visual |
|:---|:---|:---|
| `hot-coffee-poster.webp` | **Hot Coffee (القهوة الساخنة)** | Moody, dark forest coffee bar with warm light on an espresso cup. |
| `cold-coffee-poster.webp` | **Cold Coffee (القهوة الباردة)** | Iced latte with condensation on glassware against dark wood. |
| `hot-chocolate-poster.webp` | **Hot Chocolate (الشيكولاتة الساخنة)** | Steaming dark chocolate with dusted cocoa and cream swirl. |
| `hot-drinks-poster.webp` | **Hot Drinks (المشروبات الساخنة)** | Traditional glass of hot mint tea or karkadeh with glowing amber light. |
| `milkshake-poster.webp` | **Milkshake (ميلك شيك)** | Tall indulgent milkshake glass with whipped cream and caramel ribbons. |
| `fresh-juice-poster.webp` | **Fresh Juice (عصائر فريش)** | Sliced fresh mangoes, oranges, and strawberries with vibrant color saturation. |
| `zado-poster.webp` | **Zado (زبادو)** | Creamy yogurt beverage topped with fresh mango wedges and nuts. |
| `smoothie-poster.webp` | **Smoothie (اسموزي)** | Frosty fruit smoothie with fresh mint garnish. |
| `soda-drinks-poster.webp` | **Soda Specials & Mojitos** | Sparkling iced mojito with lime wheels and fresh mint leaves. |
| `soft-drinks-poster.webp` | **Soft Drinks (مشروبات غازية)** | Chilled bubbling dark soda in ribbed glass over ice. |
| `ice-cream-poster.webp` | **Ice Cream (آيس كريم)** | Creamy artisanal gelato scoops with chocolate drizzle. |
| `fruit-salad-poster.webp` | **Fruit Salad (فروت سلاد)** | Beautifully arranged sliced fruit basket with honey drizzle. |

---

## Technical Specifications

1. **Resolution:** `1920x1080` (16:9 full-bleed ratio).
2. **Format:** **WebP** (`.webp`) recommended (Q=80).
3. **Target File Size:** 80 KB – 160 KB per poster.
4. **Color Treatment:** Matches BU-GA's signature deep forest green (`#041109`) and espresso shadow palette with warm copper/amber highlights.
