import {
  gsap,
  ScrollTrigger,
  ScrollSmoother,
  MOTION_EASE,
  MOTION_DUR,
  MEDIA_QUERIES,
  isMotionReduced,
  splitWords,
  createMagnetic,
  initTextRoll,
  scrollToTop,
} from "./motion.js";

const SITE_ROOT_URL = new URL("../", import.meta.url);
const DEFAULT_LOGO_URL = new URL("assets/logo/NDT-logo-mark.svg", SITE_ROOT_URL).href;
const RING_CIRCUMFERENCE = 2 * Math.PI * 20.5;
const ARROW_PATH = '<path d="M5 19 19 5M5 5h14v14"/>';
const SLIDING_DOOR_SVG = '<svg class="door-slide-icon" viewBox="0 0 20 16" aria-hidden="true"><line class="door-slide-gap" x1="10" y1="3.5" x2="10" y2="12.5"/><rect class="door-slide-leaf door-slide-leaf--left" x="5.75" y="2" width="4" height="12" rx="1"/><rect class="door-slide-leaf door-slide-leaf--right" x="10.25" y="2" width="4" height="12" rx="1"/></svg>';

export const CHROME_CONFIG = {
  brand: {
    name: "نوین درب تهران",
    homeAriaLabel: "نوین درب تهران، صفحهٔ اصلی",
    logoSrc: DEFAULT_LOGO_URL,
  },

  contact: {
    phone: "[PLACEHOLDER_PHONE]",
    messenger: "[PLACEHOLDER_MESSENGER]",
    hoursShort: "شنبه تا پنج‌شنبه، ۸ تا ۱۸",
    areaLabel: "تهران",
  },

  nav: [
    { id: "home", title: "صفحه اصلی", href: "index.html" },
    { id: "services", title: "محصولات و خدمات", href: "products.html" },
    { id: "articles", title: "مقالات", href: "articles.html" },
    { id: "contact", title: "ارتباط با ما", href: "contact.html" },
  ],

  headerCta: {
    label: "تماس بگیرید",
    href: "contact.html",
  },

  footer: {
    cta: {
      eyebrow: "شروع همکاری",
      titleStart: "گفت‌وگو را ",
      titleAccent: "شروع کنیم.",
      description:
        "برای انتخاب، نصب، تعمیر یا سرویس دوره‌ای درب، نیازتان را بگویید تا راهکار دقیق و هزینهٔ شفاف مشخص شود.",
      primaryLabel: "تماس بگیرید",
      primaryHref: "contact.html",
      secondaryLabel: "مشاهدهٔ محصولات",
      secondaryHref: "products.html",
    },
    servicesHeading: "محصولات و خدمات",
    services: [
      { id: "jack", title: "جک‌های پارکینگی", href: "products/jack.html", img: "assets/projects-images/parking-gate-openers.png" },
      { id: "glass", title: "درب‌های شیشه‌ای اتوماتیک", href: "products/glass.html", img: "assets/projects-images/automatic-glass-doors.png" },
      { id: "shutter", title: "درب‌های کرکره‌ای", href: "products/shutter.html", img: "assets/projects-images/roller-shutters.jpg" },
      { id: "barrier", title: "راهبندهای اتوماتیک", href: "products/barrier.html", img: "assets/projects-images/automatic-barriers.jpg" },
      { id: "balcony", title: "شیشهٔ بالکنی", href: "products/balcony.html", img: "assets/projects-images/glass-balustrade.jpg" },
      { id: "folding", title: "درب‌های فولدینگ", href: "products/folding.html", img: "assets/projects-images/folding-doors.jpg" },
      { id: "sectional", title: "درب‌های سکشنال", href: "products/sectional.html", img: "assets/projects-images/sectional-doors.jpg" },
    ],
    wordmark: "نوین درب تهران",
    legal: "© ۱۴۰۵ نوین درب تهران؛ تمامی حقوق محفوظ است.",
    toTopLabel: "بازگشت به بالا",
  },
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export const toAsciiDigits = (value) =>
  String(value)
    .replace(/[۰-۹]/g, (d) =>
      "\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(d)
    )
    .replace(/[٠-٩]/g, (d) =>
      "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(d)
    );

export const cleanPhone = (value) => toAsciiDigits(value).replace(/[\s()\-]/g, "");
export const isValidIranPhone = (value) =>
  /^(?:0[1-9]\d{9}|(?:\+98|0098)[1-9]\d{9})$/.test(value);

export const parseHttpsUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
};

const normalizePath = (pathname) =>
  pathname.endsWith("/") ? `${pathname}index.html` : pathname;

const isExternalOrSpecialHref = (href) =>
  !href ||
  href.startsWith("#") ||
  /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href);

const isHomePage = () => {
  const rootIndexPath = new URL("index.html", SITE_ROOT_URL).pathname;
  return normalizePath(window.location.pathname) === rootIndexPath;
};

function resolveAssetUrl(rawPath) {
  if (!rawPath || isExternalOrSpecialHref(rawPath) || rawPath.startsWith("/")) {
    return rawPath;
  }
  return new URL(rawPath, SITE_ROOT_URL).href;
}

function resolveHref(rawHref) {
  if (!rawHref) return "#";
  if (isExternalOrSpecialHref(rawHref)) return rawHref;

  const target = new URL(rawHref.replace(/^\/+/, ""), SITE_ROOT_URL);
  const samePage =
    normalizePath(target.pathname) === normalizePath(window.location.pathname);

  if (samePage) {
    if (target.hash && document.getElementById(target.hash.slice(1))) {
      return target.hash;
    }
    if (!target.hash && isHomePage() && document.getElementById("home")) {
      return "#home";
    }
    if (!target.hash && document.getElementById("contact")) {
      return "#contact";
    }
  }

  return target.href;
}

function isCurrentPageLink(rawHref, itemId) {
  if (itemId === "services" && window.location.pathname.includes("/products/")) {
    return true;
  }
  if (itemId === "articles" && window.location.pathname.includes("/articles/")) {
    return true;
  }
  if (!rawHref || isExternalOrSpecialHref(rawHref)) return false;
  try {
    const target = new URL(rawHref.replace(/^\/+/, ""), SITE_ROOT_URL);
    if (target.hash) return false;
    return normalizePath(target.pathname) === normalizePath(window.location.pathname);
  } catch {
    return false;
  }
}

function createElementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function getVerifiedContact() {
  const normalizedPhone = cleanPhone(CHROME_CONFIG.contact.phone);
  const validPhone = isValidIranPhone(normalizedPhone)
    ? { display: CHROME_CONFIG.contact.phone, href: `tel:${normalizedPhone}` }
    : null;
  const messengerHref = parseHttpsUrl(CHROME_CONFIG.contact.messenger);
  return { validPhone, messengerHref };
}

function renderHeaderMarkup() {
  const { brand, nav, headerCta } = CHROME_CONFIG;
  const homeHref = resolveHref("index.html");
  const ctaHref = resolveHref(headerCta.href);

  const navItemsHtml = nav
    .map((item) => {
      const href = resolveHref(item.href);
      const isPageActive = isCurrentPageLink(item.href, item.id);
      const isHomeDefault = isHomePage() && href === "#home";
      const currentAttr = isPageActive
        ? ' aria-current="page"'
        : isHomeDefault
          ? ' aria-current="location"'
          : "";
      return `<li><a href="${escapeHtml(href)}" data-nav-id="${escapeHtml(item.id)}"${currentAttr}>${escapeHtml(item.title)}</a></li>`;
    })
    .join("");

  return `
<header class="site-header">
  <div class="header-drop-bg" aria-hidden="true"></div>
  <div class="header-shell">
    <div class="header-capsule" aria-hidden="true"></div>
    <a class="logo" href="${escapeHtml(homeHref)}" aria-label="${escapeHtml(brand.homeAriaLabel)}">
      <span class="logo-mark" aria-hidden="true"><img src="${escapeHtml(resolveAssetUrl(brand.logoSrc))}" alt="" width="165.711" height="86.221"></span>
      <span class="logo-type">${escapeHtml(brand.name)}</span>
    </a>
    <nav class="nav" aria-label="ناوبری اصلی">
      <ul>${navItemsHtml}</ul>
    </nav>
    <div class="header-actions">
      <a class="btn btn--primary header-cta" href="${escapeHtml(ctaHref)}" data-phone-link>${escapeHtml(headerCta.label)}</a>
      <button class="menu-btn" type="button" aria-label="باز کردن منو" aria-controls="door-menu" aria-expanded="false">
        <svg class="menu-ring" viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="20.5"/></svg>
        <svg class="menu-door-icon" viewBox="0 0 24 24" aria-hidden="true">
          <line class="line-top" x1="4" y1="8.5" x2="20" y2="8.5"/>
          <line class="line-bot" x1="4" y1="15.5" x2="20" y2="15.5"/>
        </svg>
      </button>
    </div>
  </div>
</header>`;
}

