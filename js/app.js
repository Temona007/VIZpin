/* VIZpin quote desk. Catalog figures are workspace defaults an administrator can replace. */

const ACCESS = {
  employee: "team-access",
  admin: "admin-access",
};

const STORAGE_KEY = "vizpin-quote-mvp-v1";

const SEED_PRODUCTS = [
  {
    id: "vpslc",
    sku: "VPSLC",
    name: "Lever Set",
    category: "Locks",
    summary: "ANSI Grade 1 cylindrical smart lock. Smartkey, key, or fob. No network at the door.",
    msrp: 589,
    active: true,
    finishes: [
      { name: "Stainless", code: "626", upcharge: 0, note: "" },
      { name: "Matte Black", code: "631", upcharge: 30, note: "" },
      { name: "Nickel", code: "619", upcharge: 0, note: "Custom order" },
    ],
    options: [
      { key: "lever", label: "Lever", choices: ["Portfolio", "Silhouette"] },
      { key: "backset", label: "Backset", choices: ["2-3/4 in", "2-3/8 in"] },
      { key: "strike", label: "Strike", choices: ["ANSI", "Full lip"] },
      { key: "handing", label: "Handing", choices: ["RH", "LH"] },
    ],
  },
  {
    id: "vpdb",
    sku: "VPDB",
    name: "Deadbolt",
    category: "Locks",
    summary: "ANSI Grade 2 deadbolt with thumb-turn inside and adjustable backset.",
    msrp: 469,
    active: true,
    finishes: [
      { name: "Matte Black", code: "631", upcharge: 0, note: "" },
      { name: "Nickel", code: "619", upcharge: 45, note: "Custom order" },
    ],
    options: [],
  },
  {
    id: "vp2",
    sku: "VP2",
    name: "Door/Gate Controller",
    category: "Controllers",
    summary: "Bluetooth controller for strikes, mag locks, and gates. Read range up to 30 ft.",
    msrp: 449,
    active: true,
    finishes: [],
    options: [],
  },
  {
    id: "vp2x",
    sku: "VP2X",
    name: "vProx Long-Range Reader",
    category: "Controllers",
    summary: "Long-range Bluetooth reader for upgrading an existing access system.",
    msrp: 379,
    active: true,
    finishes: [],
    options: [],
  },
  {
    id: "vps",
    sku: "VPS",
    name: "Solar Kit",
    category: "Kits",
    summary: "Controller, solar panel, battery, and enclosure for a 12V strike where power is limited.",
    msrp: 699,
    active: true,
    finishes: [],
    options: [],
  },
  {
    id: "keypadm",
    sku: "KEYPADM",
    name: "VIZitor Keypad",
    category: "Visitor",
    summary: "Anti-vandal keypad for permanent or one-time visitor codes. Pairs with a door controller.",
    msrp: 289,
    active: true,
    finishes: [],
    options: [],
  },
  {
    id: "intp",
    sku: "INT-P",
    name: "Video Intercom Panel",
    category: "Visitor",
    summary: "Vandal-resistant touchscreen intercom. One PoE cable. Residents answer on a phone.",
    msrp: 633,
    active: true,
    finishes: [],
    options: [],
  },
  {
    id: "fob10",
    sku: "FOB-10",
    name: "Smart Fob, 10-pack",
    category: "Accessories",
    summary: "Encrypted fobs for people who do not use the smartphone app.",
    msrp: 79,
    active: true,
    finishes: [],
    options: [],
  },
];

const SEED_SERVICES = [
  {
    id: "plus1",
    sku: "PLUS-1",
    name: "PLUS Cloud, 1 Year",
    unit: "per device",
    msrp: 96,
    active: true,
    summary: "Schedules, 30-day history, notifications, and electronics coverage for the life of an active plan.",
  },
  {
    id: "plus3",
    sku: "PLUS-3",
    name: "PLUS Cloud, 3 Year",
    unit: "per device",
    msrp: 249,
    active: true,
    summary: "Three-year PLUS plan for controllers, lever sets, and deadbolts.",
  },
  {
    id: "viz1",
    sku: "VIZ-1",
    name: "VIZitor Access, 1 Year",
    unit: "per keypad",
    msrp: 72,
    active: true,
    summary: "Visitor codes for one VIZitor keypad.",
  },
  {
    id: "sk50",
    sku: "SK-50",
    name: "Additional Smartkeys, 50",
    unit: "per pack",
    msrp: 60,
    active: true,
    summary: "Extra smartphone credentials beyond the keys included with a new PLUS account.",
  },
  {
    id: "ints",
    sku: "INT-S",
    name: "Video Intercom Service, 1 Year",
    unit: "per panel",
    msrp: 150,
    active: true,
    summary: "Cloud calling and unlock for one video intercom panel.",
  },
];

const SEED_RULES = {
  tiers: [
    { id: "bronze", label: "Bronze", discount: 15 },
    { id: "silver", label: "Silver", discount: 25 },
    { id: "gold", label: "Gold", discount: 32 },
  ],
  validityDays: 30,
  applyTierToServices: true,
};

const SEED_TERMS = [
  "This quotation lists manufacturer's suggested retail prices for the hardware and services described above. It is an offer to sell those products on VIZpin's standard terms, and VIZpin may accept or decline any order. Quoted prices may change without notice after the validity date. Shipping, handling, and applicable taxes are not included.",
  "Title and risk of loss pass when the shipment leaves a VIZpin facility. Please tell us within 15 days of the invoice date if anything is missing, incorrect, or damaged. Sales and other taxes are the buyer's responsibility unless a valid exemption certificate is on file for the ship-to location.",
  "VIZpin products carry a limited warranty against factory defects in materials and workmanship. Electronics in door and gate controllers, lever sets, and deadbolts that stay on an active PLUS plan are covered for the life of that plan. Mechanical and electromechanical parts on lever sets and deadbolts are covered for five years. Solar kits, keypads, intercoms, and other accessories are covered for one year. The warranty does not cover misuse or events outside VIZpin's control.",
  "Service fees are not refunded when the service has performed as described. Unused hardware in its original packaging may be returned within 30 days, with return freight paid by the buyer and a 35% restocking fee applied. Account terms, when offered, require a completed application and stay within the approved credit limit. Past-due balances may hold shipments and interrupt service. This quotation is valid for the period shown above and is not an invoice.",
].join("\n\n");

const SEED_TEAM = ["Jordan Hale", "Avery Brooks", "Morgan Ellis", "Riley Cho"];

const ADDRESS = "355 East Liberty Street, Suite 210, Lancaster, PA 17602";
const PHONE = "(717) 327-4244";

let db = null;
const state = {
  role: null,
  view: "login",
  enter: true,
  draft: null,
  query: "",
  catalogQuery: "",
  catalogCategory: "All",
  previewId: null,
  adminTab: "products",
  adminDraft: null,
  justAdded: null,
};

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function uid() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function round2(n) {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}

