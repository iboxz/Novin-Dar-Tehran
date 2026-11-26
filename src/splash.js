const SVG_NS = "http://www.w3.org/2000/svg";
const SITE_ROOT_URL = new URL("../", import.meta.url);
const HOME_PATHNAME = new URL("index.html", SITE_ROOT_URL).pathname;
const LOGO_MARK_URL = new URL("assets/logo/NDT-logo-mark.svg", SITE_ROOT_URL).href;

const DOOR_EASE = "cubic-bezier(0.76, 0, 0.24, 1)";
const SINE_INOUT = "cubic-bezier(0.37, 0, 0.63, 1)";
const THEME_DEFAULT = "#eeede6";
const THEME_SPLASH = "#17251d";

const FONT_WAIT_CAP_MS = 600;
const WORDMARK_DELAY_MS = 480;
const COMPACT_FAST_CAP_MS = 600;
const FULL_MIN_MS = 2750;
const TRACE_DUR_MS = 1350;
const FINISH_SWEEP_MS = 380;
const DOOR_OPEN_MS = 1200;
const DOOR_CLOSE_MS = 800;
const IMAGE_CAP_MS = 2500;
const HARD_CAP_MS = 7000;
const LEAVE_FAILSAFE_MS = 3000;

const STREAM_ITEMS = [
  "نوین درب تهران",
  "جک پارکینگی",
  "درب شیشه‌ای اتوماتیک",
  "کرکره برقی",
  "راهبند",
  "شیشه بالکنی",
  "فولدینگ",
  "سکشنال",
];

const LOGO_M0_D =
  "M78.0499 107.593V264.403H9.9133V9.91551H78.0499L161.99 144.083V241.761L78.0499 107.593ZM449.818 264.403H381.678V229.125L382.64 228.058L384.071 226.409L385.472 224.733L386.847 223.034L388.192 221.309L389.508 219.561L390.793 217.786L392.052 215.988L393.282 214.164L394.482 212.316L395.651 210.442L396.792 208.548L397.896 206.641L398.963 204.718L399.994 202.781L400.989 200.828L401.947 198.861L402.873 196.882L403.762 194.885L404.614 192.876L405.431 190.853L406.211 188.814L406.954 186.762L407.661 184.696L408.332 182.617L408.967 180.525L409.565 178.416L410.127 176.294L410.652 174.159L411.141 172.011L411.594 169.85L412.011 167.675L412.391 165.487L412.734 163.286L413.042 161.071L413.313 158.844L413.547 156.603L413.746 154.352L413.908 152.088L414.033 149.811L414.122 147.521L414.175 145.217L414.192 142.924V130.576L414.172 128.259L414.116 125.932L414.023 123.619L413.894 121.322L413.729 119.038L413.528 116.767L413.286 114.51L413.009 112.266L412.695 110.035L412.344 107.821L411.954 105.619L411.528 103.432L411.065 101.26L410.563 99.1019L410.024 96.957L409.449 94.8286L408.838 92.7133L408.187 90.6146L407.499 88.5292L406.776 86.4601L406.012 84.4044L405.212 82.3651L404.376 80.3392L403.504 78.3298L402.592 76.3368L401.643 74.3571L400.658 72.3939L399.637 70.4473L398.58 68.5172L397.486 66.6002L396.352 64.6998L395.185 62.8159L393.986 60.9552L392.756 59.1175L391.497 57.3064L390.208 55.5218L388.89 53.7601L387.541 52.0249L386.163 50.3129L384.759 48.6275L383.324 46.9683L381.86 45.3356L380.366 43.726L378.843 42.1429L377.293 40.5862L375.713 39.0561L374.104 37.5488L372.464 36.0682L370.799 34.6139L369.103 33.1863L367.382 31.785L365.63 30.41L363.849 29.0615L362.041 27.7362L360.203 26.4373L358.34 25.165L356.446 23.919L354.526 22.6993L352.576 21.5063L350.599 20.3396L348.597 19.1992L346.564 18.0855L344.505 16.9948L342.417 15.9307L340.305 14.8963L338.173 13.8947L336.025 12.9264L333.86 11.9911L331.679 11.0887L329.481 10.2195L328.678 9.91551H535.087V57.8452H449.818V264.403Z";

