# Launch Checklist (Stages 51–60)

## Before deploy
- [ ] `npm run lint` clean
- [ ] `npx tsc --noEmit` clean
- [ ] `npm run build` succeeds
- [ ] Replace placeholder URLs: `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`
- [ ] Replace placeholder social links in `content/footer.ts` and `content/contact.ts`
- [ ] Replace testimonial placeholder text in `content/testimonials.ts` once approved
- [ ] Add real project screenshots via `imageUrl` in `content/projects.ts`
- [ ] Wire up Contact form backend (Resend or similar) — currently frontend-only by design

## Deploy
- [ ] Push to GitHub, connect repo to Vercel
- [ ] Set environment variables from `.env.example` in Vercel dashboard
- [ ] Confirm custom domain + SSL

## After deploy
- [ ] Run Lighthouse against the live URL (see `lighthouserc.json`)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify `/sitemap.xml` and `/robots.txt` resolve correctly
- [ ] Smoke-test the Contact form, all case study routes, and 404 page on production
- [ ] Cross-browser pass per `docs/CROSS_BROWSER_TESTING.md`