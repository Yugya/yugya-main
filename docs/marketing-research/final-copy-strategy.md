# Final copy strategy — Yugya Technologies

Date: 2026-11-17
Status: approved direction for implementation. Every untested choice is labelled **[H]**.

This document is the bridge between the research and the implementation. It fixes the message, the exact wording for the highest-value sections, and the claim boundaries. `implementation-report.md` records what was actually shipped.

Sources behind the decisions: `website-copy-audit.md`, `competitor-analysis.md` (14 reachable Nepalese competitors read directly), `language-and-keyword-research.md` (English/Devanagari/Romanised terminology; no invented volumes), `customer-personas.md`, `customer-buying-journeys.md`, `conversion-strategy.md`, `yugya-brand-voice.md`, plus verified business policies in `AGENTS.md` and `docs/live-projects.md`.

---

## 1. Strategic position

> Yugya is a small, independent web and software studio in Nepal that explains the work plainly, agrees scope and cost in writing, hands over everything it builds, and shows real local sites instead of invented proof.

This is a **positioning statement**, not public copy. It is derived from:
- the competitor gap: superlatives, unverifiable counts, no ownership/aftercare answers (`competitor-analysis.md` §4–5);
- verified Yugya policies: itemised quote, milestone billing, client-owned hosting, full handover, 30-day bug fixing, 1–2 business day response aim;
- verified assets: three live client sites with real screenshots, two named founders, honestly labelled demos.

## 2. The one-sentence test

A local shop owner should be able to read the home hero and know: **Yugya builds websites for businesses in Nepal**, and the next step is to send a plain message.

A startup founder should be able to scroll once and see: **real web apps, servers and demos with honest labels**.

---

## 3. Homepage H1 and lead — three alternatives

Evaluation scale: Clarity (non-technical), Nepal relevance, Specificity, Trustworthiness, Differentiation, Conversion **[H]**, SEO relevance, Natural language. All ratings are analyst judgement, not measured results.

### Option A — Clear and straightforward
> **Websites for businesses in Nepal.**
>
> Yugya designs and builds websites for shops, restaurants, schools and organisations. Your customers can see what you offer, find your details and get in touch — on any phone or computer.

| Clarity | Nepal | Specificity | Trust | Diff. | Conversion | SEO | Natural |
| --- | --- | --- | --- | --- | --- | --- | --- |
| High | High | High | High | Medium-high | High | High | High |

**Strengths:** six-word H1 names service, audience and market; the lead names customer types and the business outcome; no jargon. Search-relevant without stuffing.
**Weaknesses:** less emotive; says nothing about the founders in the hero.

### Option B — Modern and conversational
> **A proper website for your business — built here in Nepal.**
>
> Still sending customers to a Facebook page? We build websites that give your business its own place online: your services, your photos, your contact details, easy to use on any phone.

| Clarity | Nepal | Specificity | Trust | Diff. | Conversion | SEO | Natural |
| --- | --- | --- | --- | --- | --- | --- | --- |
| High | High | Medium-high | Medium | High | Medium-high | Medium | High |

**Strengths:** "proper website" matches the plain-language formulations found in the language research; the Facebook contrast answers "why not just social?".
**Weaknesses:** a question may sound accusatory to some owners; "proper" is a judgement word; weaker keyword match. **[H]** Risk of patronising the reader — explicitly against the brief.

### Option C — Premium and commercially confident
> **A dependable website, built with care in Nepal.**
>
> Yugya builds clear, fast websites for businesses and organisations that need to be taken seriously online. Every project starts with a written scope and ends with everything in your hands.

| Clarity | Nepal | Specificity | Trust | Diff. | Conversion | SEO | Natural |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Medium-high | High | Medium | High | Medium | Medium | Medium-high | Medium-high |

**Strengths:** calm, quality-led; "written scope" and "everything in your hands" are verified differentiators.
**Weaknesses:** "dependable" and "care" are unquantified adjectives; "taken seriously online" is flattering-but-vague.

### Selection: Option A, with Option C's ownership proof moved into the hero note.
Reason: the brief's strongest requirement is instant comprehension by a non-technical buyer. Option A is the only version where the H1 alone answers what/who/where. Option B's contrast is useful but belongs in the services explanation, not the H1, because it can read as patronising. Option C's adjectives are weaker than verifiable facts. The proof line goes into the hero note:
> "We agree the scope and price in writing before work starts. You own the domain, files and hosting account, and we fix bugs for 30 days after launch."

