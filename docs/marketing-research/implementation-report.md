# Implementation report — Yugya copy transformation

**Date:** 2026-11-17
**Status:** research complete · strategy approved · copy implemented · QA passed · not committed.

This is the record of what was actually shipped after the research in `docs/marketing-research/`. It maps the old wording to the new, states the reasons for each important choice, lists the claims that were removed or never introduced, records every test, and sets out the business information and real-customer validation still needed.

---

## 1. Research completed

Research was finished **before** any public copy was changed. All four streams and the synthesis documents are in `docs/marketing-research/` (see `research-overview.md` for the full index).

| Deliverable | What it contains |
| --- | --- |
| `research-overview.md` | Method, evidence labels, cross-cutting findings, finding → decision traceability, limitations. |
| `website-copy-audit.md` | Before-state audit of every rewritten surface. |
| `nepal-market-analysis.md` | Connectivity, discovery, trust/regulation, payments, six segments, 17 cited sources. |
| `competitor-analysis.md` | 14 reachable competitors profiled from live sites, 4 unverifiable sites noted, market patterns and gaps, 24 sources. |
| `copywriting-principles.md` + `source-library.md` | 14 principles and a decision checklist grounded in 23 numbered sources. |
| `language-and-keyword-research.md` | English/Devanagari/Romanised terminology, 24 sources, English-first recommendation. |
| `customer-personas.md`, `customer-buying-journeys.md` | Personas A–D and a nine-stage journey with evidence/hypothesis labels. |
| `yugya-brand-voice.md`, `conversion-strategy.md`, `final-copy-strategy.md` | Voice rules, ethical conversion plan, approved exact copy and claim register. |

**Reconciliation.** The Nepal-market and copywriting streams finished after `final-copy-strategy.md` was fixed. They supported the selected direction and caused **no change** to any chosen wording; this is recorded in `final-copy-strategy.md` §8. No decision was made on an unsourced marketing generality.

## 2. Sources read

External research used `webfetch` (the built-in search tool returned HTTP 402/429). DuckDuckGo HTML/Lite was used only for discovery; every cited site was opened directly. Full citations with exact titles, authors/organisations, URLs and the 2026-11-17 access date are in the individual stream files and `source-library.md`. The main sources behind the shipped copy:

- **Market:** DataReportal *Digital 2026: Nepal* (Simon Kemp, 8 Nov 2025); DataReportal *Digital 2025: Nepal*; NepalNews on NTA broadband figures (Binod Dhakal, 16 Jun 2026); People's Review on wallet/QR growth (17 Jun 2026); Kathmandu Post on the social-media directives (Sajana Baral, 4 Sep 2025), online-shopping fraud (Sarahna Khadka, 11 Feb 2024); Fiscal Nepal on online-business registration (18 Aug 2026); Business and Human Rights Centre on the 2026 e-commerce guidelines (11 Jan 2026); Axcel Law Associates on impersonation (14 Mar 2026); supplier guides on websites vs Facebook, website cost and social commerce.
- **Competitors (read directly):** Geneses Solution, Webtech Nepal, Genesis Web Tech (+ FAQ), Delta Creation, WebApp Nepal, WebX Nepal (+ pricing), Webmandu (+ pricing, portfolio), Aurora Studios, Infosoft, Webhost Nepal, Prabhuhost, Ehosting Server, AI Automation Nepal, AI Solution Nepal. Four further names could not be verified and were not used.
- **Copywriting/conversion:** Google Search Central (people-first content, SEO starter guide, AI features); Google Business Profile Help (local ranking factors); Nielsen Norman Group (how users read, jargon, mobile reading, plain language, trustworthiness, headings, interface copy); GOV.UK Service Manual (design, UI writing, question design, style guide); CXL, Baymard Institute and HubSpot as practitioner opinion.
- **Language/keywords:** Nepal's official `.np` registry, Nepali provider pages and guides in English and Devanagari, romanised-Nepali search results, and the repository's existing `docs/seo/` keyword and content research.

Internal evidence: `AGENTS.md`, `docs/live-projects.md`, `docs/visual-credibility.md`, `docs/seo/*`, `lib/demos/registry.ts`, and the pre-rewrite page/form/schema source. Live client URLs were rechecked.

## 3. Nepal-customer findings that shaped the copy

These are the findings with a visible consequence in the shipped text. They are research observations and professional recommendations, **not** direct customer quotes.

