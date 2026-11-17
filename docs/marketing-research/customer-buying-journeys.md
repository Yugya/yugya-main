# Customer buying journeys — Yugya Technologies

Date: 2026-11-17

Companion to `customer-personas.md`. These journeys describe **likely decision paths**, assembled from Nepal-specific research, observed competitor patterns and verified Yugya policies. They are not transcripts of real customers. Labels: **[E]** evidence-backed, **[P]** professional recommendation, **[H]** hypothesis to validate.

---

## 1. The shared journey at a glance

| Stage | What the buyer is thinking | What the site must do | Primary surface |
| --- | --- | --- | --- |
| 1. Trigger | "We need to look proper online / people can't find us" | Be findable for the plain-language query and look locally credible within seconds | Search result → home |
| 2. Problem awareness | "Maybe Facebook is not enough" | Explain the gap without patronising | Home hero + live work |
| 3. Discovery of Yugya | "Who are these people?" | Name the service, audience and location in one line; show real work | Home H1, kicker, live rows |
| 4. Evaluation | "Can they build what we need?" | Show relevant proof: restaurant for B, school/NGO for D, deeper builds for C | `/work/`, service articles |
| 5. Risk check | "What will it cost, who owns it, what if it breaks?" | Answer cost drivers, ownership, recurring payments, updates, support, handover | Services notes, FAQ, boundaries table |
| 6. Enquiry | "I don't know the right technical words" | Accept a rough description; ask only useful questions; explain what happens next | `/contact/`, form |
| 7. Quote & decision | "Is this scope fair?" | Written itemised quote, milestone billing, no invented urgency | Direct reply |
| 8. Delivery | "Will I understand what is happening?" | Milestones, plain updates, one named contact | Process section, direct contact |
| 9. Aftercare | "Who looks after it now?" | 30-day bug fixing, optional maintenance, documents and full access | Service notes, FAQ |

**[E]** Stages 5 and 9 are where the competitor research found the greatest market-wide gap: almost nobody explains ownership or aftercare. **[P]** Yugya should therefore move those answers *up* the journey rather than leaving them in a single FAQ.

---

## 2. Persona-specific paths

### Persona A — Local shop owner

**Trigger.** A customer asks for the shop's website or cannot find its details outside Facebook. **[H]**

**Discovery.** Searches in plain terms (English or romanised Nepali; see language research). Lands on home. Needs to see "websites for businesses in Nepal" immediately. **[E/P]**

**Evaluation.** Scrolls to live work. Kohinoor Restaurant is the closest mental match: a real local business with photos, location and contact. Aama Pathshala shows a clean, simple site. **[E: live project types]**

**Risk check.** The exact questions are cost, ownership and updates. Answers must be visible before the form: quote after scope review, no fixed package, domain/hosting in the buyer's name, written update guide, 30-day bug fixing, 1–2 business day response aim. **[E: verified policies]**

**Enquiry friction to remove.** Do not ask for a technical spec. The service dropdown must include a plain "A website or web app" option and a "Not sure yet — give me advice" option. The description box should prompt with an everyday example. **[P]**

**CTA path.** "Send an enquiry" → `/contact/` → service "A website or web app" → plain description → email draft. Secondary path: email `hello@yugya.com` directly.

### Persona B — Restaurant / hotel owner

**Trigger.** A menu changes often, delivery platforms take a share, or a guest asks for a site. **[H]**

**Discovery.** Looks for examples first. Home must surface live work quickly with a relevance cue: "A restaurant site with a menu, rooms, photos, location and phone number." **[P]**

**Evaluation.** Opens `/work/#kohinoor-restaurant`, visits the live site, checks the desktop and mobile screenshots. **[E: the project exists and is linked]**

**Risk check.** "Can I update the menu?" and "Can visitors book?" The honest answer: a written update guide is provided; booking/enquiry functionality is scoped separately and is not claimed as an existing Kohinoor feature. **[E/P]**

