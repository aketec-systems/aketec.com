/*
 * Single source of truth for AKETEC company facts.
 * Every appearance of these values on the site should render from here —
 * see website brief.md section 2. Do not hardcode duplicates elsewhere;
 * add a `data-c="fieldName"` (text) or `data-c-href="email|phone"` (link)
 * attribute to the element instead.
 */
(function () {
  var COMPANY = {
    legalEntity: "Alkebuleum Technology LLC",
    operatingName: "AKETEC",
    contactName: "Ernesto Herbert",
    contactTitle: "Founder / CEO",
    email: "info@aketec.com",
    phone: "+1 (240) 495-8592",
    phoneTel: "+12404958592",
    city: "Hutto",
    state: "Texas",
    postalCode: "78634",
    // [VERIFY] formation year — see website brief.md section 2, item 2
    businessType: "Small business · LLC · State of Texas · Est. 2024",
    chamber: "Hutto Chamber of Commerce member",
    coverage: "Central Texas on-site · Nationwide remote delivery",
    // Set by Ernesto (commit 165891e). NOTE: the capability statement PDF
    // (assets/docs/aketec-capability-statement.pdf) still reads "Pending
    // SAM.gov registration" for both UEI and CAGE — that PDF is stale
    // relative to this value and should be regenerated. Flagged in report,
    // not corrected here (binary asset, outside this repo's frontend scope).
    uei: "P97FZE6L9LK7",
    cage: "Not yet assigned — issued by DLA during SAM registration",
    // Exact required phrasing — see the CRITICAL block in brief section 2.
    // Never render "SAM.gov registered", "federally registered", or
    // "government/federal contractor" anywhere on the site.
    samStatus: "UEI assigned · SAM.gov registration in progress",
    // [VERIFY] Texas CMBL status — see website brief.md section 2, item 2
    cmbl: "Texas CMBL registration in progress",
    naics: "541511 (primary) · 541512 · 541519 · 541611 · 541690 · 518210",
    psc: "DA01 · DF01 · DJ01 · DC01",
    contractTypes: "Firm-fixed-price · Labor-hour · T&M · Prime or subcontractor",
    // Flagged as an open decision for Ernesto — see brief section 2, item 3.
    // Wording kept exactly as specified; do not soften or embellish.
    insurance: "General liability, professional liability (E&O), and cyber liability bound prior to contract award. Certificates furnished on request."
  };

  window.AKETEC_COMPANY = COMPANY;

  function render() {
    var els = document.querySelectorAll("[data-c]");
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute("data-c");
      if (Object.prototype.hasOwnProperty.call(COMPANY, key)) {
        els[i].textContent = COMPANY[key];
      }
    }
    var links = document.querySelectorAll("[data-c-href]");
    for (var j = 0; j < links.length; j++) {
      var kind = links[j].getAttribute("data-c-href");
      if (kind === "email") links[j].setAttribute("href", "mailto:" + COMPANY.email);
      if (kind === "phone") links[j].setAttribute("href", "tel:" + COMPANY.phoneTel);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