1. **Nepal is mobile-first but not universally online.** DataReportal reports 16.6m internet users (56.0%) and 13.0m people offline (44.0%) late in 2025, alongside 32.4m mobile connections. → Write for a phone first; describe a website as a durable place to check details, never as reaching everyone.
2. **Social is discovery; an owned site is the stable record.** Facebook has the largest reported ad reach, but the 2025 restriction drive showed platform access can change, and 2026 rules now cover online sellers. → Services copy explains a website as "its own place online" that works *with* social; no "replace Facebook" claim.
3. **Trust is a commercial problem.** Reported online-store fraud and fake-account cases, plus new registration rules, make identifiable sellers more important. → Lead with linked live sites, named founders, a written quote and published policies; add no borrowed trust signals.
4. **The decisive questions are commercial.** Supplier FAQs and competitor pages repeatedly surface cost, annual running costs, timelines, ownership, mobile behaviour, updates and after-launch support. → These answers were moved into the hero note, every service note, a new five-question services FAQ and an 11-question contact FAQ.
5. **The observed market shouts and inflates.** "Best", "No.1", large self-reported counts and keyword-stuffed H1s are the norm; ownership and aftercare are rarely explained. → Factual H1s and verified specifics are the differentiation; no superlatives or counts.
6. **Plain English terms are normal in Nepal; romanised Nepali skews informal/DIY.** No volume data exists. → Keep the public site English, explain each technical term once, and defer a Nepali mirror until there is evidence.
7. **Small and local is credible when it is checkable.** → About/studio copy says plainly that there are two founders and direct contact; no scale is implied.

## 4. Old wording removed and new messaging shipped

