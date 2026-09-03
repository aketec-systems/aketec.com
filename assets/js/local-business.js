/*
 * Injects ProfessionalService JSON-LD for the homepage, sourced entirely
 * from assets/js/company.js (window.AKETEC_COMPANY) — see website brief
 * section 6. Load this after company.js.
 *
 * `sameAs` (LinkedIn company page) is intentionally omitted: the only
 * record of it is aketec-brand/linkedin/SETUP.txt, which hedges between
 * linkedin.com/company/aketec and a /aketec-systems fallback and is not
 * confirmation either URL is actually live. Add it once confirmed.
 */
(function () {
  function inject() {
    var c = window.AKETEC_COMPANY;
    if (!c) return;

    var data = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": c.operatingName,
      "legalName": c.legalEntity,
      "url": "https://aketec.com/",
      "email": c.email,
      "telephone": c.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": c.city,
        "addressRegion": "TX",
        "postalCode": c.postalCode,
        "addressCountry": "US"
      },
      "areaServed": [
        "Hutto, TX",
        "Round Rock, TX",
        "Georgetown, TX",
        "Pflugerville, TX",
        "Austin, TX",
        "Texas"
      ]
    };

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
