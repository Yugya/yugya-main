"use client";

import { YUGS_URL } from "@/lib/site";

/**
 * Site-wide release strip above the header. It announces the in-house product
 * without competing with the page: one line, one link, one dismiss control.
 *
 * Dismissal is written straight to <html data-announce="off"> and to
 * localStorage, so the pre-paint script in app/layout.tsx can hide the bar
 * before the first frame on later visits. No state is needed: CSS owns the
 * visibility and the node stays in the tree.
 */
export default function AnnouncementBar() {
  const dismiss = () => {
    document.documentElement.dataset.announce = "off";
    try {
      localStorage.setItem("yugya-announce", "off");
    } catch {}
  };

  return (
    <aside className="announce" aria-label="Announcement">
      <div className="shell announce-inner">
        <p className="announce-copy">
          <span className="announce-flag">
            <span className="announce-dot" aria-hidden="true" />
            New product
          </span>{" "}
          <span className="announce-text">
            <strong>Yugs</strong> — the AI assistant built in-house by Yugya — is open with a free
            account.
          </span>
        </p>
        <div className="announce-actions">
          <a
            className="announce-link"
            href={YUGS_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            Open Yugs <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="announce-close"
            onClick={dismiss}
            aria-label="Dismiss announcement"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