**Hypothesis [H]:** Option A will reduce time-to-understanding versus the old slogan. Validate with five first-time buyers before treating it as proven.

---

## 4. Services H1 and lead — three alternatives

### Option A — Clear and straightforward
> **Websites and software, clearly explained.**
>
> Below you'll see what each service is, who it helps, what you receive and what it costs to keep running. If you're not sure which one fits, describe what you want and we'll work it out together.

### Option B — Modern and conversational
> **Need a website? Start here.**
>
> No jargon, no mystery packages. We'll tell you what we'll build, what you'll own and what happens after launch — before you decide anything.

### Option C — Premium and commercially confident
> **From first website to custom software — built with care.**
>
> Every engagement has a written scope, a named contact and a documented handover. Choose a service to see the detail.

**Selection: Option A.** It is the only version that promises the specific information a first-time buyer needs (what it is / who / what you get / running cost), and "If you're not sure which one fits" removes the fear of choosing the wrong category. Option B is friendly but narrows the page to websites only, which undersells custom software to persona C. Option C repeats unquantified "care". **[H]** Untested.

---

## 5. Other important headings — final selection

| Page | Old | New | Reason |
| --- | --- | --- | --- |
| Work H1 | "Live client work and demonstrated builds." | "Work you can open and check." | Invites verification, the strongest trust action available. |
| About H1 | "Practical engineering for real requirements." | "A small studio you can talk to directly." | Answers "who are these people?" in buyer language; no invented scale. |
| Contact H1 | "Let's discuss your technical requirements." | "Tell us what you need. We'll take it from there." | Removes the word that excludes non-technical visitors. |
| Home live work | "Websites in production." | "Websites you can open today." | Concrete, verifiable. |
| Work live work | "Websites in production." | "Websites you can open today." | Consistent. |
| Home process | "A straightforward, four-stage delivery process." | "How working with us goes." | Customer viewpoint. |
| Services boundaries | "Clear scopes: confirmed, custom, and out-of-scope." | "What we do, what we scope, and what we don't." | Plain and memorable. |
| Contact FAQ | "Common questions regarding engagements." | "Questions people ask before starting." | Natural language. |

**[H]** All heading choices are untested with real users.

---

## 6. Exact copy specification

The following is the copy to implement. It fits the existing components; no new visual language is introduced. Section ids, anchor ids, routes and trailing slashes remain unchanged.

### 6.1 Homepage

- Kicker: `Independent web development studio — Nepal`
- H1: `Websites for businesses in Nepal.`
- Lead: `Yugya designs and builds websites for shops, restaurants, schools and organisations. Your customers can see what you offer, find your details and get in touch — on any phone or computer.`
- Hero note: `We agree the scope and price in writing before work starts. You own the domain, files and hosting account, and we fix bugs for 30 days after launch.`
- Hero buttons: `See what we build` → `/services/`; `See live websites` → `/work/`.
- Hero meta:
  - `How we start` / `A short message — no technical brief needed`
  - `Before we build` / `Written scope and itemised quote`
  - `What you own` / `Your domain, files and hosting account`
  - `Response aim` / `Aim to reply in 1–2 business days`
- Capabilities intro: `From a first business website to a web app or a server that needs looking after. Choose a service to see what you get and what happens next.`
- Capability rows (headings/details):
  1. `Website & web app development` / `A site customers can visit to see what you offer, read about you and get in touch. We also build web apps when you need accounts, bookings or a logged-in area.`
  2. `Hosting, servers & deployment` / `We set up and look after the place your website lives. Hosting accounts stay in your name, and you get the access and documents at handover.`
  3. `Domain & web address guidance` / `Help choosing your web address (like .com.np or .com) and pointing it to the right place, including the paperwork for Nepal's .np domains.`
  4. `Business automation & AI` / `Small tools that take over repeated jobs, like copying data between sheets or forms. We use AI where it genuinely helps, not as a label.`
  5. `Ongoing maintenance` / `Regular checks, updates and small fixes from someone you can email directly, after the launch is over.`
