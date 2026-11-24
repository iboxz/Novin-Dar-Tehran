import { initGalleries } from "./gallery.js";
import { MODEL_FACTORIES, createProductStage } from "./models.js";

export const PRODUCTS_CATALOG = [
  {
    key: "jack",
    title: "جک‌های پارکینگی",
    summary: "مناسب درب‌های لولایی تک‌لنگه و دولنگهٔ حیاط و پارکینگ",
    href: "jack.html",
  },
  {
    key: "glass",
    title: "درب‌های شیشه‌ای اتوماتیک",
    summary: "اسلایدینگ و تلسکوپی برای ورودی ساختمان و فروشگاه",
    href: "glass.html",
  },
  {
    key: "shutter",
    title: "درب‌های کرکره‌ای",
    summary: "تیغه‌های امنیتی و موتور ساید یا توبولار برای مغازه و پارکینگ",
    href: "shutter.html",
  },
  {
    key: "barrier",
    title: "راهبندهای اتوماتیک",
    summary: "کنترل تردد خودرو در ورودی مجتمع‌ها و پارکینگ‌های پرتردد",
    href: "barrier.html",
  },
  {
    key: "balcony",
    title: "شیشهٔ بالکنی",
    summary: "پنل‌های تاشو و ریلی برای استفادهٔ چهارفصل از تراس و بالکن",
    href: "balcony.html",
  },
  {
    key: "folding",
    title: "درب‌های فولدینگ",
    summary: "بازشوی جمع‌شونده برای پارکینگ‌های کم‌عمق و دهانه‌های محدود",
    href: "folding.html",
  },
  {
    key: "sectional",
    title: "درب‌های سکشنال",
    summary: "پنل‌های عایق زیرسقفی بدون اشغال فضای جلوی ورودی",
    href: "sectional.html",
  },
];

const PRODUCTS_BY_KEY = new Map(PRODUCTS_CATALOG.map((item) => [item.key, item]));

function initCatalogFilter() {
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll("[data-category]")];
  const toolbar = document.querySelector(".catalog-toolbar");
  if (!filterButtons.length || !cards.length) return;

  let liveRegion = toolbar?.querySelector("[data-filter-live]");
  if (toolbar && !liveRegion) {
    liveRegion = document.createElement("p");
    liveRegion.className = "vh";
    liveRegion.setAttribute("role", "status");
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.dataset.filterLive = "";
    toolbar.append(liveRegion);
  }

  const applyFilter = (category, { animate = false } = {}) => {
    const isReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeBtn = null;

    const updateCards = () => {
      cards.forEach((card) => {
        const categories = (card.dataset.category || "").split(/\s+/);
        const match = category === "all" || categories.includes(category);
        card.hidden = !match;
      });
    };

    filterButtons.forEach((btn) => {
      const isMatch = btn.dataset.filter === category;
      btn.setAttribute("aria-pressed", String(isMatch));
      if (isMatch) activeBtn = btn;
    });

    if (animate && typeof document.startViewTransition === "function" && !isReduced) {
      document.startViewTransition(updateCards);
    } else {
      updateCards();
    }

    if (animate && activeBtn) {
      if (liveRegion) {
        liveRegion.textContent = `فیلتر فعال: ${activeBtn.textContent.trim()}`;
      }
      if (matchMedia("(max-width: 63.99em)").matches) {
        activeBtn.scrollIntoView({
          behavior: isReduced ? "auto" : "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () =>
      applyFilter(btn.dataset.filter || "all", { animate: true })
    );
  });

  applyFilter("all", { animate: false });
}

function initCatalogMobileA11yAndReveal() {
  const mediaLinks = [...document.querySelectorAll(".product-card-media")];
  const cards = [...document.querySelectorAll(".catalog-grid .product-card")];
  const detailBands = [
    ...document.querySelectorAll(
      "main[data-service] .detail-band, main[data-service] .final-cta-band, main[data-service] .related-band"
    ),
  ];
  const revealTargets = [...cards, ...detailBands];
  if (!mediaLinks.length && !revealTargets.length) return;

  const mobileMq = matchMedia("(max-width: 63.99em)");
  const syncMediaFocus = () => {
    mediaLinks.forEach((link) => {
      if (mobileMq.matches) {
        link.setAttribute("tabindex", "-1");
        link.setAttribute("aria-hidden", "true");
      } else {
        link.removeAttribute("tabindex");
        link.removeAttribute("aria-hidden");
      }
    });
  };
  syncMediaFocus();
  mobileMq.addEventListener("change", syncMediaFocus);

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (
    !mobileMq.matches ||
    reduced ||
    !revealTargets.length ||
    typeof IntersectionObserver !== "function"
  ) {
    return;
  }

  const seen = new WeakSet();
  const animateReveal = (el) => {
    if (seen.has(el)) return;
    seen.add(el);
    if (typeof el.animate === "function") {
      el.animate(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 400,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        }
      );
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        observer.unobserve(el);
        animateReveal(el);
      });
    },
    { threshold: 0.08 }
  );

  const vh = window.innerHeight || 800;
  revealTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh * 1.05) {
      animateReveal(el);
    } else {
      observer.observe(el);
    }
  });
}

