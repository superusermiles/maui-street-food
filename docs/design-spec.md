# Māui Street Food — Design Spec

## Brand Positioning
Māui Street Food is an after-dark food destination in Ponsonby. The design needs to feel like flame, bass, smoke, and neon reflected on asphalt. It should carry Pasifika confidence without becoming costume. The site must feel urban, proud, and social. Conversion priority: get people to visit, browse trucks, and check events fast.

## Color Palette
```css
--primary: #FF5A1F;     /* lava orange / primary CTA, active states, hot accents */
--secondary: #F4C95D;   /* grilled gold / highlights, badges, subtle emphasis */
--accent: #D61C4E;      /* neon hibiscus red / event promos, link hovers, graphic punches */
--background: #111111;  /* asphalt black / main page background */
--text: #F6EFE5;        /* warm off-white / body text on dark backgrounds */
--muted: #2A2A2A;       /* charcoal panel / cards, nav fill, section breaks */
--electric: #35F2D0;    /* neon aqua / unexpected contrast for chips, map accents, micro details */
```

## Typography
- **Heading font:** Bebas Neue 700
- **Body font:** Manrope 400/500/700
- **Support / accent font:** IBM Plex Mono 500 for labels, tags, hours, and event metadata

### Font Scale
- **h1:**  clamp(4rem, 9vw, 7.5rem) / 0.92 / uppercase
- **h2:**  clamp(2.5rem, 5vw, 4.5rem) / 0.95 / uppercase
- **h3:**  clamp(1.5rem, 3vw, 2.25rem) / 1.0
- **h4:**  1.25rem / 1.1
- **body:** 1rem / 1.7
- **small:** 0.875rem / 1.5
- **caption:** 0.75rem / 1.4 / uppercase with letter spacing 0.08em

Typography balance: condensed display headlines for poster energy, clean geometric body text for readability, monospaced utility details for a street-schedule feel.

## Spacing & Tokens
### Border Radius
- **--radius-sm:** 8px
- **--radius-md:** 14px
- **--radius-lg:** 24px
- **--radius-xl:** 36px
- **--radius-pill:** 999px

### Shadow System
- **shadow-soft:** 0 10px 30px rgba(0,0,0,0.22)
- **shadow-medium:** 0 18px 50px rgba(0,0,0,0.34)
- **shadow-hard:** 0 0 0 1px rgba(255,255,255,0.05), 0 24px 60px rgba(0,0,0,0.5)
- **glow-orange:** 0 0 30px rgba(255,90,31,0.28)
- **glow-aqua:** 0 0 24px rgba(53,242,208,0.24)

### Section Rhythm
- **Desktop:** py-20 to py-28
- **Tablet:** py-16 to py-20
- **Mobile:** py-14 to py-16
- Vertical rhythm should alternate between dense stacked sections and wider visual breathing space to mimic the pace of a night out.

## Layout Architecture
- **Hero style:** Full-bleed night-market photo with dark gradient overlay, giant headline block anchored left, stacked info chips floating at lower right, and a secondary image card overlapping the hero edge.
- **Navigation:** Sticky top bar with translucent black background and blurred backdrop. On load it feels like a smoked glass strip. On scroll it becomes more opaque. Desktop uses bold uppercase links. Mobile collapses into a high-contrast drawer.
- **Section rhythm:** Alternating dark charcoal bands, image-led breaks, and poster-style panels with oversized type. Use asymmetric two-column sections on desktop and tightly stacked cards on mobile.
- **Footer:** Thick contrasting charcoal band with centered wordmark, quick links, hours strip, and a final one-line brand statement.
- **Overall density:** Medium-dense. The site should feel active and layered, not sparse. Information is concise, but visuals and type should create energy.

## Page-by-Page Layout

### 1. Home
**Section order**
1. Sticky nav
2. Hero
3. Why Māui / yard intro
4. Featured trucks
5. Night energy image break
6. Events teaser
7. Visit CTA strip
8. Footer