function money(n) {
  return Number(n || 0).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function parseMoney(value) {
  const n = Number(String(value).trim());
  if (!Number.isFinite(n) || n < 0 || n > 1000000) return null;
  return round2(n);
}

function parsePercent(value) {
  const n = Number(String(value).trim());
  if (!Number.isFinite(n) || n < 0 || n > 90) return null;
  return round2(n);
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function addDays(iso, days) {
  const d = new Date(iso);
  d.setDate(d.getDate() + Number(days || 0));
  return d.toISOString();
}

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(10, 0, 0, 0);
  return d.toISOString();
}

function blankSettings() {
  return {
    products: clone(SEED_PRODUCTS),
    services: clone(SEED_SERVICES),
    rules: clone(SEED_RULES),
    terms: SEED_TERMS,
    team: SEED_TEAM.slice(),
  };
}

function pickSettings(source) {
  return {
    products: clone(source.products),
    services: clone(source.services),
    rules: clone(source.rules),
    terms: source.terms,
    team: source.team.slice(),
  };
}

function buildSeed() {
  const data = {
    ...blankSettings(),
    nextSeq: 1040,
    quotes: [],
  };
  const savedDb = db;
  db = data;
  const first = blankDraft();
  first.createdAt = daysAgo(6);
  first.company = "Harborline Apartments";
  first.contact = "Maya Chen";
  first.project = "North Gatehouse";
  first.preparedBy = "Jordan Hale";
  first.tier = "silver";
  first.lines = [
    lineSeed("vpslc", 8, "Stainless", { lever: "Portfolio", backset: "2-3/4 in", strike: "ANSI", handing: "RH" }),
    lineSeed("vp2", 2, "", {}),
    lineSeed("keypadm", 1, "", {}),
  ];
  first.services = [{ serviceId: "plus1", qty: 10 }, { serviceId: "viz1", qty: 1 }];
  commitComputed(first, data);

  const second = blankDraft();
  second.createdAt = daysAgo(2);
  second.company = "Northwind Self Storage";
  second.contact = "Chris Alvarez";
  second.project = "Perimeter gates";
  second.preparedBy = "Avery Brooks";
  second.tier = "gold";
  second.lines = [
    lineSeed("vps", 2, "", {}),
    lineSeed("vp2", 1, "", {}),
    lineSeed("fob10", 2, "", {}),
  ];
  second.services = [{ serviceId: "plus1", qty: 3 }];
  commitComputed(second, data);
  db = savedDb;
  return data;
}

function lineSeed(productId, qty, finish, options) {
  return { id: uid(), productId, qty, finish, options };
}

function loadDb() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildSeed();
    const parsed = JSON.parse(raw);
    if (!parsed.products || !parsed.rules || !parsed.services) return buildSeed();
    return parsed;
  } catch (err) {
    return buildSeed();
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function tierById(id) {
  return db.rules.tiers.find((tier) => tier.id === id) || db.rules.tiers[0];
}

function detailFor(product, finishName, options) {
  const parts = [];
  const finish = (product.finishes || []).find((item) => item.name === finishName);
  if (finish) parts.push(finish.note ? `${finish.name} (${finish.note})` : finish.name);
  (product.options || []).forEach((opt) => {
    parts.push(options[opt.key] || opt.choices[0]);
  });
  return parts.join(" · ");
}

function blankDraft() {
  return {
    id: null,
    number: null,
    createdAt: new Date().toISOString(),
    company: "",
    contact: "",
    email: "",
    project: "",
    preparedBy: (db && db.team && db.team[0]) || SEED_TEAM[0],
    tier: "silver",
    lines: [],
    services: [],
  };
}

function draftFromQuote(quote) {
  return {
    id: quote.id,
    number: quote.number,
    createdAt: quote.createdAt,
    company: quote.company,
    contact: quote.contact || "",
    email: quote.email || "",
    project: quote.project || "",
    preparedBy: quote.preparedBy,
    tier: quote.tierId,
    lines: quote.lines.map((line) => ({
      id: line.id,
      productId: line.productId,
      qty: line.qty,
      finish: line.finish || "",
      options: clone(line.options || {}),
      fallback: line,
    })),
    services: quote.services.map((service) => ({
      serviceId: service.serviceId,
      qty: service.qty,
      fallback: service,
    })),
  };
}

function compute(draft) {
  const tier = tierById(draft.tier);
  const rate = Number(tier.discount) / 100;
  const lines = draft.lines.map((line) => {
    const product = db.products.find((item) => item.id === line.productId);
    if (!product) {
      const fb = line.fallback || {};
      return {
        id: line.id,
        productId: line.productId,
        sku: fb.sku || "—",
        name: fb.name || "Removed product",
        finish: line.finish || "",
        detail: fb.detail || "",
        options: line.options || {},
        qty: line.qty,
        unitMsrp: fb.unitMsrp || 0,
        unitPartner: fb.unitPartner || 0,
        extMsrp: round2((fb.unitMsrp || 0) * line.qty),
        extPartner: round2((fb.unitPartner || 0) * line.qty),
      };
    }
    const finish = (product.finishes || []).find((item) => item.name === line.finish);
    const options = {};
    (product.options || []).forEach((opt) => {
      options[opt.key] = (line.options && line.options[opt.key]) || opt.choices[0];
    });
    const unitMsrp = round2(Number(product.msrp) + (finish ? Number(finish.upcharge) || 0 : 0));
    const unitPartner = round2(unitMsrp * (1 - rate));
    return {
      id: line.id,
      productId: product.id,
      sku: product.sku,
      name: product.name,
      finish: finish ? finish.name : "",
      detail: detailFor(product, line.finish, options),
      options,
      qty: line.qty,
      unitMsrp,
      unitPartner,
      extMsrp: round2(unitMsrp * line.qty),
      extPartner: round2(unitPartner * line.qty),
    };
  });

  const services = [];
  draft.services.forEach((row) => {
    const qty = Number(row.qty) || 0;
    if (qty <= 0) return;
    const service = db.services.find((item) => item.id === row.serviceId);
    if (!service) {
      const fb = row.fallback || {};
      services.push({
        serviceId: row.serviceId,
        sku: fb.sku || "—",
        name: fb.name || "Removed service",
        unit: fb.unit || "",
        qty,
        unitMsrp: fb.unitMsrp || 0,
        unitPartner: fb.unitPartner || 0,
        extMsrp: round2((fb.unitMsrp || 0) * qty),
        extPartner: round2((fb.unitPartner || 0) * qty),
      });
      return;
    }
    const unitMsrp = round2(service.msrp);
    const unitPartner = db.rules.applyTierToServices ? round2(unitMsrp * (1 - rate)) : unitMsrp;
    services.push({
      serviceId: service.id,
      sku: service.sku,
      name: service.name,
      unit: service.unit,
      qty,
      unitMsrp,
      unitPartner,
      extMsrp: round2(unitMsrp * qty),
      extPartner: round2(unitPartner * qty),
    });
  });

  const hardwareMsrp = round2(lines.reduce((sum, line) => sum + line.extMsrp, 0));
  const hardwarePartner = round2(lines.reduce((sum, line) => sum + line.extPartner, 0));
  const servicesMsrp = round2(services.reduce((sum, line) => sum + line.extMsrp, 0));
  const servicesPartner = round2(services.reduce((sum, line) => sum + line.extPartner, 0));
  return {
    id: draft.id,
    number: draft.number,
    createdAt: draft.createdAt,
    company: (draft.company || "").trim(),
    contact: (draft.contact || "").trim(),
    email: (draft.email || "").trim(),
    project: (draft.project || "").trim(),
    preparedBy: draft.preparedBy,
    tierId: tier.id,
    tierLabel: tier.label,
    tierDiscount: tier.discount,
    lines,
    services,
    hardwareMsrp,
    hardwarePartner,
    servicesMsrp,
    servicesPartner,
    totalMsrp: round2(hardwareMsrp + servicesMsrp),
    totalPartner: round2(hardwarePartner + servicesPartner),
    terms: db.terms,
    validityDays: db.rules.validityDays,
    validUntil: addDays(draft.createdAt, db.rules.validityDays),
  };
}

function customerFacing(quote) {
  return {
    number: quote.number || "Draft",
    createdAt: quote.createdAt,
    validUntil: quote.validUntil,
    validityDays: quote.validityDays,
    company: quote.company,
    contact: quote.contact,
    project: quote.project,
    preparedBy: quote.preparedBy,
    lines: (quote.lines || []).map((line) => ({
      sku: line.sku,
      name: line.name,
      detail: line.detail || "",
      qty: line.qty,
      unitMsrp: line.unitMsrp,
      extMsrp: line.extMsrp,
    })),
    services: (quote.services || []).map((line) => ({
      sku: line.sku,
      name: line.name,
      unit: line.unit,
      qty: line.qty,
      unitMsrp: line.unitMsrp,
      extMsrp: line.extMsrp,
    })),
    hardwareMsrp: quote.hardwareMsrp,
    servicesMsrp: quote.servicesMsrp,
    totalMsrp: quote.totalMsrp,
    terms: quote.terms,
  };
}

function commitComputed(draft, target) {
  const computed = compute(draft);
  computed.id = uid();
  computed.number = `VP-${new Date(draft.createdAt).getFullYear()}-${String(target.nextSeq).padStart(4, "0")}`;
  target.nextSeq += 1;
  computed.updatedAt = draft.createdAt;
  target.quotes.unshift(computed);
}

function validateDraft(draft) {
  if (!draft.company.trim()) return "Add the customer or company name before saving.";
  const live = compute(draft);
  if (!live.lines.length && !live.services.length) return "Add a product or a service before saving.";
  return "";
}

function saveDraft() {
  const error = validateDraft(state.draft);
  if (error) {
    showToast(error);
    return null;
  }
  const computed = compute(state.draft);
  computed.updatedAt = new Date().toISOString();
  if (!state.draft.id) {
    computed.id = uid();
    const year = new Date().getFullYear();
    computed.number = `VP-${year}-${String(db.nextSeq).padStart(4, "0")}`;
    db.nextSeq += 1;
    db.quotes.unshift(computed);
    state.draft.id = computed.id;
    state.draft.number = computed.number;
  } else {
    computed.id = state.draft.id;
    computed.number = state.draft.number;
    const existing = db.quotes.find((quote) => quote.id === computed.id);
    computed.createdAt = existing ? existing.createdAt : computed.createdAt;
    computed.validUntil = addDays(computed.createdAt, db.rules.validityDays);
    const index = db.quotes.findIndex((quote) => quote.id === computed.id);
    db.quotes[index] = computed;
  }
  persist();
  return computed;
}

function quoteIsStale(quote) {
  const replay = compute(draftFromQuote(quote));
  return replay.totalMsrp !== quote.totalMsrp
    || replay.totalPartner !== quote.totalPartner
    || replay.terms !== quote.terms
    || replay.validityDays !== quote.validityDays;
}

function showToast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.classList.remove("show"), 3200);
}

