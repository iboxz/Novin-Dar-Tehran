// ▼ مسیر تصاویر خودتان را اینجا بنویسید (هر تعداد که خواستید)
const IMAGES = [
  "assets/projects-images/automatic-barriers.jpg",
  "assets/projects-images/automatic-glass-doors.png",
  "assets/projects-images/folding-doors.jpg",
  "assets/projects-images/glass-balustrade-2.jpg",
  "assets/projects-images/glass-balustrade.jpg",
  "assets/projects-images/parking-gate-openers.png",
  "assets/projects-images/roller-shutters-2.jpg",
  "assets/projects-images/roller-shutters-3.jpg",
  "assets/projects-images/roller-shutters.jpg",
  "assets/projects-images/glass-facade.jpg",
  "assets/projects-images/sectional-doors.jpg",
  "assets/projects-images/glass-balust-3.jpg",
  "assets/projects-images/sectional-doors-2.jpg",
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


const ENTRY_UNITS = 3.6;  // مدت (در تایم‌لاین) ورود کارت‌ها؛ باید با tween مربوطه یکی باشد
const DRIVE_FACTOR = 0.6; // سرعت حرکت وابسته به اسکرول بعد از ورود، نسبت به سرعت ورود (۰ = خاموش)

const clampN = (v, a, b) => Math.min(b, Math.max(a, v));

/**
 * قوس تصاویر سکشن «خدمات ما».
 * - به‌صورت پیش‌فرض هیچ کارتی دیده نمی‌شود.
 * - با شروع اسکرول در این سکشن (setProgress 0→1) کارت‌ها یکی‌یکی از لبهٔ چپ صفحه وارد می‌شوند
 *   و روی قوس به سمت راست ادامه می‌دهند؛ بعد از ورود هم به آرامی (و با اسکرول سریع‌تر) می‌چرخند.
 */
function createReelArc(el) {
  const ring = el.querySelector(".hero-arc__ring");
  if (!ring) return { stop() {}, setProgress() {} };

  const BASE_PX_PER_SEC = 30;   // سرعت پایه وقتی اسکرول نمی‌شود (px/s روی قوس)
  const SCROLL_RATIO = 0.015;   // هر px اسکرول چند px حرکت اضافه به قوس بدهد
  const MAX_BOOST_PX = 50;      // سقف سرعت اضافهٔ ناشی از اسکرول (px/s)
  const SMOOTH = 6;             // نرمی اعمال حرکت اسکرول (بیشتر = سریع‌تر دنبال اسکرول)
  const RAD = 180 / Math.PI;

  let cards = [];
  let period = 360;
  let step = 20, R = 1500, spawn = -70, rightLim = 12, entryDeg = 90;
  let drive = 0;     // مدت اسکرول‌شده بعد از پایان ورود (واحد تایم‌لاین)
  let prog = 0;      // پیشرفت ورود (0..1) که از اسکرول می‌آید
  let tTime = 0;     // حرکت زمانی بعد از ورود (درجه)
  let queue = 0;     // مسافت اسکرول‌شده‌ای که هنوز به حرکت قوس تبدیل نشده
  let raf = 0;
  let last = performance.now();
  let lastY = window.scrollY;

  const layout = () => {
    const W = el.clientWidth || innerWidth;
    const mobile = W < 768;
    const cw = mobile ? clampN(W * 0.38, 118, 180) : clampN(W * 0.21, 176, 400);
    R = mobile ? W * 1.0 : W * 0.98;
    const cx = mobile ? W * 0.5 : W * 0.85;
    el.style.setProperty("--cw", cw.toFixed(1) + "px");
    el.style.setProperty("--R", R.toFixed(1) + "px");
    el.style.setProperty("--cx", cx.toFixed(1) + "px");
    el.style.setProperty("--crest", mobile ? ".62" : ".3");

    const half = (cw / 2 / R) * RAD * 1.7; // نیم‌عرض کارت به درجه (با حاشیه)
    spawn = -(Math.asin(Math.min(0.98, cx / R)) * RAD + half);
    rightLim = Math.asin(Math.min(0.98, (W - cx) / R)) * RAD + half;

    // فاصلهٔ زاویه‌ای کارت‌ها فقط از هندسه (عرض کارت و شعاع) می‌آید، نه از تعداد تصاویر
    const base = Math.max(12, Math.ceil((2 * Math.PI * R) / (cw * 1.3)));
    step = 360 / base;
    entryDeg = rightLim - spawn + step * 0.6;
    // تعداد کارت‌ها: حداقل به‌اندازهٔ طول قوس قابل‌دیدن، و مضرب تعداد تصاویر تا ترتیب بدون درز تکرار شود
    const n = Math.max(1, IMAGES.length);
    const needed = Math.ceil((rightLim - spawn) / step) + 2;
    const count = Math.ceil(needed / n) * n;
    period = count * step;

    if (count === cards.length) return;
    const frag = document.createDocumentFragment();
    cards = [];
    for (let i = 0; i < count; i++) {
      const card = document.createElement("div");
      card.className = "hero-arc__card";
      card.style.visibility = "hidden";
      const img = new Image();
      img.alt = "";
      img.decoding = "async";
      img.draggable = false;
      img.onerror = () => { img.remove(); card.classList.add("is-ph"); };
      img.src = IMAGES[(i + 3) % IMAGES.length];
      card.append(img);
      cards.push(card);
      frag.append(card);
    }
    ring.replaceChildren(frag);
  };

  const place = () => {
    const T = prog * entryDeg + tTime + drive * (entryDeg / ENTRY_UNITS) * DRIVE_FACTOR;
    const started = prog > 0.002;
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i];
      const raw = T - i * step;
      if (!started || raw <= 0) {
        if (c.style.visibility !== "hidden") c.style.visibility = "hidden";
        continue;
      }
      const th = (raw % period) + spawn;
      if (th > rightLim) {
        if (c.style.visibility !== "hidden") c.style.visibility = "hidden";
        continue;
      }
      c.style.visibility = "visible";
      c.style.transform = `rotate(${th.toFixed(3)}deg) translateY(${(-R).toFixed(1)}px)`;
    }
  };

  const tick = (now) => {
    const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now;
    const y = window.scrollY;
    const dy = Math.abs(y - lastY);
    lastY = y;

    // حرکت بر اساس «مسافت اسکرول» است نه سرعت لحظه‌ای؛ پس تا آخرین لحظه‌ای که
    // اسکرول می‌شود اثر دارد و با ایستادن اسکرول هم به‌آرامی تمام می‌شود.
    queue = Math.min(queue + dy * SCROLL_RATIO, MAX_BOOST_PX);
    const move = Math.min(queue * Math.min(1, dt * SMOOTH), MAX_BOOST_PX * dt);
    queue -= move;

    if (prog <= 0.001) {
      tTime = 0;
    } else {
      tTime += ((BASE_PX_PER_SEC * dt + move) / R) * RAD * Math.min(1, prog * 2);
    }
    place();
    raf = requestAnimationFrame(tick);
  };

  layout();
  let rt;
  const ro = new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(layout, 120); });
  ro.observe(el);
  raf = requestAnimationFrame(tick);

  return {
    setProgress(p) { prog = clampN(p, 0, 1); },
    setDrive(u) { drive = Math.max(0, u); },
    stop() {
      cancelAnimationFrame(raf);
      clearTimeout(rt);
      ro.disconnect();
      ring.replaceChildren();
      cards = [];
    },
  };
}