**Section details**
- **Hero:** Two-column composition inside a full-bleed image. Left side has eyebrow, H1, short intro, two CTAs. Right side has stacked chips: "Late nights", "Ponsonby", "Street food collective", plus a small card with opening nights. Mobile collapses into single column with chips beneath CTAs.
  - Primary image: https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=1100&fit=crop
  - Secondary overlap image: https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=900&h=1100&fit=crop
- **Why Māui:** Left-aligned h2 with short manifesto. Right side uses three stacked feature cards: rotating trucks, outdoor seating, late-night energy. Mobile becomes vertical cards.
  - Supporting image: https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=900&h=1200&fit=crop
- **Featured trucks:** Three-card grid with bold truck names, cuisine style, signature dish, and mini CTA to The Trucks page. Desktop 3 columns, tablet 2, mobile 1.
  - Card image 1: https://images.unsplash.com/photo-1544025162-d76694265947?w=700&h=900&fit=crop
  - Card image 2: https://images.unsplash.com/photo-1559847844-5315695dadae?w=700&h=900&fit=crop
  - Card image 3: https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&h=900&fit=crop
- **Night energy break:** Full-width atmospheric image with pull quote overlay: "Smoke up. Lights on. Feed the night." 
  - Image: https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&h=900&fit=crop
- **Events teaser:** Split layout. Left shows upcoming event list with date chips. Right shows portrait-format event image and CTA.
  - Image: https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&h=1100&fit=crop
- **Visit CTA strip:** Horizontal band with address, opening hours, and "Find Us" button. On mobile each item stacks.

### 2. The Trucks
**Section order**
1. Intro hero
2. Truck roster grid
3. Signature dishes strip
4. House vibe / communal dining section
5. Vendor CTA
6. Footer

**Section details**
- **Intro hero:** Dark section with oversized title and short subcopy. Background includes subtle repeating line pattern inspired by tapa geometry. Add one wide food image below fold.
  - Hero image: https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=1600&h=900&fit=crop
- **Truck roster grid:** Four truck profile blocks in 2x2 layout on desktop. Each block includes truck name, cuisine, 40-word blurb, signature item, serving nights, and image.
  - Huli Smoke image: https://images.unsplash.com/photo-1529692236671-f1de7ce1c16d?w=900&h=1100&fit=crop
  - Island Skewers image: https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=900&h=1100&fit=crop
  - Midnight Fry image: https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=900&h=1100&fit=crop
  - Lava Soft Serve image: https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&h=1100&fit=crop
- **Signature dishes strip:** Horizontal scroll cards on mobile, 4-up grid on desktop showing key dishes and heat/flavour tags.
  - Dish images reuse crop variants from truck photos for cohesion.
- **House vibe:** Two-column section with communal seating story and a candid dining image.
  - Image: https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop
- **Vendor CTA:** Bold banner inviting collabs and truck applications.

### 3. Events
**Section order**
1. Events hero
2. Upcoming nights list
3. Featured event spotlight
4. Gallery strip
5. Private hire / collab CTA
6. Footer

**Section details**
- **Events hero:** Large type over dark background with neon accent rule and concise copy explaining rotating programme. Add event poster-style cards under hero. Mobile stacks cards.
  - Hero/support image: https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&h=1000&fit=crop
- **Upcoming nights list:** Three vertical cards with date, event name, summary, and CTA chips. Use IBM Plex Mono for dates/times.
- **Featured event spotlight:** Left large image, right rich text block and highlight bullets.
  - Image: https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=1000&fit=crop
- **Gallery strip:** Three-image layout with one wide image and two stacked smaller ones to imply movement and crowd energy.
  - Gallery 1: https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&h=900&fit=crop
  - Gallery 2: https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=900&fit=crop
  - Gallery 3: https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=900&fit=crop
- **Private hire CTA:** Dark card with orange border glow, short hire copy, and enquiry button.

### 4. Find Us
**Section order**
1. Contact hero
2. Location + hours split
3. Getting here cards
4. Enquiry form
5. Final map/atmosphere image
6. Footer