function renderDoorMenuMarkup() {
  const { nav, headerCta, contact, footer } = CHROME_CONFIG;
  const ctaHref = resolveHref(headerCta.href);
  const { validPhone, messengerHref } = getVerifiedContact();

  const itemsHtml = nav
    .map((item) => {
      const href = resolveHref(item.href);
      const isPageActive = isCurrentPageLink(item.href, item.id);
      const currentAttr = isPageActive ? ' aria-current="page"' : "";
      const titleEsc = escapeHtml(item.title);
      return `
      <li class="door-menu-item">
        <a class="door-menu-link" href="${escapeHtml(href)}"${currentAttr}>
          <span class="door-link-dot" aria-hidden="true"></span>
          <span class="roll-mask">
            <span class="roll-track">
              <span class="roll-copy">${titleEsc}</span>
              <span class="roll-copy roll-copy--clone" aria-hidden="true">${titleEsc}</span>
            </span>
          </span>
        </a>
      </li>`;
    })
    .join("");

  const activeSvc =
    footer.services.find((svc) => isCurrentPageLink(svc.href)) || footer.services[0];
  const activeHref = resolveHref(activeSvc.href);
  const desktopPreviewCapable =
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 64em) and (hover: hover) and (pointer: fine)").matches;

  const productRowsHtml = footer.services
    .map((svc) => {
      const href = resolveHref(svc.href);
      const imgUrl = resolveAssetUrl(svc.img);
      const isCurrent = isCurrentPageLink(svc.href);
      const isActive = svc.id === activeSvc.id;
      return `
      <div class="door-product-row">
        <a class="door-product-link${isActive ? " is-active" : ""}" href="${escapeHtml(href)}" data-preview-img="${escapeHtml(imgUrl)}" data-preview-title="${escapeHtml(svc.title)}"${isCurrent ? ' aria-current="page"' : ""}>
          <img class="door-product-thumb" src="${escapeHtml(imgUrl)}" alt="" width="40" height="40" decoding="async">
          <span class="door-product-name">${escapeHtml(svc.title)}</span>
          <span class="door-product-current" aria-hidden="true"></span>
          ${SLIDING_DOOR_SVG}
        </a>
      </div>`;
    })
    .join("");

  const mobileCardsHtml = footer.services
    .map((svc) => {
      const href = resolveHref(svc.href);
      const imgUrl = resolveAssetUrl(svc.img);
      const isCurrent = isCurrentPageLink(svc.href);
      return `
      <a class="door-mobile-card" href="${escapeHtml(href)}"${isCurrent ? ' aria-current="page"' : ""}>
        <img class="door-mobile-card-img" src="${escapeHtml(imgUrl)}" alt="" width="480" height="360" loading="lazy" decoding="async">
        <span class="door-mobile-card-name">${escapeHtml(svc.title)}</span>
      </a>`;
    })
    .join("");

  const phoneLinkHtml = validPhone
    ? `<a class="door-contact-secondary" href="${escapeHtml(validPhone.href)}" dir="ltr">${escapeHtml(validPhone.display)}</a>`
    : "";
  const messengerLinkHtml = messengerHref
    ? `<a class="door-contact-secondary" href="${escapeHtml(messengerHref)}" rel="noopener noreferrer">پیام‌رسان</a>`
    : "";

  const activeImgUrl = resolveAssetUrl(activeSvc.img);
  const initialLayerAAttr = desktopPreviewCapable
    ? `src="${escapeHtml(activeImgUrl)}"`
    : `data-preview-src="${escapeHtml(activeImgUrl)}"`;

  return `
<aside id="door-menu" class="door-menu" role="dialog" aria-modal="true" aria-label="منوی ناوبری سایت" hidden>
  <div class="door-backdrop" aria-hidden="true"></div>
  <div class="door-panel">
    <div class="door-panel-scroll">
      <div class="door-panel-grid">
        <nav class="door-menu-nav" aria-label="ناوبری بخش‌ها">
          <ul class="door-menu-list">${itemsHtml}</ul>
        </nav>

        <div class="door-products-col">
          <h2 class="door-products-title">محصولات و راهکارها</h2>
          <div class="door-products-links">
            <span class="door-product-indicator" aria-hidden="true"></span>
            ${productRowsHtml}
          </div>
          <div class="door-mobile-carousel" aria-label="محصولات و راهکارها">
            ${mobileCardsHtml}
          </div>
        </div>

        <div class="door-contact-card">
          <div class="door-contact-meta">
            <span><strong>پاسخ‌گویی:</strong> ${escapeHtml(contact.hoursShort)}</span>
            <span><strong>محدوده:</strong> ${escapeHtml(contact.areaLabel)}</span>
          </div>
          <div class="door-contact-actions">
            <a class="btn btn--primary" href="${escapeHtml(ctaHref)}" data-phone-link>${escapeHtml(headerCta.label)}</a>
            ${phoneLinkHtml}
            ${messengerLinkHtml}
          </div>
        </div>

        <div class="door-preview-col" aria-hidden="true">
          <a class="door-preview-frame" href="${escapeHtml(activeHref)}" tabindex="-1">
            <div class="door-preview-media">
              <div class="door-preview-layer" data-preview-layer="a">
                <img class="door-preview-img" ${initialLayerAAttr} alt="" width="640" height="480" decoding="async">
              </div>
              <div class="door-preview-layer" data-preview-layer="b" hidden>
                <img class="door-preview-img" alt="" width="640" height="480" loading="lazy" decoding="async">
              </div>
              <div class="door-preview-scrim" aria-hidden="true"></div>
              <div class="door-preview-edge" aria-hidden="true"></div>
            </div>
            <div class="door-preview-cap">
              <span class="door-preview-name">${escapeHtml(activeSvc.title)}</span>
              <span class="door-preview-action">
                <span class="door-preview-hint">مشاهدهٔ محصول</span>
                ${SLIDING_DOOR_SVG}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="door-panel-rail" aria-hidden="true"></div>
  </div>
</aside>`;
}

function injectSpeculationRules() {
  if (
    typeof document === "undefined" ||
    document.querySelector('script[type="speculationrules"][data-ndt-prefetch]')
  ) {
    return;
  }
  const urls = new Set();
  CHROME_CONFIG.nav.forEach((item) => {
    try {
      urls.add(new URL(item.href, SITE_ROOT_URL).href);
    } catch {
      /* ignore invalid href */
    }
  });
  CHROME_CONFIG.footer.services.forEach((svc) => {
    try {
      urls.add(new URL(svc.href, SITE_ROOT_URL).href);
    } catch {
      /* ignore invalid href */
    }
  });
  const script = document.createElement("script");
  script.type = "speculationrules";
  script.dataset.ndtPrefetch = "true";
  script.textContent = JSON.stringify({
    prefetch: [
      {
        source: "list",
        urls: [...urls],
        eagerness: "moderate",
      },
    ],
  });
  document.head.append(script);
}

