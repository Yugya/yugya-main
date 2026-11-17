# Marketing research overview — Yugya Technologies

**Date:** 2026-11-17
**Purpose:** a single entry point for the 2026 communication research and copy transformation. It records the method, the evidence standard, the four research streams, the cross-cutting findings, and exactly how those findings shaped the copy decisions.

**Read this first, then:**
- `website-copy-audit.md` — what the site said before the rewrite.
- `nepal-market-analysis.md`, `competitor-analysis.md`, `language-and-keyword-research.md`, `copywriting-principles.md`, `source-library.md` — the raw research.
- `customer-personas.md`, `customer-buying-journeys.md`, `yugya-brand-voice.md`, `conversion-strategy.md` — the strategy synthesis.
- `final-copy-strategy.md` — the approved, exact copy.
- `implementation-report.md` — what was actually shipped and how it was verified.

---

## 1. What this research was for

The brief: after a period of interface work, make Yugya's website communication plain-language, trustworthy and commercially effective for Nepalese buyers, without changing the owner-approved design, the static export, the demo labelling, or the zero-vulnerability dependency posture.

The contract from `AGENTS.md` governed every decision:

- Faithful port of an approved site — no redesign, no restyle.
- No invented metrics, clients, testimonials, logos, awards, certifications, years of experience, prices or outcomes.
- `app/globals.css` is the design system; only the three font-stack lines differ from the original.
- Server components by default; the fixed set of client components stays fixed.
- Demos keep `DEMO_DISCLAIMER` and "Sample data · runs in your browser" verbatim.

Research was completed **before** any public copy was changed. This overview, the research files and the strategy files were written first; implementation followed from `final-copy-strategy.md`.

## 2. Method

- **Four parallel streams** were run: Nepal market, Nepal competitors, copywriting/conversion principles plus a source library, and Nepal language/keywords. Each was assigned a distinct evidence boundary and a single owner, then reconciled here.
- **The built-in `websearch` tool failed** during research (HTTP 402/429). Streams used `webfetch` against DuckDuckGo HTML/Lite for discovery, then opened every cited page directly. No competitor or market detail in these documents rests on a search snippet alone. Where a page was JavaScript-rendered and the text could not be read, this is stated explicitly and no inference was added.
- **Internal evidence was read from the repository:** `AGENTS.md`, `docs/live-projects.md`, `docs/seo/*`, the demo registry, and the current page/form/schema source. Live client URLs (`kohinoorrestaurant.com.np`, `samajikabhiyaan.com`) were rechecked.
- **Authoritative copywriting sources** (Google Search Central, Nielsen Norman Group, GOV.UK Service Manual) were fetched directly; CXL, Baymard and HubSpot were used as practitioner opinion, not as universal law.
- **Every external source** carries an exact title, author/organisation where available, URL and access date (2026-11-17) in `source-library.md` and in each stream's numbered source list.

## 3. Evidence standard

Every finding in the research is labelled in one of three ways so that evidence, recommendation and opinion never blur:

| Label | Meaning |
| --- | --- |
| **Evidence-backed finding** | Supported by an official source, documented user research, or a source's stated method. May still need local validation before becoming Yugya copy. |
| **Professional recommendation** | Credible practitioner or institutional guidance that is sensible to apply, but not a universal law. |
| **Third-party opinion** | A vendor, case study, benchmark or industry claim that informs thinking but is never repeated as a Yugya fact. |
| **[H] Hypothesis** | An analyst assumption or untested copy choice. Explicitly labelled and queued for validation with real customers. |

