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
    { id: "home", num: "۰۱", title: "صفحه اصلی", href: "index.html" },
    { id: "services", num: "۰۲", title: "محصولات و خدمات", href: "products.html" },
    { id: "contact", num: "۰۳", title: "ارتباط با ما", href: "contact.html" },
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
      return `
      <li class="door-menu-item">
        <a class="door-menu-link" href="${escapeHtml(href)}"${currentAttr}>
          <span class="door-menu-num">${escapeHtml(item.num)}</span>
          <span class="door-menu-label">${escapeHtml(item.title)}</span>
          <svg class="door-menu-arw" viewBox="0 0 24 24" aria-hidden="true">${ARROW_PATH}</svg>
        </a>
      </li>`;
    })
    .join("");

  const activeSvc =
    footer.services.find((svc) => isCurrentPageLink(svc.href)) || footer.services[0];

  const productLinksHtml = footer.services
    .map((svc) => {
      const href = resolveHref(svc.href);
      const imgUrl = resolveAssetUrl(svc.img);
      const isCurrent = isCurrentPageLink(svc.href);
      const isDefault = svc.id === activeSvc.id;
      return `<a class="door-product-link${isDefault ? " is-previewed" : ""}" href="${escapeHtml(href)}" data-preview-img="${escapeHtml(imgUrl)}" data-preview-title="${escapeHtml(svc.title)}"${isCurrent ? ' aria-current="page"' : ""}><span>${escapeHtml(svc.title)}</span><span aria-hidden="true">←</span></a>`;
    })
    .join("");

  const phoneBtnHtml = validPhone
    ? `<a class="btn btn--secondary" href="${escapeHtml(validPhone.href)}" dir="ltr">${escapeHtml(validPhone.display)}</a>`
    : "";
  const messengerBtnHtml = messengerHref
    ? `<a class="btn btn--secondary" href="${escapeHtml(messengerHref)}" rel="noopener noreferrer">پیام‌رسان</a>`
    : "";

  return `
<aside id="door-menu" class="door-menu" role="dialog" aria-modal="true" aria-label="منوی ناوبری سایت" hidden>
  <div class="door-backdrop" aria-hidden="true"></div>
  <div class="door-panel">
    <div class="door-menu-in">
      <div class="door-menu-grid">
        <nav class="door-menu-nav" aria-label="ناوبری بخش‌ها">
          <ul class="door-menu-list">${itemsHtml}</ul>
        </nav>

        <div class="door-products-panel">
          <h2 class="door-products-title">محصولات و راهکارها</h2>
          <div class="door-products-links">${productLinksHtml}</div>
          <figure class="door-preview" aria-live="polite">
            <img src="${escapeHtml(resolveAssetUrl(activeSvc.img))}" alt="${escapeHtml(activeSvc.title)}" loading="lazy" decoding="async">
            <figcaption class="door-preview-cap">${escapeHtml(activeSvc.title)}</figcaption>
          </figure>
        </div>
      </div>

      <div class="door-menu-foot">
        <div class="door-menu-meta">
          <span><strong>پاسخ‌گویی:</strong> ${escapeHtml(contact.hoursShort)}</span>
          <span class="door-menu-sep" aria-hidden="true">·</span>
          <span><strong>محدوده:</strong> ${escapeHtml(contact.areaLabel)}</span>
        </div>
        <div class="door-menu-actions">
          <a class="btn btn--primary" href="${escapeHtml(ctaHref)}" data-phone-link>${escapeHtml(headerCta.label)}</a>
          ${phoneBtnHtml}
          ${messengerBtnHtml}
        </div>
      </div>
    </div>
  </div>
</aside>`;
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
              <h3 class="footer-heading"><bdi aria-hidden="true">۰۱</bdi>دسترسی سریع</h3>
              <ul class="footer-main-links">${mainLinksHtml}</ul>
            </nav>

            <div>
              <h3 class="footer-heading"><bdi aria-hidden="true">۰۳</bdi>ساعات و محدوده</h3>
              <div class="footer-hours-block">
                <p><strong>پاسخ‌گویی:</strong> ${escapeHtml(contact.hoursShort)}</p>
                <p><strong>محدودهٔ خدمات:</strong> ${escapeHtml(contact.areaLabel)}</p>
                ${phoneLineHtml}
                ${messengerLineHtml}
              </div>
            </div>
          </div>

          <div>
            <h3 class="footer-heading"><bdi aria-hidden="true">۰۲</bdi>${escapeHtml(footer.servicesHeading)}</h3>
            <details class="footer-services-acc" open>
              <summary>فهرست ۷ محصول و خدمت</summary>
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
  const menu = qs("#door-menu");
  const menuBtn = qs(".menu-btn");
  if (!menu || !menuBtn || !header) return { isOpen: () => false };

  const backdrop = qs(".door-backdrop", menu);
  const panel = qs(".door-panel", menu);
  const linkLabels = qsa(".door-menu-link", menu);
  const foot = qs(".door-menu-foot", menu);
  const productLinks = qsa(".door-product-link", menu);
  const previewImg = qs(".door-preview img", menu);
  const previewCap = qs(".door-preview-cap", menu);

  let openState = false;
  let inertSiblings = [];
  let menuTl = null;

  productLinks.forEach((link) => {
    const activatePreview = () => {
      const nextSrc = link.dataset.previewImg;
      const nextTitle = link.dataset.previewTitle;
      if (previewImg && nextSrc && previewImg.getAttribute("src") !== nextSrc) {
        previewImg.setAttribute("src", nextSrc);
        previewImg.alt = nextTitle || "";
      }
      if (previewCap && nextTitle) previewCap.textContent = nextTitle;
      productLinks.forEach((item) => item.classList.toggle("is-previewed", item === link));
    };
    link.addEventListener("pointerenter", activatePreview);
    link.addEventListener("focus", activatePreview);
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
    ...qsa("a[href], button:not([disabled])", menu),
  ];

  const setPanelWillChange = (value) => {
    if (panel) panel.style.willChange = value;
    if (backdrop) backdrop.style.willChange = value ? "opacity" : "";
  };

  const finishClose = () => {
    setPanelWillChange("");
    menu.hidden = true;
    document.documentElement.classList.remove("menu-open");
    header.classList.remove("is-menu-active");
    setBackgroundInert(false);
    document.documentElement.style.overflow = "";
    ScrollSmoother.get()?.paused(false);
  };

  const buildMenuTimeline = () => {
    menuTl?.kill();
    menuTl = gsap.timeline({
      paused: true,
      defaults: { ease: MOTION_EASE.door },
      onStart: () => setPanelWillChange("transform"),
      onComplete: () => setPanelWillChange(""),
      onReverseComplete: finishClose,
    });

    menuTl
      .fromTo(
        backdrop,
        { opacity: 0 },
        { opacity: 1, duration: 0.24, ease: "none" },
        0
      )
      .fromTo(
        panel,
        { yPercent: -102 },
        { yPercent: 0, duration: 0.56 },
        0.02
      )
      .fromTo(
        linkLabels,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.34,
          stagger: 0.05,
          ease: MOTION_EASE.reveal,
        },
        0.18
      )
      .fromTo(
        foot,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: MOTION_EASE.reveal },
        0.26
      );

    return menuTl;
  };

  const openMenu = () => {
    if (openState) return;
    openState = true;
    menu.hidden = false;
    document.documentElement.classList.add("menu-open");
    header.classList.add("is-menu-active");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "بستن منو");
    setBackgroundInert(true);
    document.documentElement.style.overflow = "hidden";
    ScrollSmoother.get()?.paused(true);

    if (isMotionReduced()) {
      gsap.set(backdrop, { opacity: 1 });
      gsap.set(panel, { yPercent: 0 });
      gsap.set(linkLabels, { y: 0, opacity: 1 });
      gsap.set(foot, { y: 0, opacity: 1 });
    } else {
      if (!menuTl) buildMenuTimeline();
      menuTl.timeScale(1).play();
    }

    requestAnimationFrame(() => {
      linkLabels[0]?.focus({ preventScroll: true });
    });
  };

  const closeMenu = ({ restoreFocus = true, instant = false } = {}) => {
    if (!openState) return;
    openState = false;
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "باز کردن منو");

    if (instant || isMotionReduced() || !menuTl) {
      menuTl?.pause(0);
      finishClose();
    } else {
      setPanelWillChange("transform");
      menuTl.timeScale(1.25).reverse();
    }

    if (restoreFocus) {
      menuBtn.focus({ preventScroll: true });
    }
  };

  menuBtn.addEventListener("click", () => {
    if (openState) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop?.addEventListener("click", () => closeMenu());

  document.addEventListener("keydown", (event) => {
    if (!openState) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key === "Tab") {
      const focusables = getFocusableInMenu();
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
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
    getTimeline: () => menuTl || buildMenuTimeline(),
    setProgress: (p) => {
      if (!openState) {
        openState = true;
        menu.hidden = false;
        document.documentElement.classList.add("menu-open");
        header.classList.add("is-menu-active");
        menuBtn.setAttribute("aria-expanded", "true");
      }
      const tl = menuTl || buildMenuTimeline();
      tl.progress(p).pause();
    },
  };

  return { isOpen: () => openState };
}

function initFooterResponsiveServices() {
  const details = qs(".footer-services-acc");
  if (!details) return;
  const mq = matchMedia("(min-width: 48em)");
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

        if (!reduced) {
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
            if (footerDoorLeft) gsap.set(footerDoorLeft, { xPercent: -94 });
            if (footerDoorRight) gsap.set(footerDoorRight, { xPercent: 94 });
            if (titleWords.length) gsap.set(titleWords, { yPercent: 0, opacity: 1 });
            if (wordmarkSpan) gsap.set(wordmarkSpan, { xPercent: 0 });
          } else {
            if (footerCurtain) {
              gsap.fromTo(
                footerCurtain,
                { yPercent: -16 },
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

            if (footerDoorLeft && footerDoorRight) {
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
                    start: "top 90%",
                    once: true,
                  },
                }
              );
            }

            if (wordmarkSpan && isDesktop) {
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

export function initChrome() {
  if (document.documentElement.dataset.chromeInit === "true") return;
  document.documentElement.dataset.chromeInit = "true";
  document.documentElement.classList.add("chrome-js");

  mountHeaderMenuAndFooter();
  applyContactLinks(document);
  initFooterResponsiveServices();
  initToTop();

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
