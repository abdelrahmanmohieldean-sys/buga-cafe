# BU-GA Café — تقرير التدقيق الشامل لصور المشروبات (Drink Image Audit Report)

**تاريخ التقرير:** 2026-10-09  
**المشروع:** BU-GA Café Web Application  
**المصدر المعتمد:** `src/data/menuData.ts`

---

## 📊 ملخص الإحصائيات العامة (Executive Summary)

| المؤشر | القيمة | النسبة |
| :--- | :--- | :--- |
| **إجمالي أصناف المنيو (Total Menu Items)** | **112** صنف | 100% |
| **إجمالي تصنيفات المنيو (Total Categories)** | **12** تصنيف | 100% |
| **إجمالي ملفات الصور بالمجلد (`public/images/drinks`)** | **101** ملف | — |
| **الأصناف المرتبطة بصور صحيحة ومفحوصة (Connected Items)** | **78** صنف | **69.6%** |
| **الأصناف الناقصة المتبقية (Missing Items)** | **34** صنف | **30.4%** |

---

## 📑 إحصائيات التصنيفات الـ 12 بالتفصيل

| # | التصنيف (Category) | الاسم بالعربية | إجمالي الأصناف | المربوطة ✅ | الناقصة ❌ | نسبة الإنجاز |
| :-: | :--- | :--- | :-: | :-: | :-: | :-: |
| 1 | **Hot Coffee** | القهوة الساخنة | 16 | 16 | 0 | **100%** |
| 2 | **Cold Coffee** | القهوة الباردة | 15 | 15 | 0 | **100%** |
| 3 | **Hot Chocolate** | الشيكولاتة الساخنة | 4 | 4 | 0 | **100%** |
| 4 | **Hot Drinks** | المشروبات الساخنة | 10 | 10 | 0 | **100%** |
| 5 | **Milkshake** | ميلك شيك | 16 | 14 | 2 | **87.5%** |
| 6 | **Fresh Juice** | عصائر فريش | 17 | 9 | 8 | **52.9%** |
| 7 | **Zado** | زبادو | 6 | 0 | 6 | **0%** |
| 8 | **Smoothie** | اسموزي | 9 | 6 | 3 | **66.7%** |
| 9 | **Soda Specials & Mojitos** | مشروبات الصودا والموهيتو | 5 | 2 | 3 | **40.0%** |
| 10 | **Soft Drinks** | مشروبات غازية | 7 | 1 | 6 | **14.3%** |
| 11 | **Ice Cream** | آيس كريم | 4 | 0 | 4 | **0%** |
| 12 | **Fruit Salad** | فروت سلاد | 3 | 0 | 3 | **0%** |
| **المجموع** | **12 تصنيف** | **BU-GA Café** | **112** | **78** | **34** | **69.6%** |

---

## 📋 سجل التدقيق التفصيلي لجميع أصناف المنيو (112 صنف)

