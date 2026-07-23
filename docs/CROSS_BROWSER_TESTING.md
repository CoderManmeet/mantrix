# Cross-Browser Testing Checklist (Stage 29)

Run through this manually — it can't be automated from here since it needs real browsers/devices.

## Browsers
- [ ] Chrome (desktop + Android)
- [ ] Safari (desktop + iOS) — check `backdrop-filter`, `clamp()`, custom cursor `cursor: none` fallback
- [ ] Firefox
- [ ] Edge

## Per-browser checks
- [ ] Hero entrance timeline plays once, no double-fire
- [ ] Loader shows once per session (sessionStorage), skips on repeat visits
- [ ] Spotlight cursor: hidden entirely on touch devices, no ghost cursor
- [ ] Marquee (Trusted Technologies) loops seamlessly, no visible seam
- [ ] Accordion (Services/FAQ) grid-rows transition animates smoothly (older Safari has had grid-template-rows transition quirks — verify)
- [ ] Contact form native validation messages don't double up with Zod's messages
- [ ] `prefers-reduced-motion: reduce` actually disables animation in each browser's OS-level setting

## Devices
- [ ] iPhone (Safari) — safe-area insets, tap targets ≥ 44px
- [ ] Android (Chrome)
- [ ] iPad / tablet breakpoint (md)
- [ ] Small laptop (1280px, the `lg` boundary)