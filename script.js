(function () {
  "use strict";

  function cleanPayload(payload) {
    return Object.fromEntries(Object.entries(payload || {}).filter(([, value]) => value !== undefined && value !== ""));
  }

  function trackEvent(name, payload) {
    if (!name) return;
    const details = cleanPayload(payload);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...details });
    if (typeof window.gtag === "function") window.gtag("event", name, details);
    if (typeof window.fbq === "function") window.fbq("trackCustom", name, details);
  }

  window.siteTrackEvent = trackEvent;

  document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("current-year");
    if (year) year.textContent = new Date().getFullYear();

    document.querySelectorAll("a[data-track]").forEach(function (link) {
      link.addEventListener("click", function () {
        const eventName = link.dataset.track;
        trackEvent(eventName, {
          location: link.dataset.location,
          package: link.dataset.package,
          destination: link.hostname
        });
        if (eventName === "whatsapp_package_click") {
          trackEvent("order_intent", { location: "packages", package: link.dataset.package });
        }
      });
    });

    document.querySelectorAll("details.faq-item").forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        const summary = item.querySelector("summary");
        trackEvent("faq_interaction", { action: "open", question: summary ? summary.textContent.trim() : "faq" });
      });
    });

    const reachedDepths = new Set();
    let ticking = false;

    function checkScrollDepth() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = Math.round((window.scrollY / scrollable) * 100);
      [25, 50, 75, 90].forEach(function (depth) {
        if (percent >= depth && !reachedDepths.has(depth)) {
          reachedDepths.add(depth);
          trackEvent("scroll_depth_" + depth, { percent: depth });
        }
      });
    }

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        checkScrollDepth();
        ticking = false;
      });
    }, { passive: true });
    checkScrollDepth();
  });
})();
