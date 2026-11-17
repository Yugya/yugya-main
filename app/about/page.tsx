import Link from "next/link";
import FounderCards from "@/components/FounderCards";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { webPageNode } from "@/lib/schema";
import { FOUNDER_NAMES } from "@/lib/site";

const ABOUT_TITLE = "About Yugya — Web Development Studio in Nepal";
const ABOUT_DESCRIPTION =
  "Yugya is a small, independent web development studio in Nepal. Meet the two founders and learn how we scope, build and hand over each project.";

export const metadata = pageMetadata({
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  path: "/about/",
  ogDescription:
    "Two founders in Kapilvastu / Rupandehi building websites and tools, with direct contact and full handover.",
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webPageNode({
      path: "/about/",
      name: ABOUT_TITLE,
      description: ABOUT_DESCRIPTION,
      type: "AboutPage",
    }),
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <main id="main">
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero-grid">
            <div>
              <span className="hero-kicker">About Yugya</span>
              <h1>A small studio you can talk to directly.</h1>
              <p className="lead">
                Yugya is an independent technology studio in Nepal. We build websites and tools for
                businesses, schools and organisations. Two founders work directly with clients
                from the first message to handover.
              </p>
              <p className="page-note">
                We agree the scope in writing, keep the work understandable and hand over
                everything when it is done.
              </p>
            </div>

            <figure className="logo-plate">
              <picture>
                <source type="image/webp" srcSet="/assets/brand/yugya-logo.webp" />
                <img
                  src="/assets/brand/yugya-logo.png"
                  alt="Yugya logo with wordmark and tagline"
                  width={670}
                  height={535}
                />
              </picture>
              <figcaption>
                <span>Official lockup</span>
                <span>Static / full tagline</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="shell">
          <div className="about-grid">
            <div>
              <span className="hero-kicker">Company purpose</span>
              <h2 className="about-statement">Useful technology, honestly explained.</h2>
            </div>
            <div>
              <p className="lead">
                Yugya was started in Nepal to help local businesses and organisations get a clear,
                dependable website without wading through jargon.
              </p>
              <p>
                Some projects need only an information site. Others need a web app, a server setup
                or a tool for repeated work. We use well-supported tools and document what we
                build, so changes later stay straightforward.
              </p>
              <p>
                You work directly with the people doing the work, from the first question to
                handover.
              </p>

              <dl className="ledger-note">
                <div>
                  <dt>Focus</dt>
                  <dd>Websites, tools &amp; server systems</dd>
                </div>
                <div>
                  <dt>Base</dt>
                  <dd>Nepal · UTC +5:45</dd>
                </div>
                <div>
                  <dt>Engagement</dt>
                  <dd>Local and remote projects</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="principles">
        <div className="shell">
          <div className="section-head">
            <span className="section-index" aria-hidden="true">01</span>
            <div>
              <h2>How we work.</h2>
              <p>
                Four commitments that shape every project.
              </p>
            </div>
          </div>

          <div className="principle-list-large">
            <div className="principle-row reveal">
              <span className="num" aria-hidden="true">01</span>
              <h3>Agree first, build second</h3>
              <p>
                We agree what you need, what you will provide and what it costs before any work
                begins. That keeps surprises out of the process.
              </p>
            </div>
            <div className="principle-row reveal">
              <span className="num" aria-hidden="true">02</span>
              <h3>Tools that stay simple to maintain</h3>
              <p>
                We choose tools with a track record and good documentation, not stacks that add
                upkeep for no clear reason.
              </p>
            </div>
            <div className="principle-row reveal">
              <span className="num" aria-hidden="true">03</span>
              <h3>You own what we build</h3>
              <p>
                Files, domain settings and server access are handed over to you, with notes any
                developer can follow.
              </p>
            </div>
            <div className="principle-row reveal">
              <span className="num" aria-hidden="true">04</span>
              <h3>Honest descriptions</h3>
              <p>
                We say what we built and what we did not. No invented numbers, logos or results —
                the work is there for you to check.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="founders" aria-labelledby="founders-title">
        <div className="shell">
          <div className="section-head">
            <span className="section-index" aria-hidden="true">02</span>
            <div>
              <h2 id="founders-title">The two people you&apos;ll work with.</h2>
              <p>
                Yugya was founded by {FOUNDER_NAMES}. You can email either co-founder directly
                about a project.
              </p>
            </div>
          </div>

          <FounderCards />
        </div>
      </section>

      <section className="section" aria-labelledby="location-title">
        <div className="shell">
          <div className="about-grid">
            <div>
              <span className="hero-kicker">Location &amp; collaboration</span>
              <h2 id="location-title">Based in Nepal. Easy to reach.</h2>
            </div>
            <div>
              <p>
                Yugya is based in Kapilvastu / Rupandehi, Nepal (UTC +5:45). We work with local
                organisations in Nepal as well as remote clients.
              </p>
              <p>
                We use email, written notes and direct messages. You speak directly with the
                engineer on your project. We do not run a 24/7 call centre; we aim to reply within
                1–2 business days during business hours.
              </p>

              <div className="location-panel">
                <div>
                  <span className="label">Primary contact email</span>
                  <p style={{ marginTop: "0.35rem" }}>
                    <a href="mailto:hello@yugya.com">hello@yugya.com</a>
                  </p>
                </div>
                <Link className="btn btn-secondary" href="/contact/">
                  Send an enquiry <span className="arrow" aria-hidden="true">↗</span>
                </Link>
              </div>

              <dl className="ledger-note">
                <div>
                  <dt>Working hours</dt>
                  <dd>Business hours, UTC +5:45</dd>
                </div>
                <div>
                  <dt>Response aim</dt>
                  <dd>1–2 business days</dd>
                </div>
                <div>
                  <dt>Communication</dt>
                  <dd>Direct email &amp; written notes</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta" aria-labelledby="about-cta-title">
        <div className="shell">
          <div className="cta-grid">
            <div>
              <h2 id="about-cta-title">Want to know who you&apos;d be working with?</h2>
              <p>
                Send a short message about your business and what you need online. We&apos;ll reply
                with questions and a written quote.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/contact/">
                  Discuss your requirements <span className="arrow" aria-hidden="true">↗</span>
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
