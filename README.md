# KINETIC LAB — Boutique Fitness Studio Landing Page

A bold, high-energy, and modern landing page for the fictional boutique fitness studio **KINETIC LAB**, built with a carbon-black aesthetic, neon acid-lime accents, and a dynamic slanted style signature.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 (Carbon surfaces, slanted custom buttons, and acid-lime text highlight borders)
- **Motion**: GSAP + `@gsap/react` (High-velocity ScrollTrigger reveals)
- **Icons**: Lucide React

---

## 📐 Content-Driven Architecture

All content is structured within typed TypeScript arrays inside `src/data/`, allowing you to update schedules, trainers, and classes without editing components.

### Modifying Studio Data
- **Class Formats**: Edit [classes.ts](file:///c:/Users/user/Desktop/fitness/src/data/classes.ts) to update formatting, duration, or intensity.
- **Trainer Profiles**: Edit [trainers.ts](file:///c:/Users/user/Desktop/fitness/src/data/trainers.ts) to add or remove specialists.
- **Class Schedules**: Edit [schedule.ts](file:///c:/Users/user/Desktop/fitness/src/data/schedule.ts) to modify daily timetables or spot availability.
- **Membership Tiers**: Edit [membership.ts](file:///c:/Users/user/Desktop/fitness/src/data/membership.ts) to adjust pricing and options.

---

## 📐 Layout Signatures

- **Dynamic Skewing**: Buttons and elements utilize a `-skew-x-12` transform to imply speed and athletic progression. Text inside skewed buttons is un-skewed using `skew-x-12` to maintain readability.
- **High-Velocity GSAP Reveals**: Elements slide in from the left and fade up using power-curve easing to reflect the athletic brand energy.