### 1. Hot Coffee (القهوة الساخنة) — [16/16 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `hc-1` | قهوة تركي | Turkish Coffee | 40.00 EGP | `/images/drinks/turkish-coffee.png` | ✅ مربوطة ومفحوصة |
| 2 | `hc-2` | قهوة تركي دابل | Double Turkish Coffee | 55.00 EGP | `/images/drinks/double-turkish-coffee.png` | ✅ مربوطة ومفحوصة |
| 3 | `hc-3` | قهوة فرنسي | French Coffee | 50.00 EGP | `/images/drinks/french-coffee.png` | ✅ مربوطة ومفحوصة |
| 4 | `hc-4` | قهوة بندق | Hazelnut Coffee | 50.00 EGP | `/images/drinks/hazelnut-coffee.png` | ✅ مربوطة ومفحوصة |
| 5 | `hc-5` | قهوة نوتيلا | Nutella Coffee | 60.00 EGP | `/images/drinks/Hazelnut Chocolate Café Delight.png` | ✅ مربوطة ومفحوصة |
| 6 | `hc-6` | اسبريسو سنجل | Single Espresso | 35.00 EGP | `/images/drinks/single-espresso.jpg` | ✅ مربوطة ومفحوصة |
| 7 | `hc-7` | اسبريسو دبل | Double Espresso | 50.00 EGP | `/images/drinks/double-espresso.jpg` | ✅ مربوطة ومفحوصة |
| 8 | `hc-8` | ميكاتو سنجل | Single Macchiato | 40.00 EGP | `/images/drinks/Cozy BU-GA Café Macchiato Moment.png` | ✅ مربوطة ومفحوصة |
| 9 | `hc-9` | لاتيه | Caffè Latte | 60.00 EGP | `/images/drinks/caffe-latte.jpg` | ✅ مربوطة ومفحوصة |
| 10 | `hc-10` | لاتيه فليفر | Flavored Latte | 70.00 EGP | `/images/drinks/Caramel Vanilla Latte Café Scene.png` | ✅ مربوطة ومفحوصة |
| 11 | `hc-11` | فلات وايت | Flat White | 70.00 EGP | `/images/drinks/Cozy BU-GA Café Latte Still Life.png` | ✅ مربوطة ومفحوصة |
| 12 | `hc-12` | كابتشينو | Cappuccino | 70.00 EGP | `/images/drinks/cappuccino.jpg` | ✅ مربوطة ومفحوصة |
| 13 | `hc-13` | موكا | Mocha | 75.00 EGP | `/images/drinks/Cozy Mocha Café Delight.png` | ✅ مربوطة ومفحوصة |
| 14 | `hc-14` | هوت امريكانا | Hot Americano | 60.00 EGP | `/images/drinks/Steaming BU-GA Café Coffee Still Life.png` | ✅ مربوطة ومفحوصة |
| 15 | `hc-15` | كورنادو | Cortado | 60.00 EGP | `/images/drinks/Cozy Café Latte Art Still Life.png` | ✅ مربوطة ومفحوصة |
| 16 | `hc-16` | بيكولو | Piccolo | 50.00 EGP | `/images/drinks/Luxurious BU-GA Café Latte Moment.png` | ✅ مربوطة ومفحوصة |

---