const LOGO_M1_D =
  "M172.827 264.281V9.9817H266.447L268.956 9.99803L271.431 10.0444L273.887 10.1205L276.326 10.2294L278.748 10.3682L281.151 10.5368L283.537 10.7351L285.906 10.9665L288.256 11.2275L290.59 11.5184L292.906 11.839L295.203 12.1926L297.484 12.5761L299.747 12.9892L301.995 13.432L304.222 13.9081L306.433 14.4136L308.627 14.9491L310.805 15.5142L312.967 16.1091L315.108 16.737L317.233 17.3948L319.342 18.0823L321.434 18.7994L323.509 19.5464L325.568 20.3231L327.611 21.1328L329.637 21.9724L331.646 22.8416L333.639 23.7404L335.615 24.6692L337.575 25.631L339.515 26.6192L341.428 27.6305L343.312 28.6649L345.169 29.7226L346.997 30.8034L348.798 31.9072L350.57 33.031L352.315 34.1778L354.03 35.3478L355.719 36.5408L357.381 37.7572L359.014 38.9966L360.62 40.259L362.2 41.5448L363.753 42.8536L365.276 44.1821L366.773 45.5339L368.244 46.9088L369.688 48.3067L371.106 49.7279L372.498 51.1722L373.859 52.6398L375.194 54.1303L376.503 55.644L377.785 57.1808L379.041 58.7409L380.271 60.3273L381.474 61.9368L382.65 63.5695L383.8 65.2253L384.924 66.9043L386.021 68.6064L387.089 70.3283L388.12 72.0601L389.118 73.8052L390.083 75.5634L391.011 77.335L391.907 79.123L392.77 80.9242L393.599 82.7387L394.392 84.5664L395.152 86.4073L395.879 88.2615L396.574 90.1321L397.231 92.016L397.856 93.913L398.447 95.8233L399.006 97.7502L399.531 99.6902L400.024 101.647L400.48 103.617L400.903 105.6L401.293 107.599L401.65 109.612L401.974 111.641L402.261 113.687L402.516 115.746L402.737 117.822L402.925 119.911L403.077 122.016L403.196 124.138L403.282 126.273L403.332 128.424L403.348 130.612V142.877L403.332 145.045L403.282 147.177L403.2 149.296L403.084 151.398L402.935 153.486L402.754 155.562L402.539 157.621L402.291 159.667L402.01 161.699L401.696 163.719L401.349 165.725L400.969 167.715L400.556 169.691L400.11 171.654L399.63 173.604L399.118 175.541L398.573 177.464L397.995 179.375L397.383 181.272L396.739 183.156L396.061 185.026L395.351 186.884L394.607 188.728L393.83 190.559L393.021 192.377L392.178 194.185L391.302 195.979L390.393 197.761L389.452 199.529L388.477 201.287L387.469 203.032L386.424 204.764L385.35 206.479L384.25 208.171L383.126 209.841L381.976 211.487L380.799 213.109L379.596 214.709L378.367 216.285L377.111 217.839L375.829 219.369L374.52 220.876L373.188 222.36L371.83 223.821L370.445 225.259L369.034 226.673L367.596 228.065L366.132 229.433L364.639 230.781L363.118 232.107L361.572 233.409L359.998 234.688L358.399 235.944L356.773 237.18L355.12 238.393L353.438 239.583L351.73 240.749L349.995 241.893L348.233 243.017L346.442 244.117L344.624 245.195L342.78 246.249L340.906 247.283L339.009 248.291L337.092 249.273L335.159 250.222L333.206 251.14L331.236 252.026L329.25 252.882L327.244 253.708L325.221 254.501L323.179 255.265L321.12 255.999L319.041 256.699L316.946 257.37L314.831 258.011L312.699 258.62L310.548 259.198L308.38 259.743L306.192 260.259L303.984 260.745L301.76 261.198L299.516 261.621L297.252 262.011L294.972 262.371L292.672 262.701L290.352 262.999L288.015 263.267L285.659 263.501L283.282 263.706L280.886 263.878L278.474 264.02L276.041 264.129L273.589 264.208L271.117 264.255L268.609 264.271H172.827V264.281ZM235.96 48.3697V225.89H267.346L268.718 225.88L270.096 225.854L271.461 225.807L272.816 225.744L274.161 225.662L275.493 225.563L276.815 225.444L278.124 225.308L279.422 225.153L280.708 224.978L281.984 224.786L283.246 224.574L284.499 224.346L285.738 224.099L286.967 223.831L288.184 223.543L289.39 223.239L290.583 222.915L291.766 222.572L292.936 222.208L294.093 221.828L295.239 221.428L296.373 221.008L297.493 220.569L298.601 220.109L299.698 219.633L300.782 219.138L301.853 218.622L302.91 218.087L303.954 217.531L304.986 216.956L306.003 216.365L307.008 215.753L308 215.122L308.975 214.471L309.936 213.803L310.885 213.116L311.817 212.409L312.735 211.685L313.638 210.941L314.527 210.181L315.399 209.401L316.255 208.601L317.098 207.785L317.924 206.952L318.734 206.099L319.53 205.23L320.31 204.341L321.074 203.435L321.824 202.513L322.558 201.575L323.275 200.616L323.975 199.641L324.663 198.65L325.334 197.642L325.988 196.617L326.626 195.576L327.25 194.518L327.859 193.444L328.45 192.354L329.025 191.246L329.587 190.123L330.132 188.982L330.664 187.826L331.18 186.652L331.679 185.463L332.161 184.256L332.628 183.037L333.074 181.801L333.503 180.551L333.916 179.285L334.313 178.007L334.693 176.711L335.057 175.402L335.404 174.077L335.734 172.738L336.048 171.387L336.346 170.018L336.626 168.637L336.891 167.239L337.139 165.827L337.37 164.403L337.585 162.962L337.783 161.508L337.965 160.037L338.13 158.553L338.282 157.056L338.418 155.542L338.537 154.015L338.639 152.472L338.725 150.915L338.794 149.345L338.851 147.759L338.89 146.159L338.913 144.543L338.92 142.927V131.339L338.913 129.723L338.89 128.107L338.851 126.507L338.794 124.921L338.725 123.351L338.639 121.794L338.537 120.251L338.418 118.724L338.282 117.21L338.13 115.713L337.965 114.229L337.783 112.758L337.585 111.304L337.37 109.863L337.139 108.439L336.891 107.027L336.626 105.629L336.346 104.248L336.048 102.88L335.734 101.528L335.404 100.189L335.057 98.8639L334.693 97.5551L334.313 96.2597L333.916 94.9805L333.503 93.7147L333.074 92.4654L332.628 91.2293L332.161 90.0099L331.679 88.8036L331.18 87.6136L330.664 86.4371L330.132 85.2803L329.584 84.1401L329.022 83.0163L328.443 81.9093L327.849 80.8185L327.237 79.7411L326.609 78.6801L325.965 77.639L325.304 76.6144L324.63 75.6064L323.939 74.6149L323.232 73.64L322.508 72.6814L321.768 71.7396L321.011 70.8175L320.237 69.9119L319.448 69.0228L318.645 68.1535L317.825 67.3008L316.989 66.4647L316.136 65.6483L315.27 64.8485L314.388 64.0686L313.489 63.3083L312.573 62.5648L311.645 61.841L310.7 61.1337L309.741 60.4463L308.766 59.7786L307.778 59.1276L306.774 58.4962L305.756 57.8848L304.724 57.2931L303.68 56.7215L302.623 56.1663L301.552 55.6307L300.465 55.1151L299.367 54.6195L298.257 54.1436L297.133 53.6875L295.996 53.2478L294.846 52.8282L293.683 52.4282L292.506 52.0481L291.32 51.6878L290.12 51.3441L288.907 51.0203L287.685 50.7161L286.448 50.4319L285.199 50.1642L283.94 49.9163L282.668 49.6884L281.382 49.4767L280.087 49.2851L278.778 49.1132L277.459 48.9579L276.127 48.8224L274.782 48.7033L273.427 48.6043L272.059 48.5216L270.681 48.4588L269.29 48.4127L267.888 48.3862L266.49 48.3761H235.97L235.96 48.3697Z";

const normalizePath = (p) => (p.endsWith("/") ? `${p}index.html` : p);
const isIndexPage = () => normalizePath(window.location.pathname) === HOME_PATHNAME;
const isReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
  document.documentElement.classList.contains("motion-paused");

function setThemeColor(color) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", color);
}

function getNavigationType() {
  const navEntry = window.performance?.getEntriesByType?.("navigation")?.[0];
  if (navEntry?.type) return navEntry.type;
  if (window.performance?.navigation?.type === 2) return "back_forward";
  return "navigate";
}

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, String(v));
  }
  return el;
}

function createLogoStrokeSvg(prefixId, withClass = false) {
  const mark = svgEl("svg", {
    x: "20%",
    y: "33%",
    width: "60%",
    height: "34%",
    viewBox: "0 0 545 278",
    preserveAspectRatio: "xMidYMid meet",
    fill: "none",
    overflow: "visible",
  });

  const defs = svgEl("defs");
  [LOGO_M0_D, LOGO_M1_D].forEach((d, i) => {
    const m = svgEl("mask", { id: `${prefixId}-m${i}`, fill: "white" });
    m.append(svgEl("path", { d }));
    defs.append(m);
  });
  mark.append(defs);

  const paths = [];
  [LOGO_M0_D, LOGO_M1_D].forEach((d, i) => {
    const p = svgEl("path", {
      d,
      "stroke-width": "2.5",
      stroke: "rgba(245,245,237,0.28)",
      mask: `url(#${prefixId}-m${i})`,
    });
    if (withClass) p.setAttribute("class", "ndt-logo-path");
    mark.append(p);
    paths.push(p);
  });

  return { mark, paths };
}

function createWordmarkTextEl({ id = "", className = "", outline = false, clipPathUrl = "" } = {}) {
  const attrs = {
    class: className ? `ndt-wordmark-text ${className}` : "ndt-wordmark-text",
    x: "50%",
    y: "50%",
    "text-anchor": "middle",
    "dominant-baseline": "central",
    direction: "rtl",
    "unicode-bidi": "plaintext",
    style:
      "font-family:Ayandeh,Vazirmatn,system-ui,sans-serif;font-weight:900;font-size:clamp(2.75rem,8.5vw,9.5rem);letter-spacing:0",
  };
  if (id) attrs.id = id;
  if (outline) {
    attrs.fill = "none";
    attrs.stroke = "rgba(245,245,237,0.28)";
    attrs["stroke-width"] = "1.2";
    attrs["vector-effect"] = "non-scaling-stroke";
  } else {
    attrs.fill = "#f5f5ed";
  }
  if (clipPathUrl) attrs["clip-path"] = clipPathUrl;
  const t = svgEl("text", attrs);
  t.textContent = "نوین درب تهران";
  return t;
}

