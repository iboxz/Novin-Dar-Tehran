import { initGalleries } from "./gallery.js";
import { MODEL_FACTORIES, createProductStage } from "./models.js";

export const PRODUCTS_CATALOG = [
  {
    key: "jack",
    num: "۰۱",
    title: "جک‌های پارکینگی",
    summary: "مناسب درب‌های لولایی تک‌لنگه و دولنگهٔ حیاط و پارکینگ",
    href: "jack.html",
  },
  {
    key: "glass",
    num: "۰۲",
    title: "درب‌های شیشه‌ای اتوماتیک",
    summary: "اسلایدینگ و تلسکوپی برای ورودی ساختمان و فروشگاه",
    href: "glass.html",
  },
  {
    key: "shutter",
    num: "۰۳",
    title: "درب‌های کرکره‌ای",
    summary: "تیغه‌های امنیتی و موتور ساید یا توبولار برای مغازه و پارکینگ",
    href: "shutter.html",
  },
  {
    key: "barrier",
    num: "۰۴",
    title: "راهبندهای اتوماتیک",
    summary: "کنترل تردد خودرو در ورودی مجتمع‌ها و پارکینگ‌های پرتردد",
    href: "barrier.html",
  },
  {
    key: "balcony",
    num: "۰۵",
    title: "شیشهٔ بالکنی",
    summary: "پنل‌های تاشو و ریلی برای استفادهٔ چهارفصل از تراس و بالکن",
    href: "balcony.html",
  },
  {
    key: "folding",
    num: "۰۶",
    title: "درب‌های فولدینگ",
    summary: "بازشوی جمع‌شونده برای پارکینگ‌های کم‌عمق و دهانه‌های محدود",
    href: "folding.html",
  },
  {
    key: "sectional",
    num: "۰۷",
    title: "درب‌های سکشنال",
    summary: "پنل‌های عایق زیرسقفی بدون اشغال فضای جلوی ورودی",
    href: "sectional.html",
  },
];

const PRODUCTS_BY_KEY = new Map(PRODUCTS_CATALOG.map((item) => [item.key, item]));

function initCatalogFilter() {
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const cards = [...document.querySelectorAll("[data-category]")];
  if (!filterButtons.length || !cards.length) return;

  const applyFilter = (category) => {
    cards.forEach((card) => {
      const categories = (card.dataset.category || "").split(/\s+/);
      const match = category === "all" || categories.includes(category);
      card.hidden = !match;
    });

    filterButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === category));
    });
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter || "all"));
  });

  applyFilter("all");
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

    const num = document.createElement("span");
    num.className = "related-card-num";
    num.textContent = item.num;

    const title = document.createElement("span");
    title.className = "related-card-title";
    title.textContent = item.title;

    const note = document.createElement("span");
    note.className = "related-card-note";
    note.textContent = item.summary;

    link.append(num, title, note);
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
initRelatedProducts();
initProductDetailStage();