### 2. Cold Coffee (القهوة الباردة) — [15/15 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `cc-1` | آيس شوكليت | Iced Chocolate | 60.00 EGP | `/images/drinks/Moody BU-GA Café Iced Chocolate.png` | ✅ مربوطة ومفحوصة |
| 2 | `cc-2` | آيس لاتيه | Iced Latte | 70.00 EGP | `/images/drinks/Cinematic Iced Latte Café Still Life.png` | ✅ مربوطة ومفحوصة |
| 3 | `cc-3` | آيس موكا | Iced Mocha | 75.00 EGP | `/images/drinks/Iced Mocha Café Indulgence.png` | ✅ مربوطة ومفحوصة |
| 4 | `cc-4` | آيس سبانيش لاتيه | Iced Spanish Latte | 80.00 EGP | `/images/drinks/iced-spanish-latte.jpg` | ✅ مربوطة ومفحوصة |
| 5 | `cc-5` | آيس بستاشيو لاتيه | Iced Pistachio Latte | 90.00 EGP | `/images/drinks/iced-pistachio-latte.jpg` | ✅ مربوطة ومفحوصة |
| 6 | `cc-6` | آيس كابتشينو | Iced Cappuccino | 70.00 EGP | `/images/drinks/Iced Café Latte with Cocoa Foam.png` | ✅ مربوطة ومفحوصة |
| 7 | `cc-7` | آيس كراميل ميكاتو | Iced Caramel Macchiato | 75.00 EGP | `/images/drinks/Iced Caramel Café Delight.png` | ✅ مربوطة ومفحوصة |
| 8 | `cc-8` | آيس امريكانو | Iced Americano | 60.00 EGP | `/images/drinks/Kalter Kaffee im warmen Cafélicht.png` | ✅ مربوطة ومفحوصة |
| 9 | `cc-9` | فرابتشينو | Classic Frappuccino | 80.00 EGP | `/images/drinks/Decadent BU-GA Café Mocha Frappe.png` | ✅ مربوطة ومفحوصة |
| 10 | `cc-10` | فرابتشينو فليفر | Flavored Frappuccino | 90.00 EGP | `/images/drinks/Caramel Whipped Cream Café Frappé.png` | ✅ مربوطة ومفحوصة |
| 11 | `cc-11` | فرابتشينو اوريو | Oreo Frappuccino | 90.00 EGP | `/images/drinks/Cookies-and-Cream Café Frappé.png` | ✅ مربوطة ومفحوصة |
| 12 | `cc-12` | فرابتشينو نوتيلا | Nutella Frappuccino | 90.00 EGP | `/images/drinks/Chocolate Hazelnut Café Indulgence.png` | ✅ مربوطة ومفحوصة |
| 13 | `cc-13` | فرابتشينو كيندر | Kinder Frappuccino | 90.00 EGP | `/images/drinks/Decadent Chocolate Frappe Café Delight.png` | ✅ مربوطة ومفحوصة |
| 14 | `cc-14` | فرابيه كلاسيك | Classic Frappé | 80.00 EGP | `/images/drinks/Decadent BU-GA Café Frappé.png` | ✅ مربوطة ومفحوصة |
| 15 | `cc-15` | فرابيه فليفر | Flavored Frappé | 90.00 EGP | `/images/drinks/Caramel Hazelnut Café Frappé.png` | ✅ مربوطة ومفحوصة |

---

### 3. Hot Chocolate (الشيكولاتة الساخنة) — [4/4 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `hch-1` | هوت شوكليت | Classic Hot Chocolate | 70.00 EGP | `/images/drinks/Decadent BU-GA Café Hot Chocolate.png` | ✅ مربوطة ومفحوصة |
| 2 | `hch-2` | هوت شوكليت نوتيلا | Nutella Hot Chocolate | 75.00 EGP | `/images/drinks/Luxury Hazelnut Chocolate Café Delight.png` | ✅ مربوطة ومفحوصة |
| 3 | `hch-3` | هوت وايت شوكليت | White Hot Chocolate | 70.00 EGP | `/images/drinks/Decadent White Chocolate Café Indulgence.png` | ✅ مربوطة ومفحوصة |
| 4 | `hch-4` | هوت شوكليت اوريو | Oreo Hot Chocolate | 75.00 EGP | `/images/drinks/Decadent Cookies-and-Cream Café Mocha.png` | ✅ مربوطة ومفحوصة |

---

### 4. Hot Drinks (المشروبات الساخنة) — [10/10 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `hd-1` | شاي | Egyptian Tea | 25.00 EGP | `/images/drinks/Steaming BU-GA Café Tea Still Life.png` | ✅ مربوطة ومفحوصة |
| 2 | `hd-2` | شاي أخضر | Green Tea | 35.00 EGP | `/images/drinks/Steaming Mint Green Tea Café Display.png` | ✅ مربوطة ومفحوصة |
| 3 | `hd-3` | شاي لبن | Tea with Milk | 50.00 EGP | `/images/drinks/Steaming Chai at a Cozy Café.png` | ✅ مربوطة ومفحوصة |
| 4 | `hd-4` | أعشاب | Herbal Infusion | 40.00 EGP | `/images/drinks/Cozy Bu-Ga Café Herbal Tea Still Life.png` | ✅ مربوطة ومفحوصة |
| 5 | `hd-5` | هوت ميكس | BU-GA Hot Mix | 45.00 EGP | `/images/drinks/Café Spice Infusion Still Life.png` | ✅ مربوطة ومفحوصة |
| 6 | `hd-6` | هوت ليمون | Hot Lemon | 30.00 EGP | `/images/drinks/Steaming Lemon Mint Café Mug.png` | ✅ مربوطة ومفحوصة |
| 7 | `hd-7` | أبل سيدر | Hot Apple Cider | 50.00 EGP | `/images/drinks/16192f4a-f46c-430c-8423-056dcdd0d875.png` | ✅ مربوطة ومفحوصة |
| 8 | `hd-8` | نسكافيه بلاك | Nescafé Black | 50.00 EGP | `/images/drinks/Cozy BU-GA Café Coffee Still Life.png` | ✅ مربوطة ومفحوصة |
| 9 | `hd-9` | نسكافيه ميلك | Nescafé with Milk | 60.00 EGP | `/images/drinks/Cozy Spiced Café Latte Still Life.png` | ✅ مربوطة ومفحوصة |
| 10 | `hd-10` | سحلب مكسرات | Sahlab with Nuts | 70.00 EGP | `/images/drinks/Steaming BU-GA Café Salep Still Life.png` | ✅ مربوطة ومفحوصة |

