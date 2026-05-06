# Lessons Learned

## Image Handling
- **EXIF orientation is the #1 photo bug**: iPhone photos embed EXIF orientation tag (e.g. tag 274 = 6 means "rotate 90 CW"). Browsers honor this even in PNGs. The ONLY reliable fix is to use Python PIL's `ImageOps.exif_transpose()` to bake the rotation into actual pixel data, then re-save as a brand new `Image.new('RGB', ...)` with zero metadata. `sips` commands alone do NOT strip EXIF from PNGs reliably.
- Never trust `sips -g orientation` showing `<nil>` — the EXIF data can still be embedded in the PNG chunk. Verify with PIL `img.info` keys.
- Always verify image orientation by reading the file back after processing.

## Design & Voice
- User's voice is conversational-confident, NOT AI-formal. No em dashes on the site. Use "&" in casual contexts. Specific details over abstractions.
- User dislikes: green accent color, AI-sounding bios, "corny" detail cards (Education/Focus grid), oversized project images, generic design
- User likes: mustard yellow (#b8860b), warm/organic/homey aesthetic (PostHog-inspired), cream backgrounds, DM Sans font
- Spool brand color is `#56B5E3` (blue) — use this whenever referencing Spool by name
- "2 times font size" = scale up base font-size from 16px to 20px + bump individual sizes. Not literally double everything.
- Keep bios SHORT. Don't over-explain. Don't lead with problem-solving personality trait. Don't mention TA experience.

## Project Structure
- React 18 with createRoot API
- Framer Motion for all animations (AnimatePresence for page transitions)
- React Router v6, GitHub Pages SPA routing via 404.html redirect
- No Bootstrap — all custom CSS with CSS variables
- Resume is Google Docs iframe embed (auto-updating, read-only)
- Spool assets sourced from ~/Desktop/Spool-Landing/public/

## CSS Architecture
- Design tokens in `src/index.css` (`:root` variables)
- All component styles in `src/style.css` (single file)
- App-level styles in `src/App.css` (preloader, mesh gradient)
- Warm cream palette: bg #f8f5f0, text #1a1a17, accent #b8860b

## Doodle/Illustration System
- Created `src/components/Doodles.js` with reusable SVG components
- Uses framer-motion `pathLength` to replicate GSAP's DrawSVG effect
- Available: AnimatedUnderline, SparklesDoodle, CurvedArrow, SquigglyDivider, CircleDoodle, FloatingDots, WavyBracket
- All doodles are `position: absolute` with `pointerEvents: none`
- Wispr Flow uses GSAP + DrawSVGPlugin; we use framer-motion pathLength which achieves similar effect

## Wispr Flow Reference
- Cream background: #FFFFEB (ours is #f8f5f0 — similar warmth)
- Dark text: #1A1A1A (ours is #1a1a17 — nearly identical)
- They use system fonts, animated SVG underlines, pill-shaped buttons
- Character-level button hover animations (SplitText) — we use scale/rotate instead
- Organic SVG curves with dots traveling along paths
- Their doodles draw themselves in on scroll — we replicate with pathLength animations

## Project Data
- MatchMeds won $15,000 (NOT $11,000) at the Diamond Challenge
- MatchMeds demo link is a pitch video on Vimeo
- MatchMeds goes right after Spool (position 2)
