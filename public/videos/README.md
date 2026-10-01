# BU-GA Café — Background Video Loops

This directory holds the seamless looping background video assets for the BU-GA Café website.

---

## Required Video Files

Drop the following `.mp4` video files directly into this directory (`public/videos/`):

| File Name | Section / Menu Category | Description |
|:---|:---|:---|
| `hero-loop.mp4` | **Hero Section** | Cinematic establishing loop representing BU-GA Café (roasting beans, espresso extraction, vintage salon ambiance). |
| `hot-coffee-loop.mp4` | **Hot Coffee (القهوة الساخنة)** | Slow steam rising from hot espresso, Turkish cezve, or silky latte art pour. |
| `cold-coffee-loop.mp4` | **Cold Coffee (القهوة الباردة)** | Iced latte or cold brew poured over crystalline ice spheres. |
| `hot-chocolate-loop.mp4` | **Hot Chocolate (الشيكولاتة الساخنة)** | Decadent melted dark cocoa swirl, steamed hot chocolate with cream. |
| `hot-drinks-loop.mp4` | **Hot Drinks (المشروبات الساخنة)** | Steaming Egyptian tea, herbal infusions (mint, karkadeh), or sahlab with nuts. |
| `milkshake-loop.mp4` | **Milkshake (ميلك شيك)** | Creamy milkshake churn, dripping caramel, chocolate swirl, biscuit crumbles. |
| `fresh-juice-loop.mp4` | **Fresh Juice (عصائر فريش)** | Sliced fresh mangoes, strawberries, citrus press, vibrant fruit cascades. |
| `zado-loop.mp4` | **Zado (زبادو)** | Thick churned yogurt drink with golden honey ribbons and fruit purée. |
| `smoothie-loop.mp4` | **Smoothie (اسموزي)** | Chilled vibrant crushed ice smoothie, condensation on glass, cooling mint. |
| `soda-drinks-loop.mp4` | **Soda Specials & Mojitos (مشروبات الصودا والموهيتو)** | Sparkling soda bubbles, effervescent lime, fresh mint, espresso soda pour. |
| `soft-drinks-loop.mp4` | **Soft Drinks (مشروبات غازية)** | Fizzing carbonated refreshers, ice cubes clinking in cold glass. |
| `ice-cream-loop.mp4` | **Ice Cream (آيس كريم)** | Creamy artisanal gelato scoops, dripping syrup, fresh fruit toppings. |
| `fruit-salad-loop.mp4` | **Fruit Salad (فروت سلاد)** | Freshly cut seasonal fruit bowls, sliced tropical fruits, honey drizzle. |

---

## Technical Specifications

To ensure optimal performance and seamless playback on all devices (especially iOS Safari and mobile):

1. **Format:** MP4 container encoded with **H.264 / AVC** (High Profile) for universal hardware decoding.
2. **Resolution:** 
   - Recommended: `1920x1080` (1080p) or `1280x720` (720p).
   - Category loops are displayed with dark overlays, so 720p/1080p at optimized bitrates delivers crisp visual quality with minimal memory usage.
3. **Framerate:** 24 fps or 30 fps (avoids high CPU/GPU decodes).
4. **Duration:** 4 to 8 seconds, edited with a **seamless crossfade loop** (no abrupt jump when looping).
5. **Motion Pace:** Very slow, subtle cinematic movement. Avoid fast camera pans or distracting strobing.
6. **Audio:** **Muted / No Audio Track**. Strip all audio streams (`-an` in ffmpeg) to save bandwidth and ensure autoplay compliance across all mobile browsers.
7. **File Size Target:** Under 3 MB – 5 MB per video.
8. **Optimized Encoding Command (ffmpeg example):**
   ```bash
   ffmpeg -i input.mov -c:v libx264 -crf 24 -preset slow -an -movflags +faststart hero-loop.mp4
   ```
