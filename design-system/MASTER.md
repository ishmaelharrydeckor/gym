# KINETIC LAB — Design System (High-Energy Tech)

A high-contrast, energetic, and raw design system tailored for **KINETIC LAB**, a boutique fitness/wellness studio.

---

## 🎨 Palette (Carbon & Acid Lime)

- **Canvas Background**: `bg-zinc-950` / `#09090B` (Carbon Black)
- **Surfaces (Cards/Filters)**: `bg-zinc-900` / `#18181B` (Slate Charcoal)
- **Vivid Accent**: `bg-lime-400` / `#D4FF00` (Electric Acid Lime)
- **Accent Glow**: `rgba(212, 255, 0, 0.08)` (Lime shadow hover)
- **Text Primary**: `text-white` / `#FFFFFF` (Pristine White)
- **Text Muted/Secondary**: `text-zinc-400` / `#A1A1AA` (Muted Slate)
- **Lines/Borders**: `border-zinc-800` / `#27272A` (Thin technical boundaries)

---

## ✍️ Typography

- **Headings & Callouts**: `Outfit` (Google Fonts) — styled as bold/black italic display sans (`font-black italic uppercase`) with tight letter-spacing.
- **Body & Text Lists**: `Inter` — a neutral sans-serif for ultimate legibility, keeping pricing and schedule details clean.

### Type Scale
- **Display (Hero Headline)**: `text-6xl sm:text-8xl lg:text-9xl` (font-black, italic, tracking-tighter, uppercase)
- **H1/H2 (Sections)**: `text-4xl sm:text-5xl lg:text-6xl` (font-extrabold, italic, tracking-tight, uppercase)
- **H3 (Cards)**: `text-xl sm:text-2xl` (font-bold, italic, tracking-tight, uppercase)
- **Body Text**: `text-sm` (font-normal, leading-relaxed, text-zinc-400)
- **Technical/Muted Labels**: `text-xs font-mono tracking-widest` (for intervals, class times, and tags)

---

## 📐 Layout Signatures

- **Slanted Motif**: Button shapes and decorative lines use slanted parallelogram transforms (`transform -skew-x-12`) to imply speed, momentum, and progression.
- **Section Padding**: `py-36` (Breathable layouts to give bold visuals ample room to breathe).
- **Cards**: Minimal border radius (`rounded-md` / `6px`) or sharp edges (`rounded-none`).

---

## ✨ Motion & Interaction

- **State-Free React Interactions**: Mouse positioning variables are handled natively in refs to maintain smooth canvas updates.
- **Hover Transitions**: Skewed CTAs expand slightly (`hover:scale-105`) and shift background filters.
- **GSAP Timelines**: High-velocity reveals using `useGSAP` (`opacity: 0, x: -30` -> `opacity: 1, x: 0`).