**CTA path.** "See a similar site" → live project → "Tell us what your menu needs" → `/contact/?service=web`.

### Persona C — Startup founder

**Trigger.** Needs a credible company site or an actual product: accounts, bookings, internal tools, an AI-assisted workflow. **[E: brief]**

**Discovery.** Possibly arrives via a service or demo page from search. Will judge depth fast. **[H]**

**Evaluation.** Interactive demos with labelled real/simulated/sample behaviour; build notes for the server baseline and AayushAI Core; service deliverables that name real tools without pretending to be a large agency. **[E: existing assets]**

**Risk check.** Repository ownership, infrastructure access, maintainability and scope honesty. All are addressed by existing verified policies and the boundaries table. **[E]**

**CTA path.** "Discuss a build" → `/contact/?service=web` or `vps`/`automation` → "Not sure yet" is acceptable.

### Persona D — Organisation / educational institution

**Trigger.** A new academic year, a funding/reporting requirement, or outdated information. **[H]**

**Discovery.** May need bilingual content or category archives. Aama Pathshala and Samajik Abhiyaan are the two relevant proof points. **[E]**

**Evaluation.** Checks the live sites and mobile views; looks for a calm, credible tone and a named contact. **[P]**

**Risk check.** "Who maintains it?", "Can we update announcements?", "Will our content be handled carefully?", "Who owns the accounts?" Answer with handover, maintenance option, direct contact and the absence of invented claims. **[E/P]**

**CTA path.** "Send an enquiry" or direct email; a service dropdown option for "A website or web app" is sufficient — do not force a terminology choice.

---

## 3. Journey content matrix

| Question at the moment of doubt | Where the answer must live | Current gap |
| --- | --- | --- |
| What do you actually build? | Home H1/lead + capability rows | Slogan-first H1; technical stack in hero meta |
| Have you done this for my kind of business? | Home live-work section, `/work/` | Real projects exist but no relevance cue |
| What will I get? | Each service article, deliverables lists | Lists are implementation artefacts only |
| What will I keep paying for? | Service notes, FAQ, boundaries table | Not stated plainly in one place |
| Who owns the domain and hosting? | Home, services, FAQ | Present but buried in detailed paragraphs |
| Can I change things later? | Service notes, FAQ | Not answered as a first-buyer question |
| Will it work on my phone? | Service deliverables, FAQ | Present as "responsive layouts", not as a customer answer |
| What if it breaks? | Process step 4, FAQ | Present as "bug fixing support", needs days and scope |
| What do I say when I contact you? | Contact page checklist and form | Checklist uses vendor categories |
| What happens after I send the form? | Form panel and form status | Implementation explanation, not reassurance |

This matrix drives the implementation in `final-copy-strategy.md`.

---

## 4. Ethical conversion rules for every stage

1. No countdowns, "limited slots", discount pressure or invented urgency.
2. No testimonials, review counts or client logos that cannot be attributed.
3. No claim that a website will increase sales, rankings or enquiries.
4. No ambiguity about recurring costs or ownership.
5. No forcing a visitor to choose a technical service before they can describe their problem.
6. No hiding the fact that the form prepares an email draft rather than sending to a server. Say it plainly, then explain the next action.

**[P]** The tone should lower the temperature at the exact moment a non-technical buyer worries about looking inexperienced: "A rough idea is enough" is better than "provide your technical requirements".

---

## 5. Post-purchase stage (retention and proof)

- At handover, give the client the documents and access promised on the site.
- After the 30-day bug-fix window, offer the monthly maintenance option without pressure.
- Ask for feedback only after delivery, and only publish it if the client explicitly agrees and the quote can be attributed. Until then, the site stays testimonial-free.
- **[H]** If future clients consent, a small number of real, attributed quotes would be the strongest addition to this journey. Do not fabricate placeholders in the meantime.
