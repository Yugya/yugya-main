# Conversion strategy — Yugya Technologies

Date: 2026-11-17

This document turns the research into an ethical conversion plan. It deliberately contains no predicted conversion-rate uplift: there is no baseline analytics data in the repository, and inventing one would violate the evidence rules.

Labels: **[E]** evidence-backed · **[P]** professional recommendation · **[H]** hypothesis.

---

## 1. Conversion goal

Primary goal: a non-technical business owner can understand Yugya's main service in one screen, find a matching real example, understand money/ownership/support, and send an enquiry without needing technical vocabulary.

Secondary goal: a technically confident founder can find enough depth (demos, build notes, deliverables) to take Yugya seriously.

No goal involves manufactured urgency or pressure.

## 2. The six uncertainty reducers

The competitor research found that the observed Nepalese market rarely answers what happens after payment: ownership, recurring cost, maintenance, exit. These are therefore Yugya's highest-value conversion levers.

| Uncertainty | Evidence it is real | On-site answer | Placement |
| --- | --- | --- | --- |
| Cost and hidden fees | Objection documented in market research; competitor pricing is vague or ranges without boundaries | "We do not publish fixed packages… After a short requirements review we provide an itemized scope and a written quote." Plus: domain/hosting paid directly by the client. | Contact FAQ, services notes, home hero meta |
| Ownership | Competitor gap; verified Yugya policy | "Your domain, files and hosting account stay in your name. Full access handed over." | Home hero meta, services notes, about principles, FAQ |
| After-launch support | Competitor gap; verified 30-day policy | "30 calendar days of bug fixing" + optional monthly maintenance + direct email, no 24/7 centre | Home process, services notes, FAQ |
| Ability to update | First-buyer objection **[H/P]** | Written update guide; minor text updates in maintenance; no unearned CMS claim | Services notes, FAQ |
| Mobile behaviour | Verified deliverable | "Checked on phones, tablets and computers" | Services deliverables, FAQ |
| Trust in an unfamiliar vendor | Competitor market uses unverifiable counts and superlatives | Real live project links, genuine screenshots, named founders with portraits, response aim, honest demo labels | Home, `/work/`, `/about/`, demos |

## 3. Trust architecture

Ordered by strength for this site:

1. **Verifiable live sites.** Kohinoor Restaurant, Samajik Abhiyaan, Aama Pathshala — linked, with real screenshots. Never describe one as a customer result. **[E]**
2. **Named people.** Two founders with portraits and public portfolios; direct email addresses. **[E]**
3. **Written policies.** Itemised quote, milestone billing, client-owned accounts, handover, 30-day bug fixing, response aim. **[E]**
4. **Honest limits.** Boundaries table, "not a live status report", demo labels. **[E]**
5. **Plain language itself.** Compared with the observed superlative-heavy field, a factual sentence reads as more credible. **[P/H]**

Explicitly excluded: testimonials, client logos, review counts, metrics, awards, certifications, partner badges, years-of-experience claims.

## 4. Page-level conversion roles

| Page | Job | Primary CTA | Supporting proof |
| --- | --- | --- | --- |
| Home | Explain the main service in seconds and route by intent | "Explore services" / "Send an enquiry" | Live work rows, founders, response aim |
| Services | Answer "what do I get, what do I provide, what does it cost to run?" | "Start a project enquiry" | Deliverables, service notes, boundaries table, FAQ |
| Work | Let visitors verify capability themselves | "Visit live website" / "Discuss a build" | Live sites, screenshots, labelled prototypes/demos |
| About | Make the small team feel reachable and accountable | "Send an enquiry" | Founders, location, communication policy |
| Contact | Remove the fear of starting | "Open email draft" / "Copy enquiry text" | Plain checklist, form-note, FAQ |
| Demo intros | Show how the software behaves without implying client outcomes | "Discuss a build" | Verbatim disclaimer, real/simulated/sample labels |

## 5. CTA strategy

Rules:
- Name the action and the object: "Send an enquiry", "Visit live website", "Review service scope", "Open email draft". No "Learn more".
- One primary action per section. Secondary actions use existing `.btn-secondary`/`.text-link` styles; no new button components.
- Prefer plain-language verbs over technical ones: "Tell us what you need" instead of "Discuss your technical requirements".
- Never use urgency words ("now", "today only", "limited").
- Keep `mailto:` for direct email and `next/link` for internal routes, per `AGENTS.md`.

Proposed CTA set (final selection in `final-copy-strategy.md`):