function renderFooterMarkup() {
  const { nav, contact, footer } = CHROME_CONFIG;
  const primaryHref = resolveHref(footer.cta.primaryHref);
  const secondaryHref = resolveHref(footer.cta.secondaryHref);
  const { validPhone, messengerHref } = getVerifiedContact();

  const mainLinksHtml = nav
    .map(
      (link) =>
        `<li><a href="${escapeHtml(resolveHref(link.href))}">${escapeHtml(link.title)} <svg class="link-arw" viewBox="0 0 24 24" aria-hidden="true">${ARROW_PATH}</svg></a></li>`
    )
    .join("");

  const servicesHtml = footer.services
    .map(
      (svc) =>
        `<a href="${escapeHtml(resolveHref(svc.href))}">${escapeHtml(svc.title)}</a>`
    )
    .join("");

  const phoneLineHtml = validPhone
    ? `<a class="footer-verified-link" href="${escapeHtml(validPhone.href)}" data-phone-link>${escapeHtml(validPhone.display)}</a>`
    : "";
  const messengerLineHtml = messengerHref
    ? `<a class="footer-verified-link" href="${escapeHtml(messengerHref)}" data-messenger-link rel="noopener noreferrer">ارتباط در پیام‌رسان</a>`
    : "";

  const verifiedLinksHtml =
    phoneLineHtml || messengerLineHtml
      ? `<div class="footer-verified-links">${phoneLineHtml}${messengerLineHtml}</div>`
      : "";

  return `
<footer class="site-footer" id="contact-info">
  <div class="footer-doors" aria-hidden="true">
    <div class="footer-door footer-door--left"></div>
    <div class="footer-door footer-door--right"></div>
  </div>
  <div class="footer-curtain">
    <div class="wrap">
      <div class="footer-grid">
        <section class="footer-cta" aria-labelledby="footer-cta-title">
          <span class="label label--dot">${escapeHtml(footer.cta.eyebrow)}</span>
          <h2 id="footer-cta-title">${escapeHtml(footer.cta.titleStart)}<em>${escapeHtml(footer.cta.titleAccent)}</em></h2>
          <p>${escapeHtml(footer.cta.description)}</p>
          <div class="footer-cta-actions">
            <a class="btn btn--primary" href="${escapeHtml(primaryHref)}" data-phone-link>${escapeHtml(footer.cta.primaryLabel)}</a>
            <a class="btn btn--secondary" href="${escapeHtml(secondaryHref)}">${escapeHtml(footer.cta.secondaryLabel)} <svg class="arw" viewBox="0 0 24 24" aria-hidden="true">${ARROW_PATH}</svg></a>
          </div>
        </section>

        <div class="footer-info-stack">
          <div class="footer-top-cols">
            <nav aria-label="لینک‌های اصلی">
              <h3 class="footer-heading">دسترسی سریع</h3>
              <ul class="footer-main-links">${mainLinksHtml}</ul>
            </nav>

            <div>
              <h3 class="footer-heading">ساعات و محدوده</h3>
              <div class="footer-hours-block">
                <div class="footer-hours-meta">
                  <p><strong>پاسخ‌گویی:</strong> ${escapeHtml(contact.hoursShort)}</p>
                  <p><strong>محدودهٔ خدمات:</strong> ${escapeHtml(contact.areaLabel)}</p>
                </div>
                ${verifiedLinksHtml}
              </div>
            </div>
          </div>

          <div>
            <h3 class="footer-heading footer-services-heading">${escapeHtml(footer.servicesHeading)}</h3>
            <details class="footer-services-acc">
              <summary>محصولات</summary>
              <div class="footer-services-list">${servicesHtml}</div>
            </details>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-legal">${escapeHtml(footer.legal)}</p>
        <button class="to-top" type="button" data-to-top aria-label="${escapeHtml(footer.toTopLabel)}" title="${escapeHtml(footer.toTopLabel)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V4M5 11l7-7 7 7"/></svg>
        </button>
      </div>

      <div class="footer-wordmark-wrap" aria-hidden="true">
        <div class="footer-wordmark-track"><span>${escapeHtml(footer.wordmark)}</span></div>
      </div>
    </div>
  </div>
</footer>`;
}

export function applyContactLinks(root = document) {
  const { validPhone, messengerHref } = getVerifiedContact();

  if (validPhone) {
    qsa("[data-phone-link]", root).forEach((el) => {
      el.href = validPhone.href;
    });
    qsa("[data-phone-label]", root).forEach((el) => {
      el.textContent = validPhone.display;
    });
  }

  if (messengerHref) {
    qsa("[data-messenger-link]", root).forEach((el) => {
      el.href = messengerHref;
      el.rel = "noopener noreferrer";
    });
    qsa("[data-messenger-label]", root).forEach((el) => {
      el.textContent = messengerHref;
    });
  }
}

function mountHeaderMenuAndFooter() {
  const smoothWrapper = qs("#smooth-wrapper");
  const main = qs("main");

  if (!qs(".site-header")) {
    const headerEl = createElementFromHtml(renderHeaderMarkup());
    const headerMount = qs("[data-site-header]");
    if (headerMount) {
      headerMount.replaceWith(headerEl);
    } else if (smoothWrapper) {
      smoothWrapper.before(headerEl);
    } else if (main) {
      main.before(headerEl);
    } else {
      document.body.prepend(headerEl);
    }
  }

  if (!qs("#door-menu")) {
    const menuEl = createElementFromHtml(renderDoorMenuMarkup());
    const headerEl = qs(".site-header");
    if (headerEl) {
      headerEl.after(menuEl);
    } else if (smoothWrapper) {
      smoothWrapper.before(menuEl);
    } else {
      document.body.prepend(menuEl);
    }
  }

  if (!qs(".site-footer")) {
    const footerEl = createElementFromHtml(renderFooterMarkup());
    const footerMount = qs("[data-site-footer]");
    if (footerMount) {
      footerMount.replaceWith(footerEl);
    } else if (main) {
      main.after(footerEl);
    } else {
      document.body.append(footerEl);
    }
  }
}

