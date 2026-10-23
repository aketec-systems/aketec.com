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
    businessType: "Small business · LLC · State of Texas · Est. 2024",
    chamber: "Hutto Chamber of Commerce member",
    coverage: "Central Texas on-site · Nationwide remote delivery",
    // Confirmed active by SAM.gov email 2026-10-23; CAGE assigned by DLA.
    // Matches assets/docs/aketec-capability-statement.pdf.
    uei: "P97FZE6L9LK7",
    cage: "258P2",
    // Exact required phrasing — see the CRITICAL block in brief section 2.
    // Registration renews annually; if it ever lapses, change this the same
    // day. Never render "government/federal contractor", awards, or past
    // performance anywhere on the site.
    samStatus: "SAM.gov registration active",
    // Annual renewal date from the SAM.gov entity record (2027-09-10).
    // Update after each renewal.
    samExpires: "September 10, 2027",
    // Filed 2026-10-23 (CMBL vendor no. on file — not published here, since
    // the Texas vendor number embeds the EIN). Registration, not HUB
    // certification; do not describe it as "certified".
    cmbl: "Texas CMBL registered",
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
