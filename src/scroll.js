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

  const NAV_OFFSET = 104;

  // اسکرول نرم برنامه‌ای.
  // ScrollSmoother موقع smoother.scrollTo اسکرول‌بار را فوراً می‌پراند و محتوا را با تأخیر دنبال می‌کند.
  // برای همین اینجا خودمان اسکرول واقعی را با tween جی‌سپ جلو می‌بریم و در این مدت smoothing
  // اسموثر را تقریباً صفر می‌کنیم تا اسکرول‌بار و محتوا کاملاً هم‌زمان حرکت کنند.
  const SMOOTH_VALUE = 1.05;
  const clampY = (v) => Math.min(ScrollTrigger.maxScroll(window), Math.max(0, v));
  const restoreSmooth = () => smoother?.smooth(SMOOTH_VALUE);

  const scrollToY = (getY, onDone, isRetry = false) => {
    const y = clampY(getY());
    const dist = Math.abs(y - window.scrollY);
    if (!isRetry) smoother?.smooth(0.05);

    gsap.to(window, {
      scrollTo: { y, autoKill: true },
      duration: isReduced ? 0 : isRetry ? 0.3 : Math.min(1.8, Math.max(0.7, dist / 2400)),
      ease: "power2.inOut",
      overwrite: true,
      onComplete() {
        // اگر در مسیر چیدمان عوض شده بود (لود تصویر، ساخت مدل سه‌بعدی) یک‌بار تصحیح کن
        if (!isRetry && Math.abs(clampY(getY()) - window.scrollY) > 6) {
          scrollToY(getY, onDone, true);
          return;
        }
        restoreSmooth();
        onDone?.();
      },
      onInterrupt: restoreSmooth,
    });
  };

  // موقعیت واقعی اسکرول برای رسیدن به یک عنصر.
  // سکشن #services پین شده است؛ پس مختصات داخل آن بسته به فاز پین (قبل/حین/بعد) فرق می‌کند.
  // محصولات را نسبت به نقطهٔ «آزاد شدن پین» حساب می‌کنیم که همیشه ثابت است.
  const getTargetY = (el) => {
    const services = qs("#services");
    const unpinY = window.__servicesUnpinY?.();
    if (services && unpinY != null && services.contains(el)) {
      const delta =
        el.getBoundingClientRect().top - services.getBoundingClientRect().top;
      return unpinY + delta - NAV_OFFSET;
    }
    if (smoother) return smoother.offset(el, `top ${NAV_OFFSET}px`);
    return el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  };

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
        scrollToY(() => window.__servicesRevealY() + 1);
        return;
      }

      const target = document.getElementById(link.hash.slice(1));
      if (!target) return;

      event.preventDefault();
      // فوکوس را عمداً بعد از پایان اسکرول می‌دهیم: ScrollSmoother روی رویداد focusin
      // فوراً به عنصر فوکوس‌شده می‌پرد (حتی با preventScroll) و همین باعث پرش ناگهانی می‌شد.
      const onDone = link.closest(".catalog-nav")
        ? () => {
            target.tabIndex = -1;
            target.focus({ preventScroll: true });
          }
        : undefined;
      scrollToY(() => getTargetY(target), onDone);
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
          firstItemPinVh: 0.5, // طول پین سکشن برای پخش انیمیشن جک (۰.۵ = نیم صفحه)
          onFirstItemProgress: (p) => {
            gsap.to(states[0], {
              progress: p,
              duration: 0.35,
              ease: "power1.out",
              overwrite: "auto",
              onUpdate: () => updateModelState(0),
            });
          },
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

          // آیتم اول (جک) در بازهٔ پین سکشن خدمات انیمیت می‌شود، نه با اسکرول عادی
          if (!isReduced && idx !== 0) {
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