function login(role) {
  const input = document.getElementById(role === "admin" ? "code-admin" : "code-employee");
  if (!input || input.value !== ACCESS[role]) {
    showToast("That access code was not recognized.");
    return;
  }
  state.role = role;
  state.view = "quotes";
  state.enter = true;
  sessionStorage.setItem("vizpin-role", role);
  render();
}

function signOut() {
  state.role = null;
  state.view = "login";
  state.draft = null;
  state.previewId = null;
  sessionStorage.removeItem("vizpin-role");
  state.enter = true;
  render();
}

function go(view) {
  if (view === "admin" && state.role !== "admin") {
    showToast("Pricing is limited to the administrator workspace.");
    return;
  }
  if (view === "admin" && state.view !== "admin") {
    state.adminDraft = pickSettings(db);
    state.adminTab = "products";
  }
  state.view = view;
  state.previewId = null;
  state.enter = true;
  render();
}

function openNew() {
  state.draft = blankDraft();
  state.view = "editor";
  state.previewId = null;
  state.catalogCategory = "All";
  state.catalogQuery = "";
  state.enter = true;
  render();
}

function openQuote(id) {
  const quote = db.quotes.find((item) => item.id === id);
  if (!quote) return;
  state.draft = draftFromQuote(quote);
  state.view = "editor";
  state.previewId = null;
  state.enter = true;
  render();
}

