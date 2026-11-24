import {
  CHROME_CONFIG,
  cleanPhone,
  isValidIranPhone,
  parseHttpsUrl,
} from "./chrome.js";

const qs = (selector, root = document) => root.querySelector(selector);

function initVerifiedChannels() {
  const container = qs("[data-verified-channels]");
  if (!container) return;

  const normalizedPhone = cleanPhone(CHROME_CONFIG.contact.phone);
  const messengerUrl = parseHttpsUrl(CHROME_CONFIG.contact.messenger);
  const channels = [];

  if (isValidIranPhone(normalizedPhone)) {
    channels.push({
      label: "تماس مستقیم",
      text: CHROME_CONFIG.contact.phone,
      href: `tel:${normalizedPhone}`,
      external: false,
    });
  }

  if (messengerUrl) {
    channels.push({
      label: "واتس‌اپ / تلگرام",
      text: messengerUrl,
      href: messengerUrl,
      external: true,
    });
  }

  if (!channels.length) {
    container.hidden = true;
    return;
  }

  const fragment = document.createDocumentFragment();
  channels.forEach((channel) => {
    const card = document.createElement("div");
    card.className = "verified-channel";

    const label = document.createElement("span");
    label.className = "verified-channel-label";
    label.textContent = channel.label;

    const link = document.createElement("a");
    link.className = "verified-channel-value";
    link.href = channel.href;
    link.textContent = channel.text;
    if (channel.external) {
      link.rel = "noopener noreferrer";
    }

    card.append(label, link);
    fragment.append(card);
  });

  container.replaceChildren(fragment);
  container.hidden = false;
}

function setFieldError(input, errorEl, message) {
  if (!input || !errorEl) return;
  if (message) {
    input.setAttribute("aria-invalid", "true");
    errorEl.textContent = message;
    errorEl.hidden = false;
  } else {
    input.removeAttribute("aria-invalid");
    errorEl.textContent = "";
    errorEl.hidden = true;
  }
}

function initContactForm() {
  const form = qs("#quote-form");
  const fullNameInput = qs("#full-name");
  const phoneInput = qs("#phone");
  const serviceSelect = qs("#service-type");
  const requestKindSelect = qs("#request-kind");
  const districtInput = qs("#district");
  const descriptionInput = qs("#description");

  const nameError = qs("#name-error");
  const phoneError = qs("#phone-error");
  const serviceError = qs("#service-error");

  const requestResult = qs("#request-result");
  const requestText = qs("#request-text");
  const formStatus = qs("#form-status");
  const copyBtn = qs("#copy-request");
  const resetBtn = qs("#reset-request");

  if (!form || !fullNameInput || !phoneInput || !serviceSelect) return;

  const params = new URLSearchParams(window.location.search);
  const preselectedService = params.get("service");
  if (
    preselectedService &&
    [...serviceSelect.options].some((opt) => opt.value === preselectedService)
  ) {
    serviceSelect.value = preselectedService;
  }

  const validateName = () => {
    const ok = Boolean(fullNameInput.value.trim());
    setFieldError(
      fullNameInput,
      nameError,
      ok ? "" : "لطفاً نام و نام خانوادگی خود را وارد کنید."
    );
    return ok;
  };

  const validatePhone = () => {
    const raw = phoneInput.value.trim();
    if (!raw) {
      setFieldError(phoneInput, phoneError, "شمارهٔ تماس خود را وارد کنید.");
      return false;
    }
    const ok = isValidIranPhone(cleanPhone(raw));
    setFieldError(
      phoneInput,
      phoneError,
      ok ? "" : "شمارهٔ ایران را کامل، با ۰ یا ۹۸+ وارد کنید (مثلاً 09123456789)."
    );
    return ok;
  };

  const validateService = () => {
    const ok = Boolean(serviceSelect.value);
    setFieldError(
      serviceSelect,
      serviceError,
      ok ? "" : "لطفاً نوع سیستم یا خدمت مورد نظر را انتخاب کنید."
    );
    return ok;
  };

  fullNameInput.addEventListener("blur", () => {
    if (fullNameInput.value || fullNameInput.getAttribute("aria-invalid") === "true") {
      validateName();
    }
  });
  fullNameInput.addEventListener("input", () => {
    if (fullNameInput.getAttribute("aria-invalid") === "true") validateName();
  });

  phoneInput.addEventListener("blur", () => {
    if (phoneInput.value || phoneInput.getAttribute("aria-invalid") === "true") {
      validatePhone();
    }
  });
  phoneInput.addEventListener("input", () => {
    if (phoneInput.getAttribute("aria-invalid") === "true") validatePhone();
  });

  serviceSelect.addEventListener("change", () => {
    if (serviceSelect.getAttribute("aria-invalid") === "true") validateService();
  });

  form.addEventListener("input", () => {
    if (requestResult) requestResult.hidden = true;
    if (formStatus) formStatus.textContent = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const checks = [
      { input: fullNameInput, valid: validateName() },
      { input: phoneInput, valid: validatePhone() },
      { input: serviceSelect, valid: validateService() },
    ];

    const firstInvalid = checks.find((item) => !item.valid);
    if (firstInvalid) {
      firstInvalid.input.focus();
      return;
    }

    const selectedServiceLabel =
      serviceSelect.selectedOptions[0]?.textContent || "";
    const selectedKindLabel =
      requestKindSelect?.value && requestKindSelect.selectedOptions[0]
        ? requestKindSelect.selectedOptions[0].textContent
        : "";
    const district = districtInput?.value.trim() || "";
    const description = descriptionInput?.value.trim() || "";

    if (requestText) {
      requestText.value = [
        "درخواست مشاوره — نوین درب تهران",
        `نام: ${fullNameInput.value.trim()}`,
        `شمارهٔ تماس: ${cleanPhone(phoneInput.value)}`,
        `محصول / سیستم: ${selectedServiceLabel}`,
        selectedKindLabel ? `نوع درخواست: ${selectedKindLabel}` : "",
        district ? `محدوده در تهران: ${district}` : "",
        description ? `توضیح: ${description}` : "",
      ]
        .filter(Boolean)
        .join("\n");
    }

    if (requestResult) requestResult.hidden = false;
    if (formStatus) {
      formStatus.textContent = "متن آماده شد؛ کپی کنید و برای ما بفرستید.";
    }
    requestText?.focus();
  });

  copyBtn?.addEventListener("click", async () => {
    if (!requestText) return;
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(requestText.value);
      if (formStatus) {
        formStatus.textContent = "متن کپی شد؛ اکنون می‌توانید برای ما ارسال کنید.";
      }
    } catch {
      requestText.focus();
      requestText.select();
      if (formStatus) {
        formStatus.textContent =
          "متن انتخاب شد؛ با گزینهٔ کپی دستگاه خود آن را کپی کنید.";
      }
    }
  });

  resetBtn?.addEventListener("click", () => {
    form.reset();
    setFieldError(fullNameInput, nameError, "");
    setFieldError(phoneInput, phoneError, "");
    setFieldError(serviceSelect, serviceError, "");
    if (requestResult) requestResult.hidden = true;
    if (formStatus) formStatus.textContent = "";
    fullNameInput.focus();
  });
}

initVerifiedChannels();
initContactForm();
