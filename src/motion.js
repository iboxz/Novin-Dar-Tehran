import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin,
  ScrollSmoother,
} from "./vendor/libs.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, ScrollToPlugin, ScrollSmoother };

/**
 * منحنی‌ها و زمان‌بندی استاندارد برند نوین درب تهران
 * حس حرکت مکانیکی دقیق: شروع نرم، نشست قاطع (بدون لرزش اضافه)
 */
export const MOTION_EASE = {
  door: "cubic-bezier(0.76, 0, 0.24, 1)",
  reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
  tactile: "power2.out",
};

export const MOTION_DUR = {
  fast: 0.22,
  base: 0.42,
  door: 0.72,
  slow: 0.9,
};

export const MEDIA_QUERIES = {
  desktop: "(min-width: 64em)",
  mobile: "(max-width: 63.99em)",
  fineHover: "(hover: hover) and (pointer: fine)",
  reduced: "(prefers-reduced-motion: reduce)",
};

export function isMotionReduced() {
  return (
    matchMedia(MEDIA_QUERIES.reduced).matches ||
    document.documentElement.classList.contains("motion-paused")
  );
}

/**
 * جداسازی کلمه‌به‌کلمه برای ورود ماسک‌دار تیترها (بدون شکستن ساختار <em>)
 */
export function splitWords(rootEl) {
  if (!rootEl || rootEl.dataset.wordsSplit === "true") {
    return [...(rootEl?.querySelectorAll(".word-inner") || [])];
  }

  const inners = [];
  const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let currentNode;
  while ((currentNode = walker.nextNode())) {
    if (currentNode.nodeValue && currentNode.nodeValue.trim()) {
      textNodes.push(currentNode);
    }
  }

  textNodes.forEach((textNode) => {
    const parts = textNode.nodeValue.split(/(\s+)/);
    const fragment = document.createDocumentFragment();

    parts.forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        fragment.append(document.createTextNode(part));
        return;
      }

      const mask = document.createElement("span");
      mask.className = "word-mask";

      const inner = document.createElement("span");
      inner.className = "word-inner";
      inner.textContent = part;

      mask.append(inner);
      fragment.append(mask);
      inners.push(inner);
    });

    textNode.replaceWith(fragment);
  });

  rootEl.dataset.wordsSplit = "true";
  return inners;
}

/**
 * افکت مگنتیک ملایم فقط برای دسکتاپ با پوینتر دقیق
 */
export function createMagnetic(el, { strength = 0.24, maxOffset = 10 } = {}) {
  if (!el) return () => {};
  const canHover = matchMedia(MEDIA_QUERIES.fineHover).matches;
  if (!canHover || isMotionReduced()) return () => {};

  const xTo = gsap.quickTo(el, "x", { duration: 0.32, ease: MOTION_EASE.tactile });
  const yTo = gsap.quickTo(el, "y", { duration: 0.32, ease: MOTION_EASE.tactile });

  const onEnter = () => {
    el.style.willChange = "transform";
  };

  const onMove = (event) => {
    if (isMotionReduced()) return;
    const rect = el.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (event.clientY - (rect.top + rect.height / 2)) * strength;
    xTo(Math.max(-maxOffset, Math.min(maxOffset, dx)));
    yTo(Math.max(-maxOffset, Math.min(maxOffset, dy)));
  };

  const onLeave = () => {
    xTo(0);
    yTo(0);
    gsap.delayedCall(0.34, () => {
      el.style.willChange = "";
    });
  };

  el.addEventListener("pointerenter", onEnter);
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);

  return () => {
    el.removeEventListener("pointerenter", onEnter);
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerleave", onLeave);
    gsap.set(el, { clearProps: "x,y" });
    el.style.willChange = "";
  };
}

/**
 * افکت «text roll» کلمه‌ای روی لینک‌ها (متن به بالا می‌رود و کپی دوم از پایین می‌آید)
 */
export function initTextRoll(el) {
  if (!el) return () => {};
  const label = el.textContent.trim();
  if (!label) return () => {};

  if (el.dataset.rollInit !== "true") {
    const mask = document.createElement("span");
    mask.className = "roll-mask";

    const track = document.createElement("span");
    track.className = "roll-track";

    const primary = document.createElement("span");
    primary.className = "roll-copy";
    primary.textContent = label;

    const clone = document.createElement("span");
    clone.className = "roll-copy roll-copy--clone";
    clone.setAttribute("aria-hidden", "true");
    clone.textContent = label;

    track.append(primary, clone);
    mask.append(track);
    el.replaceChildren(mask);
    el.dataset.rollInit = "true";
  }

  const track = el.querySelector(".roll-track");
  if (!track || !matchMedia(MEDIA_QUERIES.fineHover).matches || isMotionReduced()) {
    return () => {};
  }

  const onEnter = () => {
    if (isMotionReduced()) return;
    track.style.willChange = "transform";
    gsap.to(track, {
      yPercent: -50,
      duration: 0.34,
      ease: MOTION_EASE.reveal,
      overwrite: "auto",
    });
  };

  const onLeave = () => {
    gsap.to(track, {
      yPercent: 0,
      duration: 0.28,
      ease: MOTION_EASE.tactile,
      overwrite: "auto",
      onComplete: () => {
        track.style.willChange = "";
      },
    });
  };

  el.addEventListener("pointerenter", onEnter);
  el.addEventListener("pointerleave", onLeave);
  el.addEventListener("focus", onEnter);
  el.addEventListener("blur", onLeave);

  return () => {
    el.removeEventListener("pointerenter", onEnter);
    el.removeEventListener("pointerleave", onLeave);
    el.removeEventListener("focus", onEnter);
    el.removeEventListener("blur", onLeave);
    gsap.set(track, { yPercent: 0 });
    track.style.willChange = "";
  };
}

/**
 * اسکرول روان به بالا یا المان هدف با ScrollToPlugin
 */
export function scrollToTop(reduced = isMotionReduced()) {
  if (reduced) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  gsap.to(window, {
    scrollTo: { y: 0, autoKill: true },
    duration: 0.85,
    ease: MOTION_EASE.door,
    overwrite: "auto",
  });
}
