const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const fa = (value) =>
  String(value).replace(/\d/g, (digit) => FA_DIGITS[Number(digit)]);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function initGallery(stage) {
  const viewport = stage.querySelector("[data-gallery-viewport]");
  const track = stage.querySelector("[data-gallery-track]");
  if (!viewport || !track) return;

  const slides = [...track.children].filter((el) =>
    el.classList.contains("gallery-slide")
  );
  if (slides.length < 2) return;

  const dots = [...stage.querySelectorAll(".gallery-dot")];
  const prevButton = stage.querySelector("[data-gallery-prev]");
  const nextButton = stage.querySelector("[data-gallery-next]");
  const openButton = stage.querySelector("[data-gallery-open]");
  const statusLabel = stage.querySelector("[data-gallery-label]");
  const currentLabel = stage.querySelector("[data-gallery-current]");
  const progressBar = stage.querySelector(".gallery-progress span");
  const liveRegion = stage.querySelector("[data-gallery-live]");

  const total = slides.length;
  const isThreeD = (index) => index === 0;
  const threeDSlide = isThreeD(0) ? slides[0] : null;
  const threeDHost = threeDSlide?.querySelector(".render-host") || null;

  let current = 0;
  let pointer = null;

  const animateFlip = () => {
    track.classList.remove("is-dragging");
    track.style.transform = `translate3d(${-current * 100}%, 0, 0)`;
  };

  const syncUI = () => {
    const onThreeD = isThreeD(current);

    stage.dataset.slideKind = onThreeD ? "3d" : "photo";
    if (statusLabel) {
      statusLabel.textContent = onThreeD ? "نمای سه‌بعدی" : "تصویر پروژه";
    }
    if (currentLabel) currentLabel.textContent = fa(current + 1);

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
      track.style.transform = `translate3d(${-current * 100}%, 0, 0)`;
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

  const resetPointer = () => {
    const captured = pointer;
    pointer = null;
    track.classList.remove("is-dragging");
    track.style.transform = `translate3d(${-current * 100}%, 0, 0)`;
    if (captured?.id !== undefined && viewport.hasPointerCapture?.(captured.id)) {
      viewport.releasePointerCapture(captured.id);
    }
  };

  viewport.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.target.closest("button, a, input, select, textarea")) return;
    // On the first slide the 3D host owns horizontal drags (rotate the model).
    if (isThreeD(current) && event.target.closest(".render-host")) return;

    pointer = {
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startedAt: performance.now(),
      axis: null,
      offset: 0,
    };
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
      (current === 0 && offset > 0) ||
      (current === total - 1 && offset < 0)
    ) {
      offset *= 0.28;
    }

    pointer.offset = offset;
    pointer.rawOffset = dx;
    track.style.transform = `translate3d(calc(${
      -current * 100
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
      rawOffset < -threshold || (velocity < -0.5 && rawOffset < -18);
    const wantsPrevious =
      rawOffset > threshold || (velocity > 0.5 && rawOffset > 18);

    let target = current;
    if (wantsNext) target = Math.min(total - 1, current + 1);
    else if (wantsPrevious) target = Math.max(0, current - 1);

    // If the drag did not reach a new slide, the track animates back.
    const nextIndex = target;
    pointer = null;

    if (nextIndex !== current) {
      goTo(nextIndex);
    } else {
      track.style.transform = `translate3d(${-current * 100}%, 0, 0)`;
    }
  };

  viewport.addEventListener("pointerup", finishDrag);
  viewport.addEventListener("pointercancel", resetPointer);
  viewport.addEventListener("lostpointercapture", (event) => {
    if (pointer && event.pointerId === pointer.id) {
      track.classList.remove("is-dragging");
      pointer = null;
      track.style.transform = `translate3d(${-current * 100}%, 0, 0)`;
    }
  });

  goTo(0, { instant: true });
}

export function initGalleries() {
  document.querySelectorAll("[data-gallery]").forEach(initGallery);
}
