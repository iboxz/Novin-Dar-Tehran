const SITE_ROOT_URL = new URL("../", import.meta.url);
const DEFAULT_LOGO_URL = new URL("assets/logo/NDT-logo-mark.svg", SITE_ROOT_URL).href;

// ============================================================
// تنظیمات مشترک هدر و فوتر — برای ویرایش آسان از اینجا تغییر دهید
// ============================================================
export const CHROME_CONFIG = {
  brand: {
    name: "نوین درب تهران",
    subtitle: "امنیت، با دقت مهندسی",
    homeAriaLabel: "نوین درب تهران، صفحهٔ اصلی",
    logoSrc: DEFAULT_LOGO_URL,
  },

  contact: {
    phone: "[PLACEHOLDER_PHONE]",
    phoneFallbackLabel: "شمارهٔ تماس؛ در انتظار تأیید",
    messenger: "[PLACEHOLDER_MESSENGER]",
    messengerFallbackLabel: "پیوند پیام‌رسان هنوز ثبت نشده است.",
    utilityNote: "نصب، تعمیر و سرویس دوره‌ای درب‌های اتوماتیک در تهران",
    hoursShort: "شنبه تا پنج‌شنبه، ۸ تا ۱۸",
    hoursDetail: "پاسخ‌گویی ۸ تا ۱۸، به‌جز روزهای تعطیل",
    address: "نشانی پس از تأیید کارفرما درج می‌شود.",
    mapNote: "نقشه پس از تأیید نشانی درج می‌شود",
    mapAriaLabel: "جای‌نگه‌دار نقشهٔ نشانی شرکت؛ نقشه پس از تأیید نشانی درج می‌شود",
  },

  // ▼ لینک‌ها و عنوان‌های منوی هدر (دسکتاپ و موبایل)
  // برای اتصال هر آیتم به صفحهٔ جداگانه، مقدار href را به آدرس صفحهٔ مورد نظر تغییر دهید.
  nav: [
    { id: "home", title: "صفحه اصلی", href: "index.html" },
    { id: "services", title: "محصولات و خدمات", href: "products.html" },
    { id: "articles", title: "مقالات", href: "articles.html" },
    { id: "contact", title: "ارتباط با ما", href: "index.html#contact" },
    { id: "lang", title: "تغییر زبان", href: "#lang" },
  ],

  headerCta: {
    label: "تماس بگیرید",
    href: "index.html#contact",
  },

  mobileMenu: {
    areaLabel: "محدودهٔ خدمات: تهران",
    hoursLabel: "پاسخ‌گویی ۸ تا ۱۸",
  },

  footer: {
    cta: {
      eyebrow: "شروع همکاری",
      titleStart: "گفت‌وگو را ",
      titleAccent: "شروع کنیم.",
      description:
        "برای انتخاب، نصب، تعمیر یا سرویس درب، نیازتان را بگویید؛ راهکار دقیق و هزینهٔ شفاف، بعد از یک گفت‌وگوی کوتاه.",
      primaryLabel: "تماس بگیرید",
      primaryHref: "index.html#contact",
      secondaryLabel: "درخواست قیمت",
      secondaryHref: "index.html#contact",
      phoneLabel: "تماس مستقیم",
    },
    brandDescription:
      "همراه شما در امنیت و آسایش؛ خدمات تخصصی درب‌های اتوماتیک و حفاظتی در تهران.",
    chips: ["نصب و اجرا", "تعمیر و عیب‌یابی", "سرویس دوره‌ای"],
    quickLinksHeading: "دسترسی سریع",
    quickLinks: [
      { title: "صفحه اصلی", href: "index.html" },
      { title: "محصولات و خدمات", href: "products.html" },
      { title: "مقالات", href: "articles.html" },
      { title: "ارتباط با ما", href: "index.html#contact" },
    ],
    contactHeading: "تماس و نشانی",
    sealsHeading: "نمادها و گواهینامه‌ها",
    seals: ["جایگاه\nجواز کسب", "جایگاه\nنماد", "جایگاه\nگواهینامه"],
    sealsNote: "در انتظار دریافت مدارک معتبر از کارفرما.",
    wordmark: "نوین درب تهران",
    legal: "© ۱۴۰۵ نوین درب تهران؛ تمامی حقوق محفوظ است.",
    tagline: "دقت در حرکت. تعهد در خدمت.",
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
  value
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
  }

  return target.href;
}

