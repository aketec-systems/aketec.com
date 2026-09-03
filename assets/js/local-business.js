/*
 * Injects JSON-LD for the homepage, sourced entirely from
 * assets/js/company.js (window.AKETEC_COMPANY) — see website brief
 * section 6. Load this after company.js.
 *
 * Emits a WebSite entity plus the ProfessionalService/LocalBusiness
 * entity, linked via @id, as a single @graph. This is the on-page half
 * of getting Google to represent AKETEC properly (name, address, phone,
 * service area, same-as identity) — the front-facing action buttons
 * (Call, Directions) in search results come from the Google Business
 * Profile, not from page markup; that profile is created separately and
 * is pending Google's verification.
 */
(function () {
  function inject() {
    var c = window.AKETEC_COMPANY;
    if (!c) return;

    var data = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://aketec.com/#website",
          "name": c.operatingName,
          "url": "https://aketec.com/"
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://aketec.com/#business",
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
        }
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
