"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

/**
 * Cal.com inline booking, shown inside a modal.
 * Embed config is the exact snippet from cal.com (mo7albader/30min, month view).
 */
export default function CalModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [ready, setReady] = useState(false);

  // load + mount the Cal inline embed whenever the modal opens
  useEffect(() => {
    if (!open) return;
    setReady(false);

    // --- Cal.com embed loader (verbatim) ---
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = window.Cal;
    Cal("init", "30min", { origin: "https://app.cal.com" });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
    Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "mo7albader/30min",
    });
    Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    Cal.ns["30min"]("on", {
      action: "linkReady",
      callback: () => setReady(true),
    });
    // fallback in case the embed doesn't emit linkReady
    const fallback = window.setTimeout(() => setReady(true), 4000);
    return () => window.clearTimeout(fallback);
  }, [open]);

  // Escape to close + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        dir="ltr"
        className="relative z-10 flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-[#0c0c0c] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute end-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full border border-line bg-black/60 text-white/80 backdrop-blur transition-colors hover:border-accent hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {/* loading skeleton while the Cal.com iframe boots */}
        {!ready && (
          <div className="absolute inset-0 z-10 grid place-items-center bg-[#0c0c0c]">
            <div className="flex flex-col items-center gap-3">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-white/70" />
              <span className="text-sm text-white/50">Loading booking calendar…</span>
            </div>
          </div>
        )}
        {/* Cal inline embed mounts here */}
        <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-30min" />
      </div>
    </div>
  );
}