function setupDoorMenuController() {
  const header = qs(".site-header");
  const headerDropBg = qs(".header-drop-bg", header);
  const menu = qs("#door-menu");
  const menuBtn = qs(".menu-btn");
  if (!menu || !menuBtn || !header) return { isOpen: () => false };

  const backdrop = qs(".door-backdrop", menu);
  const panel = qs(".door-panel", menu);
  const panelScroll = qs(".door-panel-scroll", menu);
  const panelRail = qs(".door-panel-rail", menu);
  const navCol = qs(".door-menu-nav", menu);
  const productsCol = qs(".door-products-col", menu);
  const contactCol = qs(".door-contact-card", menu);
  const previewCol = qs(".door-preview-col", menu);
  const colEls = [navCol, productsCol, contactCol, previewCol].filter(Boolean);

  const primaryLinks = qsa(".door-menu-link", menu);
  const productsTitle = qs(".door-products-title", menu);
  const productsWrap = qs(".door-products-links", menu);
  const productLinks = qsa(".door-product-link", menu);
  const productIndicator = qs(".door-product-indicator", menu);
  const mobileCarousel = qs(".door-mobile-carousel", menu);
  const mobileCards = qsa(".door-mobile-card", menu);
  const previewFrame = qs(".door-preview-frame", menu);
  const previewMedia = qs(".door-preview-media", menu);
  const previewLayerA = qs('[data-preview-layer="a"]', menu);
  const previewLayerB = qs('[data-preview-layer="b"]', menu);
  const previewImgA = previewLayerA ? qs("img", previewLayerA) : null;
  const previewImgB = previewLayerB ? qs("img", previewLayerB) : null;
  const previewScrim = qs(".door-preview-scrim", menu);
  const previewEdge = qs(".door-preview-edge", menu);
  const previewName = qs(".door-preview-name", menu);

  const mqMobileSheet = window.matchMedia("(max-width: 63.99em)");
  const mqDesktopPreview = window.matchMedia(
    "(min-width: 64em) and (hover: hover) and (pointer: fine)"
  );
  const isMobileSheet = () => mqMobileSheet.matches;
  const isDesktopPreviewMode = () => mqDesktopPreview.matches;

  let openState = false;
  let inertSiblings = [];
  let menuTl = null;
  let builtForMobile = null;
  let previewTl = null;
  let captionTl = null;
  let savedScrollY = 0;
  let savedSmootherTop = null;
  let previewToken = 0;
  let hoverTimer = 0;
  let imagesPredecoded = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let activeSlot = "a";
  let currentPreviewSrc =
    previewImgA?.getAttribute("src") || previewImgA?.dataset.previewSrc || "";
  let inFlightTarget = null;
  let pendingPreview = null;
  let isDecodingPreview = false;
  const decodePromises = new Map();
  let cachedRowOffsets = [];
  let cachedRowHeights = [];

  const getActiveSlot = () =>
    activeSlot === "a"
      ? { layer: previewLayerA, img: previewImgA }
      : { layer: previewLayerB, img: previewImgB };

  const getStandbySlot = () =>
    activeSlot === "a"
      ? { layer: previewLayerB, img: previewImgB }
      : { layer: previewLayerA, img: previewImgA };

  const refreshRowOffsets = () => {
    cachedRowOffsets = productLinks.map((link) => link.parentElement?.offsetTop ?? 0);
    cachedRowHeights = productLinks.map((link) => link.offsetHeight || 52);
  };

  if (productsWrap && typeof ResizeObserver === "function") {
    const ro = new ResizeObserver(() => {
      if (openState && !isMobileSheet()) refreshRowOffsets();
    });
    ro.observe(productsWrap);
  }

  mqMobileSheet.addEventListener("change", () => {
    if (!openState && menuTl) {
      menuTl.kill();
      menuTl = null;
      builtForMobile = null;
    }
  });

  const moveIndicator = (targetLink, { instant = false } = {}) => {
    const idx = productLinks.indexOf(targetLink);
    if (idx === -1) return;

    productLinks.forEach((item) => item.classList.toggle("is-active", item === targetLink));
    if (!productIndicator || isMobileSheet()) return;

    if (!cachedRowOffsets.length) refreshRowOffsets();
    const y = cachedRowOffsets[idx] ?? 0;
    const baseH = productIndicator.offsetHeight || 52;
    const scaleY = (cachedRowHeights[idx] || baseH) / baseH;

    if (instant || isMotionReduced()) {
      gsap.killTweensOf(productIndicator);
      gsap.set(productIndicator, { y, scaleY, opacity: 1 });
      return;
    }

    gsap.to(productIndicator, {
      y,
      scaleY,
      opacity: 1,
      duration: 0.26,
      ease: MOTION_EASE.reveal,
      overwrite: "auto",
    });
  };

  const decodeImage = (src) => {
    if (!src) return Promise.resolve();
    if (decodePromises.has(src)) return decodePromises.get(src);
    const img = new Image();
    img.src = src;
    const promise = img.decode
      ? img.decode().catch(() => {})
      : new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = resolve;
            img.onerror = resolve;
          }
        });
    decodePromises.set(src, promise);
    return promise;
  };

  const decodeAllProductImages = () => {
    if (imagesPredecoded || !isDesktopPreviewMode()) return;
    imagesPredecoded = true;
    productLinks.forEach((link) => {
      decodeImage(link.dataset.previewImg);
    });
  };

  const setPreviewWillChange = (active) => {
    const valClip = active ? "clip-path, opacity" : "";
    const valTransform = active ? "transform" : "";
    const activeObj = getActiveSlot();
    const standbyObj = getStandbySlot();
    if (activeObj.layer) activeObj.layer.style.willChange = valTransform;
    if (activeObj.img) activeObj.img.style.willChange = "";
    if (standbyObj.layer) standbyObj.layer.style.willChange = valClip;
    if (standbyObj.img) standbyObj.img.style.willChange = valTransform;
    if (previewScrim) previewScrim.style.willChange = active ? "opacity" : "";
    if (previewEdge) previewEdge.style.willChange = active ? "transform, opacity" : "";
  };

  const updatePreviewCaption = (nextTitle, nextHref, { instant = false } = {}) => {
    if (previewFrame && nextHref) previewFrame.setAttribute("href", nextHref);
    if (!previewName || !nextTitle || previewName.textContent === nextTitle) return;

    captionTl?.kill();
    captionTl = null;
    previewName.textContent = nextTitle;

    if (instant || isMotionReduced()) {
      gsap.set(previewName, { clearProps: "opacity,transform" });
      return;
    }

    captionTl = gsap.fromTo(
      previewName,
      { opacity: 0, y: 8 },
      {
        opacity: 1,
        y: 0,
        duration: 0.24,
        ease: MOTION_EASE.reveal,
        clearProps: "opacity,transform",
      }
    );
  };

  const resetPreviewElements = () => {
    previewToken++;
    previewTl?.kill();
    previewTl = null;
    captionTl?.kill();
    captionTl = null;
    inFlightTarget = null;
    pendingPreview = null;
    isDecodingPreview = false;

    const activeObj = getActiveSlot();
    const standbyObj = getStandbySlot();
    [previewLayerA, previewLayerB, previewImgA, previewImgB, previewScrim, previewEdge].forEach(
      (el) => {
        if (el) el.style.willChange = "";
      }
    );
    gsap.set(
      [previewLayerA, previewLayerB, previewImgA, previewImgB, previewScrim, previewEdge, previewName].filter(Boolean),
      { clearProps: "clipPath,transform,opacity" }
    );
    if (activeObj.layer) {
      activeObj.layer.hidden = false;
      activeObj.layer.style.zIndex = "1";
    }
    if (standbyObj.layer) {
      standbyObj.layer.hidden = true;
      standbyObj.layer.style.zIndex = "3";
    }
  };

  const syncInitialPreview = (link) => {
    if (!link) return;
    resetPreviewElements();
    if (!isDesktopPreviewMode()) return;
    const src = link.dataset.previewImg || "";
    const title = link.dataset.previewTitle || "";
    const href = link.getAttribute("href") || "";
    const activeObj = getActiveSlot();
    if (activeObj.img && src) {
      activeObj.img.setAttribute("src", src);
      currentPreviewSrc = src;
    }
    updatePreviewCaption(title, href, { instant: true });
  };

  const finalizePreviewTransition = (target, token) => {
    if (token !== previewToken) return;
    activeSlot = activeSlot === "a" ? "b" : "a";
    currentPreviewSrc = target.src;
    inFlightTarget = null;
    previewTl = null;

    const newActive = getActiveSlot();
    const newStandby = getStandbySlot();
    [previewLayerA, previewLayerB, previewImgA, previewImgB, previewScrim, previewEdge].forEach(
      (el) => {
        if (el) el.style.willChange = "";
      }
    );
    if (newActive.layer) {
      newActive.layer.hidden = false;
      newActive.layer.style.zIndex = "1";
    }
    if (newStandby.layer) {
      newStandby.layer.hidden = true;
      newStandby.layer.style.zIndex = "3";
    }
    gsap.set(
      [previewLayerA, previewLayerB, previewImgA, previewImgB, previewScrim, previewEdge].filter(Boolean),
      { clearProps: "clipPath,transform,opacity" }
    );

    const queued = pendingPreview;
    pendingPreview = null;
    if (queued && openState) {
      if (queued.src !== currentPreviewSrc) {
        startPreviewTransition(queued);
      } else {
        updatePreviewCaption(queued.title, queued.href);
      }
    }
  };

  const startPreviewTransition = async (target) => {
    const token = ++previewToken;
    inFlightTarget = target;
    isDecodingPreview = true;

    await decodeImage(target.src);

    if (token !== previewToken || !openState) {
      isDecodingPreview = false;
      return;
    }

    const outgoing = getActiveSlot();
    const incoming = getStandbySlot();
    if (!outgoing.layer || !incoming.layer || !outgoing.img || !incoming.img) {
      isDecodingPreview = false;
      inFlightTarget = null;
      return;
    }

    incoming.img.setAttribute("src", target.src);
    if (incoming.img.decode) {
      await incoming.img.decode().catch(() => {});
    }
    isDecodingPreview = false;

    if (token !== previewToken || !openState) return;

    if (pendingPreview) {
      const latest = pendingPreview;
      pendingPreview = null;
      if (latest.src === currentPreviewSrc) {
        inFlightTarget = null;
        updatePreviewCaption(latest.title, latest.href);
        return;
      }
      if (latest.src !== target.src) {
        startPreviewTransition(latest);
        return;
      }
    }

    const reduced = isMotionReduced();
    outgoing.layer.hidden = false;
    outgoing.layer.style.zIndex = "1";
    incoming.layer.hidden = false;
    incoming.layer.style.zIndex = "3";

    if (reduced) {
      updatePreviewCaption(target.title, target.href, { instant: true });
      incoming.layer.style.willChange = "opacity";
      gsap.set(incoming.img, { clearProps: "transform" });
      gsap.set(outgoing.layer, { clearProps: "transform" });
      if (previewScrim) gsap.set(previewScrim, { opacity: 0 });
      if (previewEdge) gsap.set(previewEdge, { opacity: 0 });

      previewTl = gsap.timeline({
        onComplete: () => finalizePreviewTransition(target, token),
      });
      previewTl.fromTo(
        incoming.layer,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "none" }
      );
      return;
    }

    updatePreviewCaption(target.title, target.href);
    setPreviewWillChange(true);

    const mediaH =
      previewMedia?.clientHeight ||
      Math.round((previewMedia?.clientWidth || 320) * 0.75);
    const startEdgeY = Math.max(0, mediaH - 2);

    previewTl = gsap.timeline({
      onComplete: () => finalizePreviewTransition(target, token),
    });

    previewTl
      .fromTo(
        incoming.layer,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.65, ease: MOTION_EASE.door },
        0
      )
      .fromTo(
        incoming.img,
        { scale: 1.12, yPercent: 6 },
        { scale: 1, yPercent: 0, duration: 0.65, ease: MOTION_EASE.door },
        0
      )
      .fromTo(
        outgoing.layer,
        { yPercent: 0 },
        { yPercent: -4, duration: 0.65, ease: MOTION_EASE.door },
        0
      );

    if (previewScrim) {
      previewTl.fromTo(
        previewScrim,
        { opacity: 0 },
        { opacity: 0.55, duration: 0.65, ease: MOTION_EASE.door },
        0
      );
    }

    if (previewEdge) {
      previewTl
        .fromTo(
          previewEdge,
          { y: startEdgeY, opacity: 1 },
          { y: 0, duration: 0.65, ease: MOTION_EASE.door },
          0
        )
        .to(
          previewEdge,
          { opacity: 0, duration: 0.0975, ease: "none" },
          0.5525
        );
    }
  };

  const revealSingleDoorPreview = (nextSrc, nextTitle, nextHref) => {
    if (!nextSrc || !isDesktopPreviewMode()) return;

    const previewHidden =
      !previewCol || window.getComputedStyle(previewCol).display === "none";
    if (previewHidden || !previewLayerA || !previewLayerB || !previewMedia) {
      return;
    }

    const isAnimating = Boolean(previewTl && previewTl.isActive());
    if (isAnimating || isDecodingPreview) {
      if (nextSrc === inFlightTarget?.src) {
        pendingPreview = null;
        return;
      }
      pendingPreview = { src: nextSrc, title: nextTitle, href: nextHref };
      if (isAnimating) previewTl.timeScale(2);
      return;
    }

    if (nextSrc === currentPreviewSrc) {
      pendingPreview = null;
      updatePreviewCaption(nextTitle, nextHref);
      return;
    }

    startPreviewTransition({ src: nextSrc, title: nextTitle, href: nextHref });
  };

  const activateProduct = (link, { instantIndicator = false } = {}) => {
    if (!isDesktopPreviewMode()) return;
    moveIndicator(link, { instant: instantIndicator });
    revealSingleDoorPreview(
      link.dataset.previewImg,
      link.dataset.previewTitle || "",
      link.getAttribute("href") || ""
    );
  };

  productLinks.forEach((link) => {
    link.addEventListener("pointerenter", () => {
      if (!isDesktopPreviewMode()) return;
      clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => activateProduct(link), 80);
    });
    link.addEventListener("focus", () => {
      if (!isDesktopPreviewMode()) return;
      clearTimeout(hoverTimer);
      activateProduct(link);
    });
  });

  productsWrap?.addEventListener("pointerleave", () => {
    clearTimeout(hoverTimer);
  });

  const setBackgroundInert = (shouldInert) => {
    if (shouldInert) {
      inertSiblings = [...document.body.children].filter(
        (el) => el !== header && el !== menu && !el.classList.contains("skip")
      );
      inertSiblings.forEach((el) => {
        el.inert = true;
      });
    } else {
      inertSiblings.forEach((el) => {
        el.inert = false;
      });
      inertSiblings = [];
    }
  };

  const getFocusableInMenu = () => [
    menuBtn,
    ...qsa('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])', menu),
  ];

  const mobileRevealItems = [
    ...primaryLinks,
    ...mobileCards,
    contactCol,
  ].filter(Boolean);

  const allAnimatedMenuNodes = [
    backdrop,
    headerDropBg,
    panel,
    panelRail,
    ...colEls,
    ...mobileRevealItems,
  ].filter(Boolean);

  const setLayersWillChange = (active) => {
    const mobile = isMobileSheet();
    if (backdrop) backdrop.style.willChange = active ? "opacity" : "";
    if (headerDropBg) headerDropBg.style.willChange = active ? "opacity" : "";
    if (panel) panel.style.willChange = active ? "clip-path, transform, opacity" : "";
    if (panelRail) panelRail.style.willChange = active ? "transform" : "";
    if (mobile) {
      colEls.forEach((el) => {
        el.style.willChange = "";
      });
      mobileRevealItems.forEach((el) => {
        el.style.willChange = active ? "transform, opacity" : "";
      });
    } else {
      mobileRevealItems.forEach((el) => {
        el.style.willChange = "";
      });
      colEls.forEach((el) => {
        el.style.willChange = active ? "transform, opacity" : "";
      });
    }
    productLinks.forEach((el) => {
      el.style.willChange = "";
    });
  };

  const applyMenuClosedVisualState = () => {
    const mobile = isMobileSheet();
    gsap.set(backdrop, { opacity: 0 });
    gsap.set(headerDropBg, { opacity: 0 });
    gsap.set(panel, { clipPath: "inset(0 0 100% 0)", y: mobile ? -10 : 0, opacity: 1 });
    gsap.set(panelRail, { scaleX: 0 });
    if (mobile) {
      gsap.set(colEls, { clearProps: "opacity,transform" });
      gsap.set(primaryLinks, { y: 14, opacity: 0 });
      gsap.set(mobileCards, { x: -14, y: 14, scale: 0.96, opacity: 0 });
      if (contactCol) gsap.set(contactCol, { y: 16, opacity: 0 });
    } else {
      gsap.set(mobileRevealItems, { clearProps: "opacity,transform,scale" });
      gsap.set(colEls, { y: 12, opacity: 0 });
    }
  };

  const restoreScrollPosition = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      if (
        savedSmootherTop !== null &&
        Math.abs(smoother.scrollTop() - savedSmootherTop) > 0.5
      ) {
        smoother.scrollTop(savedSmootherTop);
      }
      return;
    }
    if (Math.abs(window.scrollY - savedScrollY) > 0) {
      window.scrollTo({ top: savedScrollY, behavior: "auto" });
    }
  };

  const finishClose = () => {
    if (openState) return;
    clearTimeout(hoverTimer);
    resetPreviewElements();
    if (mobileCarousel) {
      mobileCarousel.classList.remove("is-grabbing", "is-gliding");
    }
    setLayersWillChange(false);
    menu.hidden = true;
    document.documentElement.classList.remove("menu-open", "menu-dark-header");
    header.classList.remove("is-menu-active");
    setBackgroundInert(false);
    gsap.set(allAnimatedMenuNodes, {
      clearProps: "opacity,clipPath,transform,scale",
    });

    const smoother = ScrollSmoother.get();
    smoother?.paused(false);
    restoreScrollPosition();
  };

  const buildMenuTimeline = () => {
    const mobile = isMobileSheet();
    if (menuTl && builtForMobile === mobile) return menuTl;

    menuTl?.kill();
    builtForMobile = mobile;

    menuTl = gsap.timeline({
      paused: true,
      onStart: () => setLayersWillChange(true),
      onUpdate: () => {
        if (!menuTl) return;
        document.documentElement.classList.toggle(
          "menu-dark-header",
          menuTl.time() >= 0.03
        );
      },
      onReverseComplete: finishClose,
    });

    if (mobile) {
      menuTl
        .fromTo(
          backdrop,
          { opacity: 0 },
          { opacity: 1, duration: 0.24, ease: "none" },
          0
        )
        .fromTo(
          headerDropBg,
          { opacity: 0 },
          { opacity: 1, duration: 0.16, ease: "none" },
          0
        )
        .fromTo(
          panel,
          { clipPath: "inset(0 0 100% 0)", y: -10, opacity: 1 },
          { clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 0.44, ease: MOTION_EASE.door },
          0
        )
        .fromTo(
          panelRail,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.4, ease: MOTION_EASE.door },
          0.06
        )
        .fromTo(
          primaryLinks,
          { y: 14, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.32,
            stagger: 0.04,
            ease: MOTION_EASE.reveal,
          },
          0.06
        )
        .fromTo(
          mobileCards,
          { x: -14, y: 14, scale: 0.96, opacity: 0 },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.38,
            stagger: 0.04,
            ease: MOTION_EASE.reveal,
          },
          0.13
        );
      if (contactCol) {
        menuTl.fromTo(
          contactCol,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.32, ease: MOTION_EASE.reveal },
          0.2
        );
      }
      return menuTl;
    }

    menuTl
      .fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.24, ease: "none" },
        0
      )
      .fromTo(
        headerDropBg,
        { opacity: 0 },
        { opacity: 1, duration: 0.16, ease: "none" },
        0
      )
      .fromTo(
        panel,
        { clipPath: "inset(0 0 100% 0)", opacity: 1 },
        { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.48, ease: MOTION_EASE.door },
        0
      )
      .fromTo(
        panelRail,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: MOTION_EASE.door },
        0.08
      )
      .fromTo(
        colEls,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.32,
          stagger: 0.025,
          ease: MOTION_EASE.reveal,
        },
        0.08
      );

    return menuTl;
  };

  const openMenu = () => {
    if (openState) return;
    openState = true;

    const smoother = ScrollSmoother.get();
    savedScrollY = window.scrollY;
    savedSmootherTop = smoother ? smoother.scrollTop() : null;

    if (!isMotionReduced()) {
      const tl = buildMenuTimeline();
      if (tl.progress() === 0) {
        applyMenuClosedVisualState();
        tl.invalidate();
      }
      setLayersWillChange(true);
    }

    menu.hidden = false;
    document.documentElement.classList.add("menu-open");
    header.classList.add("is-menu-active");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "بستن منو");
    setBackgroundInert(true);
    smoother?.paused(true);
    if (panelScroll) panelScroll.scrollTop = 0;
    if (mobileCarousel) {
      mobileCarousel.classList.remove("is-grabbing", "is-gliding");
      mobileCarousel.scrollLeft = 0;
    }

    if (isDesktopPreviewMode()) {
      decodeAllProductImages();
    }
    if (!isMobileSheet()) {
      refreshRowOffsets();
      const initialProduct =
        qs(".door-product-link[aria-current]", menu) ||
        qs(".door-product-link.is-active", menu) ||
        productLinks[0];
      if (initialProduct) {
        moveIndicator(initialProduct, { instant: true });
        syncInitialPreview(initialProduct);
      }
    }

    if (isMotionReduced()) {
      menuTl?.pause(0);
      document.documentElement.classList.add("menu-dark-header");
      gsap.set([backdrop, headerDropBg], { opacity: 1 });
      gsap.set(panel, { clipPath: "none", opacity: 0 });
      gsap.to(panel, { opacity: 1, duration: 0.15, ease: "none" });
      gsap.set(panelRail, { scaleX: 1 });
      gsap.set([...colEls, ...productLinks, ...mobileRevealItems].filter(Boolean), {
        x: 0,
        y: 0,
        yPercent: 0,
        scale: 1,
        opacity: 1,
      });
    } else {
      const tl = buildMenuTimeline();
      tl.timeScale(1).play();
    }

    requestAnimationFrame(() => {
      if (!openState) return;
      restoreScrollPosition();
      primaryLinks[0]?.focus({ preventScroll: true });
      restoreScrollPosition();
    });
  };

  const closeMenu = ({ restoreFocus = true, instant = false } = {}) => {
    if (!openState) return;
    openState = false;
    clearTimeout(hoverTimer);
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "باز کردن منو");

    if (instant || isMotionReduced()) {
      menuTl?.pause(0);
      gsap.killTweensOf(allAnimatedMenuNodes);
      gsap.set([backdrop, headerDropBg], { opacity: 0 });
      gsap.set(panel, { opacity: 0, clearProps: "clipPath" });
      finishClose();
    } else if (menuTl) {
      setLayersWillChange(true);
      const targetCloseSec = isMobileSheet() ? 0.28 : 0.32;
      const speed = Math.max(1, menuTl.duration() / targetCloseSec);
      menuTl.timeScale(speed).reverse();
    } else {
      finishClose();
    }

    if (restoreFocus) {
      menuBtn.focus({ preventScroll: true });
      restoreScrollPosition();
    }
  };

  // جلوگیری از رسیدن wheel/touch به صفحهٔ زیرین بدون ایجاد پرش اسکرول (بدون overflow:hidden روی html)
  const canScrollVertically = (el, deltaY) => {
    if (!el || el.scrollHeight <= el.clientHeight + 1) return false;
    if (deltaY < 0) return el.scrollTop > 0;
    if (deltaY > 0) return el.scrollTop + el.clientHeight < el.scrollHeight - 1;
    return true;
  };

  menu.addEventListener(
    "wheel",
    (event) => {
      if (!openState) return;
      if (
        mobileCarousel?.contains(event.target) &&
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ) {
        return;
      }
      if (!panel?.contains(event.target) || !canScrollVertically(panelScroll, event.deltaY)) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  menu.addEventListener(
    "touchstart",
    (event) => {
      if (!openState || !event.touches[0]) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    },
    { passive: true }
  );

  menu.addEventListener(
    "touchmove",
    (event) => {
      if (!openState || !event.touches[0]) return;
      const dx = Math.abs(touchStartX - event.touches[0].clientX);
      const dy = touchStartY - event.touches[0].clientY;
      if (mobileCarousel?.contains(event.target) && dx >= Math.abs(dy)) {
        return;
      }
      if (!panel?.contains(event.target) || !canScrollVertically(panelScroll, dy)) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  if (mobileCarousel) {
    let grab = null;
    let suppressClick = false;
    let glideTween = null;

    const getSnapTarget = (projectedScroll) => {
      const current = mobileCarousel.scrollLeft;
      const rect = mobileCarousel.getBoundingClientRect();
      const cs = getComputedStyle(mobileCarousel);
      const isRtl = cs.direction === "rtl";
      const padStart = parseFloat(isRtl ? cs.paddingRight : cs.paddingLeft) || 0;
      const padEnd = parseFloat(isRtl ? cs.paddingLeft : cs.paddingRight) || 0;
      const startEdge = isRtl ? rect.right - padStart : rect.left + padStart;
      const cards = mobileCards;
      if (!cards.length) return projectedScroll;

      const lastRect = cards[cards.length - 1].getBoundingClientRect();
      const startBound = current + ((isRtl ? cards[0].getBoundingClientRect().right : cards[0].getBoundingClientRect().left) - startEdge);
      const endBound = isRtl
        ? current + (lastRect.left - (rect.left + padEnd))
        : current + (lastRect.right - (rect.right - padEnd));
      const minBound = Math.min(startBound, endBound);
      const maxBound = Math.max(startBound, endBound);

      let best = Math.min(maxBound, Math.max(minBound, projectedScroll));
      let bestDist = Infinity;
      for (const card of cards) {
        const cr = card.getBoundingClientRect();
        const raw = current + ((isRtl ? cr.right : cr.left) - startEdge);
        const clamped = Math.min(maxBound, Math.max(minBound, raw));
        const d = Math.abs(clamped - projectedScroll);
        if (d < bestDist) {
          bestDist = d;
          best = clamped;
        }
      }
      const endDist = Math.abs(endBound - projectedScroll);
      if (endDist < bestDist) best = endBound;
      return best;
    };

    mobileCarousel.addEventListener("dragstart", (e) => e.preventDefault());
    mobileCarousel.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch" || (e.pointerType === "mouse" && e.button !== 0)) return;
      glideTween?.kill();
      glideTween = null;
      mobileCarousel.classList.remove("is-gliding");
      const now = performance.now();
      grab = {
        id: e.pointerId,
        startX: e.clientX,
        lastX: e.clientX,
        lastT: now,
        vx: 0,
        startScroll: mobileCarousel.scrollLeft,
        moved: false,
      };
    });
    mobileCarousel.addEventListener("pointermove", (e) => {
      if (!grab || e.pointerId !== grab.id) return;
      const now = performance.now();
      const dx = e.clientX - grab.startX;
      const dt = Math.max(1, now - grab.lastT);
      const instVx = (e.clientX - grab.lastX) / dt;
      grab.vx = grab.vx * 0.65 + instVx * 0.35;
      grab.lastX = e.clientX;
      grab.lastT = now;

      if (!grab.moved && Math.abs(dx) > 5) {
        grab.moved = true;
        mobileCarousel.classList.add("is-grabbing");
        try { mobileCarousel.setPointerCapture(e.pointerId); } catch {}
      }
      if (grab.moved) {
        e.preventDefault();
        mobileCarousel.scrollLeft = grab.startScroll - dx;
      }
    });
    const endGrab = (e) => {
      if (!grab || (e.pointerId !== undefined && e.pointerId !== grab.id)) return;
      const wasMoved = grab.moved;
      const stale = performance.now() - grab.lastT > 90;
      const vx = stale ? 0 : grab.vx;
      grab = null;
      mobileCarousel.classList.remove("is-grabbing");
      try { if (mobileCarousel.hasPointerCapture?.(e.pointerId)) mobileCarousel.releasePointerCapture(e.pointerId); } catch {}

      if (wasMoved) {
        suppressClick = true;
        requestAnimationFrame(() => { suppressClick = false; });

        const currentScroll = mobileCarousel.scrollLeft;
        const throwMs = isMotionReduced() ? 0 : 240;
        const projected = currentScroll - vx * throwMs;
        const targetScroll = getSnapTarget(projected);
        const dist = Math.abs(targetScroll - currentScroll);

        if (dist > 0.5 && !isMotionReduced()) {
          mobileCarousel.classList.add("is-gliding");
          const duration = Math.min(0.72, Math.max(0.36, 0.32 + dist / 850));
          const state = { scroll: currentScroll };
          glideTween = gsap.to(state, {
            scroll: targetScroll,
            duration,
            ease: "power3.out",
            onUpdate: () => {
              mobileCarousel.scrollLeft = state.scroll;
            },
            onComplete: () => {
              glideTween = null;
              mobileCarousel.classList.remove("is-gliding");
            },
            onInterrupt: () => {
              glideTween = null;
              mobileCarousel.classList.remove("is-gliding");
            },
          });
        } else {
          mobileCarousel.scrollLeft = targetScroll;
          mobileCarousel.classList.remove("is-gliding");
        }
      }
    };
    mobileCarousel.addEventListener("pointerup", endGrab);
    mobileCarousel.addEventListener("pointercancel", endGrab);
    mobileCarousel.addEventListener("click", (e) => {
      if (suppressClick) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }

  menuBtn.addEventListener("pointerenter", decodeAllProductImages, { passive: true });
  menuBtn.addEventListener("focus", decodeAllProductImages, { passive: true });

  menuBtn.addEventListener("click", () => {
    if (openState) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.addEventListener("click", (event) => {
    if (event.target === backdrop) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!openState) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (
      event.key === "PageUp" ||
      event.key === "PageDown" ||
      (event.key === " " && !event.target.closest?.("a, button"))
    ) {
      if (!canScrollVertically(panelScroll, event.key === "PageUp" ? -1 : 1)) {
        event.preventDefault();
      }
    }
    if (event.key === "Tab") {
      const focusables = getFocusableInMenu();
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus({ preventScroll: true });
      }
    }
  });

  qsa("a", menu).forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu({ restoreFocus: false, instant: true });
    });
  });

  window.__doorMenuControl = {
    open: openMenu,
    close: closeMenu,
    getTimeline: () => buildMenuTimeline(),
    getScrollSnapshot: () => ({
      scrollY: window.scrollY,
      smootherTop: ScrollSmoother.get()?.scrollTop() ?? null,
    }),
    setProgress: (p) => {
      if (!openState) {
        openState = true;
        menu.hidden = false;
        document.documentElement.classList.add("menu-open");
        header.classList.add("is-menu-active");
        menuBtn.setAttribute("aria-expanded", "true");
      }
      const tl = buildMenuTimeline();
      tl.progress(p).pause();
      document.documentElement.classList.toggle(
        "menu-dark-header",
        tl.time() >= 0.08
      );
    },
  };

  return { isOpen: () => openState };
}

