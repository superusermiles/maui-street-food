# Māui Street Food — Development Handoff

## Tech Setup
- **Framework:** Next.js 14+ App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment target:** Vercel

### Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@500&family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet">
```

### Tailwind Config Tokens
```ts
colors: {
  primary: '#FF5A1F',
  secondary: '#F4C95D',
  accent: '#D61C4E',
  background: '#111111',
  text: '#F6EFE5',
  muted: '#2A2A2A',
  electric: '#35F2D0',
},
fontFamily: {
  heading: ['Bebas Neue', 'sans-serif'],
  body: ['Manrope', 'sans-serif'],
  mono: ['IBM Plex Mono', 'monospace'],
},
borderRadius: {
  sm: '8px',
  md: '14px',
  lg: '24px',
  xl: '36px',
  pill: '999px',
},
boxShadow: {
  soft: '0 10px 30px rgba(0,0,0,0.22)',
  medium: '0 18px 50px rgba(0,0,0,0.34)',
  hard: '0 0 0 1px rgba(255,255,255,0.05), 0 24px 60px rgba(0,0,0,0.5)',
  glowOrange: '0 0 30px rgba(255,90,31,0.28)',
  glowAqua: '0 0 24px rgba(53,242,208,0.24)',
},
maxWidth: {
  content: '1200px',
},
```

### Suggested Additional Packages
- `lucide-react` for icons
- `clsx` for class composition
- `framer-motion` only if motion is implemented beyond CSS transitions

## Component Breakdown

### 1. `SiteHeader`
- **Purpose:** Sticky global navigation
- **Props:** `links: {label:string; href:string}[]`
- **Layout:** Left logo, center/right nav links, mobile menu button
- **Responsive:** Desktop inline nav; mobile slide-down or drawer menu

### 2. `BrandLogo`
- **Purpose:** Render inline SVG logo
- **Props:** `variant?: 'primary' | 'reversed' | 'mono'`, `className?: string`
- **Layout:** Icon + wordmark or icon only variant
- **Responsive:** Scales without losing legibility; minimum width 120px for full version

### 3. `HeroPanel`
- **Purpose:** Reusable hero section pattern
- **Props:** `eyebrow`, `title`, `body`, `primaryCta`, `secondaryCta`, `image`, `chips`, `overlayCard`
- **Layout:** Two columns desktop, single column mobile
- **Responsive:** Chips stack below CTA on mobile; overlay image/card moves inline

### 4. `SectionHeading`
- **Purpose:** Standardise heading + intro copy
- **Props:** `eyebrow`, `title`, `body`, `align?: 'left'|'center'`
- **Layout:** Text block with optional max width constraint
- **Responsive:** Centers when needed, otherwise left aligned throughout

### 5. `FeatureCard`
- **Purpose:** For Home feature trio
- **Props:** `title`, `body`, `icon`
- **Layout:** Compact dark card with accent rule or icon
- **Responsive:** 3-up desktop, stack mobile

### 6. `TruckCard`
- **Purpose:** Showcase resident truck
- **Props:** `name`, `cuisine`, `summary`, `signature`, `nights`, `image`, `alt`
- **Layout:** Image top, content block below or split image/content depending on viewport
- **Responsive:** Grid cards on desktop, stacked full-width on mobile

### 7. `DishTag`
- **Purpose:** Small utility pill for heat level, category, or event tags
- **Props:** `label`, `tone?: 'primary'|'secondary'|'electric'|'muted'`
- **Layout:** Rounded pill with mono text
- **Responsive:** Wraps naturally

### 8. `EventCard`
- **Purpose:** Upcoming event summary
- **Props:** `date`, `time`, `title`, `body`, `tags`, `cta`
- **Layout:** Poster-style card with date block and copy
- **Responsive:** 3-up desktop, vertical stack mobile

### 9. `ImageBreak`
- **Purpose:** Full-bleed atmosphere section with overlay text
- **Props:** `image`, `alt`, `quote`, `heightVariant`
- **Layout:** Full-width image with dark gradient overlay
- **Responsive:** Reduced height on mobile, text shifts lower-left

### 10. `HoursStrip`
- **Purpose:** Display opening times cleanly
- **Props:** `items: {label:string; value:string}[]`
- **Layout:** Horizontal grouped row with separators
- **Responsive:** Converts to stacked cards on small screens

### 11. `InfoCard`
- **Purpose:** Utility cards on Find Us page
- **Props:** `title`, `body`, `icon`, `meta`
- **Layout:** Icon top-left, text below
- **Responsive:** 3-up desktop, stack mobile

### 12. `EnquiryForm`
- **Purpose:** General contact / bookings / vendor enquiry form
- **Props:** none or optional submit handler
- **Fields:** name, email, enquiryType, preferredDate, message
- **Responsive:** Form full width on mobile; two-column field layout on tablet/desktop where appropriate

### 13. `SiteFooter`
- **Purpose:** Footer with key links and summary info
- **Props:** `links`, `address`, `hours`, `socials`
- **Layout:** Centered brand mark with supporting columns or stacked groups
- **Responsive:** Single column mobile, multi-column desktop

## Page Routes

### `/`
- **Title:** Māui Street Food | Feed the night in Ponsonby
- **Meta description:** Late-night street food trucks, outdoor dining, and high-energy event nights in Ponsonby, Auckland. Feed the night at Māui Street Food.
- **Sections:** Header → Hero → Why Māui → Featured Trucks → Image Break → Events Teaser → Visit Strip → Footer

### `/the-trucks`
- **Title:** The Trucks | Māui Street Food
- **Meta description:** Meet the resident food trucks behind Māui Street Food in Ponsonby, from smoke-heavy grills to sweet late-night finishes.
- **Sections:** Header → Intro Hero → Truck Roster Grid → Signature Dishes → House Vibe → Vendor CTA → Footer

### `/events`
- **Title:** Events | Māui Street Food Ponsonby
- **Meta description:** DJ sets, collabs, live nights, and rotating after-dark events at Māui Street Food in Ponsonby, Auckland.
- **Sections:** Header → Events Hero → Upcoming Nights → Featured Spotlight → Gallery Strip → Private Hire CTA → Footer

### `/find-us`
- **Title:** Find Us | Māui Street Food
- **Meta description:** Find Māui Street Food in Ponsonby, Auckland. Check opening hours, transport options, and send an enquiry.
- **Sections:** Header → Contact Hero → Location + Hours → Getting Here Cards → Enquiry Form → Final Banner → Footer

## Content

### Global Navigation
- Home
- The Trucks
- Events
- Find Us
- CTA button: **Pull Up Tonight**

### Footer Text
- **Wordmark line:** Māui Street Food
- **Statement:** Loud food. Late nights. Ponsonby energy.
- **Address:** 45 Ponsonby Road, Ponsonby, Auckland
- **Hours:** Wed–Thu 5pm–11pm / Fri–Sat 5pm–1am / Sun 4pm–10pm
- **Footer links:** Home / The Trucks / Events / Find Us
- **Footer note:** © Māui Street Food. Feed the night.

---

## Home Page Copy

### Hero
- **Eyebrow:** PONSONBY LATE NIGHTS
- **Heading:** FEED THE NIGHT.
- **Body:** Auckland after dark hits different here. Māui Street Food brings the trucks, the smoke, the music, and the outdoor tables together in one loud little corner of Ponsonby.
- **Primary CTA:** See the trucks
- **Secondary CTA:** Find us
- **Hero chips:** Late nights / Outdoor dining / Rotating trucks / Auckland, NZ
- **Overlay card title:** This week
- **Overlay card lines:** Wed–Thu 5–11 / Fri–Sat 5–1 / Sun 4–10

### Why Māui
- **Heading:** STREET FOOD WITH HEAT, SOUND, AND SWAGGER.
- **Body:** This is not a quiet sit-down dinner. Māui is built for groups, big flavours, and nights that keep rolling. Come hungry. Stay longer than planned.
- **Feature 1 title:** Rotating trucks
- **Feature 1 body:** A tight line-up of resident favourites with guest appearances that keep the yard fresh.
- **Feature 2 title:** Outdoor all-night feel
- **Feature 2 body:** Shared tables, neon glow, smoke in the air, and enough space to linger with your people.
- **Feature 3 title:** More than dinner
- **Feature 3 body:** DJs, collabs, and one-off nights give you a reason to come back next week.

### Featured Trucks
- **Heading:** WHAT’S FIRING TONIGHT
- **Card 1 title:** Huli Smoke
- **Card 1 meta:** Pacific barbecue / smoked meats
- **Card 1 body:** Flame-charred cuts, sticky glaze, and trays built to share.
- **Card 1 CTA:** Meet the trucks
- **Card 2 title:** Midnight Fry
- **Card 2 meta:** Loaded fry-ups / burgers
- **Card 2 body:** Crispy, salty, over-the-top comfort food for the second half of the night.
- **Card 2 CTA:** Meet the trucks
- **Card 3 title:** Lava Soft Serve
- **Card 3 meta:** Desserts / cold finishes
- **Card 3 body:** Swirled soft serve with loud toppings, sharp sauces, and zero restraint.
- **Card 3 CTA:** Meet the trucks

### Image Break
- **Quote:** Smoke up. Lights on. Feed the night.

### Events Teaser
- **Heading:** NIGHTS WITH A LITTLE MORE NOISE.
- **Body:** From DJ sets to collab menus and one-night-only drops, Māui keeps the calendar moving.
- **Event item 1:** Friday Bassline Sessions — DJs, fire grills, late-close energy
- **Event item 2:** Island Link-Up — guest cooks and Pasifika-led food collabs
- **Event item 3:** Sunday Wind Down — easier tempo, big feeds, golden-hour finish
- **CTA:** See all events

### Visit Strip
- **Label 1:** Find us
- **Value 1:** 45 Ponsonby Road, Auckland
- **Label 2:** Open late
- **Value 2:** Wed–Sun
- **Label 3:** Walk in
- **Value 3:** Groups welcome
- **Button:** Plan your visit

---

## The Trucks Page Copy

### Intro Hero
- **Eyebrow:** THE LINE-UP
- **Heading:** FOUR TRUCKS. ZERO BORING ORDERS.
- **Body:** Every truck brings its own style, but the rule stays the same: big flavour, fast service, and food that earns the mess.

### Truck Roster
1. **Huli Smoke**
   - Cuisine: Pacific barbecue
   - Summary: Slow smoke, hot grills, and sticky island-inspired glaze. This is the truck for share plates, burnt ends, and sauce on your hands.
   - Signature: Kālua pork loaded plate
   - Nights: Wed–Sun
2. **Island Skewers**
   - Cuisine: Flame-grilled skewers
   - Summary: Sharp marinades, open flame, and fast-moving skewers stacked with colour and char.
   - Signature: Charred chicken skewers with green chilli coconut drizzle
   - Nights: Thu–Sun
3. **Midnight Fry**
   - Cuisine: Burgers and loaded fries
   - Summary: Crispy edges, molten cheese, heavy sauces, and exactly the kind of food people start craving after 10pm.
   - Signature: Double smash burger with hot honey fries
   - Nights: Wed–Sat
4. **Lava Soft Serve**
   - Cuisine: Dessert truck
   - Summary: Cold, sweet, and dramatic. Built for the final lap of the night with bright toppings and dark-chocolate hits.
   - Signature: Coconut soft serve with guava ripple and sesame crunch
   - Nights: Fri–Sun

### Signature Dishes Strip
- Kālua pork loaded plate
- Charred chicken skewers
- Double smash burger
- Hot honey fries
- Coconut soft serve
- Guava ripple sundae

### House Vibe
- **Heading:** ONE YARD. MANY CRAVINGS.
- **Body:** Order from different trucks, pull tables together, and build your own late-night spread. Māui is made for mixed orders, group hangs, and second rounds.

### Vendor CTA
- **Heading:** WANT TO PARK UP WITH US?
- **Body:** We’re always open to the right guest truck, collab night, or food drop that brings something real.
- **Button:** Send an enquiry

---

## Events Page Copy

### Hero
- **Eyebrow:** AFTER-DARK PROGRAMME
- **Heading:** COME FOR DINNER. STAY FOR THE NOISE.
- **Body:** The food pulls people in. The line-up keeps them around. Māui events are built for nights that feel alive from first order to last track.

### Upcoming Event Cards
1. **Date:** 04 APR / **Time:** 8PM–LATE
   - **Title:** Friday Bassline Sessions
   - **Body:** Local selectors, smoky grills, and a packed yard that moves till close.
   - **Tags:** DJ night / Late close / Free entry
   - **CTA:** Pull up Friday
2. **Date:** 11 APR / **Time:** 7PM–LATE
   - **Title:** Island Link-Up
   - **Body:** Guest cooks, limited-run dishes, and a night built around Pasifika flavour and pride.
   - **Tags:** Guest truck / One-night menu / Community
   - **CTA:** See the night
3. **Date:** 20 APR / **Time:** 5PM–10PM
   - **Title:** Sunday Wind Down
   - **Body:** Softer soundtrack, family-friendly hours, and big feeds before the week resets.
   - **Tags:** Sunday session / Outdoor dining / Open air
   - **CTA:** Plan Sunday

### Featured Spotlight
- **Heading:** FEATURED NIGHT: ISLAND LINK-UP
- **Body:** A rotating line-up of guest cooks and resident trucks sharing the yard for one loud, flavour-first celebration. Expect limited dishes, sharper heat, and a crowd that knows exactly why they came.
- **Highlights:**
  - Limited collab menu from 7pm
  - Guest DJs through late service
  - First come, first served seating

### Private Hire CTA
- **Heading:** BOOK THE YARD.
- **Body:** Private parties, brand activations, crew nights, and food-led launches all hit harder outdoors.
- **Button:** Ask about private hire

---

## Find Us Page Copy

### Hero
- **Eyebrow:** PLAN YOUR VISIT
- **Heading:** FIND THE LIGHTS. FOLLOW THE SMOKE.
- **Body:** We’re in Ponsonby, easy to pull up to, and built for after-work dinners, late bites, and full-group link-ups.
- **Badges:** 45 Ponsonby Road / Open late Wed–Sun

### Location + Hours
- **Heading:** PONSONBY, AUCKLAND
- **Body:** Right in the mix, close to bars, easy rideshares, and the kind of street you’re probably already heading toward.
- **Address label:** Address
- **Address value:** 45 Ponsonby Road, Ponsonby, Auckland 1011
- **Hours label:** Opening hours
- **Hours values:**
  - Wednesday — 5pm to 11pm
  - Thursday — 5pm to 11pm
  - Friday — 5pm to 1am
  - Saturday — 5pm to 1am
  - Sunday — 4pm to 10pm
- **Nearby note:** A short hop from Karangahape Road and central city stays.

### Getting Here Cards
1. **Walk in**
   - Ponsonby’s best when you wander. We’re an easy stop before, after, or between plans.
2. **Rideshare**
   - Set your drop-off to Ponsonby Road and head for the glow.
3. **Parking**
   - Limited street parking nearby. Rideshare is the smoother move on busy nights.

### Enquiry Form
- **Heading:** HIT US UP
- **Intro:** Ask about group bookings, private hire, vendor applications, or event collabs.
- **Fields:**
  - Name
  - Email
  - Enquiry type
    - Group booking
    - Private hire
    - Vendor application
    - Event collab
    - General question
  - Preferred date
  - Message
- **Button:** Send enquiry
- **Success message:** Enquiry sent. We’ll get back to you soon.

### Final Banner
- **Quote:** Ponsonby nights taste better here.
- **Button:** Back to top

## Image References
1. **Home Hero Background**
   - URL: https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=1100&fit=crop
   - Dimensions: 1600×1100
   - Alt: Close-up late-night feast on a crowded table under warm lighting
   - Placement: Home hero background
2. **Home Hero Overlap**
   - URL: https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Street food plated in warm light with bold garnish
   - Placement: Home hero overlap card
3. **Home Yard Intro**
   - URL: https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=900&h=1200&fit=crop
   - Dimensions: 900×1200
   - Alt: People eating together outdoors at night
   - Placement: Home Why Māui section
4. **Home Truck Card 1**
   - URL: https://images.unsplash.com/photo-1544025162-d76694265947?w=700&h=900&fit=crop
   - Dimensions: 700×900
   - Alt: Charred grilled meat with smoke rising
   - Placement: Featured trucks card
5. **Home Truck Card 2**
   - URL: https://images.unsplash.com/photo-1559847844-5315695dadae?w=700&h=900&fit=crop
   - Dimensions: 700×900
   - Alt: Loaded burger held in both hands
   - Placement: Featured trucks card
6. **Home Truck Card 3**
   - URL: https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&h=900&fit=crop
   - Dimensions: 700×900
   - Alt: Fresh hot pizza with bubbling cheese
   - Placement: Featured trucks card
7. **Home Image Break**
   - URL: https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&h=900&fit=crop
   - Dimensions: 1600×900
   - Alt: Outdoor dining venue glowing at night
   - Placement: Home image break
8. **Home Events Teaser**
   - URL: https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Live DJ performing under club lighting
   - Placement: Home events teaser
9. **Trucks Intro**
   - URL: https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=1600&h=900&fit=crop
   - Dimensions: 1600×900
   - Alt: Street food being cooked on a busy grill
   - Placement: Trucks page hero image
10. **Huli Smoke**
   - URL: https://images.unsplash.com/photo-1529692236671-f1de7ce1c16d?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Smoked meat sliced on a board
   - Placement: Truck roster
11. **Island Skewers**
   - URL: https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Grilled skewers over flame
   - Placement: Truck roster
12. **Midnight Fry**
   - URL: https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Crispy fried street food in paper tray
   - Placement: Truck roster
13. **Lava Soft Serve**
   - URL: https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&h=1100&fit=crop
   - Dimensions: 900×1100
   - Alt: Soft serve dessert with dramatic toppings
   - Placement: Truck roster
14. **Communal Dining**
   - URL: https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop
   - Dimensions: 1200×900
   - Alt: Friends gathered around a shared table full of food
   - Placement: Trucks page house vibe
15. **Events Hero**
   - URL: https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1600&h=1000&fit=crop
   - Dimensions: 1600×1000
   - Alt: Outdoor live music crowd at night
   - Placement: Events hero
16. **Events Spotlight**
   - URL: https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=1000&fit=crop
   - Dimensions: 1200×1000
   - Alt: Crowd with raised hands under stage lighting
   - Placement: Events spotlight
17. **Events Gallery 1**
   - URL: https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&h=900&fit=crop
   - Dimensions: 1000×900
   - Alt: Friends dancing and smiling in neon lighting
   - Placement: Events gallery
18. **Events Gallery 2**
   - URL: https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=900&fit=crop
   - Dimensions: 800×900
   - Alt: Crowd under red and purple event lights
   - Placement: Events gallery
19. **Events Gallery 3**
   - URL: https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=900&fit=crop
   - Dimensions: 800×900
   - Alt: Stage performance with bright beams and haze
   - Placement: Events gallery
20. **Find Us Support**
   - URL: https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=900&fit=crop
   - Dimensions: 1200×900
   - Alt: Auckland city street scene at dusk
   - Placement: Find Us location section
21. **Find Us Final Banner**
   - URL: https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1600&h=900&fit=crop
   - Dimensions: 1600×900
   - Alt: Auckland skyline glowing at sunset into night
   - Placement: Find Us closing banner

## Logo & Favicon SVG

### Logo SVG
```svg
<svg width="220" height="64" viewBox="0 0 220 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Māui Street Food logo">
  <rect width="220" height="64" rx="12" fill="none"/>
  <path d="M24 50C18 45 15 38 15 30C15 18 24 10 35 10C29 15 27 22 30 28C33 34 39 36 44 41C49 45 51 51 47 56C43 61 35 62 28 58" fill="#FF5A1F"/>
  <path d="M36 14C46 18 53 27 53 37C53 47 46 55 35 57C40 52 41 46 38 41C35 36 30 33 27 28C23 22 24 17 27 12" fill="#D61C4E"/>
  <text x="68" y="30" fill="#F6EFE5" font-family="Bebas Neue, Arial, sans-serif" font-size="26" letter-spacing="1.5">MĀUI</text>
  <text x="68" y="52" fill="#F4C95D" font-family="Bebas Neue, Arial, sans-serif" font-size="20" letter-spacing="1.2">STREET FOOD</text>
