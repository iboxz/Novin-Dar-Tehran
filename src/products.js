import { initGalleries } from "./gallery.js";
import { MODEL_FACTORIES, createProductStage } from "./models.js";

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const toFa = (n) => String(n).replace(/\d/g, (d) => FA_DIGITS[Number(d)]);

function initCatalogFilter() {
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const rows = [...document.querySelectorAll(".product-row[data-category]")];
  const countEl = document.querySelector("[data-catalog-count]");
  if (!filterButtons.length || !rows.length) return;

  const applyFilter = (category) => {
    let visible = 0;
    rows.forEach((row) => {
      const categories = (row.dataset.category || "").split(/\s+/);
      const match = category === "all" || categories.includes(category);
      row.hidden = !match;
      if (match) visible += 1;
    });

    filterButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.filter === category));
    });

    if (countEl) {
      countEl.textContent = `نمایش ${toFa(visible)} محصول از ${toFa(rows.length)}`;
    }
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter || "all"));
  });

  applyFilter("all");
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
initProductDetailStage();