function render() {
  const root = document.getElementById("app");
  const active = document.activeElement;
  const focus = active && active.id ? { id: active.id, start: active.selectionStart, end: active.selectionEnd } : null;
  root.innerHTML = state.role ? shell(viewTemplate()) : loginTemplate();
  if (state.enter) root.querySelector(".app-enter")?.classList.add("enter");
  state.enter = false;
  if (focus) {
    const el = document.getElementById(focus.id);
    if (el) {
      el.focus();
      if (typeof focus.start === "number" && el.setSelectionRange) {
        try { el.setSelectionRange(focus.start, focus.end); } catch (err) { /* number inputs */ }
      }
    }
  }
  if (state.justAdded) {
    document.getElementById(`line-${state.justAdded}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    state.justAdded = null;
  }
  document.title = state.role ? `VIZpin · ${state.view === "admin" ? "Pricing" : "Quote Desk"}` : "VIZpin Quote Desk";
}

function loginTemplate() {
  return `
    <section class="login app-enter">
      <div class="login-brand">
        <div>
          <div class="brand-lockup">
            <img src="assets/logo-mark.png" alt="VIZpin">
            <div>
              <div class="word">VIZpin</div>
              <div class="tagline">Your phone is your key</div>
            </div>
          </div>
          <h1>Quote the property. Keep cost on the desk.</h1>
          <p class="lead">Build a hardware and service quote from the catalog. The screen shows partner cost and MSRP. The customer file shows MSRP only.</p>
        </div>
        <div class="brand-foot">${esc(ADDRESS)}<br>${esc(PHONE)}</div>
      </div>
      <div class="login-panel">
        <div class="login-panel-inner">
          <p class="kicker">Quote desk</p>
          <h2>Continue into the workspace</h2>
          <p class="hint" style="margin-top:8px">The access code is already filled in. Choose a role and enter.</p>
          <div class="login-cards">
            ${loginCard("employee", "Employee", "Shared desk for quotes, customer files, and the partner price list.", "code-employee")}
            ${loginCard("admin", "Administrator", "Same desk, plus catalog prices, service rates, and pricing rules.", "code-admin")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function loginCard(role, title, copy, inputId) {
  return `
    <form class="login-card" data-role="${role}">
      <div>
        <p class="kicker">${esc(title)}</p>
        <h3 style="margin-top:6px">${esc(title)} workspace</h3>
        <p style="margin-top:6px">${esc(copy)}</p>
      </div>
      <label class="field">
        <span>Access code</span>
        <input id="${inputId}" type="password" readonly value="${esc(ACCESS[role])}" autocomplete="off" aria-label="Access code, already filled in">
      </label>
      <button class="btn-accent" type="submit">Enter workspace</button>
    </form>
  `;
}

function shell(content) {
  const adminLink = state.role === "admin"
    ? `<button type="button" data-action="go" data-view="admin" class="${state.view === "admin" ? "active" : ""}">Pricing</button>`
    : "";
  return `
    <div class="shell app-enter">
      <aside class="sidebar">
        <div class="side-brand">
          <img src="assets/logo-mark.png" alt="">
          <div>
            <strong>VIZpin</strong>
            <span>Quote desk</span>
          </div>
        </div>
        <button class="side-new" type="button" data-action="new-quote">New quote</button>
        <nav class="nav">
          <button type="button" data-action="go" data-view="quotes" class="${state.view === "quotes" ? "active" : ""}">Quotes</button>
          <button type="button" data-action="go" data-view="prices" class="${state.view === "prices" ? "active" : ""}">Price list</button>
          ${adminLink}
        </nav>
        <div class="sidebar-foot">
          <div class="role-pill"><span class="dot"></span> ${state.role === "admin" ? "Administrator" : "Employee"}</div>
          <button class="btn-ghost" type="button" data-action="sign-out">Sign out</button>
        </div>
      </aside>
      <main class="main">${content}</main>
    </div>
  `;
}

function viewTemplate() {
  if (state.previewId) return previewTemplate();
  if (state.view === "editor") return editorTemplate();
  if (state.view === "prices") return pricesTemplate();
  if (state.view === "admin") return adminTemplate();
  return quotesTemplate();
}

function quotesTemplate() {
  const quotes = filteredQuotes();
  const msrp = db.quotes.reduce((sum, quote) => sum + quote.totalMsrp, 0);
  const partner = db.quotes.reduce((sum, quote) => sum + quote.totalPartner, 0);
  const cards = quotes.length
    ? quotes.map((quote, index) => quoteCard(quote, index)).join("")
    : `<div class="empty"><h3>No quotes match</h3><p class="hint">Start a quote from the catalog.</p></div>`;
  return `
    <header class="page-head">
      <div>
        <p class="kicker">Workspace</p>
        <h1>Quotes</h1>
      </div>
      <button class="btn-accent" type="button" data-action="new-quote">New quote</button>
    </header>
    <section class="stats">
      <article class="stat"><span>Open quotes</span><strong class="tabular">${db.quotes.length}</strong></article>
      <article class="stat"><span>MSRP on file</span><strong class="tabular">${money(msrp)}</strong></article>
      <article class="stat"><span>Partner cost on file</span><strong class="tabular">${money(partner)}</strong></article>
    </section>
    <div class="toolbar">
      <input id="quote-search" type="text" placeholder="Search company, project, or quote number" value="${esc(state.query)}" data-bind="query">
    </div>
    <div class="quote-list">${cards}</div>
  `;
}

function quoteCard(quote, index) {
  const stale = quoteIsStale(quote) ? `<span class="pill warn">Catalog changed</span>` : "";
  return `
    <article class="quote-card" style="animation-delay:${index * 40}ms">
      <div>
        <p class="kicker">${esc(quote.number)} <span class="pill">${esc(quote.tierLabel)}</span>${stale}</p>
        <h3>${esc(quote.company)}</h3>
        <p class="sub">${esc(quote.project || "Project not named")} · ${esc(quote.contact || "No contact")} · ${esc(formatDate(quote.createdAt))}</p>
      </div>
      <div class="metrics">
        <div class="metric"><span>MSRP</span><strong class="tabular">${money(quote.totalMsrp)}</strong></div>
        <div class="metric partner"><span>Partner</span><strong class="tabular">${money(quote.totalPartner)}</strong></div>
      </div>
      <div class="row-actions">
        <button class="btn-ghost" type="button" data-action="open-quote" data-id="${esc(quote.id)}">Open</button>
        <button class="btn" type="button" data-action="download-quote" data-id="${esc(quote.id)}">Customer PDF</button>
        <button class="btn-danger" type="button" data-action="delete-quote" data-id="${esc(quote.id)}">Delete</button>
      </div>
    </article>
  `;
}

function filteredQuotes() {
  const q = state.query.trim().toLowerCase();
  return db.quotes.filter((quote) => {
    if (!q) return true;
    return [quote.number, quote.company, quote.project, quote.contact, quote.preparedBy]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
}

function editorTemplate() {
  const draft = state.draft;
  const live = compute(draft);
  const tier = tierById(draft.tier);
  const names = db.team.slice();
  if (draft.preparedBy && !names.includes(draft.preparedBy)) names.unshift(draft.preparedBy);
  const saved = draft.id ? db.quotes.find((quote) => quote.id === draft.id) : null;
  const drift = saved ? quoteIsStale(saved) : false;
  return `
    <header class="page-head">
      <div>
        <p class="kicker">${draft.number ? esc(draft.number) : "Unsaved quote"}</p>
        <h1>${draft.company ? esc(draft.company) : "New quote"}</h1>
      </div>
      <button class="btn-ghost" type="button" data-action="go" data-view="quotes">All quotes</button>
    </header>
    <div class="editor-grid">
      <div class="stack">
        <section class="card">
          <h2>Customer</h2>
          <div class="grid-2">
            <label class="field"><span>Company</span><input id="f-company" type="text" data-bind="company" value="${esc(draft.company)}" maxlength="80"></label>
            <label class="field"><span>Contact name</span><input id="f-contact" type="text" data-bind="contact" value="${esc(draft.contact)}" maxlength="80"></label>
            <label class="field"><span>Email</span><input id="f-email" type="text" data-bind="email" value="${esc(draft.email)}" maxlength="80" autocomplete="off"><small class="hint">Saved on the quote only.</small></label>
            <label class="field"><span>Project</span><input id="f-project" type="text" data-bind="project" value="${esc(draft.project)}" maxlength="80"></label>
            <label class="field"><span>Prepared by</span>
              <select id="f-prepared" data-bind="preparedBy">
                ${names.map((name) => `<option ${name === draft.preparedBy ? "selected" : ""}>${esc(name)}</option>`).join("")}
              </select>
            </label>
          </div>
        </section>
        <section class="card">
          <h2>Partner tier</h2>
          <div class="segment" role="radiogroup" aria-label="Partner tier">
            ${db.rules.tiers.map((item) => `
              <button type="button" class="${item.id === draft.tier ? "active" : ""}" data-action="set-tier" data-tier="${esc(item.id)}">${esc(item.label)}</button>
            `).join("")}
          </div>
          <p class="rule-line">${esc(tier.label)} is ${esc(String(tier.discount))}% under MSRP, from the pricing rules. Quantity, finish, tier, and services are the choices on this desk.</p>
        </section>
        <section class="card">
          <div class="catalog-head">
            <h2>Products</h2>
          </div>
          <input id="catalog-search" type="text" placeholder="Find a product" value="${esc(state.catalogQuery)}" data-bind="catalogQuery">
          <div class="chips">
            ${["All"].concat([...new Set(db.products.filter((p) => p.active).map((p) => p.category))]).map((cat) => `
              <button type="button" class="chip ${state.catalogCategory === cat ? "active" : ""}" data-action="set-category" data-category="${esc(cat)}">${esc(cat)}</button>
            `).join("")}
          </div>
          ${catalogRows()}
          <h2 style="margin:16px 0 10px">Selected</h2>
          ${live.lines.length ? live.lines.map((line) => lineCard(line)).join("") : `<p class="hint">Add hardware from the catalog. Prices stay on the catalog.</p>`}
        </section>
        <section class="card">
          <h2>Services</h2>
          <p class="hint" style="margin-bottom:10px">Recurring plans and credential packs. A quantity of zero leaves the service off the quote.</p>
          ${serviceRows(draft, live)}
        </section>
      </div>
      <aside class="summary">
        <section class="card summary-card">
          <span class="label">Customer quote · MSRP</span>
          <strong class="big tabular">${money(live.totalMsrp)}</strong>
          <p class="hint">Hardware ${money(live.hardwareMsrp)} · Services ${money(live.servicesMsrp)}</p>
        </section>
        <section class="card summary-card partner-card">
          <span class="label">Partner cost · ${esc(tier.label)} · internal</span>
          <strong class="big tabular">${money(live.totalPartner)}</strong>
          <p class="hint">Hardware ${money(live.hardwarePartner)} · Services ${money(live.servicesPartner)}</p>
          <p class="hint" style="margin-top:8px">The customer PDF lists MSRP and leaves this figure off.</p>
        </section>
        ${drift ? `<p class="hint">The saved file still uses earlier catalog figures. Save to refresh it.</p>` : ""}
        <div class="actions">
          <button class="btn-accent" type="button" data-action="save-quote">Save quote</button>
          <button class="btn" type="button" data-action="preview-quote">Preview customer quote</button>
          <button class="btn-ghost" type="button" data-action="download-current">Download customer PDF</button>
        </div>
      </aside>
    </div>
  `;
}

function catalogRows() {
  const q = state.catalogQuery.trim().toLowerCase();
  const rows = db.products.filter((product) => product.active).filter((product) => {
    if (state.catalogCategory !== "All" && product.category !== state.catalogCategory) return false;
    if (!q) return true;
    return `${product.sku} ${product.name} ${product.summary}`.toLowerCase().includes(q);
  });
  if (!rows.length) return `<p class="hint">No products match.</p>`;
  return rows.map((product) => `
    <article class="product-row">
      <div>
        <p class="sku">${esc(product.sku)} · ${esc(product.category)}</p>
        <h3>${esc(product.name)}</h3>
        <p class="hint">${esc(product.summary)}</p>
      </div>
      <div style="text-align:right">
        <strong class="tabular">${money(product.msrp)}</strong>
        <div><button class="btn" type="button" data-action="add-product" data-id="${esc(product.id)}">Add</button></div>
      </div>
    </article>
  `).join("");
}

function lineCard(line) {
  const product = db.products.find((item) => item.id === line.productId);
  const draftLine = state.draft.lines.find((item) => item.id === line.id);
  const finishes = product ? product.finishes : [];
  const options = product ? product.options : [];
  const added = state.justAdded === line.id ? "just-added" : "";
  return `
    <article class="line-card ${added}" id="line-${esc(line.id)}">
      <div class="line-top">
        <div>
          <p class="sku">${esc(line.sku)}</p>
          <h3>${esc(line.name)}</h3>
        </div>
        <div class="qty">
          <button class="icon-btn" type="button" data-action="qty" data-id="${esc(line.id)}" data-step="-1" aria-label="Decrease quantity">−</button>
          <input id="qty-${esc(line.id)}" type="number" min="1" max="999" value="${esc(line.qty)}" data-line-qty="${esc(line.id)}">
          <button class="icon-btn" type="button" data-action="qty" data-id="${esc(line.id)}" data-step="1" aria-label="Increase quantity">+</button>
          <button class="btn-danger" type="button" data-action="remove-line" data-id="${esc(line.id)}">Remove</button>
        </div>
      </div>
      ${finishes.length || options.length ? `
        <div class="line-config">
          ${finishes.length ? `
            <label class="field"><span>Finish</span>
              <select data-line-finish="${esc(line.id)}">
                ${finishes.map((finish) => `<option value="${esc(finish.name)}" ${draftLine.finish === finish.name ? "selected" : ""}>${esc(finish.name)}${finish.upcharge ? ` (+${money(finish.upcharge)})` : ""}${finish.note ? ` · ${esc(finish.note)}` : ""}</option>`).join("")}
              </select>
            </label>` : ""}
          ${options.map((opt) => `
            <label class="field"><span>${esc(opt.label)}</span>
              <select data-line-option="${esc(line.id)}" data-option-key="${esc(opt.key)}">
                ${opt.choices.map((choice) => `<option ${(draftLine.options || {})[opt.key] === choice ? "selected" : ""}>${esc(choice)}</option>`).join("")}
              </select>
            </label>
          `).join("")}
        </div>` : ""}
      <div class="line-prices">
        <span>MSRP <b class="tabular">${money(line.unitMsrp)}</b> · ${money(line.extMsrp)}</span>
        <span>Partner <b class="tabular">${money(line.unitPartner)}</b> · ${money(line.extPartner)}</span>
      </div>
    </article>
  `;
}

function serviceRows(draft, live) {
  const priced = new Map((live.services || []).map((service) => [service.serviceId, service]));
  const active = db.services.filter((service) => service.active);
  const extras = draft.services.filter((row) => row.qty > 0 && !active.some((service) => service.id === row.serviceId));
  const rows = active.map((service) => ({ service, qty: serviceQty(draft, service.id) }));
  extras.forEach((row) => {
    rows.push({
      service: {
        id: row.serviceId,
        sku: row.fallback?.sku || "—",
        name: row.fallback?.name || "Previous service",
        unit: row.fallback?.unit || "",
        summary: "This rate is no longer on the active list.",
        msrp: row.fallback?.unitMsrp || 0,
      },
      qty: row.qty,
    });
  });
  return rows.map(({ service, qty }) => `
    <article class="service-row">
      <div>
        <p class="sku">${esc(service.sku)} · ${esc(service.unit)}</p>
        <h3>${esc(service.name)}</h3>
        <p class="hint">${esc(service.summary || "")} · MSRP ${money(service.msrp)}</p>
        ${priced.get(service.id) ? `<p class="line-prices"><span>MSRP <b class="tabular">${money(priced.get(service.id).extMsrp)}</b></span><span>Partner <b class="tabular">${money(priced.get(service.id).extPartner)}</b></span></p>` : ""}
      </div>
      <div class="qty">
        <button class="icon-btn" type="button" data-action="service-qty" data-id="${esc(service.id)}" data-step="-1" aria-label="Decrease">−</button>
        <input id="svc-${esc(service.id)}" type="number" min="0" max="999" value="${qty}" data-service-qty="${esc(service.id)}">
        <button class="icon-btn" type="button" data-action="service-qty" data-id="${esc(service.id)}" data-step="1" aria-label="Increase">+</button>
      </div>
    </article>
  `).join("");
}

function serviceQty(draft, id) {
  const row = draft.services.find((item) => item.serviceId === id);
  return row ? row.qty : 0;
}

function setServiceQty(id, qty) {
  let row = state.draft.services.find((item) => item.serviceId === id);
  if (!row) {
    row = { serviceId: id, qty: 0 };
    state.draft.services.push(row);
  }
  row.qty = Math.min(999, Math.max(0, qty));
}

function pricesTemplate() {
  const groups = {};
  db.products.filter((product) => product.active).forEach((product) => {
    groups[product.category] = groups[product.category] || [];
    groups[product.category].push(product);
  });
  const sections = Object.keys(groups).map((category) => `
    <h2 style="margin:18px 0 8px">${esc(category)}</h2>
    <div class="table-wrap"><table>
      <thead><tr><th>SKU</th><th>Item</th><th>Finish</th><th class="num">MSRP</th><th class="num">Bronze</th><th class="num">Silver</th><th class="num">Gold</th></tr></thead>
      <tbody>${groups[category].map(priceRowsForProduct).join("")}</tbody>
    </table></div>
  `).join("");
  return `
    <header class="page-head">
      <div>
        <p class="kicker">Internal</p>
        <h1>Price list</h1>
        <p class="hint" style="margin-top:6px">Bronze, Silver, Gold, and MSRP. Customer quotes do not use this page.</p>
      </div>
      <button class="btn-accent" type="button" data-action="download-prices">Download PDF</button>
    </header>
    <p class="hint">Workspace catalog. An administrator can replace these figures in Pricing. Finish upcharges are included in the finish rows.</p>
    ${sections}
    <h2 style="margin:18px 0 8px">Services</h2>
    <div class="table-wrap"><table>
      <thead><tr><th>SKU</th><th>Service</th><th>Unit</th><th class="num">MSRP</th><th class="num">Bronze</th><th class="num">Silver</th><th class="num">Gold</th></tr></thead>
      <tbody>
        ${db.services.filter((service) => service.active).map((service) => `
          <tr>
            <td>${esc(service.sku)}</td>
            <td>${esc(service.name)}</td>
            <td>${esc(service.unit)}</td>
            <td class="num tabular">${money(service.msrp)}</td>
            ${db.rules.tiers.map((tier) => `<td class="num tabular">${money(servicePartner(service.msrp, tier))}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table></div>
    <p class="hint" style="margin-top:12px">${ruleSentence()}</p>
  `;
}

function priceRowsForProduct(product) {
  const finishes = product.finishes.length ? product.finishes : [{ name: "—", upcharge: 0, note: "" }];
  return finishes.map((finish) => {
    const msrp = round2(Number(product.msrp) + Number(finish.upcharge || 0));
    const label = finish.name === "—" ? "—" : `${finish.name}${finish.note ? ` (${finish.note})` : ""}`;
    return `<tr>
      <td>${esc(product.sku)}</td>
      <td>${esc(product.name)}</td>
      <td>${esc(label)}</td>
      <td class="num tabular">${money(msrp)}</td>
      ${db.rules.tiers.map((tier) => `<td class="num tabular">${money(partnerOf(msrp, tier))}</td>`).join("")}
    </tr>`;
  }).join("");
}

function partnerOf(msrp, tier) {
  return round2(msrp * (1 - Number(tier.discount) / 100));
}

function servicePartner(msrp, tier) {
  if (!db.rules.applyTierToServices) return round2(msrp);
  return partnerOf(msrp, tier);
}

function ruleSentence() {
  const bits = db.rules.tiers.map((tier) => `${tier.label} ${tier.discount}%`).join(" · ");
  const serviceBit = db.rules.applyTierToServices
    ? "The same discount applies to service rates."
    : "Service rates stay at MSRP for every tier.";
  return `Partner cost = (MSRP + finish upcharge) × (1 − tier discount). ${bits}. ${serviceBit} Quotes stay valid for ${db.rules.validityDays} days.`;
}

function adminTemplate() {
  const draft = state.adminDraft;
  return `
    <header class="page-head">
      <div>
        <p class="kicker">Administrator</p>
        <h1>Pricing</h1>
        <p class="hint" style="margin-top:6px">Updates apply to new calculations as soon as you save. Saved quotes keep their figures until someone opens and saves them again.</p>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn-accent" type="button" data-action="save-admin">Save pricing</button>
      </div>
    </header>
    <div class="tabs">
      ${["products", "services", "rules", "terms", "team"].map((tab) => `
        <button type="button" class="${state.adminTab === tab ? "btn" : "btn-ghost"}" data-action="admin-tab" data-tab="${tab}">${tab[0].toUpperCase()}${tab.slice(1)}</button>
      `).join("")}
    </div>
    ${adminPanel(draft)}
    <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">
      <button class="btn-ghost" type="button" data-action="restore-prices">Restore demo prices</button>
      <button class="btn-danger" type="button" data-action="reset-workspace">Reset quotes and prices</button>
    </div>
  `;
}

function adminPanel(draft) {
  if (state.adminTab === "products") {
    return `<div class="admin-list">${draft.products.map((product) => `
      <article class="admin-card">
        <header>
          <div>
            <p class="sku">${esc(product.sku)} · ${esc(product.category)}</p>
            <h3>${esc(product.name)}</h3>
          </div>
          <label class="check"><input type="checkbox" data-admin="active" data-kind="product" data-id="${esc(product.id)}" ${product.active ? "checked" : ""}> Active</label>
        </header>
        <label class="field"><span>MSRP</span><input data-admin="money" data-kind="product" data-id="${esc(product.id)}" type="number" min="0" step="0.01" value="${esc(product.msrp)}"></label>
        ${product.finishes.length ? product.finishes.map((finish, index) => `
          <div class="finish-grid">
            <div><p class="sku">${esc(finish.name)}${finish.note ? ` · ${esc(finish.note)}` : ""}</p></div>
            <label class="field"><span>Finish upcharge</span><input data-admin="upcharge" data-id="${esc(product.id)}" data-index="${index}" type="number" min="0" step="0.01" value="${esc(finish.upcharge)}"></label>
          </div>
        `).join("") : `<p class="hint" style="margin-top:8px">No finish choices.</p>`}
      </article>
    `).join("")}</div>`;
  }
  if (state.adminTab === "services") {
    return `<div class="admin-list">${draft.services.map((service) => `
      <article class="admin-card">
        <header>
          <div>
            <p class="sku">${esc(service.sku)} · ${esc(service.unit)}</p>
            <h3>${esc(service.name)}</h3>
          </div>
          <label class="check"><input type="checkbox" data-admin="active" data-kind="service" data-id="${esc(service.id)}" ${service.active ? "checked" : ""}> Active</label>
        </header>
        <label class="field"><span>Rate (MSRP)</span><input data-admin="money" data-kind="service" data-id="${esc(service.id)}" type="number" min="0" step="0.01" value="${esc(service.msrp)}"></label>
      </article>
    `).join("")}</div>`;
  }
  if (state.adminTab === "rules") {
    const sample = draft.products.find((product) => product.id === "vpslc") || draft.products[0];
    const silver = draft.rules.tiers.find((tier) => tier.id === "silver");
    const sampleMsrp = sample ? sample.msrp : 0;
    const samplePartner = silver ? round2(sampleMsrp * (1 - silver.discount / 100)) : sampleMsrp;
    return `
      <div class="formula">
        <p>Partner cost = (MSRP + finish upcharge) × (1 − tier discount).</p>
        <p style="margin-top:8px">${esc(sample ? sample.name : "Sample")} base MSRP <strong>${money(sampleMsrp)}</strong> · Silver partner <strong>${money(samplePartner)}</strong> before any finish upcharge.</p>
      </div>
      <div class="admin-list">
        ${draft.rules.tiers.map((tier) => `
          <article class="admin-card">
            <label class="field"><span>${esc(tier.label)} discount %</span>
              <input data-admin="discount" data-id="${esc(tier.id)}" type="number" min="0" max="90" step="0.01" value="${esc(tier.discount)}">
            </label>
          </article>
        `).join("")}
        <article class="admin-card">
          <label class="field"><span>Quote valid for (days)</span>
            <input data-admin="days" type="number" min="1" max="365" step="1" value="${esc(draft.rules.validityDays)}">
          </label>
          <label class="check" style="margin-top:12px">
            <input type="checkbox" data-admin="services-flag" ${draft.rules.applyTierToServices ? "checked" : ""}>
            Apply the tier discount to service rates
          </label>
        </article>
      </div>
    `;
  }
  if (state.adminTab === "terms") {
    return `<label class="field"><span>Customer quote terms</span><textarea data-admin="terms">${esc(draft.terms)}</textarea></label>`;
  }
  return `<label class="field"><span>Prepared-by names, one per line</span><textarea data-admin="team">${esc(draft.team.join("\n"))}</textarea></label>`;
}

function scrapeAdmin() {
  const draft = clone(state.adminDraft);
  const fields = [...document.querySelectorAll("[data-admin]")];
  for (const el of fields) {
    const kind = el.dataset.admin;
    if (kind === "money") {
      const amount = parseMoney(el.value);
      if (amount === null) return { error: "Enter a price of zero or more." };
      const list = el.dataset.kind === "service" ? draft.services : draft.products;
      const item = list.find((row) => row.id === el.dataset.id);
      if (item) item.msrp = amount;
    } else if (kind === "upcharge") {
      const amount = parseMoney(el.value);
      if (amount === null) return { error: "Enter a finish upcharge of zero or more." };
      const product = draft.products.find((row) => row.id === el.dataset.id);
      if (product) product.finishes[Number(el.dataset.index)].upcharge = amount;
    } else if (kind === "active") {
      const list = el.dataset.kind === "service" ? draft.services : draft.products;
      const item = list.find((row) => row.id === el.dataset.id);
      if (item) item.active = el.checked;
    } else if (kind === "discount") {
      const amount = parsePercent(el.value);
      if (amount === null) return { error: "Tier discounts stay between 0 and 90." };
      const tier = draft.rules.tiers.find((row) => row.id === el.dataset.id);
      if (tier) tier.discount = amount;
    } else if (kind === "days") {
      const days = Math.round(Number(el.value));
      if (!Number.isFinite(days) || days < 1 || days > 365) return { error: "Validity is between 1 and 365 days." };
      draft.rules.validityDays = days;
    } else if (kind === "services-flag") {
      draft.rules.applyTierToServices = el.checked;
    } else if (kind === "terms") {
      if (!el.value.trim()) return { error: "Quote terms need some text." };
      draft.terms = el.value.trim();
    } else if (kind === "team") {
      const names = el.value.split("\n").map((name) => name.trim()).filter(Boolean);
      if (!names.length) return { error: "Keep at least one prepared-by name." };
      draft.team = names;
    }
  }
  return { draft };
}

function previewTemplate() {
  const quote = db.quotes.find((item) => item.id === state.previewId);
  if (!quote) return quotesTemplate();
  const model = customerFacing(quote);
  return `
    <div class="preview-layer">
      <div class="preview-top">
        <p>Customer copy · MSRP only · ${esc(model.number)}</p>
        <div class="preview-actions">
          <button class="btn-ghost" type="button" data-action="close-preview" style="color:white;border-color:rgba(255,255,255,.35)">Close</button>
          <button class="btn-accent" type="button" data-action="download-quote" data-id="${esc(quote.id)}">Download PDF</button>
        </div>
      </div>
      <div class="paper-scroll" data-action="close-preview">
        <article class="paper">${paperHtml(model)}</article>
      </div>
    </div>
  `;
}

function paperHtml(model) {
  const hardware = model.lines.map((line) => `
    <tr>
      <td><strong>${esc(line.sku)}</strong> ${esc(line.name)}${line.detail ? `<div class="hint">${esc(line.detail)}</div>` : ""}</td>
      <td class="num tabular">${esc(line.qty)}</td>
      <td class="num tabular">${money(line.unitMsrp)}</td>
      <td class="num tabular">${money(line.extMsrp)}</td>
    </tr>
  `).join("");
  const services = model.services.map((line) => `
    <tr>
      <td><strong>${esc(line.sku)}</strong> ${esc(line.name)}<div class="hint">${esc(line.unit)}</div></td>
      <td class="num tabular">${esc(line.qty)}</td>
      <td class="num tabular">${money(line.unitMsrp)}</td>
      <td class="num tabular">${money(line.extMsrp)}</td>
    </tr>
  `).join("");
  return `
    <header class="paper-banner">
      <div class="brand-lockup">
        <img src="assets/logo-mark.png" alt="" width="56" height="56">
        <div>
          <div class="word">VIZpin</div>
          <div class="tagline">Smart Property Systems</div>
        </div>
      </div>
      <div class="paper-id">
        <div class="kicker" style="color:var(--aqua)">Quote</div>
        <div class="num">${esc(model.number)}</div>
        <div>${esc(formatDate(model.createdAt))}</div>
        <div>Valid through ${esc(formatDate(model.validUntil))}</div>
      </div>
    </header>
    <div class="paper-body">
      <div class="who">
        <div>
          <p class="label">Prepared for</p>
          <h3>${esc(model.company)}</h3>
          <p>${esc(model.contact || "")}</p>
        </div>
        <div>
          <p class="label">Project</p>
          <h3>${esc(model.project || "—")}</h3>
          <p class="hint">Prepared by ${esc(model.preparedBy)}</p>
        </div>
      </div>
      ${model.lines.length ? `<h2 style="margin-bottom:8px">Hardware</h2>
        <div class="table-wrap"><table>
          <thead><tr><th>Description</th><th class="num">Qty</th><th class="num">Unit MSRP</th><th class="num">Amount</th></tr></thead>
          <tbody>${hardware}</tbody>
        </table></div>` : ""}
      ${model.services.length ? `<h2 style="margin:16px 0 8px">Services</h2>
        <div class="table-wrap"><table>
          <thead><tr><th>Description</th><th class="num">Qty</th><th class="num">Unit MSRP</th><th class="num">Amount</th></tr></thead>
          <tbody>${services}</tbody>
        </table></div>` : ""}
      <div class="total-box">
        ${model.lines.length ? `<div><span>Hardware MSRP</span><span class="tabular">${money(model.hardwareMsrp)}</span></div>` : ""}
        ${model.services.length ? `<div><span>Services MSRP</span><span class="tabular">${money(model.servicesMsrp)}</span></div>` : ""}
        <div class="grand"><span>Total MSRP</span><span class="tabular">${money(model.totalMsrp)}</span></div>
      </div>
      <div class="terms">
        <p class="label">Terms</p>
        ${String(model.terms || "").split(/\n\n/).map((part) => `<p>${esc(part)}</p>`).join("")}
      </div>
      <footer class="paper-foot">
        <div>${esc(ADDRESS)}<br>${esc(PHONE)}</div>
        <div>Your phone is your key.</div>
      </footer>
    </div>
  `;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function logoData() {
  if (logoData.cache !== undefined) return logoData.cache;
  try {
    const res = await fetch("assets/logo-mark.png");
    logoData.cache = await blobToDataUrl(await res.blob());
  } catch (err) {
    logoData.cache = null;
  }
  return logoData.cache;
}

const NAVY = [1, 19, 69];
const AQUA = [116, 212, 200];
const MUTED = [93, 107, 132];

async function downloadCustomerPdf(quote) {
  if (!window.jspdf) {
    showToast("The PDF library did not load.");
    return;
  }
  const model = customerFacing(quote);
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  doc.setProperties({ title: `VIZpin Quote ${model.number}`, author: "VIZpin", subject: "MSRP quotation" });
  const logo = await logoData();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let y = 0;

  const newPage = () => {
    doc.addPage();
    y = 36;
  };
  const ensure = (height) => {
    if (y + height > pageHeight - 46) newPage();
  };

  doc.setFillColor(...NAVY);
  doc.rect(0, 0, pageWidth, 96, "F");
  doc.setFillColor(...AQUA);
  doc.rect(0, 96, pageWidth, 4, "F");
  if (logo) doc.addImage(logo, "PNG", 36, 22, 52, 52);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("VIZpin", 100, 44);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...AQUA);
  doc.text("Smart Property Systems", 100, 62);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text("QUOTE", pageWidth - 36, 36, { align: "right" });
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(model.number, pageWidth - 36, 56, { align: "right" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(formatDate(model.createdAt), pageWidth - 36, 72, { align: "right" });
  doc.text(`Valid through ${formatDate(model.validUntil)}`, pageWidth - 36, 86, { align: "right" });
  y = 124;

  doc.setTextColor(...MUTED);
  doc.setFontSize(8);
  doc.text("PREPARED FOR", 36, y);
  doc.text("PROJECT", 320, y);
  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(doc.splitTextToSize(model.company, 250), 36, y + 18);
  doc.text(doc.splitTextToSize(model.project || "—", 240), 320, y + 18);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(model.contact || "", 36, y + 40);
  doc.setTextColor(...MUTED);
  doc.text(`Prepared by ${model.preparedBy}`, 320, y + 40);
  y += 70;

  const drawTable = (title, rows) => {
    if (!rows.length) return;
    ensure(48);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...NAVY);
    doc.text(title, 36, y);
    y += 8;
    doc.setFillColor(...NAVY);
    doc.rect(36, y, pageWidth - 72, 18, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.text("DESCRIPTION", 44, y + 12);
    doc.text("QTY", 400, y + 12, { align: "right" });
    doc.text("UNIT MSRP", 490, y + 12, { align: "right" });
    doc.text("AMOUNT", pageWidth - 44, y + 12, { align: "right" });
    y += 18;
    rows.forEach((row, index) => {
      const detail = row.detail ? doc.splitTextToSize(row.detail, 320) : [];
      const height = 22 + detail.length * 11;
      ensure(height + 8);
      if (index % 2 === 0) {
        doc.setFillColor(244, 247, 252);
        doc.rect(36, y, pageWidth - 72, height, "F");
      }
      doc.setTextColor(...NAVY);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text(`${row.sku}  ${row.name}`, 44, y + 14);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...MUTED);
      if (detail.length) doc.text(detail, 44, y + 26);
      doc.setTextColor(...NAVY);
      doc.text(String(row.qty), 400, y + 14, { align: "right" });
      doc.text(money(row.unitMsrp), 490, y + 14, { align: "right" });
      doc.text(money(row.extMsrp), pageWidth - 44, y + 14, { align: "right" });
      y += height;
    });
    y += 16;
  };

  drawTable("Hardware", model.lines.map((line) => ({ ...line, detail: line.detail })));
  drawTable("Services", model.services.map((line) => ({ ...line, detail: line.unit })));

  ensure(78);
  const boxX = pageWidth - 250;
  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.6);
  let boxY = y;
  doc.setFontSize(10);
  doc.setTextColor(...MUTED);
  if (model.lines.length) {
    doc.text("Hardware MSRP", boxX, boxY);
    doc.setTextColor(...NAVY);
    doc.text(money(model.hardwareMsrp), pageWidth - 44, boxY, { align: "right" });
    boxY += 16;
  }
  if (model.services.length) {
    doc.setTextColor(...MUTED);
    doc.text("Services MSRP", boxX, boxY);
    doc.setTextColor(...NAVY);
    doc.text(money(model.servicesMsrp), pageWidth - 44, boxY, { align: "right" });
    boxY += 16;
  }
  doc.setDrawColor(...NAVY);
  doc.line(boxX, boxY - 4, pageWidth - 40, boxY - 4);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Total MSRP", boxX, boxY + 14);
  doc.text(money(model.totalMsrp), pageWidth - 44, boxY + 14, { align: "right" });
  y = boxY + 36;

  const paragraphs = String(model.terms || "").split(/\n\n/);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  ensure(24);
  doc.text("TERMS", 36, y);
  y += 14;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  paragraphs.forEach((paragraph) => {
    const lines = doc.splitTextToSize(paragraph, pageWidth - 72);
    ensure(lines.length * 11 + 8);
    doc.text(lines, 36, y);
    y += lines.length * 11 + 8;
  });

  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i += 1) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.setDrawColor(227, 232, 241);
    doc.line(36, pageHeight - 36, pageWidth - 36, pageHeight - 36);
    doc.text(`${ADDRESS}   ${PHONE}`, 36, pageHeight - 22);
    doc.text("Your phone is your key.", pageWidth - 36, pageHeight - 22, { align: "right" });
  }
  doc.save(`VIZpin-Quote-${model.number}.pdf`);
}

async function downloadPriceList() {
  if (!window.jspdf) {
    showToast("The PDF library did not load.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter", orientation: "landscape" });
  doc.setProperties({ title: "VIZpin Partner Price List", author: "VIZpin", subject: "Bronze Silver Gold MSRP" });
  const logo = await logoData();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let y = 0;
  const drawHeader = () => {
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, pageWidth, 64, "F");
    doc.setFillColor(...AQUA);
    doc.rect(0, 64, pageWidth, 3, "F");
    if (logo) doc.addImage(logo, "PNG", 28, 12, 40, 40);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("VIZpin partner price list", 78, 30);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...AQUA);
    doc.text("Bronze  ·  Silver  ·  Gold  ·  MSRP", 78, 46);
    doc.setTextColor(255, 255, 255);
    doc.text(formatDate(new Date().toISOString()), pageWidth - 28, 38, { align: "right" });
    y = 86;
  };
  const ensure = (height) => {
    if (y + height > pageHeight - 36) {
      doc.addPage();
      drawHeader();
    }
  };
  drawHeader();
  doc.setTextColor(...MUTED);
  doc.setFontSize(8);
  const intro = doc.splitTextToSize(`Internal use. ${ruleSentence()}`, pageWidth - 56);
  doc.text(intro, 28, y);
  y += intro.length * 11 + 12;

  const columns = [28, 90, 150, 310, 430, 520, 610, 700];
  const heads = ["SKU", "Category", "Item", "Finish", "MSRP", "Bronze", "Silver", "Gold"];
  const paintHead = () => {
    ensure(22);
    doc.setFillColor(...NAVY);
    doc.rect(28, y, pageWidth - 56, 16, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    heads.forEach((label, index) => {
      const align = index >= 4 ? "right" : "left";
      const x = index >= 4 ? columns[index] + 52 : columns[index];
      doc.text(label, x, y + 11, { align });
    });
    y += 16;
  };
  paintHead();
  db.products.filter((product) => product.active).forEach((product) => {
    const finishes = product.finishes.length ? product.finishes : [{ name: "—", upcharge: 0, note: "" }];
    finishes.forEach((finish, index) => {
      ensure(18);
      if (index % 2 === 0) {
        doc.setFillColor(244, 247, 252);
        doc.rect(28, y, pageWidth - 56, 16, "F");
      }
      const msrp = round2(Number(product.msrp) + Number(finish.upcharge || 0));
      const label = finish.name === "—" ? "—" : `${finish.name}${finish.note ? ` (${finish.note})` : ""}`;
      const cells = [product.sku, product.category, product.name, label, money(msrp), ...db.rules.tiers.map((tier) => money(partnerOf(msrp, tier)))];
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(...NAVY);
      cells.forEach((cell, cellIndex) => {
        const align = cellIndex >= 4 ? "right" : "left";
        const x = cellIndex >= 4 ? columns[cellIndex] + 52 : columns[cellIndex];
        doc.text(String(cell), x, y + 11, { align });
      });
      y += 16;
    });
  });

  y += 18;
  ensure(36);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(...NAVY);
  doc.text("Services", 28, y);
  y += 8;
  paintHead();
  db.services.filter((service) => service.active).forEach((service, index) => {
    ensure(18);
    if (index % 2 === 0) {
      doc.setFillColor(244, 247, 252);
      doc.rect(28, y, pageWidth - 56, 16, "F");
    }
    const cells = [service.sku, "Service", service.name, service.unit, money(service.msrp), ...db.rules.tiers.map((tier) => money(servicePartner(service.msrp, tier)))];
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...NAVY);
    cells.forEach((cell, cellIndex) => {
      const align = cellIndex >= 4 ? "right" : "left";
      const x = cellIndex >= 4 ? columns[cellIndex] + 52 : columns[cellIndex];
      doc.text(String(cell), x, y + 11, { align });
    });
    y += 16;
  });

  const pages = doc.getNumberOfPages();
  for (let i = 1; i <= pages; i += 1) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    doc.text(`${ADDRESS}   ${PHONE}   Internal price list`, 28, pageHeight - 18);
    doc.text(`${i} / ${pages}`, pageWidth - 28, pageHeight - 18, { align: "right" });
  }
  doc.save("VIZpin-Price-List.pdf");
}

function bindInput(el) {
  const key = el.dataset.bind;
  if (!key) return;
  if (key === "query") {
    state.query = el.value;
    state.enter = false;
    render();
    return;
  }
  if (key === "catalogQuery") {
    state.catalogQuery = el.value;
    state.enter = false;
    render();
    return;
  }
  if (!state.draft) return;
  state.draft[key] = el.value;
}

document.body.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-role]");
  if (!form) return;
  event.preventDefault();
  login(form.dataset.role);
});

