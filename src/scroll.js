import { gsap, ScrollTrigger, ScrollToPlugin, ScrollSmoother } from "./vendor/libs.js";
import { MODEL_FACTORIES, createProductStage } from "./models.js";
import { initHeroScroll } from "./hero-arc.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);
ScrollTrigger.config({ ignoreMobileResize: true });

export function initScroll() {
  const qs = (selector) => document.querySelector(selector);
  const qsa = (selector) => [...document.querySelectorAll(selector)];

  const serviceItems = qsa(".svc-item");
  const catalogLinks = qsa(".catalog-nav a");
  const motionToggle = qs(".motion-toggle");

  const states = serviceItems.map(() => ({
    progress: 0,
    shown: 0,
    manual: null,
    stage: null,
    attempted: false,
  }));

  let manualReduced = false;
  let isReduced = false;
  let smoother = null;

  const updateModelState = (index) => {
    const state = states[index];
    state.shown = state.manual ?? (isReduced ? 0.4 : state.progress);
    state.stage?.update(state.shown);
    const toggleBtn = serviceItems[index]?.querySelector(".model-toggle");
    toggleBtn?.setAttribute("aria-pressed", String(state.shown > 0.5));
  };

  const ensureModelStage = (index) => {
    const state = states[index];
    if (state.attempted) return;
    state.attempted = true;

    const item = serviceItems[index];
    const key = item.dataset.service;
    const models = { [key]: MODEL_FACTORIES[key]() };
    const host = item.querySelector(".render-host");
    state.stage = createProductStage(host, models);
    state.stage?.select(key);

    host?.addEventListener("gallery:activate", () => {
      state.stage?.refresh();
      updateModelState(index);
    });

    [".product-controls", ".model-toggle"].forEach((selector) => {
      const el = item.querySelector(selector);
      if (el) el.hidden = !state.stage;
    });
    updateModelState(index);
  };

  const lazyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        ensureModelStage(serviceItems.indexOf(entry.target));
        lazyObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "500px" }
  );

  serviceItems.forEach((item, index) => {
    lazyObserver.observe(item);
    item.querySelector(".model-toggle")?.addEventListener("click", () => {
      const state = states[index];
      const nextValue = state.shown > 0.5 ? 0 : 1;
      state.manual = state.shown;
      gsap.to(state, {
        manual: nextValue,
        duration: isReduced ? 0 : 0.8,
        ease: "power2.inOut",
        overwrite: "auto",
        onUpdate: () => updateModelState(index),
      });
    });
  });

  qsa("[data-consult]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const select = qs("#service-type");
      if (!select) return;
      select.value = btn.dataset.consult;
      select.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });

  qsa('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (link.hash === "#services" && typeof window.__servicesRevealY === "function") {
        event.preventDefault();
        const y = window.__servicesRevealY() + 1;
        if (smoother) {
          smoother.scrollTo(y, true);
        } else {
          gsap.to(window, {
            duration: isReduced ? 0 : 0.75,
            ease: "power2.inOut",
            scrollTo: { y, autoKill: true },
          });
        }
        return;
      }

      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;

      event.preventDefault();
      if (smoother) {
        smoother.scrollTo(target, true, "top 104px");
      } else {
        gsap.to(window, {
          duration: isReduced ? 0 : 0.75,
          ease: "power2.inOut",
          scrollTo: { y: target, offsetY: 100, autoKill: true },
        });
      }

      if (link.closest(".catalog-nav")) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
    });
  });

  const setActiveCatalogItem = (activeIndex) => {
    catalogLinks.forEach((link, idx) =>
      link.setAttribute("aria-current", String(idx === activeIndex))
    );
  };

  const mm = gsap.matchMedia();

  const buildScrollTriggers = () => {
    mm.revert();
    states.forEach((state) => {
      gsap.killTweensOf(state);
      state.manual = null;
    });

    mm.add(
      {
        desktop: "(min-width:64em)",
        mobile: "(max-width:63.99em)",
        reduced: "(prefers-reduced-motion:reduce)",
      },
      (context) => {
        isReduced = manualReduced || context.conditions.reduced;
        document.documentElement.classList.toggle("motion-paused", isReduced);

        if (motionToggle) {
          motionToggle.hidden = false;
          motionToggle.disabled = context.conditions.reduced;
          motionToggle.setAttribute("aria-pressed", String(isReduced));
          motionToggle.setAttribute(
            "aria-label",
            isReduced ? "فعال کردن انیمیشن‌ها" : "توقف انیمیشن‌ها"
          );
        }

        if (context.conditions.desktop && !isReduced) {
          smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.05,
            smoothTouch: 0,
            effects: false,
          });
        }
        document.documentElement.dataset.smoother = smoother ? "on" : "off";

        const heroCleanup = initHeroScroll(gsap, ScrollTrigger, isReduced, {
          desktop: context.conditions.desktop,
        });

        let activeIndex = 0;
        const pinnedContainer = !isReduced ? "#services" : undefined;

        serviceItems.forEach((item, idx) => {
          const trigger = ScrollTrigger.create({
            trigger: item,
            pinnedContainer,
            start: "top 48%",
            end: "bottom 48%",
            onToggle(self) {
              if (self.isActive) {
                setActiveCatalogItem(idx);
              } else {
                states[idx].manual = null;
              }
            },
          });

          if (trigger.isActive || trigger.progress === 1) {
            activeIndex = idx;
          }

          if (!isReduced) {
            gsap.fromTo(
              states[idx],
              { progress: 0 },
              {
                progress: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: item,
                  pinnedContainer,
                  start: "top 80%",
                  end: "bottom 35%",
                  scrub: 0.65,
                },
                onUpdate: () => updateModelState(idx),
              }
            );

            gsap.fromTo(
              item.querySelector(".product-stage"),
              {
                y: context.conditions.desktop ? 65 : 24,
                rotationX: context.conditions.desktop ? -6 : 0,
                opacity: 0.5,
              },
              {
                y: 0,
                rotationX: 0,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: item,
                  pinnedContainer,
                  start: "top bottom",
                  end: "top 38%",
                  scrub: 0.7,
                },
              }
            );
          }

          updateModelState(idx);
        });

        setActiveCatalogItem(activeIndex);

        if (!isReduced) {
          qsa(
            "#about .section-head, #contact .section-head, #credentials .section-head, .card, .stat"
          ).forEach((el) => {
            gsap.from(el, {
              y: 15,
              opacity: 0,
              duration: 0.4,
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
              clearProps: "transform,opacity",
            });
          });
        }

        return () => {
          heroCleanup?.();
          smoother?.kill();
          smoother = null;
        };
      }
    );

    ScrollTrigger.refresh();
  };

  motionToggle?.addEventListener("click", () => {
    manualReduced = !manualReduced;
    buildScrollTriggers();
  });

  document.documentElement.classList.add("gsap-ready");
  buildScrollTriggers();

  document.fonts.ready.then(() => ScrollTrigger.refresh());
  const quoteForm = qs("#quote-form");
  if (quoteForm) {
    new ResizeObserver(() => ScrollTrigger.refresh()).observe(quoteForm);
  }
}