---

### 5. Milkshake (ميلك شيك) — [14/16 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `ms-1` | ميلك شيك فانيليا | Vanilla Milkshake | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 2 | `ms-2` | ميلك شيك شوكليت | Chocolate Milkshake | 80.00 EGP | `/images/drinks/Decadent BU-GA Café Chocolate Milkshake.png` | ✅ مربوطة ومفحوصة |
| 3 | `ms-3` | ميلك شيك فراولة | Strawberry Milkshake | 80.00 EGP | `/images/drinks/Decadent Strawberry Café Milkshake.png` | ✅ مربوطة ومفحوصة |
| 4 | `ms-4` | ميلك شيك مانجو | Mango Milkshake | 80.00 EGP | `/images/drinks/Luxurious Mango Café Milkshake Delight.png` | ✅ مربوطة ومفحوصة |
| 5 | `ms-5` | ميلك شيك كراميل | Caramel Milkshake | 80.00 EGP | `/images/drinks/Caramel Café Frappé Delight.png` | ✅ مربوطة ومفحوصة |
| 6 | `ms-6` | ميلك شيك بلوبيري | Blueberry Milkshake | 80.00 EGP | `/images/drinks/Blueberry Café Frappe Delight.png` | ✅ مربوطة ومفحوصة |
| 7 | `ms-7` | ميلك شيك سنيكرز | Snickers Milkshake | 90.00 EGP | `/images/drinks/Decadent Caramel Chocolate Café Shake.png` | ✅ مربوطة ومفحوصة |
| 8 | `ms-8` | ميلك بيستاشيو | Pistachio Milkshake | 90.00 EGP | `/images/drinks/Decadent Pistachio Café Frappé.png` | ✅ مربوطة ومفحوصة |
| 9 | `ms-9` | ميلك موز | Banana Milkshake | 90.00 EGP | `/images/drinks/Café Banana Caramel Milkshake Delight.png` | ✅ مربوطة ومفحوصة |
| 10 | `ms-10` | ميلك نوتيلا | Nutella Milkshake | 90.00 EGP | `/images/drinks/Decadent Chocolate Hazelnut Café Shake.png` | ✅ مربوطة ومفحوصة |
| 11 | `ms-11` | ميلك كيندر | Kinder Milkshake | 90.00 EGP | `/images/drinks/Decadent Kinder Café Milkshake Delight.png` | ✅ مربوطة ومفحوصة |
| 12 | `ms-12` | ميلك لوتس | Lotus Milkshake | 90.00 EGP | `/images/drinks/Decadent Lotus Caramel Café Shake.png` | ✅ مربوطة ومفحوصة |
| 13 | `ms-13` | ميلك أوريو | Oreo Milkshake | 90.00 EGP | `/images/drinks/Cookies-and-Cream Café Indulgence.png` | ✅ مربوطة ومفحوصة |
| 14 | `ms-14` | ميلك وايت أوريو | White Oreo Milkshake | 90.00 EGP | `/images/drinks/Vanilla Cookie Café Milkshake.png` | ✅ مربوطة ومفحوصة |
| 15 | `ms-15` | ميلك كيت كات | KitKat Milkshake | 90.00 EGP | `/images/drinks/Luxurious Chocolate Wafer Café Milkshake.png` | ✅ مربوطة ومفحوصة |
| 16 | `ms-16` | ميلك وايت كيت كات | White KitKat Milkshake | 90.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |

