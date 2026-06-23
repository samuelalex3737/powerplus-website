## Power Plus LLC — Website Build Plan (confirmed)

Both defaults confirmed: **Lovable Cloud + Resend** for the contact form, and you'll paste the **Resend API key** when prompted after the build.

### Stack adaptation (Lovable's stack, not Next.js)
- Routing/SSR: **TanStack Start + React 19 + Vite**
- Styling: **Tailwind v4** via `src/styles.css` with your exact brand tokens
- Animations: **Framer Motion** (+ GSAP for PillNav hover)
- Icons: **lucide-react**
- Theme: tiny `data-theme` toggle on `<html>` (replaces `next-themes`)
- Images: `<img>` from your Pexels URLs (Next/Image isn't available)
- Logos: your two PNGs registered as Lovable Assets and imported

### Scope — single-page site at `/`
All 7 sections on the home route with hash anchors (`#hero`, `#services`, `#energy`, `#ai`, `#generators`, `#about`, `#contact`) so the PillNav works as spec'd.

### Sections (1:1 with your brief)
1. **Hero** — UAE skyline + #111A05/75% overlay, badge, H1 with "Future Solutions" in green, two CTAs, bouncing chevron, stats bar with count-up.
2. **Services overview** — 3 cards (AI featured in green), hover lift + green top border.
3. **Energy Efficiency** — 6 tiles, savings calculator (bill × 12 × 0.25 / 0.40), CEEP green callout.
4. **AI Access Control** — dark premium section, Traditional vs Power Plus, 4-step animated flow, 2×2 use cases, Joseph quote, CTA pre-selects subject.
5. **Generators** — Cummins + Perkins cards, "What we supply" 4-icon row, ancillary equipment, green CTA box with WhatsApp quick-quote.
6. **About** — Profile card with "JA" initials avatar (real headshot later), bio verbatim, 4 fast facts, 3 values.
7. **Contact** — full form (name, company, email, phone +971, 6-option subject, message), contact column, prominent WhatsApp, Google Maps iframe of Shams Free Zone.

### Global UI
- **PillNav** — floating centered pill, GSAP bubble-up hover, theme-aware base color, hamburger under 768px, P-icon logo
- **ThemeToggle** — sun/moon, green ring
- **Floating WhatsApp** — 56px green circle, pulse ring, appears after 300px scroll
- **Back-to-top** — 44px dark circle, green border, appears after 500px scroll
- **Footer** — 3 cols on #0A1203, white-filtered logo

### Design tokens (locked)
All your hex values wired as CSS vars in `src/styles.css` for `:root` + `[data-theme="dark"]`. Tailwind v4 `@theme` exposes `brand`, `brand-dark`, `brand-light`, `brand-pale`. No other accent colors anywhere.

### Copy & content
Verbatim from your brief. No Lorem Ipsum, no MBA-speak, no blog, no social icons.

### Animations
Framer Motion only, one entrance per section, `useReducedMotion` respected. 0.12s stagger for grids, 0.2s × index for AI steps, 2s count-up for stats, 0.15s hero stagger.

### Contact form delivery
- Enable **Lovable Cloud**
- TanStack server function `sendContact` validates with Zod and calls **Resend** to send to `joseph@powerplusllc.com`
- Success toast: "Message sent! Joseph will reply within 24 hours." / Error toast → WhatsApp
- After build I'll prompt you for `RESEND_API_KEY` (free tier on resend.com = 3,000 emails/month, plenty for a contact form)

### File map
- `src/routes/index.tsx` — composes sections, sets SEO (title/description/OG) verbatim
- `src/routes/__root.tsx` — Inter `<link>`, favicon = P icon, theme bootstrap
- `src/components/site/` — `PillNav`, `ThemeToggle`, `Hero`, `Services`, `Energy`, `AI`, `Generators`, `About`, `Contact`, `Footer`, `FloatingWhatsapp`, `BackToTop`
- `src/lib/constants.ts` — exact COMPANY object from spec
- `src/lib/images.ts` — all Pexels URLs centralized
- `src/lib/contact.functions.ts` — Resend send via server function

### Post-launch checklist (your side)
1. Create a free Resend account → API key → paste into Lovable Secrets as `RESEND_API_KEY`
2. Send Joseph's real headshot to replace the "JA" initials avatar