import Link from "next/link";
import DemoIndex from "@/components/DemoIndex";
import FounderCards from "@/components/FounderCards";
import JsonLd from "@/components/JsonLd";
import { LiveProjectIndex } from "@/components/LiveProjects";
import { pageMetadata } from "@/lib/metadata";
import { webPageNode } from "@/lib/schema";
import { FOUNDER_NAMES, YUGS_URL } from "@/lib/site";
import "@/components/demos/demos.css";
import "@/components/yugs.css";

const HOME_TITLE = "Yugya — Web Development Company in Nepal";
const HOME_DESCRIPTION =
  "Yugya is a web development company in Nepal building clear, dependable websites for shops, restaurants, schools and organisations. Written scope, honest costs and full handover.";

export const metadata = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  ogDescription:
    "Websites and web applications for businesses in Nepal, with a written scope, client-owned hosting and full handover.",
});

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageNode({
      path: "/",
      name: HOME_TITLE,
      description: HOME_DESCRIPTION,
    }),
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <main id="main">
      <section className="home-hero">
        <div className="shell">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <span className="hero-kicker">Independent web development studio — Nepal</span>
              <h1>Websites for businesses in Nepal.</h1>
              <p className="lead hero-lead">
                Yugya designs and builds websites for shops, restaurants, schools and
                organisations. Your customers can see what you offer, find your details and get
                in touch — on any phone or computer.
              </p>
              <p className="hero-note">
                We agree the scope and price in writing before work starts. You own the domain,
                files and hosting account, and we fix bugs for 30 days after launch.
              </p>

              <div className="hero-actions">
                <Link className="btn btn-primary" href="/services/">
                  See what we build <span className="arrow" aria-hidden="true">↗</span>
                </Link>
                <Link className="btn btn-secondary" href="/work/">
                  See live websites
                </Link>
              </div>
            </div>

            <figure className="brand-sign reveal">
              <div className="brand-sign-screen">
                <picture>
                  <source media="(prefers-reduced-motion: reduce)" srcSet="/assets/brand/yugya-poster.png" />
                  <source type="image/webp" srcSet="/assets/brand/yugya-logo-anim.webp" />
                  <img
                    src="/assets/brand/yugya-logo.gif"
                    alt="Yugya animated wordmark"
                    width={480}
                    height={270}
                  />
                </picture>
              </div>
              <figcaption>
                <span>Official brand animation</span>
                <span>Yugya / studio mark</span>
              </figcaption>
            </figure>
          </div>

          <dl className="hero-meta">
            <div>
              <dt>How we start</dt>
              <dd>A short message — no technical brief needed</dd>
            </div>
            <div>
              <dt>Before we build</dt>
              <dd>Written scope and itemised quote</dd>
            </div>
            <div>
              <dt>What you own</dt>
              <dd>Your domain, files and hosting account</dd>
            </div>
            <div>
              <dt>Response aim</dt>
              <dd>Aim to reply in 1–2 business days</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section yugs-launch" id="yugs" aria-labelledby="yugs-title">
        <div className="shell">
          <div className="yugs-panel">
            <div className="yugs-meta">
              <span className="yugs-flag">
                <span className="yugs-flag-dot" aria-hidden="true" />
                New product
              </span>{" "}
              <span>Yugs Bot — AI assistant</span>
              <span className="yugs-meta-by">Yugya Technologies</span>
            </div>

            <div className="yugs-stage">
              <figure className="yugs-mark reveal">
                <div className="yugs-mark-frame">
                  <img
                    src="/assets/brand/yugs-neon-robot.png"
                    alt="Yugs neon robot product mark"
                    width={1254}
                    height={1254}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  <span>Product mark</span>
                  <span>Yugs Bot</span>
                </figcaption>
              </figure>

              <div className="yugs-copy reveal">
                <span className="hero-kicker">Introducing</span>
                <h2 className="yugs-name" id="yugs-title">
                  Yugs<span className="yugs-name-dot" aria-hidden="true">.</span>
                </h2>
                <p className="yugs-tagline">
                  Chat, create artifacts, and get things done faster.
                </p>
                <p className="yugs-body">
                  Yugs is the AI assistant built by Yugya Technologies — our own product, built and
                  maintained in-house, and open to anyone with a free account.
                </p>
                <div className="hero-actions">
                  <a
                    className="btn btn-primary"
                    href={YUGS_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Open Yugs <span className="arrow" aria-hidden="true">↗</span>
                  </a>
                  <a
                    className="btn btn-secondary"
                    href={`${YUGS_URL}register`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Create an account
                  </a>
                </div>
              </div>
            </div>

            <dl className="yugs-facts">
              <div>
                <dt>Product</dt>
                <dd>Yugs Bot</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>AI assistant / web app</dd>
              </div>
              <div>
                <dt>Built by</dt>
                <dd>Yugya Technologies</dd>
              </div>
              <div>
                <dt>Access</dt>
                <dd>Free sign-up</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="capabilities-title">
        <div className="shell">
          <div className="section-head">
            <span className="section-index" aria-hidden="true">01</span>
            <div>
              <h2 id="capabilities-title">What Yugya builds and maintains.</h2>
              <p>
                From a first business website to a web app or a server that needs looking after.
                Choose a service to see what you get and what happens next.
              </p>
            </div>
          </div>

          <div className="capability-list">
            <Link className="capability-row reveal" href="/services/#web-development">
              <span className="num">01</span>
              <h3>Website &amp; web app development</h3>
              <p>
                A site customers can visit to see what you offer, read about you and get in touch.
                We also build web apps when you need accounts, bookings or a logged-in area.
              </p>
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="capability-row reveal" href="/services/#server-infrastructure">
              <span className="num">02</span>
              <h3>Hosting, servers &amp; deployment</h3>
              <p>
                We set up and look after the place your website lives. Hosting accounts stay in
                your name, and you get the access and documents at handover.
              </p>
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="capability-row reveal" href="/services/#domain-dns">
              <span className="num">03</span>
              <h3>Domain &amp; web address guidance</h3>
              <p>
                Help choosing your web address (like <code>.com.np</code> or <code>.com</code>) and
                pointing it to the right place, including the paperwork for Nepal&apos;s .np domains.
              </p>
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="capability-row reveal" href="/services/#automation">
              <span className="num">04</span>
              <h3>Business automation &amp; AI</h3>
              <p>
                Small tools that take over repeated jobs, like copying data between sheets or
                forms. We use AI where it genuinely helps, not as a label.
              </p>
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="capability-row reveal" href="/services/#maintenance">
              <span className="num">05</span>
              <h3>Ongoing maintenance</h3>
              <p>
                Regular checks, updates and small fixes from someone you can email directly,
                after the launch is over.
              </p>
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="live-work-title">
        <div className="shell">
          <div className="section-head-split">
            <div>
              <span className="hero-kicker">Live client work</span>
              <h2 id="live-work-title">Websites you can open today.</h2>
            </div>
            <Link className="text-link" href="/work/#live-projects">
              View live projects <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
          <p style={{ maxWidth: "46rem", marginBottom: "2rem" }}>
            These are real sites, live on their own domains. Start with Kohinoor Restaurant if you
            run a restaurant, or Aama Pathshala if you run a school. Every project is shown at the
            same scale.
          </p>
          <LiveProjectIndex />
        </div>
      </section>

      <section className="section" aria-labelledby="demo-index-title">
        <div className="shell">
          <div className="section-head-split">
            <div>
              <span className="hero-kicker">Interactive demonstrations</span>
              <h2 id="demo-index-title">Operate our work in your browser.</h2>
            </div>
            <Link className="text-link" href="/work/#demos">
              All demos <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
          <p style={{ maxWidth: "46rem", marginBottom: "2rem" }}>
            Try five tools in your browser before you contact us: a restaurant site, a school
            tool, a shop stock ledger, a team board and a server console. Each uses fictional
            sample data and labels what is real, simulated or sample.
          </p>
          <DemoIndex />
        </div>
      </section>

      <section className="section section-dark manifesto" aria-labelledby="manifesto-title">
        <div className="shell">
          <svg
            className="ribbon-rule"
            viewBox="0 0 1200 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path d="M0 31C150 31 168 9 320 9s170 22 320 22 168-22 320-22 170 22 240 22" />
            <path d="M0 21C150 21 168 0 320 0s170 21 320 21 168-21 320-21 170 21 240 21" opacity=".55" />
          </svg>

          <div className="manifesto-grid">
            <div>
              <h2 id="manifesto-title" className="visually-hidden">How we work</h2>
              <blockquote>
                A clear scope. <em>Work you can see.</em> Everything in your hands.
              </blockquote>
              <p className="manifesto-note">
                Yugya is a small studio in Nepal. We build websites and tools for local businesses
                and organisations, and we state what we build, what you own and what happens next.
              </p>
            </div>

            <div className="principle-list">
              <div className="principle">
                <span className="num">01</span>
                <div>
                  <h3>Agree first, build second</h3>
                  <p>We agree what you need, what you will provide and what it costs before any work starts.</p>
                </div>
              </div>
              <div className="principle">
                <span className="num">02</span>
                <div>
                  <h3>Tools that stay simple to maintain</h3>
                  <p>We choose well-supported tools so later changes stay straightforward.</p>
                </div>
              </div>
              <div className="principle">
                <span className="num">03</span>
                <div>
                  <h3>You own what we build</h3>
                  <p>Files, domain settings and server access go to you at handover, with written notes.</p>
                </div>
              </div>
              <div className="principle">
                <span className="num">04</span>
                <div>
                  <h3>Honest descriptions</h3>
                  <p>No invented numbers, logos or results. We show the work itself.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-head">
            <span className="section-index" aria-hidden="true">02</span>
            <div>
              <h2 id="process-title">How working with us goes.</h2>
              <p>
                Four steps, with a written quote before any work starts and full access at the
                end.
              </p>
            </div>
          </div>

          <div className="process-grid">
            <div className="process-step reveal">
              <span className="num" aria-hidden="true">01</span>
              <h3>Tell us what you need</h3>
              <p>
                Send a short message. A rough idea is enough — we&apos;ll ask questions and check
                what you already have.
              </p>
            </div>
            <div className="process-step reveal">
              <span className="num" aria-hidden="true">02</span>
              <h3>Agree the plan</h3>
              <p>
                We agree the pages or features, the content you will provide and the cost in
                writing before we start.
              </p>
            </div>
            <div className="process-step reveal">
              <span className="num" aria-hidden="true">03</span>
              <h3>Build and check</h3>
              <p>
                We build in stages and check the site on phones, tablets and computers as we go.
              </p>
            </div>
            <div className="process-step reveal">
              <span className="num" aria-hidden="true">04</span>
              <h3>Launch and hand over</h3>
              <p>
                We publish the site, hand over all files and access, and fix bugs for 30 days
                after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="studio-title">
        <div className="shell">
          <div className="studio-grid">
            <figure className="logo-plate reveal">
              <picture>
                <source type="image/webp" srcSet="/assets/brand/yugya-logo.webp" />
                <img
                  src="/assets/brand/yugya-logo.png"
                  alt="Yugya logo with wordmark and tagline"
                  width={670}
                  height={535}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption>
                <span>Official lockup</span>
                <span>Static / full tagline</span>
              </figcaption>
            </figure>

            <div className="studio-copy reveal">
              <span className="hero-kicker">The studio</span>
              <h2 id="studio-title">A small studio in Nepal. Direct access to the people building it.</h2>
              <p>
                Yugya is an independent technology studio based in Kapilvastu / Rupandehi. We build
                websites and tools for local businesses and organisations.
              </p>
              <p>
                There are two founders. You speak directly with the people doing the work, from
                the first message to handover.
              </p>
              <dl className="studio-list">
                <div>
                  <dt>Based in</dt>
                  <dd>Kapilvastu / Rupandehi, Nepal · UTC +5:45</dd>
                </div>
                <div>
                  <dt>Working with</dt>
                  <dd>Local organizations in Nepal and remote clients</dd>
                </div>
                <div>
                  <dt>Direct contact</dt>
                  <dd><a href="mailto:hello@yugya.com">hello@yugya.com</a></dd>
                </div>
                <div>
                  <dt>Founders</dt>
                  <dd>
                    <Link href="/about/#founders">{FOUNDER_NAMES}</Link>
                  </dd>
                </div>
                <div>
                  <dt>Response aim</dt>
                  <dd>1–2 business days</dd>
                </div>
              </dl>
              <div className="hero-actions">
                <Link className="btn btn-secondary" href="/about/">
                  About the studio <span className="arrow" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="founders" aria-labelledby="home-founders-title">
        <div className="shell">
          <div className="section-head">
            <span className="section-index" aria-hidden="true">03</span>
            <div>
              <h2 id="home-founders-title">The two people you&apos;ll work with.</h2>
              <p>
                Yugya was founded by {FOUNDER_NAMES}. You can email either co-founder directly
                about a project.
              </p>
            </div>
          </div>
          <FounderCards />
        </div>
      </section>

      <section className="section cta" aria-labelledby="cta-title">
        <div className="shell">
          <div className="cta-grid">
            <div>
              <h2 id="cta-title">Tell us what you need. We&apos;ll explain what&apos;s possible.</h2>
              <p>
                A first website, a redesign, hosting help, or a tool for repeated work — a rough
                description is enough. We&apos;ll reply with questions and a written quote.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/contact/">
                  Send a project enquiry <span className="arrow" aria-hidden="true">↗</span>
                </Link>
                <a className="btn btn-secondary" href="mailto:hello@yugya.com">
                  Email hello@yugya.com
                </a>
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