Files changed **in this copy cycle**: `app/page.tsx`, `app/services/page.tsx`, `app/work/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `components/EnquiryForm.tsx`, `components/SiteFooter.tsx`, `lib/site.ts`, `lib/schema.ts`.

> Note on the working tree: earlier, uncommitted UI work also present in the repository (`app/layout.tsx`, `components/DemoIndex.tsx`, `components/AnnouncementBar.tsx`, `components/demos/demos.css`, `components/yugs.css`, `components/announce.css`, `AGENTS.md`) was **not** part of this copy cycle and was left untouched. Nothing was committed.

| Surface | Removed (before) | Shipped (after) |
| --- | --- | --- |
| Home H1 | "Technology built for the work that matters." | "Websites for businesses in Nepal." |
| Home lead | "builds websites, software tools, and dependable digital systems for businesses and individuals…" | Names shops, restaurants, schools and organisations and the customer outcome on any phone or computer. |
| Home note | "We prioritize simplicity, clean implementation, and direct technical handover. Every project is scoped around concrete operational requirements." | "We agree the scope and price in writing before work starts. You own the domain, files and hosting account, and we fix bugs for 30 days after launch." |
| Home meta | "Core approach / Primary technologies / System handover / Inquiry response" | "How we start / Before we build / What you own / Response aim" — all customer-facing answers. |
| Capabilities | Stack-led descriptions (HTML5, UFW, Git hooks, Cloudflare…) | Outcome-led descriptions; technical detail retained only in the service articles. |
| Home process | "Discovery & scoping / Architecture & design / Phased build & audits / Verification & handover" | "Tell us what you need / Agree the plan / Build and check / Launch and hand over". |
| Services H1 | "Defined capabilities, itemized deliverables." | "Websites and software, clearly explained." |
| Service articles | "What it is & who needs it" + "The problem it solves"; deliverables only | "What it is & who it's for" + "Why it matters"; added "What you provide", "Running costs" and plainer "After delivery" to all five; service names changed to "Hosting, servers & deployment", "Domain & web address setup", "Automation & practical AI", "Ongoing maintenance". |
| Services navigation | "Web development / Server infrastructure / Domain & DNS / Automation" | "Websites & web apps / Hosting & servers / Domain & web address / Automation & AI" (ids unchanged). |
| Services FAQ | None | New five-question FAQ reusing existing `.faq` styles. |
| Boundaries | "Clear scopes: confirmed, custom, and out-of-scope." | "What we do, what we scope, and what we don't." |
| Work H1 | "Live client work and demonstrated builds." | "Work you can open and check." |
| Work framing | "practical requirements, visible features and engineering decisions…" | "Start with the live websites below… reference setups and experiments, clearly labelled and never presented as client results." |
| About H1 | "Practical engineering for real requirements." | "A small studio you can talk to directly." |
| About principles | "Standards that guide our technical delivery." | "How we work." / "Four commitments that shape every project." |
| Contact H1 | "Let's discuss your technical requirements." | "Tell us what you need. We'll take it from there." |
| Contact guide | Vendor categories and technical checklist | Four plain prompts: your business, what you want, what you already have, any date in mind. |
| Contact FAQ | 5 internally-worded questions | 11 customer questions, rendered from the same `CONTACT_FAQS` array used for JSON-LD. |
| Form labels | "Service interested in", "Organization / school", "Timeline target", "Project requirements & description" | "What do you need help with?", "Business / organisation name", "When do you need it?", "Tell us about your business and what you want"; added "Not sure yet — give me advice". |
| Form status | "Email draft opened. This form does not submit to a remote server…" | "Your email draft is ready. Nothing has been sent yet." (still implementation-honest). |
| Buttons | "Open in email client", "Copy formatted enquiry", "Explore services", "View project case studies", "Discuss a scope" | "Open email draft", "Copy enquiry text", "See what we build", "See live websites", "Ask about a project". |
| Footer/schema/metadata | Vendor-process language | Plain-language descriptions mirroring the visible copy; target keywords, canonicals and routes unchanged. |

Across every page the H1 is now a factual statement of what the visitor gets; no section, card, gradient, icon or visual token was added or changed.

## 5. Why the important choices were made

Full alternatives and scoring are in `final-copy-strategy.md` §3–6. In brief:

- **Home H1 — Option A.** "Websites for businesses in Nepal." is the only candidate where the H1 alone answers what/who/where. Option B ("A proper website…") matched plain-language searches but risked sounding patronising; its useful Facebook-contrast idea moved into the services "Why it matters" text. Option C's "dependable / built with care" are unquantified adjectives; its verified proof (written scope, ownership) moved into the hero note.
- **Services H1 — Option A.** "Websites and software, clearly explained." is the only option that promises the exact information a first-time buyer needs and explicitly lets them say "I'm not sure which one fits". "Need a website? Start here." undersold custom software; "built with care" was unquantified.
- **Proof stays central.** Kohinoor Restaurant and Samajik Abhiyaan remain the first two live entries because they are verified, linkable and relevant to the two largest audience cues (hospitality and organisations). No reordering for aesthetics.
- **Ownership and aftercare moved up.** They are the strongest verified differentiators against a market that omits them, so they appear in the home hero note and every service note, not just a buried FAQ.
- **Demos unchanged.** They already carry the strongest honesty signal on the site; only surrounding explanatory text was clarified.
- **English retained.** No keyword-volume or enquiry evidence supports a Nepali mirror; this is a maintenance/brand decision, not a claim that Nepali demand is small.

Every one of these wording choices remains an **[H] hypothesis** until validated with real users or traffic.

## 6. Unsupported claims removed or never introduced

**Removed from the old copy or avoided in the new:**

- Vague process abstractions presented as benefits: "operational requirements", "digital front door", "systems that remain operational", "technical execution", "itemized deliverables" as a headline promise.
- Unquantified quality adjectives as claims: "dependable systems", "clean implementation", "world-class"-class language.
- Any suggestion of fixed price, fixed timeline, guaranteed ranking, guaranteed uptime/speed or guaranteed outcome. None existed in the shipped copy; none was added.

**Never introduced** (explicitly rejected during research and drafting):

- Testimonials, customer quotes, client logos, review counts or ratings.
- Metrics: websites built, clients served, years in business, uptime, speed, conversion or traffic percentages.
- Awards, certifications, partnerships, "best"/"No.1"/"leading" claims, fake scarcity, countdowns, discounts or urgency.
- 24/7 support or call-centre claims (the copy states the opposite: direct email/messaging in business hours, 1–2 business day response aim).
- Any claim that a demo is a live business system or that its sample data is real.

**Attribution boundaries preserved:**

- Kohinoor Restaurant credits "NineSapphires by Ab & backend/ux by Sagar" — not described as sole authorship.
- Samajik Abhiyaan credits "Site by Sorvx" (owner-confirmed former brand) — presented as Yugya work without public discussion of the old brand.
- `DEMO_DISCLAIMER` and "Sample data · runs in your browser" remain verbatim; the interaction labels "Real in-browser logic", "Simulated workflow", "Sample data" are unchanged.

**Claims that do ship, all verified:** written scope and itemised quote before work; client-owned domain/files/hosting; 30 calendar days of bug fixing; milestone billing; 1–2 business day response aim; layouts checked on phones, tablets and computers; three named live client sites; no shared cPanel reselling; AI used only where it helps.

## 7. Business information still needed from the owner

Nothing below was invented to fill a gap. These need owner input before any further copy step:

1. **Price examples or ranges** — deliberately omitted. If the owner wants them published, each range needs a matching scope statement and an approval. Otherwise the current "itemised quote after scope review" answer stands.
2. **Typical timeline examples** — deliberately omitted; the answer points to the written quote. Provide a verified range only if the owner is willing to stand behind it.
3. **Terminology preference** — the service labels in §4 are customer-facing recommendations. Confirm if the owner prefers the older technical names in navigation or metadata.
4. **Attributed testimonials** — none added. If real clients consent in writing, short attributed quotes could be added; until then the site stays testimonial-free.
5. **Google Business Profile** — local-SEO research recommends a complete, accurate listing, but no listing data, login or location details were supplied. Not touched.
6. **Search Console / analytics access** — needed to validate the English-language decision, the H1/CTA hypotheses and the FAQ priorities with real traffic data.
7. **Payment methods** — wallet/QR research is relevant only if e-commerce is actually in scope. No commerce or payment claims were added.
8. **Nepali-language resource** — deferred pending enquiry or Search Console evidence; a single human-written Nepali resource is the only future candidate identified.

## 8. Testing completed

### 8.1 Build and static checks (all passed)

| Command | Result |
| --- | --- |
| `npm.cmd run typecheck` | Pass — `tsc --noEmit`, no errors. |
| `npm.cmd run lint` | Pass — ESLint flat config, no errors or warnings. |
| `npm.cmd audit --omit=dev` | **found 0 vulnerabilities**. |
| `npm.cmd run build` | Pass — 16 static routes generated. |
| `npm.cmd run seo:check` | Pass — 10 HTML pages, 10 unique titles, no errors, 0 warnings. |

Export checks: every internal `href`/`src` resolves; every fragment target exists; exported CSS contains the brand tokens and no conflict markers; no new runtime dependency was added.

### 8.2 Browser QA (all passed)

Run against `npm start` on `http://127.0.0.1:3100` with headless Chrome via the CDP scripts in `%TEMP%\opencode\verify-copy.cjs`, `verify-ui.cjs`, `verify-ui2.cjs`, `verify-404.cjs` and `verify-flow.cjs`.