---

### 6. Fresh Juice (عصائر فريش) — [10/17 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `fj-1` | مانجو | Fresh Mango Juice | 70.00 EGP | `/images/drinks/Café Mango Glow Still Life.png` | ✅ مربوطة ومفحوصة |
| 2 | `fj-2` | فراولة | Fresh Strawberry Juice | 70.00 EGP | `/images/drinks/Cinematic Strawberry Café Smoothie.png` | ✅ مربوطة ومفحوصة |
| 3 | `fj-3` | جوافة | Fresh Guava Juice | 70.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 4 | `fj-4` | جوافة باللبن | Guava with Milk | 75.00 EGP | `/images/drinks/Creamy Guava Café Smoothie.png` | ✅ مربوطة ومفحوصة |
| 5 | `fj-5` | ليمون | Fresh Lemon Juice | 50.00 EGP | `/images/drinks/Vintage Café Lemonade Glow.png` | ✅ مربوطة ومفحوصة |
| 6 | `fj-6` | ليمون نعناع | Lemon Mint Juice | 60.00 EGP | `/images/drinks/Mint-Lime Café Cooler.png` | ✅ مربوطة ومفحوصة |
| 7 | `fj-7` | بطيخ | Fresh Watermelon Juice | 70.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 8 | `fj-8` | بطيخ نعناع | Watermelon Mint Juice | 75.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 9 | `fj-9` | موز باللبن | Banana with Milk | 70.00 EGP | `/images/drinks/Café Banana Smoothie Still Life.png` | ✅ مربوطة ومفحوصة |
| 10 | `fj-10` | برتقال | Fresh Orange Juice | 65.00 EGP | `/images/drinks/Premium Orange Juice Café Still Life.png` | ✅ مربوطة ومفحوصة |
| 11 | `fj-11` | ميكس مانجو كيوي | Mix Mango & Kiwi | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 12 | `fj-12` | ميكس مانجو خوخ | Mix Mango & Peach | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 13 | `fj-13` | ميكس مانجو فراولة | Mix Mango & Strawberry | 80.00 EGP | `/images/drinks/Strawberry Mango Café Glow.png` | ✅ مربوطة ومفحوصة |
| 14 | `fj-14` | ميكس بيري | Mix Berry Juice | 80.00 EGP | `/images/drinks/Berry Café Bliss on Copper.png` | ✅ مربوطة ومفحوصة |
| 15 | `fj-15` | ميكس خوخ فراولة | Mix Peach & Strawberry | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 16 | `fj-16` | فلوريدة | Florida Cocktail | 90.00 EGP | `/images/drinks/Tropical BU-GA Café Smoothie Still Life.png` | ✅ مربوطة ومفحوصة |
| 17 | `fj-17` | جوافة جوز الهند | Guava & Coconut | 70.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |

---

### 7. Zado (زبادو) — [0/6 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `zd-1` | زبادو عسل | Honey Zado | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 2 | `zd-2` | زبادو مانجو | Mango Zado | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 3 | `zd-3` | زبادو فراولة | Strawberry Zado | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 4 | `zd-4` | زبادو كيوي | Kiwi Zado | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 5 | `zd-5` | زبادو بلوبيري | Blueberry Zado | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 6 | `zd-6` | زبادو فروت | Mixed Fruit Zado | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |

---

