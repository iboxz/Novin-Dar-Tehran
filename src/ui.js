import {
  applyContactLinks,
  cleanPhone,
  isValidIranPhone,
  parseHttpsUrl,
} from "./chrome.js";

const SITE_CONFIG = {
  servicePages: {},
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

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

export function initUI() {
  applyContactLinks(document);
  initServiceDialog();
  initQuoteForm();
}
