const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const fa = (value) =>
  String(value).replace(/\d/g, (digit) => FA_DIGITS[Number(digit)]);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const GALLERY_IMAGES = {
  jack: [
    { src: "parking-gate-openers.png", title: "درب پارکینگی با جک بازویی", alt: "درب پارکینگی دو لنگه با دو جک بازویی نصب‌شده روی پایه‌های سنگی" },
    { src: "gate-system-2.jpg", title: "درب حیاط با بازشوی بازویی", alt: "درب حیاط دو لنگه با روکش چوب و بازشوی بازویی" },
    { src: "parking-gate-openers-2.jpg", title: "درب پارکینگی چوبی", alt: "درب پارکینگی چوبی با جک بازویی در محوطه‌ای کوهستانی" },
    { src: "parking-gate-openers-3.jpg", title: "درب حیاط مشکی", alt: "درب حیاط مشکی با بازشوی بازویی در حال باز شدن" },
    { src: "gate-system-1.jpg", title: "درب حیاط در شب", alt: "درب حیاط دو لنگه با جک بازویی و نورپردازی شبانه" },
    { src: "parking-gate-openers-4.jpg", title: "درب پارکینگی زیرسقفی", alt: "درب پارکینگی اتوماتیک زیرسقفی در نمای بیرونی ویلا" },
  ],
  glass: [
    { src: "automatic-glass-doors.png", title: "ورودی ساختمان اداری", alt: "درب شیشه‌ای اتوماتیک دو لنگه در ورودی ساختمان اداری" },
    { src: "automatic-glass-doors-2.jpg", title: "درب شیشه‌ای کشویی", alt: "درب شیشه‌ای اتوماتیک کشویی در ورودی ساختمان" },
    { src: "Gemini_Generated_Image_qs8r8oqs8r8oqs8r.jpg", title: "ورودی فروشگاه", alt: "درب شیشه‌ای اتوماتیک در ورودی یک فروشگاه" },
  ],
  shutter: [
    { src: "roller-shutters.jpg", title: "کرکره با تیغه‌های عریض", alt: "درب پارکینگی اتوماتیک با تیغه‌های عریض کرکره‌ای در نمای سنگی" },
    { src: "transparent-roller-shutters.jpg", title: "کرکره شفاف فروشگاهی", alt: "کرکره برقی شفاف در ورودی یک فروشگاه" },
    { src: "roller-shutters-2.jpg", title: "کرکره طرح چوب", alt: "کرکره برقی با تیغه‌های طرح چوب" },
    { src: "roller-shutters-3.jpg", title: "کرکره طرح چوب در نمای آجری", alt: "کرکره برقی طرح چوب در نمای آجری" },
  ],
  barrier: [
    { src: "automatic-barriers.jpg", title: "راهبند ورودی مجتمع", alt: "راهبند اتوماتیک در ورودی مجتمع مسکونی" },
    { src: "automatic-barriers-2.jpg", title: "راهبند در حال باز شدن", alt: "راهبند اتوماتیک در حال باز شدن در ورودی شهرک" },
    { src: "automatic-barriers-3.jpg", title: "راهبند شبانه", alt: "راهبند اتوماتیک با بازوی روشن در ورودی پارکینگ طبقاتی" },
  ],
  balcony: [
    { src: "glass-balustrade.jpg", title: "تراس چوبی", alt: "شیشهٔ بالکنی در تراس چوبی یک آپارتمان" },
    { src: "glass-balust_3.jpg", title: "نمای شهر", alt: "شیشهٔ بالکنی با نمای شهر و برج میلاد" },
    { src: "glass-balustrade-2.jpg", title: "شیشهٔ تاشو", alt: "شیشهٔ بالکنی تاشو در تراس یک کافه" },
    { src: "glass-facade.jpg", title: "نمای شیشه‌ای ساختمان", alt: "نمای شیشه‌ای بالکن‌های یک ساختمان مسکونی" },
  ],
  folding: [
    { src: "folding-doors.jpg", title: "درب فولدینگ شیشه‌ای", alt: "درب فولدینگ شیشه‌ای در نمای چوبی یک ساختمان" },
  ],
  sectional: [
    { src: "sectional-doors.jpg", title: "درب سکشنال سبز", alt: "درب سکشنال سبز با پنجره‌های باریک در نمای ویلا" },
    { src: "sectional-doors-2.jpg", title: "درب سکشنال شیشه‌ای مات", alt: "درب سکشنال با پنل‌های شیشه‌ای مات در نمای سنگی" },
  ],
};

function createPhotoSlide(image, index, total) {
  const slide = document.createElement("figure");
  slide.className = "gallery-slide gallery-slide--photo";
  slide.setAttribute("role", "group");
  slide.setAttribute("aria-roledescription", "اسلاید");
  slide.setAttribute("aria-label", `${fa(index + 1)} از ${fa(total)}: ${image.title}`);

  const img = document.createElement("img");
  img.src = `./assets/projects-images/${image.src}`;
  img.alt = image.alt;
  img.loading = "lazy";
  img.decoding = "async";
  img.draggable = false;
  slide.append(img);
  return slide;
}

