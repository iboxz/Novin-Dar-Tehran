// ▼ مسیر تصاویر خودتان را اینجا بنویسید (هر تعداد که خواستید)
const IMAGES = [
  "assets/projects-images/automatic-barriers.jpg",
  "assets/projects-images/automatic-glass-doors.png",
  "assets/projects-images/folding-doors.jpg",
  "assets/projects-images/glass-balustrade-2.jpg",
  "assets/projects-images/glass-balustrade.jpg",
  "assets/projects-images/parking-gate-openers.png",
  "assets/projects-images/roller-shutters-2.jpg",
  "assets/projects-images/roller-shutters.jpg",
  "assets/projects-images/sectional-doors.jpg",
  "assets/projects-images/transparent-roller-shutters.jpg",
];

const splitWords = (node) => {
  [...node.childNodes].forEach((n) => {
    if (n.nodeType === 3) {
      const f = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach((t) => {
        if (!t) return;
        if (/^\s+$/.test(t)) f.append(t);
        else {
          const s = document.createElement("span");
          s.className = "w";
          s.textContent = t;
          f.append(s);
        }
      });
      n.replaceWith(f);
    } else if (n.nodeType === 1) {
      splitWords(n);
    }
  });
};

export function initHeroArc() {
  const el = document.getElementById("hero-arc");
  if (!el) return;

  const ring = el.querySelector(".hero-arc__ring");
  const list = IMAGES.length ? IMAGES : Array(8).fill(null); // بدون تصویر: کارت‌های جایگزین
  // کارت‌ها طوری تکرار می‌شوند که دایره کامل پر شود و چرخش بی‌نهایت و بدون پرش باشد
  const count = list.length * Math.max(1, Math.ceil(30 / list.length));
  const step = 360 / count;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const src = list[i % list.length];
    const card = document.createElement("div");
    card.className = "hero-arc__card";
    card.style.setProperty("--a", (i * step).toFixed(3) + "deg");
    if (src) {
      const img = new Image();
      img.alt = "";
      img.decoding = "async";
      img.loading = "lazy";
      img.draggable = false;
      img.onerror = () => {
        img.remove();
        card.classList.add("is-ph");
      };
      img.src = src;
      card.append(img);
    } else {
      card.classList.add("is-ph");
    }
    frag.append(card);
  }
  ring.append(frag);

  const hero = document.getElementById("home");
  if (hero) hero.querySelectorAll("[data-split]").forEach(splitWords);
}

export function initHeroScroll(gsap, ST, reduced, opts = {}) {
  const hero = document.getElementById("home");
  const services = document.getElementById("services");

  const resetServices = () => {
    if (!services) return;
    services.classList.remove("is-under-hero");
    services.style.marginBlockStart = "";
    window.__servicesRevealY = null;
  };

  if (!hero) {
    resetServices();
    return () => {};
  }
  if (reduced) {
    hero.classList.remove("is-pinned");
    resetServices();
    return () => {};
  }

  hero.classList.add("is-pinned");
  const q = (s) => hero.querySelector(s);
  const qa = (s) => [...hero.querySelectorAll(s)];
  const intro = q(".hero-intro");
  const story = q(".hero-story");
  const stmt = q(".hero-statement");
  const reel = q(".hero-reel");
  const list = q(".hero-reel__list");
  const actions = q(".hero-actions");
  const words = qa(".hero-statement .w");
  const items = qa(".hero-reel__list li");

  gsap.set(words, { opacity: 0.12, filter: "blur(12px)" });
  gsap.set(actions, { autoAlpha: 0, y: 14 });
  gsap.set(stmt, { autoAlpha: 1 });
  gsap.set(reel, { autoAlpha: 0 });

  const st = { p: 0 };
  const render = () => {
    const lh = list.clientHeight / 3;
    items.forEach((li, i) => {
      const d = i - st.p;
      const a = Math.abs(d);
      const g = 24 + Math.min(a, 1) * 150;
      li.style.transform = `translateY(${(d * lh).toFixed(1)}px)`;
      li.style.opacity = Math.max(0, 1 - a * 0.55).toFixed(3);
      li.style.color = `rgb(${g},${g},${g})`;
      li.style.filter = a < 0.05 ? "none" : `blur(${(Math.min(a, 2) * 1.5).toFixed(1)}px)`;
    });
  };
  render();

  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: () => "+=" + innerHeight * 3.3,
      pin: q(".hero-stage"),
      scrub: 0.25,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onRefresh: render,
    },
  });

  // 1) intro (title + arc) dissolves
  tl.to(intro, { opacity: 0, filter: "blur(14px)", y: -40, scale: 0.97, duration: 0.8, ease: "power1.in" }, 0.2);
  // 2) statement is revealed word by word
  tl.to(words, { opacity: 1, filter: "blur(0px)", duration: 0.3, stagger: 0.045 }, 0.9);
  tl.to(actions, { autoAlpha: 1, y: 0, duration: 0.3 }, 1.8);
  tl.to(stmt, { opacity: 0, filter: "blur(16px)", y: -30, duration: 0.5, ease: "power1.in" }, 2.6);
  // 3) reel: "خدمات ما:"
  tl.fromTo(reel, { autoAlpha: 0, filter: "blur(12px)" }, { autoAlpha: 1, filter: "blur(0px)", duration: 0.45 }, 3.0);
  const t0 = 3.6;
  const gap = 0.42;
  for (let i = 1; i < items.length; i++) {
    tl.to(st, { p: i, duration: 0.3, ease: "power2.inOut", onUpdate: render }, t0 + (i - 1) * gap);
  }
  // 4) the reel fades out while the services section is already pinned at the top underneath it
  const FADE = 1.0;
  const tLast = t0 + (items.length - 2) * gap + 0.3;
  // first the reel text disappears completely (stage background still covers the services section)…
  tl.to(story, { opacity: 0, filter: "blur(14px)", duration: FADE * 0.5, ease: "power1.in" }, tLast + 0.1);
  // …and only then the empty stage lifts away, revealing the services section with no text overlapping
  tl.to(q(".hero-stage"), { autoAlpha: 0, duration: FADE * 0.5, ease: "power1.out" }, tLast + 0.1 + FADE * 0.5);

  let onRefreshInit = null;
  if (services) {
    services.classList.add("is-under-hero");
    const tailPx = () => innerHeight * 3.3 * (FADE / tl.duration());
    onRefreshInit = () => {
      const stageH = q(".hero-stage").offsetHeight || innerHeight;
      services.style.marginBlockStart = -(stageH + tailPx()) + "px";
    };
    ST.addEventListener("refreshInit", onRefreshInit);
    onRefreshInit();

    const servicesPin = ST.create({
      trigger: services,
      start: "top top",
      end: () => "+=" + tailPx(),
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
    });
    window.__servicesRevealY = () => servicesPin.end;

    // Pin "محصولات و راهکارها" together with all product names (.catalog-aside)
    // seamlessly starting the exact instant servicesPin unpins.
    const aside = services.querySelector(".catalog-aside");
    const pages = services.querySelector(".catalog-pages");
    const isDesktop = opts.desktop ?? innerWidth >= 1024;
    if (isDesktop && aside && pages) {
      ST.create({
        trigger: aside,
        pinnedContainer: services,
        start: () => servicesPin.end,
        end: () => servicesPin.end + Math.max(0, pages.offsetHeight - aside.offsetHeight),
        pin: aside,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    }
  }

  return () => {
    if (onRefreshInit) ST.removeEventListener("refreshInit", onRefreshInit);
    resetServices();
  };
}