- **Copy present:** the five new H1s, the new home hero note, updated meta descriptions and `id="main"` on every page.
- **Responsive:** no horizontal document overflow on home, services, work, about, contact or a demo page at **1440×900, 768×1024 and 390×844**. Minor off-viewport decorative nodes (an image, SVG internals, two `<code>` blocks) were detected but are contained by their parents and cause no scroll.
- **Form:** all six plain-language labels present; all six options plus the "not sure" option; `?service=` preselect verified for **web, vps, dns, automation and maintenance** — all five still select the correct unchanged value; char counter shows "5 / 25 characters minimum" and validates at 25; short-description submission shows the intended error message; four `mailto:hello@yugya.com` links present.
- **Demo labels:** on `/work/savor/` the verbatim disclaimer and "Sample data · runs in your browser" caption are present, with a launcher available.
- **Announcement:** visible initially, external link `https://yugs.yugya.com/` with `rel="noreferrer noopener"`; dismissal sets `data-announce="off"` and `localStorage["yugya-announce"]="off"`; still hidden after reload with no flash.
- **Dark theme:** applies (`data-theme="dark"`), readable inverse colours, no overflow; Yugs panel and announcement contrast measured at 7.01:1.
- **Prior UI regression:** cursor-following demo preview follows, flips at right and bottom edges, clears on scroll and hides on leave; reduced-motion swaps to the inline thumbnail; announcement persistence and services section order (demos before boundaries, index "08") unchanged; exported CSS contains all expected selectors with no conflict markers.
- **User flows:** desktop client-side navigation from Home to Services updates URL, H1 and `aria-current="page"`; mobile drawer opens, closes on link click and closes on Escape with focus returning to the toggle.
- **Console exceptions:** none from any script.

### 8.3 Scroll polish — CSS foundation

After the copy cycle, the owner asked for scrolling to feel smoother without a redesign. The CSS change is confined to `app/globals.css`:

- `html` keeps smooth scrolling and the existing anchor offsets, and now reserves a stable scrollbar gutter and contains vertical overscroll.
- Reveals travel 14px instead of 16px, fade in 520ms and settle over 720ms with the existing brand easing.
- Compact sibling groups use a capped 60/120/180ms `--delay` cascade, so rows and cards enter as one gesture rather than several disconnected animations.
- No markup, observer settings, design tokens, dependencies or copy changed. Reduced motion still disables smooth scrolling and shows every reveal immediately.

Headless Chrome verified the computed values at 1440×900, 768×1024 and 390×844: no horizontal overflow; hero and scrolled reveals become fully visible; second/fifth capability rows carry 60ms/180ms delays; reduced motion reports `scroll-behavior: auto` and `transition-property: none`; mobile drawer and client-side navigation still work; no runtime exceptions or console errors. The five required build checks were re-run and passed.

### 8.4 Inertial whole-page scrolling

The CSS pass did not satisfy the owner's request for motion that follows the law of inertia: CSS `scroll-behavior: smooth` only affects anchor/programmatic jumps, not wheel input. A new `components/SmoothScroll.tsx` client component now handles **wheel and trackpad** scrolling with a target position and a critically damped, time-corrected follow (`0.115` of the remaining distance per 60fps frame). The page keeps gliding after the gesture and settles at the intended position. An initial spring/damper version was rejected in review because it overshot and jiggled; the current follow is monotonic and never travels past the target.

Native scrolling is intentionally preserved for touch (already inertial), reduced motion, keyboard, in-page anchors, horizontal wheel gestures, form controls, scrollable descendants, `data-native-scroll`, the intro scroll lock and the open mobile drawer. The component writes with `behavior: "instant"` per frame so existing CSS anchor smoothing and Next route behaviour remain unchanged, and it resyncs whenever a native/programmatic scroll differs from its own position. No runtime dependency, visual element or design token was added. `AGENTS.md` records the component in the rendering model and component-behaviour sections.

Headless Chrome verification: a 240px wheel gesture produced **37 distinct scroll positions**, **35 intermediate positions**, `monotonic: true`, `overshootPx: 0` and a stable final value of 240; a programmatic jump to 400 followed by a 120px wheel settled at 520 (no stale-target snap-back); a wheel over a scrollable child moved the child by 180px while the page stayed at 0; `#automation` anchor navigation remained smooth and settled; reduced motion removed `data-inertia-scroll` and produced a two-position native jump; responsive overflow, drawer, client navigation, console and exception checks all passed. The five required build checks were re-run after the controller was added and passed.

**One non-blocking observation:** the preview server logs 404s for Next 16 RSC prefetch URLs such as `/services/__next.services.__PAGE__.txt?_rsc=…`. The corresponding files exist in `out/` under a nested path (`out/services/__next.services/__PAGE__.txt`), so this is a pre-existing static-server path-mapping quirk, not a broken page or asset. All pages, links and navigation work; navigation falls back to the static HTML. It predates the copy rewrite and was left unchanged.

## 9. Real-customer validation recommendations

The personas, journeys, H1s, CTAs and FAQ wording are research syntheses and untested hypotheses. Before treating them as proven:

1. **Interview 5–8 real owners across personas A–D** (shop, restaurant/hotel, school or NGO, startup/professional service). Ask what they currently use online, what they would pay for, which homepage line they would act on, and what would stop them enquiring. Record their words; do not lead with Yugya's terminology. Report findings with consent and without publishing identifiable quotes unless permission is explicit.
2. **Test the three homepage H1 alternatives** from `final-copy-strategy.md` §3 in a first-impression exercise: show one line for five seconds, then ask what the business does and who it is for. Measure comprehension, not preference.
3. **Watch a first-time buyer complete the contact flow** without help. Note hesitation at the service dropdown, the description box and the "nothing has been sent yet" status.
4. **Set up privacy-friendly measurement** after release: hero scroll/click distribution, live-project link clicks, form submit vs copy-button clicks, FAQ `<details>` opens, and the wording of incoming enquiries.
5. **Revisit the language decision** with Search Console and enquiry-language data. Do not build a Nepali or romanised landing page on intuition.
6. **Re-run this QA** after any copy change: typecheck, lint, audit, build, seo:check, plus the browser scripts for responsive overflow, form preselect/validation, demo labels, announcement persistence and dark theme.

**No commit was made.** All repository changes from this cycle and the earlier UI cycle remain in the working tree for the owner's review.
