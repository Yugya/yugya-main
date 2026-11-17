import Link from "next/link";
import DemoIndex from "@/components/DemoIndex";
import JsonLd from "@/components/JsonLd";
import { ServiceDiagramFigure } from "@/components/ServiceVisual";
import { pageMetadata } from "@/lib/metadata";
import { SERVICE_NODES, webPageNode } from "@/lib/schema";
import "@/components/demos/demos.css";

const SERVICES_TITLE = "Web Development & Software Services in Nepal — Yugya";
const SERVICES_DESCRIPTION =
  "Website design and development, hosting and server setup, domain guidance, automation and maintenance in Nepal — with clear deliverables, written quotes and full ownership.";

export const metadata = pageMetadata({
  title: SERVICES_TITLE,
  description: SERVICES_DESCRIPTION,
  path: "/services/",
  ogDescription:
    "See what each service includes, what you provide, what it costs to run and what happens after delivery.",
});

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageNode({
      path: "/services/",
      name: SERVICES_TITLE,
      description: SERVICES_DESCRIPTION,
      type: "CollectionPage",
    }),
    ...SERVICE_NODES,
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <main id="main">
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero-grid">
            <div>
              <span className="hero-kicker">Services for businesses in Nepal</span>
              <h1>Websites and software, clearly explained.</h1>
              <p className="lead">
                Below you&apos;ll see what each service is, who it helps, what you receive and what
                it costs to keep running. If you&apos;re not sure which one fits, describe what you
                want and we&apos;ll work it out together.
              </p>
              <p className="page-note">
                Each section also lists what you provide, what you keep paying for and what happens
                after delivery.
              </p>
            </div>

            <div className="page-aside">
              <h2>On this page</h2>
              <ul>
                <li><span className="num">01</span><a href="#web-development">Websites &amp; web apps</a></li>
                <li><span className="num">02</span><a href="#server-infrastructure">Hosting &amp; servers</a></li>
                <li><span className="num">03</span><a href="#domain-dns">Domain &amp; web address</a></li>
                <li><span className="num">04</span><a href="#automation">Automation &amp; AI</a></li>
                <li><span className="num">05</span><a href="#maintenance">Ongoing maintenance</a></li>
                <li><span className="num">06</span><a href="#demos">Interactive demonstrations</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="service-layout">
            <aside className="service-rail" aria-label="Service sections">
              <p className="rail-label">Services</p>
              <ul>
                <li><a href="#web-development"><span className="num">01</span>Websites &amp; web apps</a></li>
                <li><a href="#server-infrastructure"><span className="num">02</span>Hosting &amp; servers</a></li>
                <li><a href="#domain-dns"><span className="num">03</span>Domain &amp; web address</a></li>
                <li><a href="#automation"><span className="num">04</span>Automation &amp; AI</a></li>
                <li><a href="#maintenance"><span className="num">05</span>Maintenance</a></li>
              </ul>
              <p className="service-note" style={{ display: "block", border: 0, paddingTop: "1.25rem" }}>
                <Link className="text-link" href="/contact/">
                  Ask about a project <span className="arrow" aria-hidden="true">↗</span>
                </Link>
              </p>
            </aside>

            <div>
              <article className="service reveal" id="web-development">
                <div className="service-head">
                  <span className="num" aria-hidden="true">01</span>
                  <div>
                    <h2>Website &amp; web application development</h2>
                    <span className="service-status">Available offering</span>
                  </div>
                </div>
                <figure className="service-visual reveal">
                  <div className="service-visual-frame">
                    <img
                      src="/assets/projects/aama-desktop.webp"
                      alt="Aama Pathshala bilingual preschool website home page showing the school hero, logo and admissions buttons"
                      width={1440}
                      height={900}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption>
                    <span>Live build — Aama Pathshala</span>
                    <span>Desktop screenshot · Nov 2026</span>
                  </figcaption>
                </figure>
                <div className="service-body">
                  <div>
                    <h3>What it is &amp; who it&apos;s for</h3>
                    <p>
                      A website gives your business its own place online. Customers can see what
                      you offer, read about you and find your contact details, on a phone or a
                      computer. We build these for shops, restaurants, schools and organisations.
                      If you need more than information pages — accounts, bookings or an internal
                      tool — we build web applications too.
                    </p>
                    <h3>Why it matters</h3>
                    <p>
                      Social media is useful for reaching followers, but it is not a place you own
                      and it is not where everyone looks. A website gives you a stable address for
                      the details customers ask for most: what you offer, photos, location and how
                      to contact you.
                    </p>
                  </div>
                  <div>
                    <h3>What the deliverable includes</h3>
                    <ul className="deliverables">
                      <li>A finished website checked on phones, tablets and computers</li>
                      <li>Semantic HTML5, CSS3, and JavaScript codebase without unnecessary dependencies</li>
                      <li>Bilingual structure (English + Nepali toggle) where required</li>
                      <li>Accessible structure: logical heading hierarchy, form labels, and visible keyboard focus states</li>
                      <li>Technical metadata setup: canonical URLs, OpenGraph tags, and Schema.org JSON-LD</li>
                      <li>Code and asset files handed over to you</li>
                    </ul>
                  </div>
                </div>
                <div className="service-note">
                  <p>
                    <strong>After delivery:</strong> We help publish the site and give you a short
                    written guide for updating text and images. You own the domain, hosting account
                    and all files. Bugs are fixed for 30 calendar days after launch.
                  </p>
                  <p>
                    <strong>What you provide:</strong> Text, photos and a logo if you have them,
                    plus one person to review the work.
                  </p>
                  <p>
                    <strong>Running costs:</strong> A domain renews each year and hosting is billed
                    monthly or yearly. Both are paid directly by you to the provider in your own
                    account.
                  </p>
                  <Link className="text-link" href="/contact/?service=web">
                    Enquire about web development <span className="arrow" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>

              <article className="service reveal" id="server-infrastructure">
                <div className="service-head">
                  <span className="num" aria-hidden="true">02</span>
                  <div>
                    <h2>Hosting, servers &amp; deployment</h2>
                    <span className="service-status">Available offering</span>
                  </div>
                </div>
                <ServiceDiagramFigure
                  variant="server"
                  caption="Reference architecture — documented VPS baseline"
                  note="Not a live status report"
                />
                <div className="service-body">
                  <div>
                    <h3>What it is &amp; who it&apos;s for</h3>
                    <p>
                      A server is the computer where your website lives. We set up and secure that
                      computer, publish your site on it and document how it works. This is for
                      teams that need dedicated resources and control rather than a shared hosting
                      plan.
                    </p>
                    <h3>Why it matters</h3>
                    <p>
                      Default server setups often leave weak access controls. We set up proper
                      logins, a firewall and automatic security certificates, so the site is ready
                      when customers visit. The cloud account and billing stay in your name.
                    </p>
                  </div>
                  <div>
                    <h3>What the deliverable includes</h3>
                    <ul className="deliverables">
                      <li>A working server under your account, with written setup notes</li>
                      <li>OS provisioning (Ubuntu LTS or Debian) with dedicated non-root user and SSH key authentication</li>
                      <li>UFW firewall configuration and Fail2ban intrusion prevention rules</li>
                      <li>Reverse proxy (Caddy or Nginx) with automated Let&apos;s Encrypt TLS/SSL certificates</li>
                      <li>Automated deployment pipeline using Git hooks or GitHub Actions CI/CD</li>
                      <li>Systemd service configuration for automated process management and crash restarts</li>
                      <li>Documented server runbook and backup routine instructions</li>
                    </ul>
                  </div>
                </div>
                <div className="service-note">
                  <p>
                    <strong>After delivery:</strong> All SSH keys, server passwords and cloud
                    dashboard access remain under your control, with a runbook for restarting
                    services, reading logs and checking status.
                  </p>
                  <p>
                    <strong>What you provide:</strong> The provider account and payment method in
                    your name, plus any existing site files.
                  </p>
                  <p>
                    <strong>Running costs:</strong> Cloud hosting is billed by the provider
                    directly to you. We can suggest a suitable size during scoping.
                  </p>
                  <Link className="text-link" href="/contact/?service=vps">
                    Enquire about server infrastructure <span className="arrow" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>

              <article className="service reveal" id="domain-dns">
                <div className="service-head">
                  <span className="num" aria-hidden="true">03</span>
                  <div>
                    <h2>Domain &amp; web address setup</h2>
                    <span className="service-status">Available offering</span>
                  </div>
                </div>
                <ServiceDiagramFigure
                  variant="dns"
                  caption="DNS and email routing overview"
                  note="Records documented at handover"
                />
                <div className="service-body">
                  <div>
                    <h3>What it is &amp; who it&apos;s for</h3>
                    <p>
                      A domain is your web address, like <code>yourbusiness.com.np</code> or
                      <code> yourbusiness.com</code>. We help you choose one, set it up and point it
                      to your website. We also help with the paperwork for Nepal&apos;s
                      <code> .np</code> domains.
                    </p>
                    <h3>Why it matters</h3>
                    <p>
                      Getting a <code>.np</code> address means specific documents and a correctly
                      formatted cover letter. We help prepare them. We also set the email records
                      that keep your messages out of spam.
                    </p>
                  </div>
                  <div>
                    <h3>What the deliverable includes</h3>
                    <ul className="deliverables">
                      <li>A working web address pointing to your site, with the settings documented</li>
                      <li>Official Nepal <code>.np</code> application paperwork audit and cover letter preparation</li>
                      <li>DNS routing configuration on Cloudflare or provider of choice with DNSSEC support</li>
                      <li>Email authentication records: MX, SPF, DKIM, and DMARC for Google Workspace, Zoho, or private mail</li>
                      <li>Subdomain mapping for web applications, staging environments, and APIs</li>
                      <li>Documentation of all active DNS records for future reference</li>
                    </ul>
                  </div>
                </div>
                <div className="service-note">
                  <p>
                    <strong>After delivery:</strong> The domain account stays in your legal
                    ownership. You get an export of all settings and written steps, so any
                    developer can take over.
                  </p>
                  <p>
                    <strong>What you provide:</strong> Your registration documents and the account
                    details in your name.
                  </p>
                  <p>
                    <strong>Running costs:</strong> Domain renewal is paid directly by you to the
                    registrar, usually each year.
                  </p>
                  <Link className="text-link" href="/contact/?service=dns">
                    Enquire about domain &amp; DNS <span className="arrow" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>

              <article className="service reveal" id="automation">
                <div className="service-head">
                  <span className="num" aria-hidden="true">04</span>
                  <div>
                    <h2>Automation &amp; practical AI</h2>
                    <span className="service-status">Scoped engagement</span>
                  </div>
                </div>
                <ServiceDiagramFigure
                  variant="automation"
                  caption="Documented automation pattern"
                  note="Human review where the outcome matters"
                />
                <div className="service-body">
                  <div>
                    <h3>What it is &amp; who it&apos;s for</h3>
                    <p>
                      If your team copies the same data from one place to another every week, a
                      small tool can do that job for you. We build scripts and simple tools, and
                      use AI where it genuinely helps the task.
                    </p>
                    <h3>Why it matters</h3>
                    <p>
                      Repeated manual entry is slow and prone to typos. We document the inputs and
                      rules, then build a tool with clear logs so you can see what it did.
                    </p>
                  </div>
                  <div>
                    <h3>What the deliverable includes</h3>
                    <ul className="deliverables">
                      <li>A tool you can run, with a short instruction guide</li>
                      <li>Workflow discovery: documenting inputs, transformation rules, and output requirements</li>
                      <li>Standalone Python or Node.js script with error handling and logging</li>
                      <li>Local SQLite or CSV export pipeline for structured storage</li>
                      <li>Automated alert mechanism (webhook or email notification) upon error or completion</li>
                      <li>Clear instruction manual and cron schedule instructions for running the script</li>
                    </ul>
                  </div>
                </div>
                <div className="service-note">
                  <p>
                    <strong>After delivery:</strong> We test sample runs with your team, show how
                    errors are reported and document how to change the rules later.
                  </p>
                  <p>
                    <strong>What you provide:</strong> A real example of the repeated task and the
                    files or systems it uses.
                  </p>
                  <p>
                    <strong>Running costs:</strong> We list any services the tool needs in the
                    written quote.
                  </p>
                  <Link className="text-link" href="/contact/?service=automation">
                    Enquire about custom automation <span className="arrow" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>

              <article className="service reveal" id="maintenance">
                <div className="service-head">
                  <span className="num" aria-hidden="true">05</span>
                  <div>
                    <h2>Ongoing maintenance &amp; technical care</h2>
                    <span className="service-status">Available offering</span>
                  </div>
                </div>
                <ServiceDiagramFigure
                  variant="maintenance"
                  caption="Monthly maintenance routine"
                  note="Findings documented each cycle"
                />
                <div className="service-body">
                  <div>
                    <h3>What it is &amp; who it&apos;s for</h3>
                    <p>
                      Websites and servers need occasional checkups. We handle updates, security
                      checks, backups and small fixes for teams without full-time technical staff.
                    </p>
                    <h3>Why it matters</h3>
                    <p>
                      Updates and certificates expire; backups need checking. Without a routine,
                      small problems are found late. We do the checks and send a short summary each
                      cycle.
                    </p>
                  </div>
                  <div>
                    <h3>What the deliverable includes</h3>
                    <ul className="deliverables">
                      <li>A short written summary after each billing cycle</li>
                      <li>Monthly server OS security patching and package updates</li>
                      <li>SSL certificate status verification and DNS monitoring</li>
                      <li>Database and asset backup verification</li>
                      <li>Minor text updates and broken link fixes</li>
                      <li>Direct email contact with an engineer for technical issues</li>
                    </ul>
                  </div>
                </div>
                <div className="service-note">
                  <p>
                    <strong>After delivery:</strong> At the end of each billing cycle you get a
                    short summary of what was done and the current status.
                  </p>
                  <p>
                    <strong>What you provide:</strong> Access to the site and hosting account, and
                    a contact for approving changes.
                  </p>
                  <p>
                    <strong>Running costs:</strong> Billed monthly for the agreed scope. Hosting and
                    domain renewals are still paid directly by you.
                  </p>
                  <Link className="text-link" href="/contact/?service=maintenance">
                    Enquire about monthly maintenance <span className="arrow" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section rule-top" id="demos" aria-labelledby="services-demos-title">
        <div className="shell">
          <div className="section-head">
            <span className="section-index" aria-hidden="true">06</span>
            <div>
              <h2 id="services-demos-title">See the work running, not just described.</h2>
              <p>
                Try five tools in your browser. Each uses fictional sample data and labels what is
                real, simulated or sample. Nothing is installed and no signup is needed.
              </p>
            </div>
          </div>

          <DemoIndex />

          <p className="demo-index-more">
            <Link className="text-link" href="/work/#demos">
              Read the build notes for every demo <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="services-faq-title">
        <div className="shell">
          <div className="section-head">
            <span className="section-index" aria-hidden="true">07</span>
            <div>
              <h2 id="services-faq-title">Questions before your first website.</h2>
              <p>
                Short answers to the things people usually ask before they contact us. More
                questions are answered on the <Link href="/contact/">contact page</Link>.
              </p>
            </div>
          </div>

          <div className="faq">
            <details>
              <summary>Do I need to understand technical terms?</summary>
              <div className="faq-answer">
                <p>
                  No. Tell us what your business does and what you want customers to be able to
                  do. We&apos;ll explain any terms we use.
                </p>
              </div>
            </details>
            <details>
              <summary>What will I need to give you?</summary>
              <div className="faq-answer">
                <p>
                  Text, photos and a logo if you have them, plus one person to review the work. We
                  can help arrange content as part of the scope.
                </p>
              </div>
            </details>
            <details>
              <summary>What does a website cost to keep running?</summary>
              <div className="faq-answer">
                <p>
                  A domain renews each year and hosting is billed monthly or yearly. Both are paid
                  directly by you to the provider in your own account. We do not publish fixed
                  packages; you get an itemised quote after we agree the scope.
                </p>
              </div>
            </details>
            <details>
              <summary>Can I update the website myself later?</summary>
              <div className="faq-answer">
                <p>
                  Yes. You get a short written guide for changing text and images. If you would
                  rather not do it yourself, minor updates are part of the monthly maintenance
                  option.
                </p>
              </div>
            </details>
            <details>
              <summary>What happens after launch?</summary>
              <div className="faq-answer">
                <p>
                  You receive all files, access and documents. Bug fixes are included for 30
                  calendar days after launch. After that you can maintain it yourself or continue
                  with our monthly maintenance.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="boundaries-title">
        <div className="shell">
          <div className="section-head">
            <span className="section-index" aria-hidden="true">08</span>
            <div>
              <h2 id="boundaries-title">What we do, what we scope, and what we don&apos;t.</h2>
              <p>
                A clear list so you know what you are asking for.
              </p>
            </div>
          </div>

          <p className="table-hint">
            Swipe the table sideways to see every column <span aria-hidden="true">→</span>
          </p>

          <div
            className="table-wrap reveal"
            role="region"
            aria-label="Service scopes table"
            tabIndex={0}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col" style={{ width: "28%" }}>Service offering</th>
                  <th scope="col" style={{ width: "22%" }}>Status</th>
                  <th scope="col">Delivery scope</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Custom website development</strong></td>
                  <td><span className="status">Available</span></td>
                  <td>Semantic HTML/CSS/JS, bilingual language toggle, responsive layout, performance optimization.</td>
                </tr>
                <tr>
                  <td><strong>Linux server setup &amp; VPS hardening</strong></td>
                  <td><span className="status">Available</span></td>
                  <td>Ubuntu/Debian VPS, UFW firewall, SSH key auth, Caddy/Nginx proxy, Let&apos;s Encrypt TLS, CI/CD deploys.</td>
                </tr>
                <tr>
                  <td><strong>Nepal .np &amp; commercial DNS setup</strong></td>
                  <td><span className="status">Available</span></td>
                  <td>Paperwork dossier prep, Cloudflare routing, SPF/DKIM/DMARC mail records, DNSSEC configuration.</td>
                </tr>
                <tr>
                  <td><strong>Scheduled technical maintenance</strong></td>
                  <td><span className="status">Available</span></td>
                  <td>Monthly security patches, backup verification, link checks, minor content adjustments.</td>
                </tr>
                <tr>
                  <td><strong>Custom automation &amp; scripts</strong></td>
                  <td><span className="status status-scoped">Scoped engagement</span></td>
                  <td>Requires discovery review to assess input data sources, API constraints, and error scenarios.</td>
                </tr>
                <tr>
                  <td><strong>Shared cPanel hosting reselling</strong></td>
                  <td><span className="status status-out">Out of scope</span></td>
                  <td>We do not resell shared web hosting. We configure dedicated cloud VPS instances that you own directly.</td>
                </tr>
                <tr>
                  <td><strong>24/7 telephone call centers</strong></td>
                  <td><span className="status status-out">Out of scope</span></td>
                  <td>We provide direct email and messaging communication during business hours, not an automated call center.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section cta" aria-labelledby="services-cta-title">
        <div className="shell">
          <div className="cta-grid">
            <div>
              <h2 id="services-cta-title">Not sure which service fits? Just describe what you want.</h2>
              <p>
                A rough idea is enough. We&apos;ll ask a few questions, suggest a practical approach
                and send a written quote.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/contact/">
                  Start a project enquiry <span className="arrow" aria-hidden="true">↗</span>
                </Link>
                <Link className="btn btn-secondary" href="/work/">
                  See live websites
                </Link>
              </div>
            </div>
            <dl className="cta-aside">
              <dt>Direct email</dt>
              <dd><a href="mailto:hello@yugya.com">hello@yugya.com</a></dd>
              <dt>Response aim</dt>
              <dd>1–2 business days</dd>
              <dt>Location</dt>
              <dd>Nepal · UTC +5:45</dd>
            </dl>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