document.body.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;
  const action = trigger.dataset.action;
  if (action === "close-preview" && event.target.closest(".paper")) return;
  if (action === "go") go(trigger.dataset.view);
  if (action === "sign-out") signOut();
  if (action === "new-quote") openNew();
  if (action === "open-quote") openQuote(trigger.dataset.id);
  if (action === "delete-quote") {
    const quote = db.quotes.find((item) => item.id === trigger.dataset.id);
    if (quote && confirm(`Delete ${quote.number}?`)) {
      db.quotes = db.quotes.filter((item) => item.id !== quote.id);
      persist();
      showToast(`${quote.number} deleted.`);
      render();
    }
  }
  if (action === "download-quote") {
    const quote = db.quotes.find((item) => item.id === trigger.dataset.id);
    if (quote) downloadCustomerPdf(quote);
  }
  if (action === "download-prices") downloadPriceList();
  if (action === "set-tier") {
    state.draft.tier = trigger.dataset.tier;
    state.enter = false;
    render();
  }
  if (action === "set-category") {
    state.catalogCategory = trigger.dataset.category;
    state.enter = false;
    render();
  }
  if (action === "add-product") addProduct(trigger.dataset.id);
  if (action === "remove-line") {
    state.draft.lines = state.draft.lines.filter((line) => line.id !== trigger.dataset.id);
    state.enter = false;
    render();
  }
  if (action === "qty") {
    const line = state.draft.lines.find((item) => item.id === trigger.dataset.id);
    if (!line) return;
    line.qty = Math.min(999, Math.max(1, line.qty + Number(trigger.dataset.step)));
    state.enter = false;
    render();
  }
  if (action === "service-qty") {
    const next = serviceQty(state.draft, trigger.dataset.id) + Number(trigger.dataset.step);
    setServiceQty(trigger.dataset.id, next);
    state.enter = false;
    render();
  }
  if (action === "save-quote") {
    const saved = saveDraft();
    if (saved) {
      showToast(`${saved.number} saved.`);
      state.enter = false;
      render();
    }
  }
  if (action === "preview-quote" || action === "download-current") {
    const saved = saveDraft();
    if (!saved) return;
    if (action === "preview-quote") {
      state.previewId = saved.id;
      state.enter = true;
      render();
    } else {
      state.enter = false;
      render();
      downloadCustomerPdf(saved);
    }
  }
  if (action === "close-preview") {
    state.previewId = null;
    state.enter = true;
    render();
  }
  if (action === "admin-tab") {
    const scraped = scrapeAdmin();
    if (scraped.error) {
      showToast(scraped.error);
      return;
    }
    state.adminDraft = scraped.draft;
    state.adminTab = trigger.dataset.tab;
    state.enter = false;
    render();
  }
  if (action === "save-admin") {
    const scraped = scrapeAdmin();
    if (scraped.error) {
      showToast(scraped.error);
      return;
    }
    state.adminDraft = scraped.draft;
    db.products = clone(scraped.draft.products);
    db.services = clone(scraped.draft.services);
    db.rules = clone(scraped.draft.rules);
    db.terms = scraped.draft.terms;
    db.team = scraped.draft.team.slice();
    persist();
    showToast("Pricing saved. New calculations use these figures.");
    state.enter = false;
    render();
  }
  if (action === "restore-prices") {
    if (!confirm("Restore catalog prices, service rates, discounts, and terms?")) return;
    const seed = buildSeed();
    db.products = seed.products;
    db.services = seed.services;
    db.rules = seed.rules;
    db.terms = seed.terms;
    db.team = seed.team;
    persist();
    state.adminDraft = pickSettings(db);
    showToast("Demo prices restored. Existing quotes were kept.");
    render();
  }
  if (action === "reset-workspace") {
    if (!confirm("Replace quotes and prices with the original demo workspace?")) return;
    db = buildSeed();
    persist();
    state.adminDraft = pickSettings(db);
    state.draft = null;
    showToast("Workspace reset.");
    render();
  }
});