export function initHeroArc() {
  const el = document.getElementById("hero-arc");
  if (!el) return;

  const ring = el.querySelector(".hero-arc__ring");
  const list = IMAGES.length ? IMAGES : Array(8).fill(null); // بدون تصویر: کارت‌های جایگزین
  // کارت‌ها طوری تکرار می‌شوند که دایره کامل پر شود و چرخش بی‌نهایت و بدون پرش باشد
  const count = list.length * Math.max(1, Math.ceil(30 / list.length));
  const step = 360 / count;
  // با زیاد شدن تعداد کارت‌ها، شعاع و سرعت چرخش قوس متناسب بزرگ می‌شود تا کارت‌ها روی هم نیفتند
  el.style.setProperty("--arc-k", Math.max(1, count / 30).toFixed(3));
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
    window.__servicesUnpinY = null;
  };
  // مقدار اسکرول اضافه‌ای که سکشن خدمات پین می‌ماند تا انیمیشن اولین محصول (جک) پخش شود
  const extraPx = () => (opts.firstItemPinVh ?? 0.5) * innerHeight;

  const isDesktop = opts.desktop ?? innerWidth >= 1024;
  if (!hero) {
    resetServices();
    return () => {};
  }
  if (reduced || !isDesktop) {
    hero.classList.remove("is-pinned");
    resetServices();
    return () => {};
  }

  hero.classList.add("is-pinned");
  const q = (s) => hero.querySelector(s);
  const qa = (s) => [...hero.querySelectorAll(s)];
  const intro = q(".hero-intro");
  const stage = q(".hero-stage");
  const story = q(".hero-story");
  const stmt = q(".hero-statement");
  const reel = q(".hero-reel");
  const list = q(".hero-reel__list");
  const actions = q(".hero-actions");
  const words = qa(".hero-statement .w");
  const reelArc = q(".hero-arc--reel");
  const reelArcCtl = reelArc ? createReelArc(reelArc) : null;
  const arcState = { p: 0, u: 0 };
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
      end: () => "+=" + innerHeight * 5.2,
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
  // کارت‌های قوس با شروع اسکرول این سکشن از چپ صفحه وارد می‌شوند
  if (reelArcCtl) {
    tl.fromTo(
      arcState,
      { p: 0 },
      { p: 1, duration: ENTRY_UNITS, ease: "none", onUpdate: () => reelArcCtl.setProgress(arcState.p) },
      3.0
    );
  }
  const t0 = 3.6;
  const gap = 1.0;      // فاصلهٔ زمانی بین هر متن (بیشتر = اسکرول بیشتر برای هر متن)
  const swap = 0.55;    // مدت جابه‌جایی هر متن (بیشتر = نرم‌تر و آهسته‌تر)
  for (let i = 1; i < items.length; i++) {
    tl.to(st, { p: i, duration: swap, ease: "power2.inOut", onUpdate: render }, t0 + (i - 1) * gap);
  }
  // 4) the reel fades out while the services section is already pinned at the top underneath it
  const FADE = 1.0;
  const tLast = t0 + (items.length - 2) * gap + swap + 0.4; // کمی مکث روی آخرین متن
  // first the reel text disappears completely (stage background still covers the services section)…
  tl.to(story, { opacity: 0, filter: "blur(14px)", duration: FADE * 0.5, ease: "power1.in" }, tLast + 0.1);
  // …and only then the empty stage lifts away, revealing the services section with no text overlapping
  tl.to(stage, {
    autoAlpha: 0,
    duration: FADE * 0.5,
    ease: "power1.out",
    onUpdate() {
      const pointerEvents =
        Number(gsap.getProperty(stage, "opacity")) < 0.99 ? "none" : "";
      stage.style.pointerEvents = pointerEvents;
      const pinSpacer = stage.closest(".pin-spacer");
      if (pinSpacer) pinSpacer.style.pointerEvents = pointerEvents;
    },
  }, tLast + 0.1 + FADE * 0.5);

  // تا آخرین لحظهٔ دیده شدن قوس، حرکت کارت‌ها مستقیماً به اسکرول وصل می‌ماند
  // (قبلاً با پایان tween ورود، یعنی نزدیک متن «تأمین قطعات»، اثر اسکرول قطع می‌شد)
  if (reelArcCtl) {
    const driveStart = 3.0 + ENTRY_UNITS;
    const driveEnd = tLast + 0.1 + FADE * 0.5;
    tl.fromTo(
      arcState,
      { u: 0 },
      { u: driveEnd - driveStart, duration: driveEnd - driveStart, ease: "none", onUpdate: () => reelArcCtl.setDrive(arcState.u) },
      driveStart
    );
  }

  let onRefreshInit = null;
  if (services) {
    services.classList.add("is-under-hero");
    const tailPx = () => innerHeight * 5.2 * (FADE / tl.duration());
    onRefreshInit = () => {
      const stageH = q(".hero-stage").offsetHeight || innerHeight;
      services.style.marginBlockStart = -(stageH + tailPx()) + "px";
    };
    ST.addEventListener("refreshInit", onRefreshInit);
    onRefreshInit();

    const servicesPin = ST.create({
      trigger: services,
      start: "top top",
      end: () => "+=" + (tailPx() + extraPx()),
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
      onUpdate(self) {
        // پیشرفت ۰..۱ فقط در بازهٔ پین اضافه (بعد از محو شدن استیج هیرو)
        const startExtra = self.end - extraPx();
        const p = clampN((self.scroll() - startExtra) / extraPx(), 0, 1);
        opts.onFirstItemProgress?.(p);
      },
    });
    // نقطهٔ «نمایان شدن خدمات»: همان‌جا که انیمیشن جک از صفر شروع می‌شود
    window.__servicesRevealY = () => servicesPin.end - extraPx();
    // نقطهٔ آزاد شدن پین؛ مرجع ثابت برای محاسبهٔ موقعیت محصولات
    window.__servicesUnpinY = () => servicesPin.end;

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
    reelArcCtl?.stop();
    if (onRefreshInit) ST.removeEventListener("refreshInit", onRefreshInit);
    stage.style.pointerEvents = "";
    const pinSpacer = stage.closest(".pin-spacer");
    if (pinSpacer) pinSpacer.style.pointerEvents = "";
    resetServices();
  };
}