### 8. Smoothie (اسموزي) — [6/9 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `sm-1` | اسموزي مانجو | Mango Smoothie | 70.00 EGP | `/images/drinks/Golden Mango Café Delight.png` | ✅ مربوطة ومفحوصة |
| 2 | `sm-2` | اسموزي فراولة | Strawberry Smoothie | 70.00 EGP | `/images/drinks/Strawberry Smoothie at BU-GA Café.png` | ✅ مربوطة ومفحوصة |
| 3 | `sm-3` | اسموزي بطيخ | Watermelon Smoothie | 70.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 4 | `sm-4` | اسموزي ليمون نعناع | Lemon Mint Smoothie | 70.00 EGP | `/images/drinks/Citrus Mint Café Refresher.png` | ✅ مربوطة ومفحوصة |
| 5 | `sm-5` | اسموزي بلوبيري | Blueberry Smoothie | 70.00 EGP | `/images/drinks/Luxurious Blueberry Café Smoothie.png` | ✅ مربوطة ومفحوصة |
| 6 | `sm-6` | اسموزي كولا | Cola Smoothie | 70.00 EGP | `/images/drinks/BU-GA Café Cola Mint Cooler.png` | ✅ مربوطة ومفحوصة |
| 7 | `sm-7` | اسموزي خوخ | Peach Smoothie | 70.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 8 | `sm-8` | اسموزي كنتالوب | Cantaloupe Smoothie | 70.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 9 | `sm-9` | اسموزي كيوي | Kiwi Smoothie | 70.00 EGP | `/images/drinks/Kiwi Smoothie at BU-GA Café.png` | ✅ مربوطة ومفحوصة |

---

### 9. Soda Specials & Mojitos (مشروبات الصودا والموهيتو) — [2/5 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `sd-1` | موهيتو كلاسيك | Classic Mojito | 65.00 EGP | `/images/drinks/Mint-Lime Café Refreshment.png` | ✅ مربوطة ومفحوصة |
| 2 | `sd-2` | موهيتو إسبشيال | Special Mojito | 75.00 EGP | `/images/drinks/BU-GA Café Lime Mint Fizz.png` | ✅ مربوطة ومفحوصة |
| 3 | `sd-3` | إسبريسو صودا | Espresso Soda | 75.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 4 | `sd-4` | إسبريسو تويست | Espresso Twist | 75.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 5 | `sd-5` | صن شاين | Sunshine | 75.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |

---

### 10. Soft Drinks (مشروبات غازية) — [1/7 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `sft-1` | بيبسي - ميرندا - سفن أب / V COLA | Pepsi / Mirinda / 7Up / V-Cola | 40.00 EGP | `/images/drinks/BU-GA Café Iced Cola Delight.png` | ✅ مربوطة ومفحوصة |
| 2 | `sft-2` | شـويبس | Schweppes | 40.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 3 | `sft-3` | فيـــروز | Fayrouz | 40.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 4 | `sft-4` | شيري كولا | Cherry Cola | 75.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 5 | `sft-5` | رد بـول | Red Bull | 80.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 6 | `sft-6` | مياه صغيرة | Small Mineral Water | 15.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 7 | `sft-7` | كوب ثلج | Ice Cup | 10.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |

---

### 11. Ice Cream (آيس كريم) — [0/4 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `ic-1` | 1 بولة آيس كريم | 1 Scoop Ice Cream | 25.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 2 | `ic-2` | 2 بولة آيس كريم | 2 Scoops Ice Cream | 40.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 3 | `ic-3` | 3 بولة آيس كريم | 3 Scoops Ice Cream | 60.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 4 | `ic-4` | آيس بوجا فروت | Ice BU-GA Fruit | 90.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |

---

### 12. Fruit Salad (فروت سلاد) — [0/3 مربوطة]

