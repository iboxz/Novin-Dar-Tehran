import {
  gsap,
  ScrollTrigger,
  MOTION_EASE,
  MOTION_DUR,
  isMotionReduced,
} from "./motion.js";

const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const toFa = (n) => String(n).replace(/\d/g, (d) => FA_DIGITS[Number(d)]);
const normalizeSearch = (v) =>
  String(v || "")
    .trim()
    .toLowerCase()
    .replaceAll("ي", "ی")
    .replaceAll("ك", "ک");

function initArticlesReveal() {
  const targets = [...document.querySelectorAll(".article-card, .article-topic-link")];
  if (!targets.length) return;

  if (isMotionReduced()) {
    gsap.set(targets, { clearProps: "opacity,transform" });
    return;
  }

  ScrollTrigger.batch(targets, {
    start: "top 92%",
    once: true,
    onEnter: (batch) => {
      gsap.from(batch, {
        y: 16,
        opacity: 0,
        duration: MOTION_DUR.base,
        stagger: 0.06,
        ease: MOTION_EASE.reveal,
        clearProps: "transform,opacity",
      });
    },
  });
}

function initArticlesCatalog() {
  const root = document.querySelector("[data-articles-page]");
  if (!root) return;

  const filterBtns = [...root.querySelectorAll("[data-filter]")];
  const cards = [...root.querySelectorAll(".article-card[data-category]")];
  const searchInput = root.querySelector("#article-search-input");
  const emptyBox = root.querySelector("#articles-empty");
  const resetBtn = root.querySelector("[data-articles-reset]");
  const liveRegion = root.querySelector("[data-filter-live]");
  if (!cards.length) return;

  const validCats = new Set(filterBtns.map((b) => b.dataset.filter || "all"));
  const params = new URLSearchParams(window.location.search);
  const initialParam = params.get("category") || "all";
  let activeCategory = validCats.has(initialParam) ? initialParam : "all";
  let searchQuery = "";
  let searchTimer = 0;

  const syncUrlCategory = () => {
    const nextUrl = new URL(window.location.href);
    if (activeCategory === "all") nextUrl.searchParams.delete("category");
    else nextUrl.searchParams.set("category", activeCategory);
    window.history.replaceState(null, "", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  };

  const syncDom = () => {
    const query = normalizeSearch(searchQuery);
    let shown = 0;
    cards.forEach((card) => {
      const cats = (card.dataset.category || "").split(/\s+/);
      const catOk = activeCategory === "all" || cats.includes(activeCategory);
      const text = query
        ? normalizeSearch(
            `${card.querySelector(".article-card-title")?.textContent || ""} ${
              card.querySelector(".article-card-excerpt")?.textContent || ""
            }`
          )
        : "";
      const match = catOk && (!query || text.includes(query));
      card.hidden = !match;
      if (match) shown += 1;
    });

    filterBtns.forEach((btn) => {
      btn.setAttribute("aria-pressed", String((btn.dataset.filter || "all") === activeCategory));
    });

    if (emptyBox) emptyBox.hidden = shown > 0;
    if (liveRegion) {
      liveRegion.textContent = shown
        ? `نمایش ${toFa(shown)} مقاله`
        : "مقاله‌ای مطابق جستجو یا دسته‌بندی انتخاب‌شده یافت نشد.";
    }
    ScrollTrigger.refresh();
  };

  const applyUpdate = ({ animate = false, syncUrl = false } = {}) => {
    if (syncUrl) syncUrlCategory();
    if (animate && typeof document.startViewTransition === "function" && !isMotionReduced()) {
      document.startViewTransition(syncDom);
    } else {
      syncDom();
    }
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.filter || "all";
      applyUpdate({ animate: true, syncUrl: true });
      if (matchMedia("(max-width: 63.99em)").matches) {
        btn.scrollIntoView({ behavior: isMotionReduced() ? "auto" : "smooth", block: "nearest", inline: "center" });
      }
    });
  });

  searchInput?.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      searchQuery = searchInput.value;
      applyUpdate({ animate: false });
    }, 150);
  }, { passive: true });

  resetBtn?.addEventListener("click", () => {
    window.clearTimeout(searchTimer);
    activeCategory = "all";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    applyUpdate({ animate: true, syncUrl: true });
    filterBtns[0]?.focus();
  });

  applyUpdate({ animate: false });
}

function initArticleDetail() {
  const root = document.querySelector("[data-article-detail]");
  if (!root) return;

  const tocLinks = [...root.querySelectorAll(".article-toc-list a[href^='#']")];
  const sections = tocLinks
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (sections.length && typeof IntersectionObserver === "function") {
    const setActive = (activeLink) => {
      tocLinks.forEach((link) => {
        if (link === activeLink) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const match = sections.find((s) => s.section === visible[0].target);
          if (match) setActive(match.link);
        }
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
    );

    sections.forEach(({ section }) => observer.observe(section));
  }

  const copyBtn = root.querySelector("[data-copy-article-link]");
  const copyStatus = root.querySelector("[data-copy-status]");
  let statusTimer = 0;

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      if (copyStatus) copyStatus.textContent = "پیوند مقاله کپی شد.";
    } catch {
      if (copyStatus) copyStatus.textContent = "امکان کپی خودکار نبود؛ نشانی صفحه را از مرورگر کپی کنید.";
    }
    window.clearTimeout(statusTimer);
    statusTimer = window.setTimeout(() => {
      if (copyStatus) copyStatus.textContent = "";
    }, 3500);
  });
}

export function initArticles() {
  if (document.documentElement.dataset.articlesInit === "true") return;
  document.documentElement.dataset.articlesInit = "true";

  initArticlesCatalog();
  initArticleDetail();
  initArticlesReveal();

  document.querySelectorAll(".article-card-media img").forEach((img) => {
    if (!img.complete) {
      img.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    }
  });
}

if (
  typeof window !== "undefined" &&
  document.querySelector("[data-articles-page], [data-article-detail]")
) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initArticles(), { once: true });
  } else {
    initArticles();
  }
}
