import { FOUNDERS, SITE_EMAIL, SITE_URL } from "./site";

/**
 * Schema.org nodes for the site. Everything described here is stated in the
 * visible page copy — no ratings, review counts, awards, opening hours or
 * social profiles are invented. Nodes are emitted as one JSON-LD @graph from
 * `components/JsonLd.tsx`.
 */

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const ORGANIZATION_DESCRIPTION =
  "Small independent technology studio in Nepal that designs and builds websites, web applications and tools, and helps with hosting, domains and maintenance.";

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Yugya",
    alternateName: "Yugya Technologies",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/brand/yugya-logo.png`,
      width: 670,
      height: 535,
    },
    email: SITE_EMAIL,
    description: ORGANIZATION_DESCRIPTION,
    founder: FOUNDERS.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
      email: founder.email,
      url: founder.portfolio,
      worksFor: { "@id": ORGANIZATION_ID },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kapilvastu / Rupandehi",
      addressRegion: "Lumbini Province",
      addressCountry: "NP",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    knowsAbout: [
      "Website development",
      "Web application development",
      "Custom software development",
      "Linux server administration",
      "VPS hosting and deployment",
      "Domain name system (DNS)",
      "Business process automation",
      "Website maintenance",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE_EMAIL,
      areaServed: "NP",
      availableLanguage: ["English"],
    },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Yugya",
    alternateName: "Yugya Technologies",
    description: ORGANIZATION_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

type WebPageOptions = {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage";
};

export function webPageNode({
  path,
  name,
  description,
  type = "WebPage",
}: WebPageOptions) {
  const url = `${SITE_URL}${path}`;

  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/**
 * The five service scopes shown on /services/. Names, descriptions and URLs
 * mirror the visible articles and their section anchors.
 */
export const SERVICE_NODES = [
  {
    "@type": "Service",
    "@id": `${SITE_URL}/services/#web-development`,
    name: "Website & web application development",
    serviceType: "Website and web application development",
    description:
      "Websites customers can visit to see what a business offers and get in touch, plus web applications with accounts, bookings or logged-in areas.",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Nepal" },
    url: `${SITE_URL}/services/#web-development`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/services/#server-infrastructure`,
    name: "Hosting, servers & deployment",
    serviceType: "Linux server setup and deployment",
    description:
      "Setup and upkeep of the server where a website lives, with documented access, security checks and hosting accounts owned by the client.",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Nepal" },
    url: `${SITE_URL}/services/#server-infrastructure`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/services/#domain-dns`,
    name: "Domain & web address setup",
    serviceType: "Domain registration guidance and DNS configuration",
    description:
      "Help choosing and setting up a web address, including Nepal .np paperwork, DNS settings and email records, with the account in the client's name.",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Nepal" },
    url: `${SITE_URL}/services/#domain-dns`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/services/#automation`,
    name: "Automation & practical AI",
    serviceType: "Business process automation",
    description:
      "Small tools and scripts that take over repeated manual work such as copying data between sheets and forms, with AI used only where it helps.",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Nepal" },
    url: `${SITE_URL}/services/#automation`,
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/services/#maintenance`,
    name: "Ongoing maintenance",
    serviceType: "Website and server maintenance",
    description:
      "Regular updates, security checks, backups and small fixes for websites and servers, with a short summary after each billing cycle.",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Nepal" },
    url: `${SITE_URL}/services/#maintenance`,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * FAQPage node for the visible questions on /contact/. Google limits FAQ rich
 * results to a small set of authoritative sites, so this is emitted for
 * entity/answer understanding, not as a promise of a rich result.
 */
export function faqPageNode({
  path,
  name,
  description,
  items,
}: WebPageOptions & { items: FaqItem[] }) {
  const url = `${SITE_URL}${path}`;

  return {
    "@type": "FAQPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