| # | المعرف (ID) | اسم الصنف بالعربية | English Name | السعر | مسار الصورة | الحالة |
| :-: | :--- | :--- | :--- | :-: | :--- | :-: |
| 1 | `fs-1` | فروت سلاد سلايز | Fruit Salad Slices | 70.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 2 | `fs-2` | فروت سلاد باسكت | Fruit Salad Basket | 75.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |
| 3 | `fs-3` | فروت سلاد آيس | Fruit Salad with Ice Cream | 85.00 EGP | *لا يوجد* | ❌ ناقصة (تحتاج توليد) |

---

## 🎯 قائمة الأصناف المتبقية الناقصة بالترتيب والتصنيف (34 صنف)

للعمل على توليدها صنفًا صنفًا بالترتيب التالي:

### 1. Milkshake (ميلك شيك) — 2 أصناف
1. `ms-1` — **ميلك شيك فانيليا** (Vanilla Milkshake) — 75.00 EGP
2. `ms-16` — **ميلك وايت كيت كات** (White KitKat Milkshake) — 90.00 EGP

### 2. Fresh Juice (عصائر فريش) — 8 أصناف
1. `fj-3` — **جوافة** (Fresh Guava Juice) — 50.00 EGP
2. `fj-7` — **بطيخ** (Fresh Watermelon Juice) — 50.00 EGP
3. `fj-8` — **بطيخ نعناع** (Watermelon Mint Juice) — 55.00 EGP
4. `fj-11` — **ميكس مانجو كيوي** (Mix Mango & Kiwi) — 65.00 EGP
5. `fj-12` — **ميكس مانجو خوخ** (Mix Mango & Peach) — 65.00 EGP
6. `fj-15` — **ميكس خوخ فراولة** (Mix Peach & Strawberry) — 65.00 EGP
7. `fj-17` — **جوافة جوز الهند** (Guava & Coconut) — 65.00 EGP

### 3. Zado (زبادو) — 6 أصناف
1. `zd-1` — **زبادو عسل** (Honey Zado) — 60.00 EGP
2. `zd-2` — **زبادو مانجو** (Mango Zado) — 65.00 EGP
3. `zd-3` — **زبادو فراولة** (Strawberry Zado) — 65.00 EGP
4. `zd-4` — **زبادو كيوي** (Kiwi Zado) — 65.00 EGP
5. `zd-5` — **زبادو بلوبيري** (Blueberry Zado) — 70.00 EGP
6. `zd-6` — **زبادو فروت** (Mixed Fruit Zado) — 70.00 EGP

### 4. Smoothie (اسموزي) — 3 أصناف
1. `sm-3` — **اسموزي بطيخ** (Watermelon Smoothie) — 60.00 EGP
2. `sm-7` — **اسموزي خوخ** (Peach Smoothie) — 60.00 EGP
3. `sm-8` — **اسموزي كنتالوب** (Cantaloupe Smoothie) — 60.00 EGP

### 5. Soda Specials & Mojitos (مشروبات الصودا والموهيتو) — 3 أصناف
1. `sd-3` — **إسبريسو صودا** (Espresso Soda) — 65.00 EGP
2. `sd-4` — **إسبريسو تويست** (Espresso Twist) — 70.00 EGP
3. `sd-5` — **صن شاين** (Sunshine) — 60.00 EGP

### 6. Soft Drinks (مشروبات غازية) — 6 أصناف
1. `sft-2` — **شـويبس** (Schweppes) — 35.00 EGP
2. `sft-3` — **فيـــروز** (Fayrouz) — 35.00 EGP
3. `sft-4` — **شيري كولا** (Cherry Cola) — 40.00 EGP
4. `sft-5` — **رد بـول** (Red Bull) — 75.00 EGP
5. `sft-6` — **مياه صغيرة** (Small Mineral Water) — 15.00 EGP
6. `sft-7` — **كوب ثلج** (Ice Cup) — 10.00 EGP