document.body.addEventListener("input", (event) => {
  const el = event.target;
  if (el.dataset.bind) bindInput(el);
  if (el.dataset.lineQty && state.draft) {
    if (el.value === "") return;
    const line = state.draft.lines.find((item) => item.id === el.dataset.lineQty);
    if (!line) return;
    line.qty = Math.min(999, Math.max(1, Math.floor(Number(el.value) || 1)));
    state.enter = false;
    render();
  }
  if (el.dataset.serviceQty && state.draft) {
    if (el.value === "") return;
    setServiceQty(el.dataset.serviceQty, Math.floor(Number(el.value) || 0));
    state.enter = false;
    render();
  }
});

document.body.addEventListener("change", (event) => {
  const el = event.target;
  if (!state.draft) return;
  if (el.dataset.lineFinish) {
    const line = state.draft.lines.find((item) => item.id === el.dataset.lineFinish);
    if (line) line.finish = el.value;
    state.enter = false;
    render();
  }
  if (el.dataset.lineOption) {
    const line = state.draft.lines.find((item) => item.id === el.dataset.lineOption);
    if (line) line.options[el.dataset.optionKey] = el.value;
    state.enter = false;
    render();
  }
  if (el.dataset.bind === "preparedBy") {
    state.draft.preparedBy = el.value;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.previewId) {
    state.previewId = null;
    render();
  }
});

