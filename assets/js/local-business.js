/*
 * Injects ProfessionalService JSON-LD for the homepage, sourced entirely
 * from assets/js/company.js (window.AKETEC_COMPANY) — see website brief
 * section 6. Load this after company.js.
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
      ],
      "sameAs": ["https://www.linkedin.com/company/aketec/"]
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