The personas, journeys and CTA choices are **working models, not reported research participants**. No document contains an invented interview, quote, survey result, traffic number, conversion rate, or customer count. Where a number appears (for example, DataReportal's connectivity figures), it is attributed to its source and described as a secondary compilation, never as a Yugya forecast.

## 4. The four streams

| Stream | Output | What it established |
| --- | --- | --- |
| Nepal market | `nepal-market-analysis.md` | Mobile-first but not universally connected; social is the discovery layer, not a stable substitute for an owned site; trust and impersonation are commercial problems; wallet/QR growth makes payment clarity relevant; buyer questions are commercial (cost, ownership, support), not technical. Six segments analysed. |
| Nepal competitors | `competitor-analysis.md` | 14 reachable competitors profiled from their live sites (8 web/design studios, 3 hosting providers, 3 AI/IT firms), plus 4 sites that could not be verified. Market defaults: keyword-stuffed H1s, "best"/"No.1" superlatives, self-reported count stacks, vague or hidden pricing, WhatsApp-first CTAs, and almost no answer to ownership or aftercare. |
| Copywriting / conversion | `copywriting-principles.md`, `source-library.md` | Customer-first copy, plain language, one clear headline idea, uncertainty reduction near the decision point, verifiable trust assets, action-specific CTAs, service-page structure, mobile scanning, and ethical persuasion. Dark patterns and fabricated proof rejected. |
| Language / keywords | `language-and-keyword-research.md` | English technology words are in normal Nepali use; Devanagari and romanised-Nepali phrases are verifiable but skew informal/DIY; no volume data exists. Existing English SEO targets in `docs/seo/` remain correct. Keep the public site English; do not force a romanised layer. |

## 5. Cross-cutting findings

1. **The market is loud; credibility is the opening.** Competitors lead with superlatives and unverifiable counts. A factual sentence that names the service, audience and location is differentiating on its own. This drove the home H1 `Websites for businesses in Nepal.` and the services H1 `Websites and software, clearly explained.`

2. **The decisive questions are commercial.** Across the market research and competitor FAQs, the recurring pre-purchase questions are cost, annual running costs, timeline, ownership, mobile behaviour, updates and after-launch support. These were moved up the journey into the hero note, service notes, a new services FAQ and an expanded contact FAQ.

3. **Verifiable proof beats claimed proof.** Yugya already owns the strongest assets available to a small studio: three live, linked client sites with genuine screenshots, two named founders with portraits, and demos that label their own data. No testimonial, logo or metric was added; the real work was made easier to find and relevant to each buyer type.

4. **Small and local is an asset, not a gap.** The observed market inflates numbers. Yugya's verified scale — two founders, direct contact, three live sites — reads as more credible precisely because it can be checked. The about and studio copy says this plainly.

5. **Plain language is a conversion device, not a simplification.** Non-technical buyers must not need the right vocabulary to enquire, while technical founders still need depth. The solution is outcome-first copy with technical detail kept as supporting evidence (demos, build notes, deliverables), not removed.

6. **Ethical persuasion is the position, not a constraint.** No fake urgency, discounts, scarcity, testimonials or guarantees. The honest substitutes — written quote, milestone billing, client-owned accounts, full handover, 30-day bug fixing, 1–2 business day response aim — are stronger and are verified policies.

7. **English stays; Nepali is deferred, not dismissed.** No keyword-volume or enquiry evidence supports a Nepali mirror now. The decision is a maintenance and brand decision, not a claim that Nepali demand is small. It would be revisited with Search Console or enquiry data.

## 6. Traceability: finding → decision

| Finding (source) | Decision | Where implemented |
| --- | --- | --- |
| Superlative-heavy, keyword-stuffed competitor H1s (`competitor-analysis.md` §4) | One clear, factual H1 per page; no "best"/"leading" language | Home, services, work, about, contact H1s |
| Buyer questions are cost/ownership/support (`nepal-market-analysis.md` §4; `competitor-analysis.md` §5) | Hero note + service "What you provide / Running costs / After delivery" blocks + 16 FAQs | `app/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx` |
| Social is discovery, not a stable owned asset (`nepal-market-analysis.md` §2.2–2.3) | Explain a website as the business's own stable address; no "replace social" claim | Services "Why it matters"; home lead |
| Trust requires identifiable, checkable proof (`nepal-market-analysis.md` §2.3; copywriting §7) | Lead with live sites and named founders; keep testimonials out | Home/work live-work sections; about; footer |
| Non-technical buyers need plain terms (language research §8; NN/g plain-language sources) | Explain each technical term once, then use the shorter word; "rough idea is enough" | All page copy; form labels and status messages |
| Non-technical buyers must not be forced to classify themselves (journeys §2) | "Not sure yet — give me advice" service option; plain description prompt | `components/EnquiryForm.tsx` |
| Mobile-first reading (market §2.1; NN/g mobile source) | Short paragraphs, front-loaded answers, existing responsive components unchanged | All rewritten copy |
| Existing English SEO targets are sound (language research §6; `docs/seo/`) | Keep keywords, canonicals, anchor ids and routes; mirror visible changes in metadata and JSON-LD | All page metadata; `lib/schema.ts`, `lib/site.ts` |
| Demo credibility rules (`AGENTS.md`; copywriting §14) | Leave `DEMO_DISCLAIMER` and sample-data captions verbatim; only clarify surrounding text | Demo intro copy untouched |

## 7. Limitations

- **No primary customer research.** Personas and journeys are syntheses, not interviews. They are labelled as such and queued for validation with 5–8 real owners across personas A–D.
- **No analytics baseline.** There is no traffic, scroll, form or conversion data in the repository. No uplift figure is claimed; measurement is a post-release proposal in `conversion-strategy.md` §8.
- **Search engine proxy.** DuckDuckGo was used because the search tool failed. Observed phrases prove language use, not demand size; Google behaviour was not measured directly.
- **Vendor-published objections.** Cost/support objections in the Nepal research come from supplier content, not direct customer quotes.
- **Untested copy choices.** Every H1, CTA and FAQ wording is an **[H]** hypothesis until real users or traffic validate it.

## 8. What would change the conclusions

- Search Console or enquiry data showing material Nepali/romanised-Nepali demand → revisit the English-only decision with a single human-written Nepali resource first.
- 5–8 customer interviews revealing a different primary objection → reprioritise the FAQ and hero note.
- Privacy-friendly analytics showing a specific drop-off → test one CTA or form change at a time.
- Verified, attributed client consent → consider a small number of real testimonials. Until then, none.

## 9. Document index

| File | Role |
| --- | --- |
| `research-overview.md` | This document — method, evidence, findings, traceability. |
| `website-copy-audit.md` | Before-state audit of every rewritten surface. |
| `nepal-market-analysis.md` | Market conditions, buyer questions, six segments, sources [1]–[17]. |
| `competitor-analysis.md` | 14 competitor profiles, market patterns, gaps, sources [1]–[24]. |
| `copywriting-principles.md` | Evidence-based principles and decision checklist. |
| `source-library.md` | Numbered external sources [S1]–[S23] with full citations. |
| `language-and-keyword-research.md` | English/Devanagari/Romanised terms, 24 sources, stay-English recommendation. |
| `customer-personas.md` | Personas A–D with evidence/hypothesis labels. |
| `customer-buying-journeys.md` | Nine-stage shared journey plus persona paths and content matrix. |
| `yugya-brand-voice.md` | Voice attributes, vocabulary rules, phrases to retire. |
| `conversion-strategy.md` | Uncertainty reducers, trust architecture, CTA plan, measurement, tests. |
| `final-copy-strategy.md` | Approved exact copy, alternatives and claim register. |
| `implementation-report.md` | What shipped, QA results, and validation recommendations. |
