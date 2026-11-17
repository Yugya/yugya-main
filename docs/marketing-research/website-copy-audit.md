# Website copy audit — Yugya Technologies

Date: 2026-11-17
Scope: every public page in `app/` plus shared components that render user-facing text
(`components/EnquiryForm.tsx`, `components/LiveProjects.tsx`, `components/SiteFooter.tsx`,
`components/AnnouncementBar.tsx`, `components/DemoProjectIntro.tsx`, `lib/site.ts`,
`lib/projects.ts`, `lib/schema.ts`).

This is the "before" record. The "after" wording, the reasons for each change and the claim checks
are in `final-copy-strategy.md` and `implementation-report.md`.

---

## 1. What the site already does well

These are strengths to preserve, not problems to fix.

| Strength | Where | Why it matters |
| --- | --- | --- |
| Genuine live projects with real screenshots and live URLs | `/work/#live-projects`, home | This is the strongest trust asset the company has. Do not bury it. |
| Honesty about demos, sample data and reference architectures | `/work/<demo>/`, service diagrams | Rare in this market. Keep every disclaimer verbatim. |
| Explicit handover principle: client owns files, domains and server access | about, services, home | Directly answers "will I be locked in?" — a major purchase fear. |
| Stated 1–2 business day response aim | global | A believable, modest service promise. |
| No fabricated testimonials, metrics, awards or client counts | global | Must stay true. |
| Distinct design system, motion and responsive behaviour | `app/globals.css`, components | Copy work must not disturb any of it. |

---

## 2. The central communication problem

The site is written **from the provider's point of view, for a technical reader**. Almost every
section describes implementation before it describes the customer's situation. A first-time
website buyer in Nepal — a shop owner, restaurant owner, school administrator or NGO coordinator —
can read the headings and still not know:

1. what they would actually receive;
2. what it would cost to run after launch;
3. what they need to do or provide;
4. who owns the domain and hosting;
5. what to do next if they are not technical.

The opening line is the clearest example:

> "Technology built for the work that matters."

This is a slogan. It does not say that Yugya builds websites for businesses in Nepal. The lead
that follows — "Yugya builds websites, software tools, and dependable digital systems for
businesses and individuals who need technology to work properly" — says what the company does but
not who it helps or what changes for the customer.

---

## 3. Page-by-page findings

### 3.1 Home (`app/page.tsx`)

| Location | Current wording (excerpt) | Problem |
| --- | --- | --- |
| H1 | "Technology built for the work that matters." | Abstract; no service, audience or location. |
| Lead | "…dependable digital systems for businesses and individuals who need technology to work properly." | "Digital systems" and "work properly" are vague. |
| Hero note | "We prioritize simplicity, clean implementation, and direct technical handover." | Internal engineering language before customer outcome. |
| Hero meta | "Primary technologies — HTML5, CSS3, JS, Python, Linux, Caddy" | Answers a question a non-technical buyer is not asking; pushes ownership and support further down. |
| Capability heading | "What Yugya builds and maintains." | Fine as a label, but the intro — "practical technical execution rather than generic consulting" — defines the company against other agencies, not against the customer's problem. |
| Capability rows | "Documented server baselines, UFW firewall rules, Caddy or Nginx reverse proxies, and Git-based deployment." | Accurate, but the reader must already know what a reverse proxy is. |
| Live work | "Websites in production." | Understates the proof: these are real, visitable sites for recognisable local business types. |
| Manifesto | "Clear requirements. Clean code. Direct handover." | Good principle, wrong vocabulary order for a buyer. Ownership should come first. |
| Process | "Architecture & design", "Phased build & audits", "Verification & handover" | Process names describe the vendor's workflow. No step tells the visitor that they can start with a plain message, or that a written quote comes before work. |
| CTA | "Have a project or technical requirement in mind?" | "Technical requirement" filters out the exact people the site needs to welcome. |

### 3.2 Services (`app/services/page.tsx`)

| Location | Current wording (excerpt) | Problem |
| --- | --- | --- |
| H1 | "Defined capabilities, itemized deliverables." | procurement language, not buyer language. |
| Web service "What it is" | "Custom web development for businesses, schools, and organizations that need a clear digital front door or interactive web tool." | "Digital front door" is a metaphor; no explanation of a website, domain or hosting. |
| Web service "Problem" | "Many websites become bloated with unnecessary third-party plugins…" | Discusses a problem the customer has not experienced yet; misses the real starting fear ("Facebook is enough / will anyone find me?"). |
| Deliverables | "Semantic HTML5, CSS3, and JavaScript codebase…" | Every bullet is an implementation artefact. A buyer needs outcomes plus a short technical appendix, not a list of file types. |
| Server service | "Default cloud server installations typically leave root password authentication enabled…" | Correct but abstract. No plain statement that a server is where the site lives and that the account stays in the customer's name. |
| Domain service | "national ccTLD documentation (specifically Nepal's official .np domains)" | Bureaucratic phrasing for a task the customer knows as "get our .com.np". |
| Automation | "Lightweight scripts, automated data processing routines… written in Python or Node.js" | No everyday example of the repeated task being removed. |
| Missing entirely | — | No section on what the customer provides, what recurring costs exist, what the process looks like, or plain-language FAQs at the point of decision. |
| Boundaries table | "Shared cPanel hosting reselling — Out of scope" | Honest and useful, but the table reads as internal policy rather than a reassurance that there are no hidden reseller markups. |