- Live work: H2 `Websites you can open today.`; intro `These are real sites, live on their own domains. Start with Kohinoor Restaurant if you run a restaurant, or Aama Pathshala if you run a school. Every project is shown at the same scale.`
- Demos intro: `Try five tools in your browser before you contact us: a restaurant site, a school tool, a shop stock ledger, a team board and a server console. Each uses fictional sample data and labels what is real, simulated or sample.`
- Manifesto quote: `A clear scope. Work you can see. Everything in your hands.`
- Manifesto note: `Yugya is a small studio in Nepal. We build websites and tools for local businesses and organisations, and we state what we build, what you own and what happens next.`
- Principles:
  1. `Agree first, build second` / `We agree what you need, what you will provide and what it costs before any work starts.`
  2. `Tools that stay simple to maintain` / `We choose well-supported tools so later changes stay straightforward.`
  3. `You own what we build` / `Files, domain settings and server access go to you at handover, with written notes.`
  4. `Honest descriptions` / `No invented numbers, logos or results. We show the work itself.`
- Process intro: `Four steps, with a written quote before any work starts and full access at the end.`
- Process steps:
  1. `Tell us what you need` / `Send a short message. A rough idea is enough — we'll ask questions and check what you already have.`
  2. `Agree the plan` / `We agree the pages or features, the content you will provide and the cost in writing before we start.`
  3. `Build and check` / `We build in stages and check the site on phones, tablets and computers as we go.`
  4. `Launch and hand over` / `We publish the site, hand over all files and access, and fix bugs for 30 days after launch.`
- Studio H2: `A small studio in Nepal. Direct access to the people building it.`
- Studio paragraphs: `Yugya is an independent technology studio based in Kapilvastu / Rupandehi. We build websites and tools for local businesses and organisations.` / `There are two founders. You speak directly with the people doing the work, from the first message to handover.`
- Founders H2: `The two people you'll work with.`; intro: `Yugya was founded by {FOUNDER_NAMES}. You can email either co-founder directly about a project.`
- CTA H2: `Tell us what you need. We'll explain what's possible.`; body: `A first website, a redesign, hosting help, or a tool for repeated work — a rough description is enough. We'll reply with questions and a written quote.`

### 6.2 Services

- Metadata title/description updated to plain-language version retaining "website development ... Nepal".
- Hero kicker: `Services for businesses in Nepal`
- H1/lead: Option A above. Page note: `Each section also lists what you provide, what you keep paying for and what happens after delivery.`
- In-page index and rail labels (ids unchanged): `Websites & web apps`, `Hosting & servers`, `Domain & web address`, `Automation & AI`, `Ongoing maintenance`, `Interactive demonstrations`.
- Service 01 (`#web-development`):
  - "What it is & who it's for": `A website gives your business its own place online. Customers can see what you offer, read about you and find your contact details, on a phone or a computer. We build these for shops, restaurants, schools and organisations. If you need more than information pages — accounts, bookings or an internal tool — we build web applications too.`
  - "Why it matters": `Social media is useful for reaching followers, but it is not a place you own and it is not where everyone looks. A website gives you a stable address for the details customers ask for most: what you offer, photos, location and how to contact you.`
  - Deliverables: keep the verified technical list; lead with `A finished website checked on phones, tablets and computers`; end with `Code and asset files handed over to you`.
  - Note: `After delivery: We help publish the site and give you a short written guide for updating text and images. You own the domain, hosting account and all files. Bugs are fixed for 30 calendar days after launch. What you provide: Text, photos and a logo if you have them, plus one person to review the work. Running costs: A domain renews each year and hosting is billed monthly or yearly. Both are paid directly by you to the provider in your own account.`
- Service 02 (`#server-infrastructure`):
  - H2 `Hosting, servers & deployment`.
  - "What it is & who it's for": `A server is the computer where your website lives. We set up and secure that computer, publish your site on it and document how it works. This is for teams that need dedicated resources and control rather than a shared hosting plan.`
  - "Why it matters": `Default server setups often leave weak access controls. We set up proper logins, a firewall and automatic security certificates, so the site is ready when customers visit. The cloud account and billing stay in your name.`
  - Note: `After delivery: All SSH keys, server passwords and cloud dashboard access remain under your control, with a runbook for restarting services and checking status. What you provide: The provider account and payment method in your name, plus any existing site files. Running costs: Cloud hosting is billed by the provider directly to you. We can suggest a suitable size during scoping.`
- Service 03 (`#domain-dns`):
  - H2 `Domain & web address setup`.
  - "What it is & who it's for": `A domain is your web address, like yourbusiness.com.np or yourbusiness.com. We help you choose one, set it up and point it to your website. We also help with the paperwork for Nepal's .np domains.`
  - "Why it matters": `Getting a .np address means specific documents and a correctly formatted cover letter. We help prepare them. We also set the email records that keep your messages out of spam.`
  - Note: `After delivery: The domain account stays in your legal ownership. You get an export of all settings and written steps, so any developer can take over. What you provide: Your registration documents and the account details in your name. Running costs: Domain renewal is paid directly by you to the registrar, usually each year.`
