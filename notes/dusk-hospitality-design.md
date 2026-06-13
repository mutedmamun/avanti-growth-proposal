---
version: alpha
name: Avanti Dusk Hospitality
description: Warm dusk-toned premium hospitality design system for Avanti Restaurant proposal.
colors:
  background: "#1A1826"
  surface: "#232039"
  surface-2: "#2A2540"
  text: "#EDE6D8"
  text-soft: "#C2B8AA"
  text-muted: "#A39A8E"
  primary: "#C65D47"
  primary-hover: "#9E4938"
  accent-gold: "#D7A85C"
  accent-gold-soft: "rgba(215,168,92,0.18)"
  success: "#6B8F63"
  danger: "#A8433A"
  border: "rgba(255,255,255,0.10)"
  border-accent: "rgba(198,93,71,0.25)"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  heading:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 15px
    lineHeight: 1.7
  label:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 500
    letterSpacing: "0.08em"
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96]
radius:
  sm: 8px
  md: 16px
  lg: 22px
  xl: 30px
  pill: 9999px
shadows:
  card: "0 18px 40px rgba(0,0,0,0.30)"
  elevated: "0 24px 60px rgba(0,0,0,0.38)"
  glow-red: "0 0 30px rgba(198,93,71,0.12)"
motion:
  duration-fast: 180ms
  duration-base: 280ms
  easing: "cubic-bezier(0.16, 1, 0.3, 1)"
components:
  card-default:
    backgroundColor: "rgba(35,32,57,0.88)"
    textColor: "{colors.text}"
    rounded: "{radius.md}"
    padding: 20px
  card-accent:
    backgroundColor: "rgba(35,32,57,0.92)"
    textColor: "{colors.text}"
    rounded: "{radius.md}"
    padding: 20px
    shadow: "{shadows.card}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#EDE6D8"
    rounded: "{radius.pill}"
    padding: 12px 24px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{radius.pill}"
    padding: 12px 24px
---
## Overview
A warm dusk-toned design system for restaurant proposals and hospitality applications. Combines premium sophistication with restaurant warmth. Designed for management-review readability.
## Colors
- Background: Deep plum/midnight (#1A1826) — calm, premium, not harsh black
- Surface: Muted aubergine (#232039) — elevated dark cards
- Primary: Muted terracotta (#C65D47) — confident CTAs and key interactions
- Text: Warm cream (#EDE6D8) — readable, soft on eyes
- Accent gold (#D7A85C) — for subtle support moments only
## Typography
Playfair Display for key editorial headline moments. Inter system sans for all UI and body text.
## Layout
Clean modular cards. Generous whitespace. Two-column covers with left text and right visual anchoring.
## Do's and Don'ts
- Do use warm cream text instead of pure white
- Do keep terracotta as the main accent, not gold
- Do use soft translucent card surfaces with warm undertones
- Don't use pure black for backgrounds
- Don't use bright red or orange
- Don't over-glow cards or use harsh shadows
- Don't let gold overpower the terracotta accent