function createDots(dotGroup, images) {
  if (!dotGroup) return [];
  const fragment = document.createDocumentFragment();
  const labels = ["نمای سه‌بعدی", ...images.map((image, index) => `تصویر ${fa(index + 1)}: ${image.title}`)];

  labels.forEach((label, index) => {
    const dot = document.createElement("button");
    dot.className = "gallery-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", label);
    dot.setAttribute("aria-current", index === 0 ? "true" : "false");
    if (index !== 0) dot.tabIndex = -1;
    fragment.append(dot);
  });
  dotGroup.replaceChildren(fragment);
  return [...dotGroup.querySelectorAll(".gallery-dot")];
}

function initGallery(stage) {
  const viewport = stage.querySelector("[data-gallery-viewport]");
  const track = stage.querySelector("[data-gallery-track]");
  if (!viewport || !track) return;

  const service = stage.closest("[data-service]")?.dataset.service;
  const images = GALLERY_IMAGES[service];
  if (!images) {
    console.error(`Missing gallery image configuration for service: ${service}`);
    return;
  }
  const threeDSlide = track.querySelector(".gallery-slide--3d");
  if (!threeDSlide) return;
  const total = images.length + 1;
  const fragment = document.createDocumentFragment();
  images.forEach((image, index) => fragment.append(createPhotoSlide(image, index + 1, total)));
  track.querySelectorAll(".gallery-slide--photo").forEach((slide) => slide.remove());
  track.append(fragment);
  threeDSlide.setAttribute("aria-label", `${fa(1)} از ${fa(total)}: نمای سه‌بعدی`);

  const slides = [...track.children].filter((el) =>
    el.classList.contains("gallery-slide")
  );
  if (slides.length < 2) return;

  const dots = createDots(stage.querySelector(".gallery-dots"), images);
  const prevButton = stage.querySelector("[data-gallery-prev]");
  const nextButton = stage.querySelector("[data-gallery-next]");
  const openButton = stage.querySelector("[data-gallery-open]");
  const progressBar = stage.querySelector(".gallery-progress span");
  const liveRegion = stage.querySelector("[data-gallery-live]");

  const isThreeD = (index) => index === 0;
  const threeDHost = threeDSlide?.querySelector(".render-host") || null;
  const mobileGallery = window.matchMedia("(max-width: 44em)");

  let current = 0;
  let pointer = null;

  const animateFlip = () => {
    track.classList.remove("is-dragging");
    track.style.transform = `translate3d(${current * 100}%, 0, 0)`;
  };

  const syncUI = () => {
    const onThreeD = isThreeD(current);

    stage.dataset.slideKind = onThreeD ? "3d" : "photo";

    if (progressBar) {
      progressBar.style.transform = `scaleX(${(current + 1) / total})`;
    }

    if (prevButton) prevButton.disabled = current === 0;
    if (nextButton) nextButton.disabled = current === total - 1;

    dots.forEach((dot, index) => {
      const active = index === current;
      dot.setAttribute("aria-current", active ? "true" : "false");
      dot.tabIndex = active ? 0 : -1;
    });

    slides.forEach((slide, index) => {
      const active = index === current;
      slide.classList.toggle("is-active", active);
      slide.toggleAttribute("inert", !active);
      if (active) {
        slide.removeAttribute("aria-hidden");
      } else {
        slide.setAttribute("aria-hidden", "true");
      }
    });

    if (liveRegion) {
      liveRegion.textContent = `${onThreeD ? "نمای سه‌بعدی" : "تصویر"} ${fa(
        current + 1
      )} از ${fa(total)}`;
    }

    if (onThreeD && threeDHost) {
      requestAnimationFrame(() => {
        threeDHost.dispatchEvent(new CustomEvent("gallery:activate"));
      });
    }
  };

  const goTo = (index, options = {}) => {
    const { instant = false, focusViewport = false } = options;
    const target = clamp(index, 0, total - 1);
    current = target;

    if (instant) {
      track.classList.add("is-instant");
      track.classList.remove("is-dragging");
      track.style.transform = `translate3d(${current * 100}%, 0, 0)`;
      void track.offsetWidth;
      requestAnimationFrame(() => track.classList.remove("is-instant"));
    } else {
      animateFlip();
    }

    syncUI();

    if (focusViewport) {
      viewport.focus({ preventScroll: true });
    }
  };

  const step = (direction) => goTo(current + direction);

  prevButton?.addEventListener("click", () => step(-1));
  nextButton?.addEventListener("click", () => step(1));

  openButton?.addEventListener("click", () => {
    goTo(1, { focusViewport: true });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goTo(index));
  });

  // Navigation inside the dot group keeps the keyboard focus on the active dot.
  const dotGroup = stage.querySelector(".gallery-dots");
  dotGroup?.addEventListener("keydown", (event) => {
    let target = null;
    if (event.key === "ArrowLeft") target = current + 1;
    else if (event.key === "ArrowRight") target = current - 1;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = total - 1;
    if (target === null) return;

    event.preventDefault();
    target = clamp(target, 0, total - 1);
    goTo(target);
    dots[target]?.focus({ preventScroll: true });
  });

  viewport.addEventListener("keydown", (event) => {
    // The 3D host uses the arrow keys for rotating the model.
    if (event.target.closest?.(".render-host")) return;

    let target = null;
    if (event.key === "ArrowLeft") target = current + 1;
    else if (event.key === "ArrowRight") target = current - 1;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = total - 1;
    if (target === null) return;

    event.preventDefault();
    goTo(target);
  });

  viewport.addEventListener("dragstart", (event) => event.preventDefault());

  const beginPointer = (event) => {
    if (!event.isPrimary) return false;
    if (event.pointerType === "mouse" && event.button !== 0) return false;
    if (event.target.closest("button, a, input, select, textarea")) return false;

    pointer = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startedAt: performance.now(),
      axis: null,
      offset: 0,
    };
    return true;
  };

  viewport.addEventListener(
    "pointerdown",
    (event) => {
      if (
        !mobileGallery.matches ||
        !isThreeD(current) ||
        !event.target.closest(".render-host")
      ) {
        return;
      }

      if (beginPointer(event)) event.stopImmediatePropagation();
    },
    true
  );

  const resetPointer = () => {
    const captured = pointer;
    pointer = null;
    track.classList.remove("is-dragging");
    track.style.transform = `translate3d(${current * 100}%, 0, 0)`;
    if (captured?.id !== undefined && viewport.hasPointerCapture?.(captured.id)) {
      viewport.releasePointerCapture(captured.id);
    }
  };

  viewport.addEventListener("pointerdown", (event) => {
    // On desktop the 3D host owns horizontal drags (rotate the model).
    if (isThreeD(current) && event.target.closest(".render-host")) return;
    beginPointer(event);
  });

  viewport.addEventListener("pointermove", (event) => {
    if (!pointer || event.pointerId !== pointer.id) return;

    const dx = event.clientX - pointer.startX;
    const dy = event.clientY - pointer.startY;

    if (!pointer.axis) {
      if (Math.abs(dx) < 7 && Math.abs(dy) < 7) return;
      if (Math.abs(dy) >= Math.abs(dx)) {
        // Let the page scroll vertically.
        pointer = null;
        return;
      }
      pointer.axis = "x";
      try {
        viewport.setPointerCapture(event.pointerId);
      } catch {
        /* pointer may already be gone */
      }
      track.classList.add("is-dragging");
    }

    event.preventDefault();

    let offset = dx;
    if (
      (current === 0 && offset < 0) ||
      (current === total - 1 && offset > 0)
    ) {
      offset *= 0.28;
    }

    pointer.offset = offset;
    pointer.rawOffset = dx;
    track.style.transform = `translate3d(calc(${
      current * 100
    }% + ${offset}px), 0, 0)`;
  });

  const finishDrag = () => {
    if (!pointer) return;

    const { axis, rawOffset = 0, startedAt } = pointer;
    const elapsed = Math.max(1, performance.now() - startedAt);
    const velocity = rawOffset / elapsed;
    const threshold = Math.min(
      88,
      Math.max(42, viewport.clientWidth * 0.15)
    );

    track.classList.remove("is-dragging");

    if (axis !== "x") {
      resetPointer();
      return;
    }

    const wantsNext =
      rawOffset > threshold || (velocity > 0.5 && rawOffset > 18);
    const wantsPrevious =
      rawOffset < -threshold || (velocity < -0.5 && rawOffset < -18);

    let target = current;
    if (wantsNext) target = Math.min(total - 1, current + 1);
    else if (wantsPrevious) target = Math.max(0, current - 1);

    // If the drag did not reach a new slide, the track animates back.
    const nextIndex = target;
    pointer = null;

    if (nextIndex !== current) {
      goTo(nextIndex);
    } else {
      track.style.transform = `translate3d(${current * 100}%, 0, 0)`;
    }
  };

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", resetPointer);
  viewport.addEventListener("lostpointercapture", (event) => {
    if (pointer && event.pointerId === pointer.id) {
      track.classList.remove("is-dragging");
      pointer = null;
      track.style.transform = `translate3d(${current * 100}%, 0, 0)`;
    }
  });

  goTo(0, { instant: true });
}

export function initGalleries() {
  document.querySelectorAll("[data-gallery]").forEach(initGallery);
}
