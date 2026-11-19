(()=>{
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
      img.alt = ""; img.decoding = "async"; img.loading = "lazy"; img.draggable = false;
      img.onerror = () => { img.remove(); card.classList.add("is-ph"); };
      img.src = src;
      card.append(img);
    } else card.classList.add("is-ph");
    frag.append(card);
  }
  ring.append(frag);

  // ---------- pinned scroll story ----------
  const hero = document.getElementById("home");
  const splitWords = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const f = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((t) => {
          if (!t) return;
          if (/^\s+$/.test(t)) f.append(t);
          else { const s = document.createElement("span"); s.className = "w"; s.textContent = t; f.append(s); }
        });
        n.replaceWith(f);
      } else if (n.nodeType === 1) splitWords(n);
    });
  };
  if (hero) hero.querySelectorAll("[data-split]").forEach(splitWords);

  window.__heroScroll = (gsap, ST, reduced) => {
    if (!hero) return;
    if (reduced) { hero.classList.remove("is-pinned"); return; }
    hero.classList.add("is-pinned");
    const q = (s) => hero.querySelector(s), qa = (s) => [...hero.querySelectorAll(s)];
    const intro = q(".hero-intro"), story = q(".hero-story"), stmt = q(".hero-statement"),
          reel = q(".hero-reel"), list = q(".hero-reel__list"), actions = q(".hero-actions");
    const words = qa(".hero-statement .w"), items = qa(".hero-reel__list li");

    gsap.set(words, { opacity: 0.12, filter: "blur(12px)" });
    gsap.set(actions, { autoAlpha: 0, y: 14 });
    gsap.set(stmt, { autoAlpha: 1 });
    gsap.set(reel, { autoAlpha: 0 });

    const st = { p: 0 };
    const render = () => {
      const lh = list.clientHeight / 3;
      items.forEach((li, i) => {
        const d = i - st.p, a = Math.abs(d);
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
      scrollTrigger: { trigger: hero, start: "top top", end: "+=700%", pin: q(".hero-stage"), scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true, onRefresh: render }
    });
    // 1) intro (title + arc) dissolves to white
    tl.to(intro, { opacity: 0, filter: "blur(16px)", y: -40, scale: 0.97, duration: 1.6, ease: "power1.in" }, 0.6);
    // 2) statement is revealed word by word
    tl.to(words, { opacity: 1, filter: "blur(0px)", duration: 0.5, stagger: 0.06 }, 2.2);
    tl.to(actions, { autoAlpha: 1, y: 0, duration: 0.5 }, 4.7);
    tl.to(stmt, { opacity: 0, filter: "blur(18px)", y: -30, duration: 1.1, ease: "power1.in" }, 5.8);
    // 3) services reel
    tl.fromTo(reel, { autoAlpha: 0, filter: "blur(12px)" }, { autoAlpha: 1, filter: "blur(0px)", duration: 0.8 }, 6.8);
    for (let i = 1; i < items.length; i++)
      tl.to(st, { p: i, duration: 0.45, ease: "power2.inOut", onUpdate: render }, 7.8 + (i - 1) * 0.7);
    // 4) final fade, then the page scrolls naturally into services
    tl.to(story, { opacity: 0, filter: "blur(18px)", duration: 1.1, ease: "power1.in" }, 12.3);
    tl.to({}, { duration: 0.2 }, 13.4);
  };
})();