**Section details**
- **Contact hero:** Short sharp headline with practical info. Add an address badge and open-late badge.
- **Location + hours:** Two-column section. Left contains address, opening hours table, and nearby landmarks. Right contains stylised map panel or embedded map placeholder card. Mobile stacks with map first after intro.
  - Image/map support: https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=900&fit=crop
- **Getting here cards:** Three cards: walk, rideshare, parking. Use icon-led layout.
- **Enquiry form:** Full-width panel with fields for name, email, enquiry type, date, message. Form sits beside a small brand statement on desktop; stacks on mobile.
- **Final image:** Full-width dusk city image with CTA overlay.
  - Image: https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600&h=900&fit=crop

## Logo Design
- **Concept:** Bold emblem + wordmark. Icon draws from a stylised hook/flame hybrid, referencing Māui without becoming literal illustration. The shape should feel like a pulled stroke of fire and motion. Wordmark is uppercase, condensed, and heavy.
- **SVG code:**
```svg
<svg width="220" height="64" viewBox="0 0 220 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Māui Street Food logo">
  <rect width="220" height="64" rx="12" fill="none"/>
  <path d="M24 50C18 45 15 38 15 30C15 18 24 10 35 10C29 15 27 22 30 28C33 34 39 36 44 41C49 45 51 51 47 56C43 61 35 62 28 58" fill="#FF5A1F"/>
  <path d="M36 14C46 18 53 27 53 37C53 47 46 55 35 57C40 52 41 46 38 41C35 36 30 33 27 28C23 22 24 17 27 12" fill="#D61C4E"/>
  <text x="68" y="30" fill="#F6EFE5" font-family="Bebas Neue, Arial, sans-serif" font-size="26" letter-spacing="1.5">MĀUI</text>
  <text x="68" y="52" fill="#F4C95D" font-family="Bebas Neue, Arial, sans-serif" font-size="20" letter-spacing="1.2">STREET FOOD</text>
</svg>
```
- **Color variants:**
  - **Primary:** orange + hibiscus icon, warm off-white main word, grilled gold subline on dark background
  - **Reversed:** icon in off-white and gold, text in asphalt black on light backgrounds
  - **Monochrome:** single-color black or single-color off-white for stamps and overlays
- **Usage:** Minimum width 120px for full logo. Clear space = height of icon flame. Icon alone can be used in tight spaces or social avatars.

## Favicon Design
- **Concept:** Simplified hook/flame icon only.
- **SVG code:**
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 50C18 45 15 38 15 30C15 18 24 10 35 10C29 15 27 22 30 28C33 34 39 36 44 41C49 45 51 51 47 56C43 61 35 62 28 58" fill="#FF5A1F"/>
  <path d="M36 14C46 18 53 27 53 37C53 47 46 55 35 57C40 52 41 46 38 41C35 36 30 33 27 28C23 22 24 17 27 12" fill="#D61C4E"/>