function createBrandBar() {
  const bar = document.createElement("div");
  bar.className = "ndt-splash-brand-bar";

  const brand = document.createElement("div");
  brand.className = "ndt-splash-brand";

  const markSpan = document.createElement("span");
  markSpan.className = "ndt-brand-mark";
  markSpan.setAttribute("aria-hidden", "true");

  const img = document.createElement("img");
  img.src = LOGO_MARK_URL;
  img.alt = "";
  img.width = 166;
  img.height = 86;
  img.loading = "eager";
  img.decoding = "sync";
  markSpan.append(img);

  const typeSpan = document.createElement("span");
  typeSpan.className = "ndt-brand-type";
  typeSpan.textContent = "نوین درب تهران";

  brand.append(markSpan, typeSpan);
  bar.append(brand);
  return { bar, brand, img, typeSpan };
}

function buildSplashDom(mode, reduced = false) {
  document.getElementById("ndt-splash")?.remove();

  const onIndex = isIndexPage();
  const splashEl = document.createElement("div");
  splashEl.id = "ndt-splash";
  splashEl.setAttribute("aria-hidden", "true");

  // Shared SVG defs + symbol for GPU door halves on inner pages
  const defsSvg = svgEl("svg", { class: "ndt-splash-defs", "aria-hidden": "true" });
  const defs = svgEl("defs");

  const doorSymbol = svgEl("symbol", { id: "ndt-door-art" });
  const { mark: symbolMark } = createLogoStrokeSvg("ndt-door-logo", false);
  const symbolWordmark = createWordmarkTextEl({ className: "ndt-door-wordmark" });
  doorSymbol.append(symbolMark, symbolWordmark);

  defs.append(doorSymbol);
  defsSvg.append(defs);

  let stageEl = null;
  let streamSvg = null;
  let liveComp = null;
  let liveBrandBar = null;
  let liveBrand = null;
  let liveBrandImg = null;
  let liveBrandType = null;
  let wordmarkGroup = null;
  let wordmarkOutline = null;
  let wordmarkFill = null;
  let traceRect = null;
  let fillClip = null;
  let liveLogoPaths = [];
  let hudEl = null;
  let counterEl = null;

  const createLiveWordmarkLayer = (fullEffects) => {
    const comp = document.createElement("div");
    comp.className = "ndt-live-comp";

    const liveSvg = svgEl("svg", { class: "ndt-live-svg" });
    if (fullEffects) {
      const liveDefs = svgEl("defs");

      const traceClip = svgEl("clipPath", { id: "ndt-trace-clip" });
      traceRect = svgEl("rect", {
        id: "ndt-trace-rect",
        class: "ndt-trace-rect",
        x: "0",
        y: "0",
        width: "0",
        height: "0",
      });
      traceClip.append(traceRect);

      fillClip = svgEl("clipPath", { id: "ndt-fill-clip", clipPathUnits: "userSpaceOnUse" });

      liveDefs.append(traceClip, fillClip);
      liveSvg.append(liveDefs);
    }

    const { mark: liveMark, paths } = createLogoStrokeSvg("ndt-live-logo", true);
    liveLogoPaths = paths;

    wordmarkGroup = svgEl("g", {
      class: fullEffects ? "ndt-wordmark-group" : "ndt-wordmark-group is-revealed",
    });

    if (fullEffects) {
      wordmarkOutline = createWordmarkTextEl({
        id: "ndt-wm-outline",
        className: "ndt-wordmark-outline",
        outline: true,
        clipPathUrl: reduced ? "" : "url(#ndt-trace-clip)",
      });
      wordmarkFill = createWordmarkTextEl({
        id: "ndt-wm-fill",
        clipPathUrl: reduced ? "" : "url(#ndt-fill-clip)",
      });

      wordmarkGroup.append(wordmarkOutline, wordmarkFill);
    } else {
      wordmarkFill = createWordmarkTextEl({ id: "ndt-wm-fill" });
      wordmarkGroup.append(wordmarkFill);
      if (mode === "leave") {
        comp.style.opacity = "0";
      }
    }

    liveSvg.append(liveMark, wordmarkGroup);
    comp.append(liveSvg);
    return comp;
  };

  // Single stationary top-right header brand layer above stage & doors (never flies off with right door)
  const brandParts = createBrandBar();
  liveBrandBar = brandParts.bar;
  liveBrand = brandParts.brand;
  liveBrandImg = brandParts.img;
  liveBrandType = brandParts.typeSpan;
  if (mode === "leave") {
    liveBrandBar.style.opacity = "0";
  }

  if (mode === "full") {
    stageEl = document.createElement("div");
    stageEl.className = "ndt-splash-stage";

    streamSvg = svgEl("svg", { class: "ndt-stream-svg" });
    stageEl.append(streamSvg);

    liveComp = createLiveWordmarkLayer(true);
    if (!onIndex) stageEl.append(liveComp);

    hudEl = document.createElement("div");
    hudEl.className = "ndt-splash-hud";
    counterEl = document.createElement("span");
    counterEl.className = "ndt-splash-counter";
    counterEl.textContent = "۰";
    const labelEl = document.createElement("span");
    labelEl.className = "ndt-splash-label";
    labelEl.textContent = "در حال بارگذاری";
    hudEl.append(counterEl, labelEl);
    stageEl.append(hudEl);
  } else if (onIndex) {
    // On index compact/leave, keep center wordmark + NDT whole above doors
    liveComp = createLiveWordmarkLayer(false);
  }

  // GPU door halves (on index, omit split center art so text/logo never splits in half)
  const doorsEl = document.createElement("div");
  doorsEl.className = "ndt-splash-doors";
  if (mode === "full") doorsEl.hidden = true;

  const createLeaf = (side) => {
    const leaf = document.createElement("div");
    leaf.className = `ndt-door ndt-door--${side}`;
    const inner = document.createElement("div");
    inner.className = "ndt-door-inner";

    if (!onIndex) {
      const svg = svgEl("svg", { class: "ndt-leaf-svg" });
      svg.append(svgEl("use", { href: "#ndt-door-art" }));
      inner.append(svg);
    }

    leaf.append(inner);
    return { leaf, inner };
  };

  const leftLeaf = createLeaf("left");
  const rightLeaf = createLeaf("right");
  doorsEl.append(leftLeaf.leaf, rightLeaf.leaf);

  if (stageEl) {
    splashEl.append(defsSvg, stageEl, doorsEl);
  } else {
    splashEl.append(defsSvg, doorsEl);
  }
  if (onIndex && liveComp) {
    splashEl.append(liveComp);
  }
  splashEl.append(liveBrandBar);

  document.body.prepend(splashEl);

  return {
    splashEl,
    onIndex,
    symbolWordmark,
    stageEl,
    streamSvg,
    liveComp,
    liveBrandBar,
    liveBrand,
    liveBrandImg,
    liveBrandType,
    wordmarkGroup,
    wordmarkOutline,
    wordmarkFill,
    traceRect,
    fillClip,
    liveLogoPaths,
    hudEl,
    counterEl,
    doorsEl,
    leftLeaf,
    rightLeaf,
  };
}