function isCurrentPageLink(rawHref, itemId) {
  if (itemId === "services" && window.location.pathname.includes("/products/")) {
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

function renderHeaderMarkup() {
  const { brand, contact, nav, headerCta, mobileMenu } = CHROME_CONFIG;
  const homeHref = resolveHref("index.html");
  const ctaHref = resolveHref(headerCta.href);

  const desktopNavItems = nav
    .map((item) => {
      const href = resolveHref(item.href);
      const isPageActive = isCurrentPageLink(item.href, item.id);
      const isHomeDefault = isHomePage() && href === "#home";
      const currentAttr = isPageActive
        ? ' aria-current="page"'
        : isHomeDefault
          ? ' aria-current="location"'
          : "";
      const sectionAttr = item.id ? ` data-nav-id="${escapeHtml(item.id)}"` : "";
      return `<li><a href="${escapeHtml(href)}"${sectionAttr}${currentAttr}>${escapeHtml(item.title)}</a></li>`;
    })
    .join("");

  const mobileNavItems = nav
    .map((item) => {
      const href = resolveHref(item.href);
      const isPageActive = isCurrentPageLink(item.href, item.id);
      const isHomeDefault = isHomePage() && href === "#home";
      const currentAttr = isPageActive
        ? ' aria-current="page"'
        : isHomeDefault
          ? ' aria-current="location"'
          : "";
      const sectionAttr = item.id ? ` data-nav-id="${escapeHtml(item.id)}"` : "";
      return `<li><a href="${escapeHtml(href)}"${sectionAttr}${currentAttr}><span>${escapeHtml(item.title)}</span><svg class="menu-arw" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-7-7 7 7 7"/></svg></a></li>`;
    })
    .join("");

  return `
<header class="site-header">
  <div class="header-utility">
    <div class="wrap header-utility-in">
      <p class="utility-note"><span class="pulse-dot" aria-hidden="true"></span>${escapeHtml(contact.utilityNote)}</p>
      <div class="utility-meta">
        <span class="utility-hours"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>${escapeHtml(contact.hoursShort)}</span>
        <span class="utility-sep" aria-hidden="true"></span>
        <a class="utility-phone" href="${escapeHtml(ctaHref)}" data-phone-link><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg><span data-phone-label>${escapeHtml(contact.phoneFallbackLabel)}</span></a>
      </div>
    </div>
  </div>
  <div class="header-bar">
    <div class="wrap header-bar-in">
      <a class="logo" href="${escapeHtml(homeHref)}" aria-label="${escapeHtml(brand.homeAriaLabel)}">
        <span class="logo-mark" aria-hidden="true"><img src="${escapeHtml(resolveAssetUrl(brand.logoSrc))}" alt="" width="165.711" height="86.221"></span>
        <span class="logo-type">${escapeHtml(brand.name)}<span class="logo-sub">${escapeHtml(brand.subtitle)}</span></span>
      </a>
      <nav class="nav" aria-label="ناوبری اصلی"><ul>${desktopNavItems}</ul></nav>
      <div class="header-actions">
        <a class="btn btn--primary header-cta" href="${escapeHtml(ctaHref)}" data-phone-link>${escapeHtml(headerCta.label)}</a>
        <button class="motion-toggle" type="button" aria-label="توقف انیمیشن‌ها" aria-pressed="false" hidden><svg class="pause-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg><svg class="play-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 10 7-10 7z"/></svg></button>
        <button class="menu-btn" type="button" popovertarget="mobile-menu" aria-label="باز کردن منو" aria-controls="mobile-menu" aria-expanded="false"><svg class="menu-open-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8h18M3 16h18"/></svg><svg class="menu-close-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"/></svg></button>
      </div>
    </div>
  </div>
  <nav id="mobile-menu" class="menu" popover aria-label="ناوبری موبایل">
    <ul class="menu-list">${mobileNavItems}</ul>
    <div class="menu-foot">
      <a class="menu-phone" href="${escapeHtml(ctaHref)}" data-phone-link>
        <span class="menu-phone-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg></span>
        <span class="menu-phone-text"><span class="menu-phone-title">${escapeHtml(headerCta.label)}</span><span class="menu-phone-num" data-phone-label>${escapeHtml(contact.phoneFallbackLabel)}</span></span>
        <svg class="menu-arw" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-7-7 7 7 7"/></svg>
      </a>
      <p class="menu-meta"><span>${escapeHtml(mobileMenu.areaLabel)}</span><span class="menu-meta-dot" aria-hidden="true"></span><span>${escapeHtml(mobileMenu.hoursLabel)}</span></p>
    </div>
  </nav>
</header>`;
}

function renderFooterMarkup() {
  const { brand, contact, footer } = CHROME_CONFIG;
  const homeHref = resolveHref("index.html");
  const primaryHref = resolveHref(footer.cta.primaryHref);
  const secondaryHref = resolveHref(footer.cta.secondaryHref);
  const toTopHref = document.getElementById("home") ? "#home" : "#top";

  const chipsHtml = footer.chips.map((chip) => `<li>${escapeHtml(chip)}</li>`).join("");
  const quickLinksHtml = footer.quickLinks
    .map(
      (link) =>
        `<li><a href="${escapeHtml(resolveHref(link.href))}">${escapeHtml(link.title)} <svg class="link-arw" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-7-7 7 7 7"/></svg></a></li>`
    )
    .join("");
  const sealsHtml = footer.seals
    .map((seal) => `<span class="seal-slot">${escapeHtml(seal).replaceAll("\n", "<br>")}</span>`)
    .join("");

  return `
<footer class="site-footer" id="contact-info">
  <div class="wrap">
    <section class="footer-cta" aria-labelledby="footer-cta-title">
      <div class="footer-cta-copy">
        <span class="label label--dot">${escapeHtml(footer.cta.eyebrow)}</span>
        <h2 id="footer-cta-title">${escapeHtml(footer.cta.titleStart)}<em>${escapeHtml(footer.cta.titleAccent)}</em></h2>
        <p>${escapeHtml(footer.cta.description)}</p>
        <div class="footer-cta-actions">
          <a class="btn btn--primary" href="${escapeHtml(primaryHref)}" data-phone-link>${escapeHtml(footer.cta.primaryLabel)}</a>
          <a class="btn btn--secondary" href="${escapeHtml(secondaryHref)}">${escapeHtml(footer.cta.secondaryLabel)} <svg class="arw" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></a>
        </div>
      </div>
      <div class="footer-phone-card">
        <span class="footer-phone-label"><span class="pulse-dot" aria-hidden="true"></span>${escapeHtml(footer.cta.phoneLabel)}</span>
        <a class="footer-phone-number" href="${escapeHtml(primaryHref)}" data-phone-link><span data-phone-label>${escapeHtml(contact.phoneFallbackLabel)}</span></a>
        <span class="footer-phone-hours"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>${escapeHtml(contact.hoursDetail)}</span>
      </div>
    </section>
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="logo" href="${escapeHtml(homeHref)}" aria-label="${escapeHtml(brand.homeAriaLabel)}"><span class="logo-mark" aria-hidden="true"><img src="${escapeHtml(resolveAssetUrl(brand.logoSrc))}" alt="" width="165.711" height="86.221"></span><span class="logo-type">${escapeHtml(brand.name)}</span></a>
        <p>${escapeHtml(footer.brandDescription)}</p>
        <ul class="footer-chips" aria-label="حوزه‌های خدمت">${chipsHtml}</ul>
      </div>
      <nav class="footer-col" aria-label="ناوبری پایین صفحه">
        <h2 class="footer-heading"><bdi aria-hidden="true">۰۱</bdi>${escapeHtml(footer.quickLinksHeading)}</h2>
        <ul class="footer-links">${quickLinksHtml}</ul>
      </nav>
      <div class="footer-col">
        <h2 class="footer-heading"><bdi aria-hidden="true">۰۲</bdi>${escapeHtml(footer.contactHeading)}</h2>
        <a class="footer-line" href="${escapeHtml(primaryHref)}" data-messenger-link><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z"/></svg><span data-messenger-label>${escapeHtml(contact.messengerFallbackLabel)}</span></a>
        <address class="footer-line"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>${escapeHtml(contact.address)}</span></address>
        <div class="map-slot" role="img" aria-label="${escapeHtml(contact.mapAriaLabel)}"><svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><path d="M24 13c0 7-8 14-8 14S8 20 8 13a8 8 0 1 1 16 0Z"/><circle cx="16" cy="13" r="3"/></svg><span>${escapeHtml(contact.mapNote)}</span></div>
      </div>
      <div class="footer-col">
        <h2 class="footer-heading"><bdi aria-hidden="true">۰۳</bdi>${escapeHtml(footer.sealsHeading)}</h2>
        <div class="seals">${sealsHtml}</div>
        <p class="footer-proof-note">${escapeHtml(footer.sealsNote)}</p>
      </div>
    </div>
    <div class="footer-wordmark" aria-hidden="true"><span>${escapeHtml(footer.wordmark)}</span></div>
    <div class="footer-bottom">
      <p class="footer-legal">${escapeHtml(footer.legal)}</p>
      <p class="footer-tagline">${escapeHtml(footer.tagline)}</p>
      <a class="to-top" href="${escapeHtml(toTopHref)}">${escapeHtml(footer.toTopLabel)} <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V4M5 11l7-7 7 7"/></svg></a>
    </div>
  </div>
</footer>`;
}

export function applyContactLinks(root = document) {
  const normalizedPhone = cleanPhone(CHROME_CONFIG.contact.phone);
  if (isValidIranPhone(normalizedPhone)) {
    qsa("[data-phone-link]", root).forEach((el) => {
      el.href = `tel:${normalizedPhone}`;
    });
    qsa("[data-phone-label]", root).forEach((el) => {
      el.textContent = CHROME_CONFIG.contact.phone;
    });
  }

  const messengerUrl = parseHttpsUrl(CHROME_CONFIG.contact.messenger);
  if (messengerUrl) {
    qsa("[data-messenger-link]", root).forEach((el) => {
      el.href = messengerUrl;
      el.rel = "noopener noreferrer";
    });
    qsa("[data-messenger-label]", root).forEach((el) => {
      el.textContent = messengerUrl;
    });
  }
}

function initMobileMenu() {
  const menu = qs("#mobile-menu");
  const menuButton = qs(".menu-btn");
  if (!menu || !menuButton) return;

  const desktopMq = matchMedia("(min-width: 68em)");
  const supportsPopover = typeof menu.showPopover === "function";

  const isMenuOpen = () =>
    supportsPopover
      ? menu.matches(":popover-open")
      : menu.classList.contains("is-open");

  const closeMenu = () => {
    if (!isMenuOpen()) return;
    if (supportsPopover) {
      menu.hidePopover();
    } else {
      menu.classList.remove("is-open");
    }
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "باز کردن منو");
  };

  if (supportsPopover) {
    menu.addEventListener("toggle", (event) => {
      const open = event.newState === "open";
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    });
  } else {
    document.documentElement.classList.add("js-menu");
    menuButton.removeAttribute("popovertarget");
    menuButton.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    });
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isMenuOpen()) {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  qsa("a", menu).forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
      if (link.hash) {
        const target = qs(link.hash);
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      }
    });
  });

  desktopMq.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}