</svg>
```

### Favicon SVG
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 50C18 45 15 38 15 30C15 18 24 10 35 10C29 15 27 22 30 28C33 34 39 36 44 41C49 45 51 51 47 56C43 61 35 62 28 58" fill="#FF5A1F"/>
  <path d="M36 14C46 18 53 27 53 37C53 47 46 55 35 57C40 52 41 46 38 41C35 36 30 33 27 28C23 22 24 17 27 12" fill="#D61C4E"/>
</svg>
```

## Responsive Notes
- **Desktop (1280px+):** Lean into asymmetry. Use overlapping hero image card, 3-column truck/event layouts, and wider negative space around headings.
- **Tablet (768px–1279px):** Shift multi-column sections to balanced 2-column layouts. Reduce oversized heading scale to avoid wraps. Keep sticky header compact.
- **Mobile (<768px):** Stack all split sections. Move key metadata into pill chips. Keep CTAs full-width where helpful. Reduce hero height and remove non-essential decorative overlaps.
- Truck cards should become vertical with image-first order.
- Footer should collapse into one centered stack with generous spacing.
- Any horizontal scroller must have visible partial cut-off to signal swipe.
- Preserve tap targets at minimum 44px height.

## Motion / Interaction Notes
- Use CSS transitions by default. Avoid overbuilding.
- Sticky header should darken after scroll.
- Buttons: translateY(-2px) on hover, active state snaps back.
- Cards: image zoom + accent border glow on hover.
- Respect `prefers-reduced-motion` by disabling transforms and reveal effects.

## Accessibility Requirements
- Semantic heading order on all pages.
- `alt` text must match image reference list.
- Keyboard-visible focus state in electric aqua.
- Form labels always visible. No placeholder-only fields.
- Sufficient contrast for all text and CTA states.

## SEO Requirements
- Use page-specific metadata from routes above.
- Open Graph title and description should mirror page metadata.
- Include local business schema if implemented later.
- Ensure address and hours appear as crawlable text, not only in images.

## Implementation Notes
- Background texture can be done with low-opacity gradients and subtle line patterns rather than heavy image assets.
- Use Next/Image for all photography.
- Keep image overlays dark enough for consistent text legibility.
- If map embed is skipped, build a branded static location card with CTA to Google Maps.
- The visual language should feel poster-like and nocturnal, never clean-corporate or generic food-hall.