### 7. Ice Cream (آيس كريم) — 4 أصناف
1. `ic-1` — **1 بولة آيس كريم** (1 Scoop Ice Cream) — 20.00 EGP
2. `ic-2` — **2 بولة آيس كريم** (2 Scoops Ice Cream) — 35.00 EGP
3. `ic-3` — **3 بولة آيس كريم** (3 Scoops Ice Cream) — 50.00 EGP
4. `ic-4` — **آيس بوجا فروت** (Ice BU-GA Fruit) — 65.00 EGP

### 8. Fruit Salad (فروت سلاد) — 3 أصناف
1. `fs-1` — **فروت سلاد سلايز** (Fruit Salad Slices) — 50.00 EGP
2. `fs-2` — **فروت سلاد باسكت** (Fruit Salad Basket) — 65.00 EGP
3. `fs-3` — **فروت سلاد آيس** (Fruit Salad with Ice Cream) — 75.00 EGP

---

## 🔍 الصور الاحتياطية وغير المربوطة في المجلد (23 صورة)

الصور التالية متوفرة في المجلد `public/images/drinks` لكن لم تُربط مباشرة لمنع التكرار أو لعدم وجود صنف مطابق تمامًا في المنيو:

1. `Avocado Smoothie at BU-GA Café.png` — اسموزي أفوكادو (لا يوجد صنف أفوكادو منفصل في المنيو).
2. `Branded Pineapple Smoothie in a Cozy Café.png` — اسموزي أناناس (لا يوجد صنف أناناس فردي بالمنيو).
3. `BU-GA Café Beverage Menu Collage.png` — كولاج ملصق دعائي للمنيو.
4. `BU-GA Café Citrus Cola Still Life.png` — لقطة بديلة لكولا بالليمون.
5. `BU-GA Café Lemon-Lime Fizz.png` — لقطة بديلة لمشروب الليمون صودا.
6. `BU-GA Café Orange Fizz.png` — لقطة بديلة لميرندا برتقال صودا.
7. `Café Strawberry Milkshake Still Life.png` — لقطة بديلة لميلك شيك فراولة (`ms-3` مرتبط بلقطة أخرى ممتازة).
8. `Caramel Iced Café Latte Still Life.png` — لقطة بديلة لآيس لاتيه كراميل.
9. `Cozy BU-GA Café Cappuccino Still Life.png` — لقطة بديلة للكابتشينو (`hc-12`).
10. `Cozy BU-GA Café Latte Advertisement.png` — بوستر إعلاني للاتيه.
11. `Cozy Café Espresso Still Life.png` — لقطة بديلة للإسبريسو.
12. `Cozy Café Latte Still Life.png` — لقطة بديلة للاتيه.
13. `Cozy Honey Spice Café Still Life.png` — لقطة بديلة لمشروب العسل والزنجبيل الدافئ.
14. `Decadent Chocolate Café Frappé.png` — لقطة بديلة لفرابيه الشوكولاتة.
15. `Decadent Chocolate Caramel Frappé.png` — لقطة بديلة لفرابيه الشوكولاتة كراميل.
16. `Decadent Cookies-and-Cream Café Frappé.png` — لقطة بديلة لكوكيز آند كريم فرابيه.
17. `Decadent M&M’s Chocolate Café Shake.png` — ميلك شيك إم آند إمز (غير موجود في المنيو الأصلي).
18. `Moody BU-GA Café Iced Coffee.png` — لقطة بديلة للقهوة الباردة.
19. `Oreo Cookies and Cream Café Frappé.png` — لقطة بديلة لأوريو فرابيه.
20. `Pistachio Café Delight.png` — لقطة بديلة لمشروب بيستاشيو.
21. `Steaming BU-GA Café Still Life.png` — لقطة بديلة للمشروبات الساخنة.
22. `Steaming Espresso in a Cozy Café.png` — لقطة بديلة للإسبريسو.
23. `Strawberry Café Delight with Mint.png` — لقطة بديلة لمشروب الفراولة بالنعناع.

