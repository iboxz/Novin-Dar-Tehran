const SITE_CONFIG = {
  phone: "[PLACEHOLDER_PHONE]",
  messenger: "[PLACEHOLDER_MESSENGER]",
  servicePages: {},
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

const toAsciiDigits = (value) =>
  value
    .replace(/[۰-۹]/g, (d) =>
      "\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(d)
    )
    .replace(/[٠-٩]/g, (d) =>
      "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(d)
    );

const cleanPhone = (value) => toAsciiDigits(value).replace(/[\s()\-]/g, "");
const isValidIranPhone = (value) =>
  /^(?:0[1-9]\d{9}|(?:\+98|0098)[1-9]\d{9})$/.test(value);

const parseHttpsUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
};

function initContactLinks() {
  const normalizedPhone = cleanPhone(SITE_CONFIG.phone);
  if (isValidIranPhone(normalizedPhone)) {
    qsa("[data-phone-link]").forEach((el) => {
      el.href = `tel:${normalizedPhone}`;
    });
    qsa("[data-phone-label]").forEach((el) => {
      el.textContent = SITE_CONFIG.phone;
    });
  }

  const messengerUrl = parseHttpsUrl(SITE_CONFIG.messenger);
  if (messengerUrl) {
    qsa("[data-messenger-link]").forEach((el) => {
      el.href = messengerUrl;
      el.rel = "noopener noreferrer";
    });
    qsa("[data-messenger-label]").forEach((el) => {
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
      const target = qs(link.hash || "#contact");
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });

  desktopMq.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}

function initServiceDialog() {
  const dialog = qs("#service-dialog");
  const serviceSelect = qs("#service-type");
  if (!dialog || !serviceSelect) return;

  let activeService = "";

  qsa("[data-details]").forEach((trigger) => {
    const pageUrl = parseHttpsUrl(SITE_CONFIG.servicePages[trigger.dataset.details]);
    if (pageUrl) {
      trigger.href = pageUrl;
      return;
    }
    trigger.addEventListener("click", (event) => {
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        typeof dialog.showModal !== "function"
      ) {
        return;
      }
      event.preventDefault();
      const card = trigger.closest(".svc-item");
      activeService = card.dataset.service;
      qs("#dialog-title").textContent = qs(".service-select", card).textContent;
      qs("#dialog-description").textContent = qs(".svc-body p", card).textContent;
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.x ||
      event.clientX > rect.x + rect.width ||
      event.clientY < rect.y ||
      event.clientY > rect.y + rect.height
    ) {
      dialog.close();
    }
  });

  qs("#dialog-contact")?.addEventListener("click", () => {
    serviceSelect.value = activeService;
    serviceSelect.dispatchEvent(new Event("input", { bubbles: true }));
    dialog.close();
    qs("#full-name")?.focus({ preventScroll: true });
  });
}

function initQuoteForm() {
  const form = qs("#quote-form");
  const fullNameInput = qs("#full-name");
  const phoneInput = qs("#phone");
  const serviceSelect = qs("#service-type");
  const requestResult = qs("#request-result");
  const formStatus = qs("#form-status");
  if (!form || !fullNameInput || !phoneInput || !serviceSelect) return;

  fullNameInput.addEventListener("input", () => {
    fullNameInput.setCustomValidity(
      fullNameInput.value && !fullNameInput.value.trim()
        ? "لطفاً نام خود را وارد کنید."
        : ""
    );
  });

  phoneInput.addEventListener("input", () => {
    phoneInput.setCustomValidity(
      phoneInput.value && !isValidIranPhone(cleanPhone(phoneInput.value))
        ? "شمارهٔ ایران را کامل، با ۰ یا ۹۸+ وارد کنید."
        : ""
    );
  });

  form.addEventListener("input", () => {
    requestResult.hidden = true;
    formStatus.textContent = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fullNameInput.setCustomValidity(
      fullNameInput.value.trim() ? "" : "لطفاً نام خود را وارد کنید."
    );
    phoneInput.setCustomValidity(
      isValidIranPhone(cleanPhone(phoneInput.value))
        ? ""
        : "شمارهٔ ایران را کامل، با ۰ یا ۹۸+ وارد کنید."
    );

    if (!form.reportValidity()) return;

    const selectedServiceLabel = serviceSelect.selectedOptions[0].textContent;
    const description = qs("#description").value.trim();

    qs("#request-text").value = [
      "درخواست مشاوره و قیمت — نوین درب تهران",
      `نام: ${fullNameInput.value.trim()}`,
      `شمارهٔ تماس: ${cleanPhone(phoneInput.value)}`,
      `نوع خدمت: ${selectedServiceLabel}`,
      description ? `توضیح: ${description}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    requestResult.hidden = false;
    formStatus.textContent =
      "متن درخواست آماده شد، اما ارسال نشده است. می‌توانید آن را کپی کنید.";
    qs("#request-text").focus();
  });

  qs("#copy-request")?.addEventListener("click", async () => {
    const requestText = qs("#request-text");
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(requestText.value);
      formStatus.textContent =
        "متن درخواست کپی شد. ارسال آن باید توسط شما انجام شود.";
    } catch {
      requestText.focus();
      requestText.select();
      formStatus.textContent =
        "کپی خودکار در دسترس نیست؛ متن انتخاب شده را با گزینهٔ کپی دستگاه خود کپی کنید.";
    }
  });
}

function initHeaderScrollSpy() {
  const header = document.querySelector(".site-header");
  const navLinks = [
    ...document.querySelectorAll('.nav a[href^="#"], .menu-list a[href^="#"]'),
  ];
  const sections = ["home", "services", "about", "contact"]
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
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateHeader = () => {
    rafScheduled = false;
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
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

export function initUI() {
  initContactLinks();
  initMobileMenu();
  initServiceDialog();
  initQuoteForm();
  initHeaderScrollSpy();
}