| Location | Old | Proposed |
| --- | --- | --- |
| Home hero primary | "Explore services" | "See what we build" (or keep "Explore services" if the label tests better) **[H]** |
| Home hero secondary | "View project case studies" | "See live websites" |
| Home CTA | "Have a project or technical requirement in mind?" | "Tell us what you need. We'll explain what's possible." |
| Services CTA | "Need help defining your project scope?" | "Not sure which service fits? Just describe what you want." |
| Work CTA | "Have a project requirement to discuss?" | "Want something similar for your business?" |
| About CTA | "Looking for practical technical execution?" | "Want to know who you'd be working with?" |
| Contact H1 | "Let's discuss your technical requirements." | "Tell us what you need. We'll take it from there." |
| Form submit | "Open in email client" | "Open email draft" |

**[H]** All CTA wording choices are untested. The safest approach is to keep the action literal and measure.

## 6. Form friction plan

The form is a mailto composer, not a backend. Conversion depends on making that feel easy and honest.

1. Replace vendor-category labels with customer-language labels ("What do you need help with?" instead of "Service interested in").
2. Keep all *values* unchanged so `/contact/?service=web|vps|dns|automation|maintenance` preselect continues to work. Change only visible labels. **[E: AGENTS.md]**
3. Add a "Not sure yet — give me advice" option so no one is forced to classify themselves.
4. Replace "Organization / school" with "Business / organisation name (optional)".
5. Replace "Timeline target" with "When do you need it? (optional)" and include "No fixed date / exploring".
6. Change the description label/placeholder to an everyday example (restaurant example from persona B).
7. Fix the character-counter inconsistency: validation rejects fewer than 25 characters, but the counter recommends 30. Align both to 25. **[E: code audit]**
8. Rewrite the status message so the reassurance comes first: "Your email draft is ready. Nothing has been sent yet…". Keep the direct-link and clipboard fallbacks.
9. Preserve uncontrolled fields, `reportValidity()`, the 25-character check, clipboard fallback, and the DOM-only `?service=` effect. **[E: AGENTS.md lint constraints]**

## 7. SEO and generative-search compatibility

**[E]** Existing `docs/seo/` keyword map targets are sound and the language research found no reason to change the primary English terms. Keep them.

Implementation rules for the rewrite:
- Keep `/` owning "web development company in Nepal"; update the meta description to say who Yugya helps in plain English.
- Keep `/services/` owning the service cluster; retain service names in headings and structured data.
- Keep `/work/` owning live-project proof; keep project names in the description.
- Use one H1 per page with natural keywords, not stuffed phrases.
- Mirror visible changes in `pageMetadata()` descriptions, OG descriptions and `SERVICE_NODES`/organization descriptions.
- Keep every internal link, fragment id and trailing slash unchanged.
- Keep FAQPage JSON-LD identical to the visible FAQ text.
- Write self-contained factual answers in FAQs ("We do not publish fixed packages because…") so they can be understood without page context.
- Do not promise rankings, rich results or AI citations.

## 8. Measurement plan (to set up after release)

No analytics data exists in the repository, so the following are proposals, not current metrics. **[P]**

| Question | Signal | Method |
| --- | --- | --- |
| Do visitors understand the service? | Scroll depth on home hero; clicks to services vs work | Privacy-friendly analytics or server log analysis of the static host |
| Which proof matters? | Clicks on each live project row and live-site link | Link tracking via host analytics or tagged URLs |
| Does the form intimidate people? | Form opens vs submit-button clicks vs copy-button clicks | Event tracking on the client component (no personal data) |
| Which objections matter most? | FAQ summary opens | Event tracking on `<details>` toggles |
| What language do real buyers use? | Enquiry wording in received emails | Manual coding of enquiry text with consent and care |

## 9. Testing backlog (hypotheses only)

Each item is untested and must be validated with real traffic or real customers before being treated as a finding.

1. H1: "Websites for businesses in Nepal." vs "A proper website for your business — built here in Nepal." vs "A dependable website, built with care in Nepal."
2. Hero lead: outcome-first vs Facebook-contrast framing. The contrast framing risks sounding patronising; watch for that.
3. Home CTA: "Send an enquiry" vs "Tell us what you need".
4. Services FAQ on the services page vs FAQ only on contact. **[P]** Add to services because the decision happens there; measure whether it reduces contact-form hesitation.
5. Form first field: name first vs "what do you need" first. Keep the current order until tested — changing field order may affect completion.
6. Nepali or romanised-Nepali landing page. **[H]** Do not build until Search Console or enquiry data shows demand; language research recommends against forcing it now.

## 10. What we will not do

Fake scarcity, countdowns, "limited slots", invented discounts, testimonials, client logos, review stars, uptime/speed percentages, self-scored comparison tables, "best/No.1" claims, or a pricing number without a matching scope statement. This is both an ethical position and a deliberate contrast with the observed competitor field. **[E/P]**
