# Avanti Proposal — Redesign Plan

## Vision
Transform the single-page proposal into a **multi-page interactive proposal website** that feels like a **secret blueprint** — impressive, trustworthy, and conversion-focused.

## Design Reference
`vibeflow.team` — clean, minimal, professional, dark-but-friendly, motion-rich

---

## Page Structure

### Navigation
- **Bottom pill nav** (mobile-style, stays on all pages):
  - `[Logo Combo]` → Home/Landing Page
  - `[Road Map]` → 90-Day Plan
  - `[Discussion]` → Q&A + Lead Capture
- Top menu: minimal — only logo + language toggle

---

### Page 1: Landing / Home (`index.html`)
**Flow:**
1. **Hero** — One-liner: *"We don't just build websites. We connect the dots of your restaurant business and polish it to shine."*
2. **Animation Showcase** — GSAP/3D/motion scroll that demonstrates Vibeflow's design capability
3. **"What We Keep Under the Table"** — Honesty section: nothing hidden, just connecting dots
4. **Services Overview** — Each service in infographic cards:
   - Menu Engineering (one-liner + study with avg numbers)
   - Menu Designing (one-liner + study)
   - Branding (one-liner + study)
   - Automation Workflow (one-liner + study)
   - Each card: "What it gets you" with countable outcomes
5. **ROI Calculator** — Inputs: sales, 3rd-party orders, avg order value → real-time savings
6. **CTA** — "Start Your 90-Day Journey →"

---

### Page 2: 90-Day Roadmap (`roadmap.html`)
- 3 phases with timeline visualization
- Each phase: what happens, what client gets, milestone
- GSAP scroll animations
- Bottom pill nav persists

---

### Page 3: Pricing (`pricing.html`)
- Current 2-package system (Digital Essentials / Advanced Growth)
- Feature comparison
- ROI context (links back to calculator)
- CTA: "Book a call"

---

### Page 4: Discussion + Lead Capture (`discussion.html`)
- **Q&A Section** — public questions visible to both parties
- **Lead Capture Form** — client provides:
  - Business name
  - Contact person
  - Phone/WhatsApp
  - Current sales volume (optional, for ROI)
  - Current aggregator platforms used
- "We will contact you within 48 hours"

---

## Design System

| Element | Style |
|---------|-------|
| Background | Deep dark `#0A090B` |
| Text | Cream `#F6F1E8` |
| Accent | Red `#C4332E` + Gold `#D7B25F` + Emerald `#22c55e` |
| Typography | Inter (body) + Playfair Display (headlines) |
| Cards | Glassmorphism (`backdrop-filter: blur`) |
| Nav | Bottom pill, fixed, glass effect |
| Motion | GSAP scroll-triggered reveals, 3D perspective on hero |

---

## Implementation Phases

### Phase 1: Structure & Navigation
- Create `index.html` (Landing), `roadmap.html`, `pricing.html`, `discussion.html`
- Bottom pill navigation component (shared across pages)
- GSAP scroll animation framework

### Phase 2: Landing Page Content
- Hero section with one-liner + motion
- Services infographic cards with studies
- ROI Calculator integration
- "Not keeping anything under the table" section

### Phase 3: Supporting Pages
- Roadmap: 3-phase timeline with milestones
- Pricing: 2-package comparison
- Discussion: Q&A + Lead capture form

### Phase 4: Polish & Verification
- Mobile responsive check
- Cross-page navigation testing
- Console error check
- GitHub push

---

## Key Decisions Needed
1. Keep current pricing (Digital Essentials ৳45K / Advanced Growth ৳80K/mo) or adjust?
2. Single `index.html` with JS page switching OR separate HTML files?
3. What "studies / average numbers" to use for each service?