function initHeaderScrollSpy() {
  const header = document.querySelector(".site-header");
  const navLinks = [
    ...document.querySelectorAll('.nav a[href^="#"], .menu-list a[href^="#"]'),
  ];
  const sectionIds = navLinks
    .map((link) => link.hash.slice(1))
    .filter((id, index, arr) => id && arr.indexOf(id) === index);
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  let currentSection = "";
  let rafScheduled = false;
  let settleTimer;

  const setCurrentSection = (sectionId) => {
    if (sectionId === currentSection) return;
    currentSection = sectionId;
    navLinks.forEach((link) => {
      if (link.hash === `#${sectionId}`) {
        link.setAttribute("aria-current", "location");
      } else if (link.getAttribute("aria-current") === "location") {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateHeader = () => {
    rafScheduled = false;
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
    if (!sections.length) return;

    const threshold = window.innerHeight * 0.42;
    let activeId = sections[0]?.id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) {
        activeId = section.id;
      }
    }
    if (activeId) setCurrentSection(activeId);
  };

  const scheduleUpdate = () => {
    if (!rafScheduled) {
      rafScheduled = true;
      requestAnimationFrame(updateHeader);
    }
    clearTimeout(settleTimer);
    settleTimer = setTimeout(updateHeader, 1100);
  };

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  updateHeader();
}

function initToTopFallback() {
  const toTop = qs(".site-footer .to-top");
  if (!toTop || toTop.getAttribute("href") !== "#top") return;
  toTop.addEventListener("click", (event) => {
    if (document.getElementById("top")) return;
    event.preventDefault();
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  });
}

function mountHeaderAndFooter() {
  if (!qs(".site-header")) {
    const headerEl = createElementFromHtml(renderHeaderMarkup());
    const headerMount = qs("[data-site-header]");
    if (headerMount) {
      headerMount.replaceWith(headerEl);
    } else {
      const smoothWrapper = qs("#smooth-wrapper");
      const main = qs("main");
      if (smoothWrapper) {
        smoothWrapper.before(headerEl);
      } else if (main) {
        main.before(headerEl);
      } else {
        document.body.prepend(headerEl);
      }
    }
  }

  if (!qs(".site-footer")) {
    const footerEl = createElementFromHtml(renderFooterMarkup());
    const footerMount = qs("[data-site-footer]");
    if (footerMount) {
      footerMount.replaceWith(footerEl);
    } else {
      const main = qs("main");
      if (main) {
        main.after(footerEl);
      } else {
        document.body.append(footerEl);
      }
    }
  }
}

export function initChrome() {
  if (document.documentElement.dataset.chromeInit === "true") return;
  document.documentElement.dataset.chromeInit = "true";

  mountHeaderAndFooter();
  applyContactLinks(document);
  initMobileMenu();
  initHeaderScrollSpy();
  initToTopFallback();
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initChrome(), { once: true });
  } else {
    initChrome();
  }
}