function addProduct(productId) {
  const product = db.products.find((item) => item.id === productId);
  if (!product) return;
  const options = {};
  (product.options || []).forEach((opt) => {
    options[opt.key] = opt.choices[0];
  });
  const line = {
    id: uid(),
    productId,
    qty: 1,
    finish: product.finishes[0] ? product.finishes[0].name : "",
    options,
  };
  state.draft.lines.push(line);
  state.justAdded = line.id;
  state.enter = false;
  render();
}

function selfCheck() {
  const previous = db;
  db = { ...blankSettings(), nextSeq: 1, quotes: [] };
  const draft = blankDraft();
  draft.company = "Check";
  draft.tier = "gold";
  draft.lines.push(lineSeed("vpslc", 2, "Matte Black", {
    lever: "Portfolio",
    backset: "2-3/4 in",
    strike: "ANSI",
    handing: "RH",
  }));
  draft.services.push({ serviceId: "plus1", qty: 2 });
  const full = compute(draft);
  const safe = customerFacing(full);
  const leaked = Object.keys(JSON.parse(JSON.stringify(safe))).some((key) => /partner|tier|discount/i.test(key));
  const unit = round2(589 + 30);
  const partnerUnit = round2(unit * (1 - 0.32));
  const ok = full.lines[0].extMsrp === round2(unit * 2)
    && full.lines[0].extPartner === round2(partnerUnit * 2)
    && safe.totalMsrp === full.totalMsrp
    && !leaked
    && !("unitPartner" in safe.lines[0]);
  db = previous;
  if (!ok) console.error("VIZpin pricing self-check failed", full, safe);
}

db = loadDb();
selfCheck();
state.role = sessionStorage.getItem("vizpin-role");
if (state.role !== "admin" && state.role !== "employee") state.role = null;
state.view = state.role ? "quotes" : "login";
render();
