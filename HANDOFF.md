# Avanti × Vibeflow — Proposal Handoff

> **To:** Development Team (Agent or Human)  
> **From:** Mahmud / M5A  
> **Date:** 2026-06-13  
> **Status:** 🚧 Ready for team iteration

---

## 1. Project Overview

This is a **90-day restaurant growth proposal** for **Avanti Restaurant** (Mymensingh) by **Vibeflow**. The proposal is a full-page HTML experience with:

- **GSAP scroll-driven 3-phase hero** (Automation → Sales Growth → Masterplan)
- **6 standard proposal sections** (Overview, Challenges, Solution, Timeline, Pricing, Q&A)
- **Bangla & English versions** on the same layout
- **Infographic card system** with business value copy (no fake metrics anymore)

### Current files

All files live under:  
`/Volumes/Data/Projects/VFL-proposal-ops/docs/leads/AVT-avanti-restaurant/`

```
AVT-avanti-restaurant/
├── HANDOFF.md                          ← You are here
├── lead_context.md                     ← Lead context
├── notes/
│   ├── art-direction-sheet.md          ← Visual design directions
│   └── dusk-hospitality-design.md      ← Design references
├── sent-proposal/                      ← Final approved copies
└── working-draft/                      ← Active work area
    ├── proposal.html                   ← English proposal (main deliverable)
    ├── bangla.html                     ← Bangla proposal (main deliverable)
    ├── IMPLEMENTATION_SUMMARY.md       ← Previous improvements log
    ├── IMPROVEMENTS.md                 ← Improvement analysis doc
    ├── README.md                       ← Brief readme
    ├── style.css                       ← Legacy stylesheet (not used by HTML)
    ├── script.js                       ← JS utilities
    ├── index.html                      ← Older variant (archive)
    ├── proposal-poly.html              ← Older variant (archive)
    ├── _site/                          ← 11ty build output (if used)
    ├── src/                            ← 11ty source (template system)
    ├── assets/                         ← Images
    ├── node_modules/                   ← 11ty dependencies
    ├── package.json                    ← NPM config
    └── .eleventy.js                    ← 11ty config
```

**Two files are the real deliverables:**
- `working-draft/proposal.html` — English
- `working-draft/bangla.html` — Bangla

---

## 2. What Has Been Done (Brief)

| Phase | What | Status |
|-------|------|--------|
| Initial build | GSAP scroll hero + 3-phase infographic dashboard + 6 sections | ✅ |
| Bangla version | Full Bangla translation of all sections | ✅ |
| CSS cleanup | Removed duplicate pricing CSS, fixed mobile breakpoints | ✅ |
| Card UX fix | Stripped ALL fabricated metrics (95%, 80%, etc.) and progress bars | ✅ |
| Card rewrite | Replaced fake % with clear business-value statements | ✅ |
| Text sizes | Enlarged card text: hub (13px), detail (11px), tags (10px), body (0.9rem) | ✅ |
| Links | All navigation anchors work correctly | ✅ |
| JS | Zero console errors. GSAP, ScrollTrigger, form handlers all function | ✅ |

---

## 3. 🔴 Team Tasks (Must Complete)

These are the features the team needs to add. They require design + development iteration.

### Task A: Bn/En Language Toggle Button
Add a toggle button (top nav or floating) that switches between Bangla and English versions.
- **Approach**: could be page redirect (`proposal.html` ↔ `bangla.html`), URL param, or a single-page JS toggle
- **Current state**: two separate files — no linking between them
- **Hreflang tags** are already in the 11ty template system (if you use `src/`), but not yet in `proposal.html`/`bangla.html`
- **Add**: `<link rel="alternate" hreflang="bn" href="bangla.html">` and vice versa

### Task B: Bangla Language Review
The Bangla copy needs a native speaker polish pass:
- Check natural flow — does it sound like a Mymensingh restaurant owner speaking, or machine translation?
- Fix any awkward transliterations (e.g., "লিকেজ" → more natural alternatives, "কাভারেজ" → "কাভারেজের হার" or drop it)
- Ensure consistent brand naming (Avanti stays Avanti, not আভান্তি)
- Check all labels, tags, badges for natural Bangla
- Reference: `vibeflow-bangla-client-proposals` skill rules (Bangla-first, natural business Bangla)

### Task C: Add Missing Workflow Details
The proposal mentions workflows but doesn't explain the **actual systems** the client will use. Add these as new cards or expanded sections:

| Workflow | What to describe |
|----------|-----------------|
| **SMS System** | How automated SMS works for order confirmations, promo blasts, birthday offers |
| **WhatsApp Ordering** | How customers can browse menu + order via WhatsApp (Vibeflow's AI inbox) |
| **Social Media Pipeline** | How Facebook/Instagram posts feed into the ordering funnel |
| **Google Maps / Local SEO** | How Avanti appears in local search and Maps with menu + ordering |
| **Direct Order Website** | What the Avanti website does end-to-end (browse, order, pay, feedback) |
| **Customer Follow-up** | The automated sequence after a visit (thank you → offer → reorder reminder) |

These should be written in **business language**, not technical specs. The client should read it and think *"I understand exactly what I'm getting."*

### Task D: 90-Day Overview Narrative
The current timeline cards (Foundation → Order System → Growth) are too brief. Add a **short paragraph narrative** at the top of the timeline section that tells the client:

> "In the first 20 days, we get your website and menu online so customers can find you. Days 21–50, we turn that into an ordering system — customers place orders directly, you keep full margin. Days 51–90, we activate loyalty and automations so customers come back without you having to chase them. By day 90, Avanti has a connected system running on its own."

No technical jargon. Just a clear 90-day story.

### Task E: "Inside Secrets" Brief Section
A short section (~3-4 bullet points or a small card) somewhere visible — perhaps between Challenges and Solution — that reveals **the inside logic** of the proposal:

Examples:
- *"Most restaurants in Mymensingh are losing 30% of every online order to aggregators. This proposal fixes that by building your own ordering channel."*
- *"The menu is the most under-used marketing asset. We put it everywhere — website, Google, WhatsApp — so it works for you 24/7."*
- *"A customer who comes back 3 times is worth 5× more than a first-timer. Our system is built to make that happen automatically."*
- *"You don't need a tech team to run this. Everything we build works with a single dashboard."*

This section should feel like **insider knowledge** — the kind of thing that makes the client think Vibeflow really understands restaurant business.

---

## 4. Technical Notes

### 4.1 Current Architecture
- **Single HTML files** with inline CSS + JS
- Tailwind CSS via CDN (`cdn.tailwindcss.com`)
- GSAP 3.12 via CDN (`gsap.com`, `ScrollTrigger`)
- Inter font via CDN (`fontsource`)
- No build step needed (CDN-based)
- Responsive (mobile breakpoint at 640px)

### 4.2 Card System Classes
| Class | What it is | Used where |
|-------|-----------|------------|
| `.dash-hub` | Primary phase card (hub) | GSAP phases, 3 per phase |
| `.hub-title` | Hub card title | 13px bold |
| `.hub-desc` | Hub card description | 12px muted |
| `.hub-badge` | Hub card status badge | colored pill |
| `.dash-detail` | Supporting phase card | GSAP phases, 4 per phase |
| `.detail-title` | Detail card title | 11px bold |
| `.detail-desc` | Detail card description | 11px muted |
| `.info-card` | Standard section card | Overview, Challenges, Solution, Timeline |
| `.pricing-card` | Pricing card | Pricing section |

### 4.3 GSAP Animation Classes
The 21 phase cards have class names `card-1-1` through `card-3-7`.  
GSAP targets these in a timeline: first row (hubs) fly in, second row (details) fade up.

**Do NOT rename these classes** unless you also update the GSAP timeline.

### 4.4 Color System
```
Background: #140B08 (near-black)
Text:       #F5EDE4 (cream)
Red:        #ef4444 (primary accent)
Gold:       #fbbf24 → #d97706 (secondary)
Glass:      rgba(255,255,255,0.03) with blur(20px)
```

### 4.5 11ty Alternative
There's also an Eleventy (11ty) setup in `src/` that was built earlier. It's **not synced** with the current `proposal.html`/`bangla.html` files. You can either:
- **Option A**: Continue working directly on `proposal.html` and `bangla.html` (simpler, no build step)
- **Option B**: Rebuild the 11ty template system to sync with current card content (more maintainable for multi-language)

---

## 5. GitHub Repo

**Repo:** `mutedmamun/avanti-growth-proposal` (newly created)  
**Branch:** `main`

The repo contains the full `AVT-avanti-restaurant/` directory.  
You have contributor access — push changes directly to `main` or create feature branches.

### Initial commit contents
```
AVT-avanti-restaurant/
├── HANDOFF.md
├── lead_context.md
├── notes/
│   ├── art-direction-sheet.md
│   └── dusk-hospitality-design.md
└── working-draft/
    ├── proposal.html          (English)
    ├── bangla.html            (Bangla)
    ├── IMPLEMENTATION_SUMMARY.md
    ├── IMPROVEMENTS.md
    ├── README.md
    ├── style.css
    ├── script.js
    ├── index.html
    ├── proposal-poly.html
    └── ... (11ty files)
```

---

## 6. Priority Order for Team

1. **Task A** — Bn/En toggle (foundational for users)
2. **Task B** — Bangla language review (quality before shipping)
3. **Task C** — Workflow details (SMS, WhatsApp, social) (completeness)
4. **Task D** — 90-day narrative (clarity)
5. **Task E** — Inside secrets brief (trust-building)

---

## 7. Review Criteria (Before Shipping)

- [ ] Language toggle works both directions
- [ ] Bangla reads naturally to a native speaker
- [ ] SMS, WhatsApp, and social workflows are described clearly
- [ ] 90-day timeline has a narrative overview paragraph
- [ ] Inside secrets section is present and feels like insider insight
- [ ] No fabricated metrics or progress bars
- [ ] All navigation links work
- [ ] Zero JS console errors
- [ ] Mobile responsive (check at 375px and 768px)
- [ ] Both files pushed to GitHub

---

*End of handoff. Questions → tag Mahmud or post in the team channel.*