- Service 04 (`#automation`):
  - H2 `Automation & practical AI`.
  - "What it is & who it's for": `If your team copies the same data from one place to another every week, a small tool can do that job for you. We build scripts and simple tools, and use AI where it genuinely helps the task.`
  - "Why it matters": `Repeated manual entry is slow and prone to typos. We document the inputs and rules, then build a tool with clear logs so you can see what it did.`
  - Note: `After delivery: We test sample runs with your team, show how errors are reported and document how to change the rules later. What you provide: A real example of the repeated task and the files or systems it uses. Running costs: We list any services the tool needs in the written quote.`
- Service 05 (`#maintenance`):
  - H2 `Ongoing maintenance`.
  - "What it is & who it's for": `Websites and servers need occasional checkups. We handle updates, security checks, backups and small fixes for teams without full-time technical staff.`
  - "Why it matters": `Updates and certificates expire; backups need checking. Without a routine, small problems are found late. We do the checks and send a short summary each cycle.`
  - Note: `After delivery: At the end of each billing cycle you get a short summary of what was done and the current status. What you provide: Access to the site and hosting account, and a contact for approving changes. Running costs: Billed monthly for the agreed scope. Hosting and domain renewals are still paid directly by you.`
- Demos intro: `Try five tools in your browser. Each uses fictional sample data and labels what is real, simulated or sample. Nothing is installed and no signup is needed.`
- New FAQ block (reusing existing `.faq` styles, no new CSS): five first-website questions from `conversion-strategy.md` §9 — technical terms, what you provide, running costs, updates, after launch. Exact answers are in the implementation.
- Boundaries h2: `What we do, what we scope, and what we don't.`; intro: `A clear list so you know what you are asking for.`
- CTA h2: `Not sure which service fits? Just describe what you want.`; body: `A rough idea is enough. We'll ask a few questions, suggest a practical approach and send a written quote.`

### 6.3 Work

- H1: `Work you can open and check.`
- Lead: `Start with the live websites below. Each is on its own domain, so you can see the work the way a customer would. Further down are reference setups and experiments, clearly labelled and never presented as client results.`
- Page note: `We describe what is actually there. No invented metrics, testimonials or outcomes.`
- Live section H2: `Websites you can open today.`; intro: `A restaurant site with menu, rooms and contact details. A Nepali news publication with category pages. A bilingual preschool site with admissions information. Open any of them.`
- Build notes H2: `How we think about systems.`; intro: `These are not live client sites. One is a reference server setup; the other is a personal experiment. Both are labelled.`
- Demos H2: `Try five demos in your browser.`
- Transparency H2: `What we can and can't show.`; paragraphs rewritten to state that live sites are linked, reference setups/prototypes/demos are labelled, and no unverifiable logos, testimonials or results are published.
- CTA H2: `Want something similar for your business?`; body: `Tell us what you need. We'll look at these examples, ask a few questions and tell you what's realistic.`

### 6.4 About

- H1: `A small studio you can talk to directly.`
- Lead: `Yugya is an independent technology studio in Nepal. We build websites and tools for businesses, schools and organisations. Two founders work directly with clients from the first message to handover.`
- Page note: `We agree the scope in writing, keep the work understandable and hand over everything when it is done.`
- Purpose statement: `Useful technology, honestly explained.`
- Purpose paragraphs: `Yugya was started in Nepal to help local businesses and organisations get a clear, dependable website without wading through jargon.` / `Some projects need only an information site. Others need a web app, a server setup or a tool for repeated work. We use well-supported tools and document what we build, so changes later stay straightforward.` / `You work directly with the people doing the work, from the first question to handover.`
- Principles section h2 `How we work.`; intro `Four commitments that shape every project.`; rows per homepage principle list but with slightly fuller explanations.
- Founders H2: `The two people you'll work with.`
- Location H2: `Based in Nepal. Easy to reach.`; second paragraph: `We use email, written notes and direct messages. You speak directly with the engineer on your project. We do not run a 24/7 call centre; we aim to reply within 1–2 business days during business hours.`
- CTA H2: `Want to know who you'd be working with?`; body: `Send a short message about your business and what you need online. We'll reply with questions and a written quote.`

### 6.5 Contact

