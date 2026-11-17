"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { SITE_EMAIL } from "@/lib/site";

// Values stay unchanged: /contact/?service=web|vps|dns|automation|maintenance
// matches them by substring. Only the visible labels are customer-facing.
const SERVICE_OPTIONS = [
  { value: "Website & Web App Development", label: "A website or web app" },
  { value: "Linux Server Setup & VPS Hardening", label: "Hosting or server setup" },
  { value: "Domain Registration & DNS Guidance", label: "A domain name / web address" },
  { value: "Business Automation & Scripting", label: "Automation for repeated work" },
  { value: "Ongoing Technical Maintenance", label: "Ongoing maintenance and support" },
  { value: "General Technical Consultation", label: "Not sure yet — give me advice" },
];

const TIMELINE_OPTIONS = [
  { value: "Flexible / Exploring", label: "No fixed date / exploring" },
  { value: "Within 1 month", label: "Within 1 month" },
  { value: "1 to 3 months", label: "1 to 3 months" },
  { value: "Ongoing Maintenance", label: "Ongoing monthly maintenance" },
];

type EnquiryData = {
  name: string;
  email: string;
  org: string;
  service: string;
  timeline: string;
  details: string;
};

type FormStatus = {
  tone: "success" | "error";
  content: ReactNode;
};

function formatEnquiryText(data: EnquiryData): string {
  return [
    "==========================================",
    "WEBSITE / PROJECT ENQUIRY FOR YUGYA (hello@yugya.com)",
    "==========================================",
    `Full Name:            ${data.name}`,
    `Email:                ${data.email}`,
    `Business / org:       ${data.org || "Not specified"}`,
    `What you need:        ${data.service}`,
    `When you need it:     ${data.timeline || "Flexible"}`,
    "------------------------------------------",
    "ABOUT YOUR BUSINESS AND WHAT YOU WANT:",
    data.details,
    "==========================================",
  ].join("\n");
}

export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);

  // Only the description is stateful because the character counter reads it.
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<FormStatus | null>(null);

  // Preselect a service from links such as /contact/?service=vps. This only
  // touches the DOM, so the select stays uncontrolled and no render is forced.
  useEffect(() => {
    const select = serviceRef.current;
    const serviceParam = new URLSearchParams(window.location.search).get("service");
    if (!select || !serviceParam) return;

    const match = Array.from(select.options).find((option) =>
      option.value.toLowerCase().includes(serviceParam.toLowerCase())
    );
    if (match) select.value = match.value;
  }, []);

  const detailLength = details.trim().length;

  const readForm = (): EnquiryData => {
    const data = formRef.current ? new FormData(formRef.current) : null;
    const value = (key: string) => String(data?.get(key) ?? "").trim();

    return {
      name: value("name"),
      email: value("email"),
      org: value("organization"),
      service: value("service") || "Not selected",
      timeline: value("timeline") || "Not specified",
      details: value("details"),
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;

    const data = readForm();

    if (data.details.length < 25) {
      setStatus({
        tone: "error",
        content:
          "Please tell us a little more about your business and what you want, so we can reply with useful questions.",
      });
      detailsRef.current?.focus();
      return;
    }

    const subject = encodeURIComponent(`Enquiry: ${data.service} — ${data.name}`);
    const body = encodeURIComponent(formatEnquiryText(data));
    const mailtoUrl = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;

    setStatus({
      tone: "success",
      content: (
        <>
          <strong>Your email draft is ready. Nothing has been sent yet.</strong> Review it in your
          email app and press Send to reach <code>{SITE_EMAIL}</code>.
          <br />
          If the draft did not open, use <a href={mailtoUrl}>this direct email link</a> or{" "}
          <strong>Copy enquiry text</strong> to paste it into webmail.
        </>
      ),
    });

    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    const data = readForm();

    if (!data.name || !data.email || !data.details) {
      setStatus({
        tone: "error",
        content:
          "Please complete your name, email and description before copying the enquiry.",
      });
      return;
    }

    const formatted = formatEnquiryText(data);

    try {
      await navigator.clipboard.writeText(formatted);
      setStatus({
        tone: "success",
        content: (
          <>
            <strong>Enquiry copied.</strong> Paste it into your email app and send it to{" "}
            <code>{SITE_EMAIL}</code>.
          </>
        ),
      });
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = formatted;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand("copy");
        setStatus({
          tone: "success",
          content: (
            <>
              <strong>Enquiry copied.</strong> Paste it into your email app and send it to{" "}
              <code>{SITE_EMAIL}</code>.
            </>
          ),
        });
      } catch {
        setStatus({
          tone: "error",
          content: "Couldn't copy automatically. Please email hello@yugya.com instead.",
        });
      }

      document.body.removeChild(textarea);
    }
  };

  return (
    <form id="enquiryForm" ref={formRef} noValidate onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="clientName">
            Full name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="clientName"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="clientEmail">
            Email address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="clientEmail"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="clientOrg">
            Business / organisation name <span className="hint">(optional)</span>
          </label>
          <input
            type="text"
            id="clientOrg"
            name="organization"
            autoComplete="organization"
            placeholder="e.g. your shop, school or company name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="timelineGoal">
            When do you need it? <span className="hint">(optional)</span>
          </label>
          <select id="timelineGoal" name="timeline" defaultValue="Flexible / Exploring">
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="serviceCategory">
          What do you need help with? <span className="required">*</span>
        </label>
        <select
          ref={serviceRef}
          id="serviceCategory"
          name="service"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Choose the closest option…
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="projectDetails">
          Tell us about your business and what you want <span className="required">*</span>
        </label>
        <textarea
          id="projectDetails"
          name="details"
          ref={detailsRef}
          placeholder="For example: We run a restaurant in Butwal. We want a site with our menu, photos, location and phone number. We already have a Facebook page."
          required
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        />
        <div className="char-counter">
          <span
            id="charCount"
            style={{
              color: detailLength >= 25 ? "var(--color-accent)" : "var(--color-muted)",
            }}
          >
            {detailLength} / 25 characters minimum
          </span>
          <span>A few sentences help us reply with useful questions</span>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" id="submitFormBtn">
          Open email draft <span className="arrow" aria-hidden="true">↗</span>
        </button>
        <button type="button" className="btn btn-secondary" id="copyEnquiryBtn" onClick={handleCopy}>
          Copy enquiry text
        </button>
      </div>

      <div
        className={`form-status${status ? ` ${status.tone} show` : ""}`}
        id="formStatus"
        role="status"
        aria-live="polite"
      >
        {status?.content}
      </div>
    </form>
  );
}