</svg>
```
- **Colors:** Brand primary lava orange with hibiscus red contrast on transparent background.

## Image Plan
Images should lean warm, nocturnal, smoky, and high contrast. Prioritise photos with fire, hands, food texture, nightlife, and crowd atmosphere. Avoid bright daytime flat-lay food imagery.

### Home
- Hero background — https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=1100&fit=crop
  - **Alt:** Close-up late-night feast on a crowded table under warm lighting
  - **Mood:** Rich, social, appetite-first, cinematic
- Hero overlap — https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=900&h=1100&fit=crop
  - **Alt:** Street food plated in warm light with bold garnish
  - **Mood:** Intimate detail, premium texture
- Yard intro — https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=900&h=1200&fit=crop
  - **Alt:** People eating together outdoors at night
  - **Mood:** Community, laughter, busy energy
- Featured truck card 1 — https://images.unsplash.com/photo-1544025162-d76694265947?w=700&h=900&fit=crop
  - **Alt:** Charred grilled meat with smoke rising
  - **Mood:** Fire, heat, bold flavour
- Featured truck card 2 — https://images.unsplash.com/photo-1559847844-5315695dadae?w=700&h=900&fit=crop
  - **Alt:** Loaded burger held in both hands
  - **Mood:** Messy, indulgent, handheld street food
- Featured truck card 3 — https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&h=900&fit=crop
  - **Alt:** Fresh hot pizza with bubbling cheese
  - **Mood:** Comfort, crowd-pleasing share food
- Night break — https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&h=900&fit=crop
  - **Alt:** Outdoor dining venue glowing at night
  - **Mood:** Atmosphere, destination feel
- Events teaser — https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&h=1100&fit=crop
  - **Alt:** Live DJ performing under club lighting
  - **Mood:** Sound, crowd, movement

### The Trucks
- Intro image — https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=1600&h=900&fit=crop
  - **Alt:** Street food being cooked on a busy grill
  - **Mood:** Action, heat, authenticity
- Huli Smoke — https://images.unsplash.com/photo-1529692236671-f1de7ce1c16d?w=900&h=1100&fit=crop
  - **Alt:** Smoked meat sliced on a board
  - **Mood:** Slow-cooked richness
- Island Skewers — https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=900&h=1100&fit=crop
  - **Alt:** Grilled skewers over flame
  - **Mood:** Fire-charred, punchy
- Midnight Fry — https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=900&h=1100&fit=crop
  - **Alt:** Crispy fried street food in paper tray
  - **Mood:** Late-night comfort
- Lava Soft Serve — https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&h=1100&fit=crop
  - **Alt:** Soft serve dessert with dramatic toppings
  - **Mood:** Playful finish, vivid contrast
- Communal dining — https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop
  - **Alt:** Friends gathered around a shared table full of food
  - **Mood:** Social, generous, full-table energy

### Events
- Events hero — https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&h=1000&fit=crop
  - **Alt:** Outdoor live music crowd at night
  - **Mood:** Event scale, nightlife intensity
- Spotlight — https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=1000&fit=crop
  - **Alt:** Crowd with raised hands under stage lighting
  - **Mood:** Energy surge, collective experience
- Gallery 1 — https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&h=900&fit=crop
  - **Alt:** Friends dancing and smiling in neon lighting
  - **Mood:** Human warmth, movement
- Gallery 2 — https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=900&fit=crop
  - **Alt:** Crowd under red and purple event lights
  - **Mood:** Dense, electric, immersive
- Gallery 3 — https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=900&fit=crop
  - **Alt:** Stage performance with bright beams and haze
  - **Mood:** Smoke, drama, spectacle

### Find Us
- Location support — https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=900&fit=crop
  - **Alt:** Auckland city street scene at dusk
  - **Mood:** Urban context, destination grounding
- Final banner — https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600&h=900&fit=crop
  - **Alt:** Auckland skyline glowing at sunset into night
  - **Mood:** Night destination, city pulse

## Interaction & Motion
- **Buttons:** Slight upward movement on hover, background color shift from orange to hibiscus, soft glow added.
- **Cards:** Image scales to 1.04 on hover with dark overlay easing out. Truck cards get a thin aqua accent line on hover.
- **Links:** Underline grows from left to right. Nav links switch to grilled gold on hover.
- **Scroll reveals:** Use subtle fade-up and 24px translate on cards and section headers. Keep duration around 500–650ms.
- **Hero chips:** Float in with staggered motion.
- **Page transitions:** Quick opacity + blur transition under 250ms if implemented. Otherwise keep page changes instant.
- **Loading states:** Skeleton blocks in charcoal with soft shimmer. Buttons show spinner with label preserved.
- **Micro-interactions:** Event date badges pulse once on load; map pin on Find Us can animate with a soft bounce; form success state should swap to a high-contrast confirmation panel.

## Accessibility Notes
- Maintain 4.5:1 contrast minimum for text.
- Use off-white body text instead of pure neon on dark background.
- Preserve readable body widths max 68ch.
- Ensure motion is disabled or reduced when `prefers-reduced-motion` is set.
- All image overlays require darkening layer to protect text legibility.

## SEO / Metadata Direction
- Tone should be local and search-friendly: late-night food Ponsonby, Auckland street food, food truck events Auckland.
- Metadata should emphasise place, opening hours, and event culture without keyword stuffing.