function initRelatedProducts() {
  const container = document.querySelector("[data-related-products]");
  if (!container) return;

  const currentKey = container.dataset.relatedProducts || "";
  const explicitList = (container.dataset.relatedList || "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  const items = (
    explicitList.length
      ? explicitList.map((key) => PRODUCTS_BY_KEY.get(key)).filter(Boolean)
      : PRODUCTS_CATALOG.filter((item) => item.key !== currentKey).slice(0, 3)
  ).slice(0, 3);

  if (!items.length) return;

  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const link = document.createElement("a");
    link.className = "related-card";
    link.href = `./${item.href}`;

    const title = document.createElement("span");
    title.className = "related-card-title";
    title.textContent = item.title;

    const note = document.createElement("span");
    note.className = "related-card-note";
    note.textContent = item.summary;

    link.append(title, note);
    fragment.append(link);
  });

  container.replaceChildren(fragment);
}

function initProductDetailStage() {
  const stage = document.querySelector(".product-stage[data-gallery]");
  if (!stage) return;

  initGalleries();

  const item = stage.closest("[data-service]");
  const key = item?.dataset.service;
  const host = stage.querySelector(".render-host");
  const toggleBtn = stage.querySelector(".model-toggle");
  if (!key || !host || !MODEL_FACTORIES[key]) return;

  const models = { [key]: MODEL_FACTORIES[key]() };
  const modelStage = createProductStage(host, models);
  if (!modelStage) return;

  modelStage.select(key);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let progress = reduced ? 0.35 : 0.25;
  let target = progress;
  let rafId = 0;

  const syncButton = () => {
    if (!toggleBtn) return;
    toggleBtn.hidden = false;
    toggleBtn.setAttribute("aria-pressed", String(target > 0.5));
  };

  const animate = () => {
    const diff = target - progress;
    if (Math.abs(diff) < 0.005 || reduced) {
      progress = target;
      modelStage.update(progress);
      rafId = 0;
      return;
    }
    progress += diff * 0.14;
    modelStage.update(progress);
    rafId = requestAnimationFrame(animate);
  };

  modelStage.update(progress);
  syncButton();

  toggleBtn?.addEventListener("click", () => {
    target = target > 0.5 ? 0 : 1;
    syncButton();
    if (!rafId) rafId = requestAnimationFrame(animate);
  });

  host.addEventListener("gallery:activate", () => {
    modelStage.refresh();
    modelStage.update(progress);
  });
}

initCatalogFilter();
initCatalogMobileA11yAndReveal();
initRelatedProducts();
initProductDetailStage();
