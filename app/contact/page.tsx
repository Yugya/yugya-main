import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { faqPageNode, type FaqItem } from "@/lib/schema";

const CONTACT_TITLE = "Contact Yugya — Website Development Enquiry";
const CONTACT_DESCRIPTION =
  "Tell Yugya about your business and what you need online. No technical brief required. Written scope, itemised quote and a reply within 1–2 business days.";

export const metadata = pageMetadata({
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  path: "/contact/",
  ogDescription:
    "Start with a plain message. We reply with questions, a suggested approach and a written quote.",
});

const CONTACT_FAQS: FaqItem[] = [
  {
    question: "How much does a business website cost in Nepal?",
    answer:
      "It depends on the pages, features and content work. We do not publish fixed packages because two projects with the same page count can need very different work. After a short requirements review, we send an itemised scope and a written quote. Domain and hosting are paid directly by you to the provider.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the number of pages, the content you provide and the features involved. We give you a realistic timeline in the written quote after we review your requirements. We do not promise a fixed delivery time before we know the scope.",
  },
  {
    question: "Do I need to buy a domain separately?",
    answer:
      "A domain is your web address, such as yourbusiness.com.np. The account is created in your name and billed directly to you. If you want a Nepal .np address, we help prepare the required paperwork.",
  },
  {
    question: "Do I need hosting?",
    answer:
      "Yes. Hosting is the computer where your website lives. We set it up in an account you own and pay for directly, such as Cloudflare Pages or a cloud server. We do not resell shared hosting.",
  },
  {
    question: "Can I update my website later?",
    answer:
      "Yes. You receive a short written guide for changing text and images. If you would rather not do it yourself, minor updates are part of the monthly maintenance option.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Yes. We check layouts on phones, tablets and computers before launch.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Send us the current address and what you would like changed. We review it and send a written scope and quote.",
  },
  {
    question: "What happens after my website goes live?",
    answer:
      "We hand over all files, access and documents. Bug fixes are included for 30 calendar days after launch. After that you can maintain it yourself or use our monthly maintenance service.",
  },
  {
    question: "Who maintains the website?",
    answer:
      "That is your choice. We provide the documents and access for your own team, or you can use our scheduled monthly maintenance for updates, checks and small fixes.",
  },
  {
    question: "How is work billed?",
    answer:
      "By milestone: a deposit at kick-off, a progress milestone after the plan is approved, and the balance on deployment and handover.",
  },
  {
    question: "Do you assist with .com.np domain registration?",
    answer:
      "Yes. In Nepal, official .np domains are administered by Mercantile Communication. We help prepare the cover letters and registration documentation.",
  },
];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    faqPageNode({
      path: "/contact/",
      name: CONTACT_TITLE,
      description: CONTACT_DESCRIPTION,
      items: CONTACT_FAQS,
    }),
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <main id="main">
      <section className="page-hero">
        <div className="shell">
          <div className="page-hero-grid">
            <div>
              <span className="hero-kicker">Direct contact</span>
              <h1>Tell us what you need. We&apos;ll take it from there.</h1>
              <p className="lead">
                You don&apos;t need a technical brief or the right vocabulary. Tell us what your
                business does and what you want online. We&apos;ll ask a few questions and send a
                written scope and quote.
              </p>
              <p className="page-note">
                We review each enquiry and reply with questions, a suggested approach and a written
                quote.
              </p>
            </div>

            <div className="page-aside">
              <h2>Direct details</h2>
              <ul>
                <li><span className="num">01</span><a href="mailto:hello@yugya.com">hello@yugya.com</a></li>
                <li><span className="num">02</span><span>Kapilvastu / Rupandehi, Nepal · UTC +5:45</span></li>
                <li><span className="num">03</span><span>Aim to reply within 1–2 business days</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="contact-grid">
            <div className="contact-guide">
              <span className="hero-kicker">Direct email</span>
              <h2>Prefer to email us directly?</h2>
              <p>
                Send a short note to hello@yugya.com. The details below help us reply usefully, but
                you don&apos;t need all of them.
              </p>
              <a className="direct-email" href="mailto:hello@yugya.com">
                hello@yugya.com <span aria-hidden="true">↗</span>
              </a>
              <p className="contact-note">
                <strong>Response aim:</strong> We review incoming messages and aim to reply within
                1–2 business days.
              </p>

              <ol className="checklist">
                <li>
                  <span className="num" aria-hidden="true">01</span>
                  <span>
                    <strong>Your business:</strong> What do you do, and who are your customers?
                  </span>
                </li>
                <li>
                  <span className="num" aria-hidden="true">02</span>
                  <span>
                    <strong>What you want:</strong> A new website, changes to an existing one,
                    hosting help, or something else? A rough idea is enough.
                  </span>
                </li>
                <li>
                  <span className="num" aria-hidden="true">03</span>
                  <span>
                    <strong>What you already have:</strong> A Facebook page, an old website, a
                    domain name? If you&apos;re not sure, just say so.
                  </span>
                </li>
                <li>
                  <span className="num" aria-hidden="true">04</span>
                  <span>
                    <strong>Any date in mind:</strong> A launch date or event, if you have one.
                    &apos;No fixed date&apos; is fine.
                  </span>
                </li>
              </ol>
            </div>

            <div className="form-panel">
              <h2>Send an enquiry</h2>
              <p>
                Fill in what you know. If a field doesn&apos;t apply, leave it blank or write
                &apos;not sure&apos;.
              </p>

              <div className="form-note">
                <strong>How this form works:</strong> It prepares an email draft addressed to{" "}
                <code>hello@yugya.com</code>. Nothing is sent until you press Send in your email
                app. You can also copy the text to paste into webmail.
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" aria-labelledby="faq-title">
        <div className="shell">
          <div className="page-hero-grid" style={{ alignItems: "start" }}>
            <div>
              <span className="hero-kicker">Frequently asked questions</span>
              <h2 id="faq-title">Questions people ask before starting.</h2>
              <p>
                Short answers to the practical questions that come up before a project begins.
              </p>
            </div>

            <div className="faq">
              {CONTACT_FAQS.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