function initSplashSystem() {
  if (typeof window === "undefined" || window.__ndtSplashInit) return;
  window.__ndtSplashInit = true;

  const root = document.documentElement;
  const timers = new Set();
  const activeAnims = new Set();
  const rAFs = new Set();
  let isTransitioning = false;
  let activeCleanup = null;

  const trackAnim = (anim) => {
    if (!anim) return null;
    activeAnims.add(anim);
    const remove = () => activeAnims.delete(anim);
    anim.finished?.then(remove, remove);
    return anim;
  };

  const setManagedTimeout = (fn, ms) => {
    const id = window.setTimeout(() => {
      timers.delete(id);
      fn();
    }, ms);
    timers.add(id);
    return id;
  };

  const trackRaf = (fn) => {
    const id = window.requestAnimationFrame((ts) => {
      rAFs.delete(id);
      fn(ts);
    });
    rAFs.add(id);
    return id;
  };

  const cancelAllPending = () => {
    timers.forEach((id) => window.clearTimeout(id));
    timers.clear();
    rAFs.forEach((id) => window.cancelAnimationFrame(id));
    rAFs.clear();
    activeAnims.forEach((anim) => {
      try {
        anim.cancel();
      } catch {
        /* ignore */
      }
    });
    activeAnims.clear();
  };

  const clearMotionState = ({ restoreTheme = true, refreshScroll = false } = {}) => {
    const header = document.querySelector(".site-header");
    const heroArc = document.getElementById("hero-arc");
    root.classList.remove("sp-hold", "is-loading", "is-leaving", "sp-hide-hero-title", "sp-hide-header-logo");
    cancelAllPending();
    if (header) header.style.willChange = "";
    if (heroArc) heroArc.style.willChange = "";
    document.getElementById("ndt-splash")?.remove();
    if (restoreTheme) setThemeColor(THEME_DEFAULT);
    if (refreshScroll && isIndexPage()) {
      import("./motion.js")
        .then((m) => m.ScrollTrigger?.refresh?.())
        .catch(() => {});
    }
  };

  const forceAbortAll = () => {
    activeCleanup?.();
    activeCleanup = null;
    isTransitioning = false;
    clearMotionState({ restoreTheme: true, refreshScroll: false });
  };

  const playDoorOpenSequence = (dom, { preFade, finishPromise = null, reduced, onDone }) => {
    const {
      splashEl,
      onIndex,
      stageEl,
      streamSvg,
      liveComp,
      liveBrandBar,
      liveBrand,
      liveBrandImg,
      liveBrandType,
      wordmarkFill,
      liveLogoPaths,
      hudEl,
      wordmarkOutline,
      doorsEl,
      leftLeaf,
      rightLeaf,
    } = dom;
    splashEl.classList.add("is-opening");

    if (reduced) {
      root.classList.remove("sp-hide-hero-title", "sp-hide-header-logo");
      const a = trackAnim(
        splashEl.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: preFade ? 280 : 200,
          easing: "linear",
          fill: "forwards",
        })
      );
      a.finished.then(onDone, onDone);
      return;
    }

    const startDoors = () => {
      if (stageEl) stageEl.hidden = true;
      doorsEl.hidden = false;

      {
        const doorTiming = { duration: DOOR_OPEN_MS, easing: DOOR_EASE, fill: "forwards" };

        const leftAnim = trackAnim(
          leftLeaf.leaf.animate(
            [{ transform: "translate3d(0, 0, 0)" }, { transform: "translate3d(-100%, 0, 0)" }],
            doorTiming
          )
        );
        trackAnim(
          leftLeaf.inner.animate(
            [{ transform: "translate3d(0, 0, 0)" }, { transform: "translate3d(15%, 0, 0)" }],
            doorTiming
          )
        );
        trackAnim(
          rightLeaf.leaf.animate(
            [{ transform: "translate3d(0, 0, 0)" }, { transform: "translate3d(100%, 0, 0)" }],
            doorTiming
          )
        );
        trackAnim(
          rightLeaf.inner.animate(
            [{ transform: "translate3d(0, 0, 0)" }, { transform: "translate3d(-15%, 0, 0)" }],
            doorTiming
          )
        );

        const header = document.querySelector(".site-header");
        const heroArc = onIndex ? document.getElementById("hero-arc") : null;
        const headerDelay = Math.round(DOOR_OPEN_MS * 0.45);
        const entrancePromises = [leftAnim.finished];

        // On index, keep center wordmark + NDT unbroken while doors part behind it,
        // morph light->dark & micro-align 1:1 onto #hero-title, then hand off invisibly.
        if (onIndex && liveComp && wordmarkFill) {
          const heroTitle = document.getElementById("hero-title");
          let dx = 0;
          let dy = 0;
          if (heroTitle) {
            const hr = heroTitle.getBoundingClientRect();
            const sr = wordmarkFill.getBoundingClientRect();
            if (hr.width > 0 && sr.width > 0) {
              const candDx = hr.left + hr.width / 2 - (sr.left + sr.width / 2);
              const candDy = hr.top + hr.height / 2 - (sr.top + sr.height / 2);
              if (Math.abs(candDx) < 60) dx = candDx;
              if (Math.abs(candDy) < 60) dy = candDy;
            }
          }

          const morphOpts = { duration: 540, delay: 100, easing: SINE_INOUT, fill: "forwards" };
          wordmarkFill.style.fill = "#f5f5ed";
          const fillMorph = trackAnim(
            wordmarkFill.animate([{ fill: "#f5f5ed" }, { fill: "#17251d" }], morphOpts)
          );
          if (liveLogoPaths.length) {
            liveLogoPaths.forEach((p) => {
              p.style.stroke = "rgba(245, 245, 237, 0.28)";
              trackAnim(
                p.animate(
                  [{ stroke: "rgba(245, 245, 237, 0.28)" }, { stroke: "rgba(23, 37, 29, 0.28)" }],
                  morphOpts
                )
              );
            });
          }

          const alignAnim =
            Math.abs(dx) > 0.25 || Math.abs(dy) > 0.25
              ? trackAnim(
                  liveComp.animate(
                    [
                      { transform: "translate3d(0px, 0px, 0)" },
                      { transform: `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)` },
                    ],
                    morphOpts
                  )
                )
              : null;

          const handoffPromise = Promise.allSettled([
            fillMorph.finished,
            alignAnim ? alignAnim.finished : Promise.resolve(),
          ]).then(() => {
            root.classList.remove("sp-hide-hero-title");
            const fadeOut = trackAnim(
              liveComp.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 200,
                easing: "ease-out",
                fill: "forwards",
              })
            );
            return fadeOut.finished;
          });
          entrancePromises.push(handoffPromise);
        } else {
          root.classList.remove("sp-hide-hero-title");
        }

        let headerFinishPromise = Promise.resolve();
        if (header) {
          header.style.willChange = "transform, opacity";
          const ha = trackAnim(
            header.animate(
              [
                { transform: "translateY(-100%)", opacity: 0 },
                { transform: "translateY(0)", opacity: 1 },
              ],
              { duration: 500, delay: headerDelay, easing: DOOR_EASE, fill: "both" }
            )
          );
          headerFinishPromise = ha.finished;
          entrancePromises.push(ha.finished);
        }

        // Top-right logo + "نوین درب تهران" stays stationary in place above opening doors,
        // morphs light->dark as right door sweeps clear, then hands off seamlessly to .site-header .logo.
        if (liveBrandBar && liveBrand) {
          const brandMorphOpts = {
            duration: 420,
            delay: Math.round(DOOR_OPEN_MS * 0.5),
            easing: SINE_INOUT,
            fill: "forwards",
          };
          const brandAnims = [];
          if (liveBrandType) {
            brandAnims.push(
              trackAnim(
                liveBrandType.animate([{ color: "#f5f5ed" }, { color: "#17251d" }], brandMorphOpts)
              ).finished
            );
          } else {
            brandAnims.push(
              trackAnim(
                liveBrand.animate([{ color: "#f5f5ed" }, { color: "#17251d" }], brandMorphOpts)
              ).finished
            );
          }
          if (liveBrandImg) {
            brandAnims.push(
              trackAnim(
                liveBrandImg.animate(
                  [
                    { filter: "invert(1) hue-rotate(180deg) brightness(1.12)" },
                    { filter: "invert(0) hue-rotate(0deg) brightness(1)" },
                  ],
                  brandMorphOpts
                )
              ).finished
            );
          }

          const brandHandoff = Promise.allSettled([headerFinishPromise, ...brandAnims]).then(() => {
            const headerLogo = header?.querySelector(".logo");
            let bdx = 0;
            let bdy = 0;
            if (headerLogo) {
              const hr = headerLogo.getBoundingClientRect();
              const br = liveBrand.getBoundingClientRect();
              if (hr.width > 0 && br.width > 0) {
                const cdx = hr.left + hr.width / 2 - (br.left + br.width / 2);
                const cdy = hr.top + hr.height / 2 - (br.top + br.height / 2);
                if (Math.abs(cdx) < 24) bdx = cdx;
                if (Math.abs(cdy) < 24) bdy = cdy;
              }
            }
            if (Math.abs(bdx) > 0.25 || Math.abs(bdy) > 0.25) {
              liveBrand.style.transform = `translate3d(${bdx.toFixed(2)}px, ${bdy.toFixed(2)}px, 0)`;
            }
            root.classList.remove("sp-hide-header-logo");
            const fadeOutBrand = trackAnim(
              liveBrandBar.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 160,
                easing: "ease-out",
                fill: "forwards",
              })
            );
            return fadeOutBrand.finished;
          });
          entrancePromises.push(brandHandoff);
        } else {
          root.classList.remove("sp-hide-header-logo");
        }

        if (heroArc) {
          heroArc.style.willChange = "transform, opacity";
          const arca = trackAnim(
            heroArc.animate(
              [
                { transform: "translateY(12%)", opacity: 0 },
                { transform: "translateY(0)", opacity: 1 },
              ],
              { duration: 540, delay: headerDelay + 80, easing: DOOR_EASE, fill: "both" }
            )
          );
          entrancePromises.push(arca.finished);
        }

        Promise.allSettled(entrancePromises).then(onDone);
      }
    };

    if (preFade) {
      const fadeOpts = { duration: 240, easing: "ease-out", fill: "forwards" };
      const fades = [];
      if (streamSvg) fades.push(trackAnim(streamSvg.animate([{ opacity: 1 }, { opacity: 0 }], fadeOpts)).finished);
      if (hudEl) fades.push(trackAnim(hudEl.animate([{ opacity: 1 }, { opacity: 0 }], fadeOpts)).finished);
      if (wordmarkOutline) {
        fades.push(trackAnim(wordmarkOutline.animate([{ opacity: 1 }, { opacity: 0 }], fadeOpts)).finished);
      }
      if (finishPromise) fades.push(finishPromise);
      Promise.allSettled(fades).then(startDoors);
    } else {
      startDoors();
    }
  };

  const runArrival = (mode) => {
    try {
      const reduced = isReducedMotion();
      const dom = buildSplashDom(mode, reduced);
      setThemeColor(THEME_SPLASH);
      root.classList.add("is-loading");
      if (!reduced) root.classList.add("sp-hide-header-logo");
      if (dom.onIndex && !reduced) root.classList.add("sp-hide-hero-title");
      root.classList.remove("sp-hold");

      const startTime = performance.now();
      const faFormatter = new Intl.NumberFormat("fa-IR");
      let finished = false;
      let exitStarted = false;
      let readyToExit = false;
      let fontDone = false;
      let loadDone = document.readyState === "complete";
      let imagesProgress = mode === "full" && isIndexPage() ? 0 : 1;
      let fontProgress = 0;
      let loadProgress = loadDone ? 1 : document.readyState === "interactive" ? 0.25 : 0;
      let displayPct = 0;
      let fillU = 0;
      let fillSlices = [];
      let fillBounds = null;
      let effectStartTime = 0;
      let effectStarted = false;
      let streamAnims = [];
      let traceAnim = null;
      let resizeRaf = 0;

      const applyFillState = (u) => {
        if (!fillSlices.length || !fillBounds) return;
        const clamped = u <= 0 ? 0 : u >= 1 ? 1 : u;
        const n = fillSlices.length;
        const span = n > 1 ? 0.24 : 1;
        const step = n > 1 ? (1 - span) / (n - 1) : 0;
        const { by, bh } = fillBounds;

        for (let i = 0; i < n; i++) {
          const start = i * step;
          const raw = span > 0 ? (clamped - start) / span : clamped >= 1 ? 1 : 0;
          const t = raw <= 0 ? 0 : raw >= 1 ? 1 : raw;
          const p = t <= 0 ? 0 : t >= 1 ? 1 : 0.5 - 0.5 * Math.cos(Math.PI * t);
          const h = bh * p;
          const y = by + bh - h;
          const sliceEl = fillSlices[i];
          sliceEl.setAttribute("y", y.toFixed(2));
          sliceEl.setAttribute("height", h.toFixed(2));
        }
      };

      const buildFillAndTrace = () => {
        if (finished || exitStarted || reduced || !dom.fillClip || !dom.wordmarkFill) {
          return;
        }
        const bbox = dom.wordmarkFill.getBBox();
        if (!bbox || bbox.width <= 0 || bbox.height <= 0) return;

        const padX = 28;
        const tracePadY = Math.max(24, bbox.height * 0.28);
        const fillPadY = Math.max(12, bbox.height * 0.1);
        const bx = bbox.x - padX;
        const bw = bbox.width + padX * 2;
        const by = bbox.y - fillPadY;
        const bh = bbox.height + fillPadY * 2;

        if (dom.traceRect) {
          dom.traceRect.setAttribute("x", bx.toFixed(2));
          dom.traceRect.setAttribute("y", (bbox.y - tracePadY).toFixed(2));
          dom.traceRect.setAttribute("width", bw.toFixed(2));
          dom.traceRect.setAttribute("height", (bbox.height + tracePadY * 2).toFixed(2));
        }

        const text = dom.wordmarkFill.textContent || "";
        const rawBoxes = [];
        if (typeof dom.wordmarkFill.getExtentOfChar === "function") {
          for (let i = 0; i < text.length; i++) {
            if (/\s/.test(text[i])) continue;
            try {
              const r = dom.wordmarkFill.getExtentOfChar(i);
              if (r && r.width > 0.5 && r.height > 0.5) {
                rawBoxes.push({ x1: r.x, x2: r.x + r.width, cx: r.x + r.width / 2 });
              }
            } catch {
              /* ignore */
            }
          }
        }

        rawBoxes.sort((a, b) => b.cx - a.cx);
        const charBoxes = [];
        for (const box of rawBoxes) {
          const prev = charBoxes[charBoxes.length - 1];
          if (prev && Math.abs(prev.cx - box.cx) < 4) {
            prev.x1 = Math.min(prev.x1, box.x1);
            prev.x2 = Math.max(prev.x2, box.x2);
            prev.cx = (prev.x1 + prev.x2) / 2;
          } else {
            charBoxes.push({ ...box });
          }
        }

        const coveredSpan =
          charBoxes.length >= 2
            ? charBoxes[0].x2 - charBoxes[charBoxes.length - 1].x1
            : 0;
        const useCharBoxes = charBoxes.length >= 8 && coveredSpan >= bbox.width * 0.7;

        const intervals = [];
        if (useCharBoxes) {
          const n = charBoxes.length;
          const seams = [];
          for (let i = 0; i < n - 1; i++) {
            const rightBox = charBoxes[i];
            const leftBox = charBoxes[i + 1];
            const mid = (rightBox.x1 + leftBox.x2) / 2;
            const clampedMid = Math.max(leftBox.cx + 1, Math.min(rightBox.cx - 1, mid));
            seams.push(clampedMid);
          }
          for (let i = 0; i < n; i++) {
            const rightEdge = i === 0 ? bx + bw : seams[i - 1] + 1.2;
            const leftEdge = i === n - 1 ? bx : seams[i] - 1.2;
            intervals.push({ x: leftEdge, w: Math.max(2, rightEdge - leftEdge) });
          }
        } else {
          const count = 12;
          const sliceW = bw / count;
          for (let i = 0; i < count; i++) {
            const rightEdge = bx + bw - i * sliceW + (i === 0 ? 0 : 1.2);
            const leftEdge = bx + bw - (i + 1) * sliceW - (i === count - 1 ? 0 : 1.2);
            intervals.push({ x: leftEdge, w: Math.max(2, rightEdge - leftEdge) });
          }
        }

        fillBounds = { by, bh };
        fillSlices = intervals.map(({ x, w }) =>
          svgEl("rect", {
            class: "ndt-fill-slice",
            x: x.toFixed(2),
            y: (by + bh).toFixed(2),
            width: w.toFixed(2),
            height: "0",
          })
        );
        dom.fillClip.replaceChildren(...fillSlices);
        applyFillState(fillU);
      };

      const startTracePhase = () => {
        if (finished || exitStarted || reduced || !dom.traceRect || !dom.wordmarkOutline) return;
        const bbox = dom.wordmarkOutline.getBBox();
        const spanW = Math.ceil((bbox?.width || 480) + 56);
        const dashLen = Math.max(220, Math.round((bbox?.height || 80) * 4.8));
        const traceEase = "cubic-bezier(0.25, 0.1, 0.25, 1)";
        dom.traceRect.style.transform = `translateX(${spanW}px)`;
        dom.wordmarkOutline.style.strokeDasharray = String(dashLen);
        dom.wordmarkOutline.style.strokeDashoffset = String(dashLen);

        traceAnim = trackAnim(
          dom.traceRect.animate(
            [{ transform: `translateX(${spanW}px)` }, { transform: "translateX(0px)" }],
            { duration: TRACE_DUR_MS, easing: traceEase, fill: "forwards" }
          )
        );
        trackAnim(
          dom.wordmarkOutline.animate([{ strokeDashoffset: dashLen }, { strokeDashoffset: 0 }], {
            duration: TRACE_DUR_MS,
            easing: traceEase,
            fill: "forwards",
          })
        );
      };

      const runFinishPhase = () => {
        if (reduced || !dom.wordmarkFill) return Promise.resolve();
        if (!fillSlices.length || fillU >= 0.999) {
          applyFillState(1);
          dom.wordmarkFill.removeAttribute("clip-path");
          return Promise.resolve();
        }
        const startU = fillU;
        const startTs = performance.now();
        const dur = Math.max(280, Math.min(520, Math.round(FINISH_SWEEP_MS * (0.65 + (1 - startU)))));
        return new Promise((resolve) => {
          const step = (now) => {
            if (finished) {
              resolve();
              return;
            }
            const t = Math.min(1, Math.max(0, (now - startTs) / dur));
            const eased = 0.5 - 0.5 * Math.cos(Math.PI * t);
            fillU = startU + (1 - startU) * eased;
            applyFillState(fillU);
            if (t < 1) {
              trackRaf(step);
            } else {
              fillU = 1;
              applyFillState(1);
              dom.wordmarkFill.removeAttribute("clip-path");
              resolve();
            }
          };
          trackRaf(step);
        });
      };

      const onResize = () => {
        if (finished || exitStarted) return;
        window.cancelAnimationFrame(resizeRaf);
        resizeRaf = trackRaf(() => {
          if (mode === "full" && !reduced) {
            buildStream();
            if (effectStarted) {
              buildFillAndTrace();
              if (traceAnim?.playState === "finished" && dom.traceRect) {
                dom.traceRect.style.transform = "translateX(0px)";
              }
            }
          }
        });
      };

      activeCleanup = () => {
        finished = true;
        window.removeEventListener("resize", onResize);
        window.cancelAnimationFrame(resizeRaf);
      };

      const finishArrival = () => {
        if (finished) return;
        finished = true;
        activeCleanup = null;
        window.removeEventListener("resize", onResize);
        window.cancelAnimationFrame(resizeRaf);

        clearMotionState({ restoreTheme: true, refreshScroll: true });
        if (!window.location.hash && (mode === "full" || isIndexPage())) {
          window.scrollTo(0, 0);
        }
      };

      const startExit = () => {
        if (exitStarted || finished) return;
        exitStarted = true;

        if (dom.counterEl) dom.counterEl.textContent = faFormatter.format(100);

        if (mode === "full" && !reduced) {
          streamAnims.forEach((a) => {
            try {
              a.playbackRate = 1.2;
            } catch {
              /* ignore */
            }
          });
        }

        const finishPromise = mode === "full" && !reduced ? runFinishPhase() : null;
        playDoorOpenSequence(dom, {
          preFade: mode === "full",
          finishPromise,
          reduced,
          onDone: finishArrival,
        });
      };

      const checkReady = () => {
        const minWait = mode === "full" ? FULL_MIN_MS : 0;
        const allTasksDone = fontDone && loadDone && imagesProgress >= 1;
        const effectReady = mode !== "full" || reduced || effectStarted;
        if (allTasksDone && effectReady && performance.now() - startTime >= minWait) {
          readyToExit = true;
          if (mode === "full" && !reduced && !exitStarted) {
            startExit();
          }
        }
      };

      const updateProgressConsumersLoop = () => {
        if (finished || exitStarted) return;
        const rawTarget = (fontProgress * 0.3 + imagesProgress * 0.35 + loadProgress * 0.35) * 100;
        const cappedTarget = Math.min(99, rawTarget);
        const nextDisplay = displayPct + (cappedTarget - displayPct) * 0.14;
        displayPct = Math.max(displayPct, cappedTarget - nextDisplay < 0.35 ? cappedTarget : nextDisplay);

        if (dom.counterEl) {
          dom.counterEl.textContent = faFormatter.format(Math.min(99, Math.round(displayPct)));
        }

        if (mode === "full" && !reduced && effectStarted && fillSlices.length) {
          const sinceEffect = Math.max(0, performance.now() - effectStartTime);
          const elapsedMin = Math.max(850, FULL_MIN_MS - WORDMARK_DELAY_MS - 260);
          const timeGate = Math.min(1, Math.max(0, (sinceEffect - 180) / elapsedMin));
          const targetU = Math.min(0.92, (displayPct / 100) * 0.92 * (0.1 + 0.9 * timeGate));
          const lerpedU = fillU + (targetU - fillU) * 0.085;
          fillU = Math.max(fillU, lerpedU);
          applyFillState(fillU);
        }

        if (!exitStarted && !finished) trackRaf(updateProgressConsumersLoop);
      };

      const buildStream = () => {
        if (finished || exitStarted || reduced || !dom.streamSvg) return;
        streamAnims.forEach((a) => {
          try {
            a.cancel();
          } catch {
            /* ignore */
          }
          activeAnims.delete(a);
        });
        streamAnims = [];
        dom.streamSvg.replaceChildren();

        const vw = window.innerWidth || 1440;
        const vh = window.innerHeight || 900;
        const isMobile = window.matchMedia("(max-width: 47.99em)").matches;
        const rowCount = isMobile ? 3 : 5;
        const fontSize = isMobile
          ? Math.max(38, Math.min(62, vh * 0.105))
          : Math.max(58, Math.min(126, vh * 0.145));
        const gap = fontSize * 0.36;
        const sqSize = Math.max(6, Math.round(fontSize * 0.085));
        const yMin = isMobile ? vh * 0.17 : vh * 0.13;
        const yMax = isMobile ? vh * 0.83 : vh * 0.87;
        const centerIdx = (rowCount - 1) / 2;

        for (let r = 0; r < rowCount; r++) {
          const dist = Math.abs(r - centerIdx);
          const rowOpacity = Math.max(0.24, 1 - dist * 0.36);
          const rowY = rowCount === 1 ? vh / 2 : yMin + ((yMax - yMin) * r) / (rowCount - 1);
          const dir = r % 2 === 0 ? -1 : 1;

          const rowGroup = svgEl("g", {
            opacity: rowOpacity.toFixed(2),
            transform: `translate(0, ${rowY.toFixed(1)})`,
          });
          const trackGroup = svgEl("g");
          const unitA = svgEl("g");
          rowGroup.append(trackGroup);
          trackGroup.append(unitA);
          dom.streamSvg.append(rowGroup);

          let cursor = 0;
          const shift = (r * 2) % STREAM_ITEMS.length;
          for (let k = 0; k < STREAM_ITEMS.length; k++) {
            const label = STREAM_ITEMS[(k + shift) % STREAM_ITEMS.length];
            const textEl = svgEl("text", {
              y: "0",
              "text-anchor": "middle",
              "dominant-baseline": "central",
              direction: "rtl",
              "unicode-bidi": "plaintext",
              fill: "none",
              stroke: "rgba(245, 245, 237, 0.12)",
              "stroke-width": "1",
              "vector-effect": "non-scaling-stroke",
              style: `font-family:Ayandeh,Vazirmatn,system-ui,sans-serif;font-weight:900;font-size:${fontSize.toFixed(1)}px`,
            });
            textEl.textContent = label;
            unitA.append(textEl);

            const textLen = textEl.getComputedTextLength() || fontSize * label.length * 0.52;
            textEl.setAttribute("x", (cursor + textLen / 2).toFixed(2));
            cursor += textLen + gap;

            unitA.append(
              svgEl("rect", {
                x: cursor.toFixed(2),
                y: (-sqSize / 2).toFixed(2),
                width: sqSize,
                height: sqSize,
                fill: "#9ac653",
                "fill-opacity": "0.5",
              })
            );
            cursor += sqSize + gap;
          }

          const unitW = Math.max(vw, cursor);
          const copies = Math.max(2, Math.ceil((vw * 1.5) / unitW) + 1);
          for (let c = 1; c < copies; c++) {
            const clone = unitA.cloneNode(true);
            clone.setAttribute("transform", `translate(${(c * unitW).toFixed(2)}, 0)`);
            trackGroup.append(clone);
          }

          trackGroup.style.willChange = "transform";
          const speedPxPerSec = 15 + (r % 3) * 4; // calm ~15..23 px/s
          const anim = trackAnim(
            trackGroup.animate(
              [
                { transform: `translate3d(${dir === -1 ? 0 : -unitW}px, 0, 0)` },
                { transform: `translate3d(${dir === -1 ? -unitW : 0}px, 0, 0)` },
              ],
              { duration: (unitW / speedPxPerSec) * 1000, iterations: Infinity, easing: "linear" }
            )
          );
          streamAnims.push(anim);
        }
      };

      // Font readiness (never block animation start; reveal wordmark <= 600ms)
      let fontRevealed = false;
      const startWordmarkEffect = () => {
        if (effectStarted || finished || exitStarted) return;
        effectStarted = true;
        effectStartTime = performance.now();

        if (mode === "full" && !reduced) {
          buildFillAndTrace();
          startTracePhase();
        }

        if (dom.wordmarkGroup) {
          dom.wordmarkGroup.classList.add("is-revealed");
          trackAnim(
            dom.wordmarkGroup.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: reduced ? 240 : 220,
              easing: "ease-out",
              fill: "forwards",
            })
          );
        }
        checkReady();
      };

      const revealWordmark = () => {
        if (fontRevealed || finished) return;
        fontRevealed = true;
        fontDone = true;
        fontProgress = 1;

        if (mode !== "full" || reduced) {
          startWordmarkEffect();
          return;
        }

        setManagedTimeout(startWordmarkEffect, WORDMARK_DELAY_MS);
      };

      const fontPromise = document.fonts?.load
        ? Promise.race([
            document.fonts.load("900 1em Ayandeh").catch(() => {}),
            new Promise((r) => setManagedTimeout(r, FONT_WAIT_CAP_MS)),
          ])
        : Promise.resolve();
      fontPromise.then(revealWordmark);
      setManagedTimeout(revealWordmark, FONT_WAIT_CAP_MS);

      // Window load readiness
      if (!loadDone) {
        window.addEventListener(
          "load",
          () => {
            loadDone = true;
            loadProgress = 1;
            checkReady();
          },
          { once: true }
        );
      }

      // First visible #hero-arc images readiness (index FULL only, capped at 2.5s)
      const trackHeroImages = () => {
        const arcEl = document.getElementById("hero-arc");
        if (!arcEl || mode !== "full") {
          imagesProgress = 1;
          checkReady();
          return;
        }
        const imgs = [...arcEl.querySelectorAll("img")].slice(0, 6);
        if (!imgs.length) {
          imagesProgress = 1;
          checkReady();
          return;
        }
        let done = 0;
        let resolved = false;
        const markOne = () => {
          if (resolved) return;
          done++;
          imagesProgress = Math.min(1, done / imgs.length);
          checkReady();
        };
        setManagedTimeout(() => {
          if (!resolved && imagesProgress < 1) {
            resolved = true;
            imagesProgress = 1;
            checkReady();
          }
        }, IMAGE_CAP_MS);

        imgs.forEach((img) => {
          const dec = () => {
            if (typeof img.decode === "function") img.decode().catch(() => {}).finally(markOne);
            else markOne();
          };
          if (img.complete) dec();
          else {
            img.addEventListener("load", dec, { once: true });
            img.addEventListener("error", markOne, { once: true });
          }
        });
      };

      window.addEventListener("resize", onResize, { passive: true });
      setManagedTimeout(() => {
        if (!finished && !exitStarted) {
          readyToExit = true;
          startExit();
        }
      }, HARD_CAP_MS - 1400);
      setManagedTimeout(() => {
        if (!finished) finishArrival();
      }, HARD_CAP_MS);

      if (reduced) {
        if (dom.wordmarkGroup) dom.wordmarkGroup.classList.add("is-revealed");
        setManagedTimeout(startExit, mode === "full" ? 300 : 120);
        return;
      }

      if (mode === "compact") {
        let openedEarly = false;

        const tryCompactOpen = () => {
          if (openedEarly || finished || exitStarted) return;
          if (fontDone && loadDone) {
            openedEarly = true;
            startExit();
          }
        };

        Promise.all([
          fontPromise,
          loadDone
            ? Promise.resolve()
            : new Promise((r) => window.addEventListener("load", r, { once: true })),
        ]).then(() => {
          if (performance.now() - startTime <= COMPACT_FAST_CAP_MS) {
            tryCompactOpen();
          }
        });

        setManagedTimeout(() => {
          if (openedEarly || finished || exitStarted) return;
          if (fontDone && loadDone) startExit();
          else {
            const waitFinish = () => {
              if (!finished && !exitStarted && fontDone && loadDone) startExit();
            };
            Promise.all([
              fontPromise,
              loadDone
                ? Promise.resolve()
                : new Promise((r) => window.addEventListener("load", r, { once: true })),
            ]).then(waitFinish);
          }
        }, COMPACT_FAST_CAP_MS);
        return;
      }

      // FULL mode start immediately
      buildStream();
      trackHeroImages();
      trackRaf(updateProgressConsumersLoop);
      setManagedTimeout(checkReady, FULL_MIN_MS);

      if (dom.liveBrand) {
        trackAnim(
          dom.liveBrand.animate(
            [
              { opacity: 0, transform: "translateY(-8px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 450, easing: DOOR_EASE, fill: "forwards" }
          )
        );
      }

      if (dom.liveLogoPaths.length) {
        dom.liveLogoPaths.forEach((p, idx) => {
          const len = p.getTotalLength();
          p.style.strokeDasharray = String(len);
          p.style.strokeDashoffset = String(len);
          trackAnim(
            p.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }], {
              duration: 1850,
              delay: 180 + idx * 160,
              easing: "cubic-bezier(0.45, 0, 0.55, 1)",
              fill: "forwards",
            })
          );
        });
      }
    } catch {
      clearMotionState({ restoreTheme: true, refreshScroll: false });
    }
  };

  const startLeave = (href) => {
    if (isTransitioning) return;
    isTransitioning = true;

    activeCleanup?.();
    activeCleanup = null;
    cancelAllPending();
    root.classList.remove("sp-hold", "is-loading");

    try {
      window.sessionStorage.setItem("ndt-nav", "1");
    } catch {
      /* ignore */
    }

    root.classList.add("is-leaving");
    setThemeColor(THEME_SPLASH);

    const reduced = isReducedMotion();
    let dom;
    try {
      dom = buildSplashDom("leave");
      dom.splashEl.classList.add("is-closing");
    } catch {
      clearMotionState({ restoreTheme: true, refreshScroll: false });
      isTransitioning = false;
      window.location.assign(href);
      return;
    }

    setManagedTimeout(() => {
      try {
        window.sessionStorage.removeItem("ndt-nav");
      } catch {
        /* ignore */
      }
      if (reduced) {
        clearMotionState({ restoreTheme: true, refreshScroll: false });
        isTransitioning = false;
        return;
      }
      playDoorOpenSequence(dom, {
        preFade: false,
        reduced: false,
        onDone: () => {
          clearMotionState({ restoreTheme: true, refreshScroll: false });
          isTransitioning = false;
        },
      });
    }, LEAVE_FAILSAFE_MS);

    if (reduced) {
      const a = trackAnim(
        dom.splashEl.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 200,
          easing: "linear",
          fill: "forwards",
        })
      );
      a.finished.then(
        () => window.location.assign(href),
        () => window.location.assign(href)
      );
      return;
    }

    const doorTiming = { duration: DOOR_CLOSE_MS, easing: DOOR_EASE, fill: "forwards" };
    const closeAnim = trackAnim(
      dom.leftLeaf.leaf.animate(
        [{ transform: "translate3d(-100%, 0, 0)" }, { transform: "translate3d(0, 0, 0)" }],
        doorTiming
      )
    );
    trackAnim(
      dom.leftLeaf.inner.animate(
        [{ transform: "translate3d(15%, 0, 0)" }, { transform: "translate3d(0, 0, 0)" }],
        doorTiming
      )
    );
    trackAnim(
      dom.rightLeaf.leaf.animate(
        [{ transform: "translate3d(100%, 0, 0)" }, { transform: "translate3d(0, 0, 0)" }],
        doorTiming
      )
    );
    trackAnim(
      dom.rightLeaf.inner.animate(
        [{ transform: "translate3d(-15%, 0, 0)" }, { transform: "translate3d(0, 0, 0)" }],
        doorTiming
      )
    );

    if (dom.liveBrandBar) {
      trackAnim(
        dom.liveBrandBar.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: Math.round(DOOR_CLOSE_MS * 0.5),
          delay: Math.round(DOOR_CLOSE_MS * 0.28),
          easing: SINE_INOUT,
          fill: "forwards",
        })
      );
    }

    if (dom.onIndex && dom.liveComp) {
      trackAnim(
        dom.liveComp.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: Math.round(DOOR_CLOSE_MS * 0.55),
          delay: Math.round(DOOR_CLOSE_MS * 0.42),
          easing: SINE_INOUT,
          fill: "forwards",
        })
      );
    } else if (dom.symbolWordmark) {
      trackAnim(
        dom.symbolWordmark.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: DOOR_CLOSE_MS,
          easing: SINE_INOUT,
          fill: "forwards",
        })
      );
    }

    closeAnim.finished.then(
      () => window.location.assign(href),
      () => window.location.assign(href)
    );
  };

  // Delegated capture-phase click listener for held internal navigation
  document.addEventListener(
    "click",
    (event) => {
      if (isTransitioning) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target?.closest?.("a[href]");
      if (!link) return;
      if (link.closest(".is-gliding, .is-grabbing")) return;

      const rawHref = (link.getAttribute("href") || "").trim();
      if (!rawHref || /^(?:mailto:|tel:|javascript:)/i.test(rawHref)) return;
      if (link.hasAttribute("download") || link.hasAttribute("data-no-transition")) return;

      const targetAttr = (link.getAttribute("target") || "").trim().toLowerCase();
      if (targetAttr === "_blank" || targetAttr === "_top") return;

      const relTokens = (link.getAttribute("rel") || "").toLowerCase().split(/\s+/);
      if (relTokens.includes("external")) return;

      let targetUrl;
      try {
        targetUrl = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (targetUrl.origin !== window.location.origin) return;
      if (targetUrl.protocol !== "http:" && targetUrl.protocol !== "https:") return;

      const sameDoc =
        normalizePath(targetUrl.pathname) === normalizePath(window.location.pathname) &&
        targetUrl.search === window.location.search;
      if (sameDoc && (rawHref.startsWith("#") || targetUrl.hash !== window.location.hash)) {
        return;
      }

      event.preventDefault();
      startLeave(targetUrl.href);
    },
    true
  );

  // Restore clean state if returning via browser bfcache
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    try {
      window.sessionStorage.removeItem("ndt-nav");
    } catch {
      /* ignore */
    }
    forceAbortAll();
    if (isIndexPage()) {
      import("./motion.js")
        .then((m) => m.ScrollTrigger?.refresh?.())
        .catch(() => {});
    }
  });

  let hasNav = false;
  try {
    hasNav = Boolean(window.sessionStorage.getItem("ndt-nav"));
    if (hasNav) window.sessionStorage.removeItem("ndt-nav");
  } catch {
    hasNav = false;
  }

  const navType = getNavigationType();
  const mode = hasNav || navType === "back_forward" ? "compact" : "full";

  const startOnDomReady = () => runArrival(mode);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startOnDomReady, { once: true });
  } else {
    startOnDomReady();
  }
}

initSplashSystem();