- H1: `Tell us what you need. We'll take it from there.`
- Lead: `You don't need a technical brief or the right vocabulary. Tell us what your business does and what you want online. We'll ask a few questions and send a written scope and quote.`
- Page note: `We review each enquiry and reply with questions, a suggested approach and a written quote.`
- Guide H2: `Prefer to email us directly?`; paragraph: `Send a short note to hello@yugya.com. The details below help us reply usefully, but you don't need all of them.`
- Checklist: `Your business / What do you do, and who are your customers?` · `What you want / A new website, changes to an existing one, hosting help, or something else? A rough idea is enough.` · `What you already have / A Facebook page, an old website, a domain name? If you're not sure, just say so.` · `Any date in mind / A launch date or event, if you have one. 'No fixed date' is fine.`
- Form panel H2: `Send an enquiry`; paragraph: `Fill in what you know. If a field doesn't apply, leave it blank or write 'not sure'.`
- Form note: `How this form works: It prepares an email draft addressed to hello@yugya.com. Nothing is sent until you press Send in your email app. You can also copy the text to paste into webmail.`
- Form labels/options and FAQ list: exactly as specified in `conversion-strategy.md` §6 and §7. The visible FAQ will be rendered from the same `CONTACT_FAQS` array used for JSON-LD, so they cannot drift.
- FAQ H2: `Questions people ask before starting.`

### 6.6 Shared and structured data

- Footer brand line: `Independent technology studio in Nepal building websites, software tools and server setups — with clear scopes and full handover.`
- Organization/WebSite/service schema descriptions rewritten to mirror the new visible copy; no ratings, awards or counts added.
- Page metadata descriptions rewritten to say who Yugya helps, with the same target keywords and canonical host.
- Demo pages: keep `DEMO_DISCLAIMER`, `Sample data · runs in your browser`, interaction labels and all sample-data captions verbatim. Only surrounding explanatory copy may be clarified.

---

## 7. Claim register

Every new claim must be in this table or it must not ship.

| Claim | Status | Basis |
| --- | --- | --- |
| Websites for shops, restaurants, schools and organisations | Verified capability + target audiences | Brief + live projects |
| Written scope and itemised quote before work | Verified policy | Owner brief / AGENTS.md |
| Client owns domain, files and hosting account | Verified policy | AGENTS.md, services copy |
| 30 calendar days of bug fixing | Verified policy | AGENTS.md, services copy |
| 1–2 business day response aim | Verified policy | lib/site.ts |
| Layouts checked on phones, tablets and computers | Verified deliverable | Services deliverables |
| Three named live client sites | Verified 2026-11-17 | docs/live-projects.md + live URLs |
| Demos use fictional sample data | Verified policy | DEMO_DISCLAIMER |
| AI used where it genuinely helps | Capability statement, no outcome claim | Brief |
| No fixed packages / no published prices | Verified policy | Contact FAQ |
| No 24/7 call centre | Verified policy | AGENTS.md |
| No resale of shared cPanel hosting | Verified policy | Services boundaries table |

Deliberately absent: prices, timelines, client counts, years, testimonials, awards, uptime, speed, ranking or conversion claims.

## 8. Reconciliation with the research streams

All four research streams are now complete, and the summary in the header of this document has been updated accordingly. This section records the reconciliation.

| Stream | Completed | Material change to this strategy? |
| --- | --- | --- |
| `competitor-analysis.md` | 2026-11-17 | No — confirmed the gap this strategy targets (superlatives, unverifiable counts, no ownership/aftercare answers). |
| `language-and-keyword-research.md` | 2026-11-17 | No — confirmed the English-first decision and the plain-term vocabulary rules in §3–6. |
| `nepal-market-analysis.md` | 2026-11-17 | No — strengthened the reasoning for phone-first writing, the owned-site-as-stable-record framing, and the commercial questions answered in the FAQ. It did not alter any selected wording. |
| `copywriting-principles.md` / `source-library.md` | 2026-11-17 | No — corroborated the customer-first, plain-language, uncertainty-reduction and ethical-persuasion rules already fixed here. |

**Outcome:** no copy decision above was changed. The two streams that finished after this strategy was fixed supported the selected direction rather than contradicting it. Where they added useful evidence — mobile-first reading, the website as an owned reference point alongside social media, and the specific cost/ownership/support questions — that evidence is reflected in the FAQ and service-note wording implemented in §6, and its source is recorded in `implementation-report.md`. No change was made on the basis of an unsourced marketing generality.