function initFooterResponsiveServices() {
  const details = qs(".footer-services-acc");
  if (!details) return;
  const mq = matchMedia("(min-width: 64em)");
  const sync = () => {
    details.open = mq.matches;
  };
  sync();
  mq.addEventListener("change", sync);
}

function initChromeMotion(menuController) {
  const header = qs(".site-header");
  const headerCapsule = qs(".header-capsule", header);
  const headerCta = qs(".header-cta", header);
  const navLinks = qsa(".nav a", header);
  const ringCircle = qs(".menu-ring circle", header);

  const footer = qs(".site-footer");
  const footerCurtain = qs(".footer-curtain", footer);
  const footerDoorLeft = qs(".footer-door--left", footer);
  const footerDoorRight = qs(".footer-door--right", footer);
  const footerTitle = qs("#footer-cta-title", footer);
  const footerCtaBtns = qsa(".footer-cta-actions .btn", footer);
  const wordmarkSpan = qs(".footer-wordmark-track span", footer);

  let cleanups = [];
  const mm = gsap.matchMedia();

  const buildMotion = () => {
    cleanups.forEach((fn) => fn());
    cleanups = [];
    mm.revert();

    const reducedManual = isMotionReduced();

    mm.add(
      {
        desktop: MEDIA_QUERIES.desktop,
        mobile: MEDIA_QUERIES.mobile,
        reduced: MEDIA_QUERIES.reduced,
      },
      (context) => {
        const reduced = reducedManual || context.conditions.reduced;
        const isDesktop = context.conditions.desktop;

        if (ringCircle) {
          const updateRing = (progress) => {
            gsap.set(ringCircle, {
              strokeDashoffset: RING_CIRCUMFERENCE * (1 - progress),
            });
          };
          updateRing(0);
          ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => updateRing(self.progress),
          });
        }

        // هدر همیشه ثابت و قابل‌مشاهده (بدون کالپس در اسکرول به پایین)
        if (header && headerCapsule) {
          let isPill = false;

          const applyHeaderState = (scrollY) => {
            const nextPill = scrollY > 36 && !menuController.isOpen();
            if (nextPill !== isPill) {
              isPill = nextPill;
              header.classList.toggle("is-pill", isPill);
              if (reduced) {
                gsap.set(headerCapsule, {
                  opacity: isPill ? 1 : 0,
                  clipPath: isPill
                    ? "inset(0 0% 0 0% round 999px)"
                    : "inset(0 6% 0 6% round 999px)",
                  y: isPill ? 0 : -4,
                });
              } else {
                gsap.to(headerCapsule, {
                  opacity: isPill ? 1 : 0,
                  clipPath: isPill
                    ? "inset(0 0% 0 0% round 999px)"
                    : "inset(0 6% 0 6% round 999px)",
                  y: isPill ? 0 : -4,
                  duration: MOTION_DUR.base,
                  ease: MOTION_EASE.door,
                  overwrite: "auto",
                });
              }
            }
          };

          ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => applyHeaderState(self.scroll()),
          });

          applyHeaderState(window.scrollY);
        }

        if (isDesktop && !reduced) {
          navLinks.forEach((link) => cleanups.push(initTextRoll(link)));
          if (headerCta) cleanups.push(createMagnetic(headerCta, { strength: 0.2 }));
          footerCtaBtns.forEach((btn) =>
            cleanups.push(createMagnetic(btn, { strength: 0.2 }))
          );
        }

        if (footer) {
          const titleWords = footerTitle ? splitWords(footerTitle) : [];

          if (reduced) {
            if (footerCurtain) gsap.set(footerCurtain, { yPercent: 0 });
            if (isDesktop && footerDoorLeft) gsap.set(footerDoorLeft, { xPercent: -94 });
            if (isDesktop && footerDoorRight) gsap.set(footerDoorRight, { xPercent: 94 });
            if (titleWords.length) gsap.set(titleWords, { yPercent: 0, opacity: 1 });
            if (isDesktop && wordmarkSpan) gsap.set(wordmarkSpan, { xPercent: 0 });
          } else {
            if (footerCurtain) {
              gsap.fromTo(
                footerCurtain,
                { yPercent: isDesktop ? -16 : -8 },
                {
                  yPercent: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: footer,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                  },
                }
              );
            }

            if (isDesktop && footerDoorLeft && footerDoorRight) {
              gsap.fromTo(
                footerDoorLeft,
                { xPercent: -24 },
                {
                  xPercent: -94,
                  ease: "none",
                  scrollTrigger: {
                    trigger: footer,
                    start: "top 94%",
                    end: "top 26%",
                    scrub: 0.65,
                  },
                }
              );
              gsap.fromTo(
                footerDoorRight,
                { xPercent: 24 },
                {
                  xPercent: 94,
                  ease: "none",
                  scrollTrigger: {
                    trigger: footer,
                    start: "top 94%",
                    end: "top 26%",
                    scrub: 0.65,
                  },
                }
              );
            }

            if (titleWords.length) {
              gsap.fromTo(
                titleWords,
                { yPercent: 105, opacity: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  duration: 0.62,
                  stagger: 0.06,
                  ease: MOTION_EASE.reveal,
                  clearProps: "transform,opacity",
                  scrollTrigger: {
                    trigger: footerTitle,
                    start: "top 92%",
                    once: true,
                  },
                }
              );
            }

            if (isDesktop && wordmarkSpan) {
              gsap.fromTo(
                wordmarkSpan,
                { xPercent: 5 },
                {
                  xPercent: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: footer,
                    start: "top 75%",
                    end: "bottom bottom",
                    scrub: 0.85,
                  },
                }
              );
            }
          }
        }
      }
    );
  };

  document.documentElement.classList.add("gsap-ready");
  buildMotion();

  let lastPaused = isMotionReduced();
  const observer = new MutationObserver(() => {
    const nowPaused = isMotionReduced();
    if (nowPaused !== lastPaused) {
      lastPaused = nowPaused;
      buildMotion();
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

function initToTop() {
  const btn = qs("[data-to-top]");
  if (!btn) return;
  btn.addEventListener("click", () => scrollToTop());
}

function initMobileBar() {
  const bar = qs(".callbar");
  if (!bar) return;
  const mq = matchMedia("(max-width: 47.99em)");
  const form = qs("#contact, #quote-form");
  let lastY = scrollY, scrollHide = false, contactVis = false, kbdHide = false;
  const sync = () => {
    const focused = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || "");
    const hide = !mq.matches || scrollHide || contactVis || kbdHide || focused || document.documentElement.classList.contains("menu-open");
    bar.classList.toggle("is-hidden", hide);
    document.documentElement.style.setProperty("--bar-h", !mq.matches || hide ? "0px" : `${bar.offsetHeight}px`);
  };
  addEventListener("scroll", () => {
    const y = scrollY;
    if (y > lastY + 8 && y > 60) scrollHide = true;
    else if (y < lastY - 6 || y <= 40) scrollHide = false;
    lastY = y; sync();
  }, { passive: true });
  addEventListener("focusin", sync);
  addEventListener("focusout", () => setTimeout(sync, 60));
  mq.addEventListener("change", sync);
  visualViewport?.addEventListener("resize", () => { kbdHide = visualViewport.height < innerHeight * 0.78; sync(); });
  new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  if (form) new IntersectionObserver((e) => { contactVis = e[0].isIntersecting; sync(); }, { threshold: 0.05 }).observe(form);
  sync();
}

function initMobileContactCollapse() {
  const sec = qs("#contact");
  const head = sec && qs(".section-head", sec);
  const grid = sec && qs(".contact-grid", sec);
  if (!sec || !head || !grid) return;

  const box = document.createElement("div");
  box.className = "contact-mobile-trigger";
  box.innerHTML = `<p class="contact-mobile-hours">شنبه تا پنج‌شنبه، ۸ تا ۱۸ — محدودهٔ خدمات: تهران</p><button class="btn btn--primary contact-toggle-btn" type="button" aria-expanded="false" aria-controls="quote-form">ثبت درخواست مشاوره و بازدید</button>`;
  head.after(box);

  const btn = qs(".contact-toggle-btn", box);
  const setOpen = (open) => {
    sec.classList.toggle("is-collapsed", !open);
    btn.setAttribute("aria-expanded", String(open));
    btn.classList.toggle("btn--primary", !open);
    btn.classList.toggle("btn--secondary", open);
    btn.textContent = open ? "بستن فرم درخواست" : "ثبت درخواست مشاوره و بازدید";
  };

  setOpen(location.hash === "#contact");
  btn.addEventListener("click", () => setOpen(sec.classList.contains("is-collapsed")));
  document.addEventListener(
    "click",
    (e) => {
      if (e.target.closest('a[href="#contact"], [data-consult]')) setOpen(true);
    },
    true
  );
}

export function initChrome() {
  if (document.documentElement.dataset.chromeInit === "true") return;
  document.documentElement.dataset.chromeInit = "true";
  document.documentElement.classList.add("chrome-js");

  mountHeaderMenuAndFooter();
  injectSpeculationRules();
  applyContactLinks(document);
  initFooterResponsiveServices();
  initToTop();
  initMobileBar();
  initMobileContactCollapse();

  const menuController = setupDoorMenuController();
  initChromeMotion(menuController);
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initChrome(), {
      once: true,
    });
  } else {
    initChrome();
  }
}
