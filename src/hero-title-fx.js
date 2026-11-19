const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

export function initHeroTitleFx() {
  const title = document.getElementById("hero-title");
  if (!title || title.dataset.fxInit) return;

  const rawText = (title.textContent || "").trim();
  if (!rawText) return;

  title.dataset.fxInit = "1";
  title.setAttribute("aria-label", rawText);

  const blurLayer = document.createElement("span");
  blurLayer.className = "hero-title__blur";
  blurLayer.setAttribute("aria-hidden", "true");
  blurLayer.textContent = rawText;

  const sharpLayer = document.createElement("span");
  sharpLayer.className = "hero-title__sharp";
  sharpLayer.setAttribute("aria-hidden", "true");
  sharpLayer.textContent = rawText;

  title.textContent = "";
  title.append(blurLayer, sharpLayer);

  const stage = title.closest(".hero-stage") || title.closest(".hero-intro") || title;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isPaused = () =>
    reduced.matches || document.documentElement.classList.contains("motion-paused");

  let titleRect = null;
  const measure = () => {
    titleRect = title.getBoundingClientRect();
  };

  const state = {
    tx: 0,
    ty: 0,
    cx: 0,
    cy: 0,
    tActive: 0,
    active: 0,
    mx: 0,
    my: 0,
    tmx: 0,
    tmy: 0,
    raf: 0,
  };

  const tick = () => {
    state.raf = 0;

    if (isPaused()) {
      title.classList.remove("is-interacting");
      title.style.setProperty("--active", "0");
      return;
    }

    state.cx += (state.tx - state.cx) * 0.22;
    state.cy += (state.ty - state.cy) * 0.22;
    state.active += (state.tActive - state.active) * 0.16;
    state.mx += (state.tmx - state.mx) * 0.14;
    state.my += (state.tmy - state.my) * 0.14;

    title.style.setProperty("--spot-x", `${state.cx.toFixed(1)}px`);
    title.style.setProperty("--spot-y", `${state.cy.toFixed(1)}px`);
    title.style.setProperty("--active", state.active.toFixed(3));
    title.style.setProperty("--mx", state.mx.toFixed(4));
    title.style.setProperty("--my", state.my.toFixed(4));

    title.classList.toggle("is-interacting", state.active > 0.02);

    const settling =
      Math.abs(state.tx - state.cx) > 0.25 ||
      Math.abs(state.ty - state.cy) > 0.25 ||
      Math.abs(state.tActive - state.active) > 0.005 ||
      Math.abs(state.tmx - state.mx) > 0.003 ||
      Math.abs(state.tmy - state.my) > 0.003;

    if (settling) {
      state.raf = requestAnimationFrame(tick);
    }
  };

  const wake = () => {
    if (!state.raf && !isPaused()) {
      state.raf = requestAnimationFrame(tick);
    }
  };

  const updatePointer = (clientX, clientY) => {
    if (isPaused()) return;
    measure();
    if (!titleRect || titleRect.width === 0) return;

    const localX = clientX - titleRect.left;
    const localY = clientY - titleRect.top;

    // Proximity to the headline box smoothly opens the clear-focus aperture
    const dxOut = Math.max(0, titleRect.left - clientX, clientX - titleRect.right);
    const dyOut = Math.max(0, titleRect.top - clientY, clientY - titleRect.bottom);
    const distOut = Math.hypot(dxOut, dyOut);
    const reach = Math.max(120, titleRect.height * 1.1);
    const near = clamp(1 - distOut / reach, 0, 1);

    state.tx = localX;
    state.ty = localY;
    state.tmx = clamp((localX / titleRect.width) * 2 - 1, -1, 1);
    state.tmy = clamp((localY / titleRect.height) * 2 - 1, -1, 1);
    state.tActive = near;

    if (state.active < 0.02 && near > 0) {
      state.cx = localX;
      state.cy = localY;
    }

    wake();
  };

  const resetPointer = () => {
    state.tActive = 0;
    state.tmx = 0;
    state.tmy = 0;
    wake();
  };

  stage.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "touch") updatePointer(e.clientX, e.clientY);
    },
    { passive: true },
  );

  stage.addEventListener("pointerleave", resetPointer, { passive: true });

  title.addEventListener(
    "touchstart",
    (e) => {
      const t = e.touches[0];
      if (t) updatePointer(t.clientX, t.clientY);
    },
    { passive: true },
  );

  title.addEventListener(
    "touchmove",
    (e) => {
      const t = e.touches[0];
      if (t) updatePointer(t.clientX, t.clientY);
    },
    { passive: true },
  );

  title.addEventListener("touchend", resetPointer, { passive: true });
  title.addEventListener("touchcancel", resetPointer, { passive: true });

  window.addEventListener("resize", measure, { passive: true });
  measure();
}