### 3.3 Work (`app/work/page.tsx`)

| Location | Current wording (excerpt) | Problem |
| --- | --- | --- |
| H1 | "Live client work and demonstrated builds." | Accurate but flat. The proof deserves a benefit-led line. |
| Lead | "an honest view of our work… Each entry states what it is." | Talks about the page instead of inviting the visitor to open a real site. |
| Live section | "Websites in production." | No cue that a restaurant owner should look at Kohinoor, or a school at Aama Pathshala. |
| Prototype sections | Long technical explanations of Caddy, SQLite, HSTS | Fine for a technical reader, but they occupy more attention than the live client work. Keep the detail; frame it below the proof. |

Verified live projects (re-read 2026-11-17):
- Kohinoor Restaurant — `https://www.kohinoorrestaurant.com.np/` — live; visible menu, rooms, cabins,
  gallery, location and contact. The site footer credits "NineSapphires by Ab & backend/ux by Sagar".
  The owner has confirmed the project as Yugya work. Do **not** claim sole authorship, and do not
  reuse the restaurant's own guest testimonials as Yugya testimonials.
- Samajik Abhiyaan — `https://www.samajikabhiyaan.com/` — live; Nepali-language news site with
  category archives and article pages. Older footer credit reads "Site by Sorvx" (the owner's former
  brand). Present as Yugya work per owner confirmation, without discussing the old brand publicly.

### 3.4 About (`app/about/page.tsx`)

| Location | Current wording (excerpt) | Problem |
| --- | --- | --- |
| H1 | "Practical engineering for real requirements." | Company-centred; no human reason to trust the team. |
| Purpose | "Many organizations struggle with web systems that are overly complicated…" | Starts with technology, not with the customer's situation. |
| Principles | "Proven tools over trend chasing", "Truth in technical descriptions" | Good values expressed as internal engineering doctrine. Keep the values, translate the language. |
| Founders | "The two people behind the studio." | Strong asset, underplayed. Make direct access the point. |

### 3.5 Contact (`app/contact/page.tsx`, `components/EnquiryForm.tsx`)

| Location | Current wording (excerpt) | Problem |
| --- | --- | --- |
| H1 | "Let's discuss your technical requirements." | Repeats the word that non-technical visitors fear. |
| Lead | "share your project details below" | Assumes the visitor already knows what a "project detail" is. |
| Checklist | "Current setup", "Engagement scope", "Target timeline" | Asks in the vendor's categories. A shop owner thinks in terms of "what I have now" and "what I want people to see". |
| Form labels | "Service interested in", "Timeline target", "Organization / school", "Project requirements & description" | Technical/intake language. The select options ("Linux Server Setup & VPS Hardening") require terminology the audience does not use. |
| Form status | "Email draft opened… does not submit to a remote server" | Honest, but framed around the implementation rather than the reassurance: nothing has been sent until they press Send. |
| FAQs | 5 questions, all about billing, hosting, support, `.np` and pricing | These are real, but they omit the questions first-time buyers actually ask: cost drivers, time, domains, ownership, updates, mobile, redesign, after launch, and "can you build for my restaurant/shop?" |
| Character counter | "recommended min: 30" while validation rejects under 25 | Minor inconsistency to correct. |

---

## 4. Cross-site patterns to remove

1. **Abstract value statements** — "digital ecosystems", "technical execution", "dependable digital
   systems", "work that matters": replace with what the visitor gets.
2. **Implementation-first lists** — stack, protocol and file-type lists before outcomes: keep the
   technical detail as supporting evidence, after the plain-language explanation.
3. **Provider-centred process names** — "Architecture & design", "Phased build & audits": rename
   from the customer's point of view.
4. **Invisible answers to commercial fears** — ownership, recurring cost, updates, support: surface
   them on the home and services pages, not only in one FAQ.
5. **Missed relevance cues** — no line telling a restaurant, school or shop owner which proof applies
   to them.

## 5. Claims that must stay unchanged

- 30 calendar days of post-launch bug-fix support.
- Billing by milestone; written itemized quote after scope review; no published fixed packages.
- Hosting in accounts owned and paid for by the client; no shared cPanel reselling.
- `.np` paperwork assistance, not a claim to register domains on the client's behalf.
- Direct email/messaging during business hours; no 24/7 call centre.
- Full file, domain and server-access handover.
- 1–2 business day response aim.
- All demo disclaimers and sample-data captions.
- No testimonials, metrics, awards, certifications, partner logos or years of experience.
