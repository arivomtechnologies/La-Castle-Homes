# 🏛️ La Castle Homes — Angular Application Guide

Welcome to the new **Angular** application for **La Castle Homes** (`lacastlehomes.com`). This project was migrated from static HTML/CSS/JS into a modern, reactive single-page application (SPA).

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
# From workspace root
npm start

# OR from inside lacastle-homes directory
cd lacastle-homes
npx ng serve
```
Open your browser at **`http://localhost:4200/`**.

### 2. Compile Production Bundle
```bash
npm run build
```
Output files are generated into `lacastle-homes/dist/lacastle-homes/browser/`.

---

## 📂 Project Architecture

```
lacastle-homes/
├── public/
│   ├── favicon.ico
│   ├── lacastlelogo.png            # Original brand logo (preserved)
│   └── images/                     # 8 AI-generated luxury architectural visuals
│       ├── hero-bg.jpg             # High-res blue hour luxury architectural pavilion
│       ├── residential-1.jpg       # Cantilevered modern glass villa at dusk
│       ├── residential-2.jpg       # Expansive contemporary residence with pool
│       ├── residential-3.jpg       # Besant Nagar waterfront beach villa
│       ├── commercial-1.jpg        # Aurora corporate skyscraper with gold lighting
│       ├── renovation-1.jpg        # Calacatta marble living room interior renovation
│       ├── renovation-2.jpg        # Grand historic palace & glass wing restoration
│       └── studio-team.jpg         # Architects reviewing blueprints in modern studio
│
└── src/
    ├── index.html                  # Google Fonts (Playfair, Cormorant, Montserrat)
    ├── styles.css                  # Design system tokens, gold accents, reset
    └── app/
        ├── app.ts                  # Root layout (Header, Main Router, Footer, FAB)
        ├── app.routes.ts           # Route declarations with page titles
        ├── app.config.ts           # Router with top scroll restoration
        │
        ├── services/
        │   └── email.service.ts    # EmailJS transmission service for contact form
        │
        ├── components/
        │   ├── header/             # Fixed blurred navigation + mobile hamburger drawer
        │   ├── footer/             # CTA banner, brand contact, directory links
        │   ├── whatsapp-fab/       # Pulsing WhatsApp Quick-Chat button (+91 95511 16009)
        │   └── estimator/          # Interactive project cost & budget calculator
        │
        └── pages/
            ├── home/               # Hero, animated stats counter, featured projects
            ├── about/              # 5-year story, timeline, guiding values
            ├── services/           # 5 core services + Interactive Cost Estimator
            ├── projects/           # Category filter (All, Residential, Commercial, Renovation) + Lightbox modal
            ├── why-us/             # 6 differentiators + benchmark comparison table
            ├── contact/            # Reactive form validation + EmailJS dispatch
            └── not-found/          # Branded luxury 404 page
```

---

## 🎨 Theme & Typography

- **Colors:**
  - Gold Accent: `#C9A84C` (Hover: `#D4B96A`, Border: `rgba(201, 168, 76, 0.3)`)
  - Dark Charcoal: `#111111`
  - Deep Black: `#0b0b0b`
  - Off-White: `#f5f5f0`
- **Typography:**
  - Headlines: `'Playfair Display', Georgia, serif`
  - Quotes & Serifs: `'Cormorant Garamond', Georgia, serif`
  - Body & UI: `'Montserrat', sans-serif`

---

## 💡 Key Features Added

1. **Interactive Lightbox:** Fullscreen image modal on the Projects page with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`), counter, and captions.
2. **Interactive Cost Estimator:** Real-time square footage slider and specification tier selection (Premium, Ultra, Bespoke) with instant cost computation in Lakhs/Crores.
3. **EmailJS Integration:** Integrated `@emailjs/browser` SDK for instant enquiry emails and auto-replies.
4. **Instant WhatsApp Chat:** Direct floating action button with pre-filled message.
5. **Scroll Restoration:** Automatic scroll-to-top on route changes.
