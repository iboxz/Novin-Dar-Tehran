const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const VERT_SRC = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG_SRC = `
precision mediump float;

uniform vec2 u_res;
uniform float u_time;
uniform vec4 u_pointer; // x, y (0..1), vx, vy
uniform float u_active;
uniform vec4 u_drops[8]; // x, y, age, strength

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 aspect = vec2(u_res.x / min(u_res.x, u_res.y), u_res.y / min(u_res.x, u_res.y));
  vec2 p = (uv - 0.5) * aspect;
  float t = u_time;

  // Ambient viscous silk-fluid wave sheets + analytical gradient
  float a1 = p.x * 2.5 + 0.55 * sin(p.y * 2.1 + t * 0.42) + t * 0.22;
  float a2 = p.y * 2.7 + 0.55 * cos(p.x * 2.2 - t * 0.36) - t * 0.18;
  float a3 = (p.x - p.y) * 1.9 + 0.4 * sin((p.x + p.y) * 1.6 + t * 0.29);

  float h = 0.28 * sin(a1) + 0.26 * cos(a2) + 0.20 * sin(a3);
  vec2 grad = vec2(
    0.28 * 2.5 * cos(a1) + 0.26 * sin(a2) * 0.55 * 2.2 * sin(p.x * 2.2 - t * 0.36) + 0.20 * 1.9 * cos(a3),
    0.28 * cos(a1) * 0.55 * 2.1 * cos(p.y * 2.1 + t * 0.42) - 0.26 * 2.7 * sin(a2) - 0.20 * 1.9 * cos(a3)
  );

  // Interactive cursor meniscus & drag wake
  vec2 mp = (u_pointer.xy - 0.5) * aspect;
  vec2 dm = p - mp;
  float r2 = dot(dm, dm);
  float mEnv = exp(-r2 * 14.0) * u_active;
  float drag = dot(dm, u_pointer.zw);
  h += mEnv * (0.28 - drag * 1.6);
  grad += mEnv * (-28.0 * dm * (0.28 - drag * 1.6) - u_pointer.zw * 1.6);

  // Cursor drag & expanding viscous concentric liquid ripples
  for (int i = 0; i < 8; i++) {
    vec4 d = u_drops[i];
    if (d.w <= 0.001) continue;
    vec2 dp = (d.xy - 0.5) * aspect;
    vec2 diff = p - dp;
    float r = length(diff) + 0.0005;
    float dr = r - d.z * 0.46;
    float env = exp(-dr * dr * 48.0) * exp(-r * 2.0) * exp(-d.z * 1.15) * d.w * 0.34;
    float k = 26.0;
    float s = sin(dr * k);
    float c = cos(dr * k);
    h += s * env;
    grad += (diff / r) * (c * k - s * (96.0 * dr + 2.0)) * env;
  }

  vec3 N = normalize(vec3(-grad * 0.28, 1.0));
  vec3 L = normalize(vec3(-0.36, 0.70, 0.90));
  vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));

  float diffLight = clamp(dot(N, L), 0.0, 1.0);
  float spec = pow(clamp(dot(N, H), 0.0, 1.0), 24.0);
  float fresnel = pow(1.0 - clamp(N.z, 0.0, 1.0), 1.9);

  // Clean luminous porcelain-white liquid palette
  vec3 troughColor = vec3(0.904, 0.909, 0.884);
  vec3 baseWhite   = vec3(0.974, 0.973, 0.960);
  vec3 crestWhite  = vec3(1.000, 1.000, 0.998);
  vec3 sageWhisper = vec3(0.946, 0.968, 0.928);

  vec3 col = mix(troughColor, baseWhite, smoothstep(0.14, 0.84, diffLight * 0.72 + h * 0.24 + 0.24));
  col = mix(col, crestWhite, clamp(spec * 0.92 + fresnel * 0.24, 0.0, 1.0));
  col = mix(col, sageWhisper, clamp(spec * 0.34 * u_active, 0.0, 0.34));

  // Clear luminous sheen around cursor
  float spot = exp(-r2 * 9.5) * u_active;
  col = mix(col, crestWhite, spot * 0.36);

  // Subtle tactile grain
  float grain = (hash12(gl_FragCoord.xy + fract(t * 7.3) * 190.0) - 0.5) * 0.02;
  col += grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

export function initHeroCanvas() {
  const canvas = document.getElementById("hero-liquid");
  if (!canvas || canvas.dataset.init) return;
  canvas.dataset.init = "1";

  const stage = canvas.closest(".hero-stage") || canvas.parentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isPaused = () =>
    reduced.matches || document.documentElement.classList.contains("motion-paused");

  let gl = null;
  let ctx2d = null;
  let prog = null;
  let uniforms = null;

  try {
    gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "high-performance" });
  } catch {
    gl = null;
  }

  const compile = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  };

  if (gl) {
    const vs = compile(gl.VERTEX_SHADER, VERT_SRC);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG_SRC);
    if (vs && fs) {
      prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        prog = null;
      }
    }
    if (prog) {
      gl.useProgram(prog);
      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(prog, "a_pos");
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      uniforms = {
        res: gl.getUniformLocation(prog, "u_res"),
        time: gl.getUniformLocation(prog, "u_time"),
        pointer: gl.getUniformLocation(prog, "u_pointer"),
        active: gl.getUniformLocation(prog, "u_active"),
        drops: gl.getUniformLocation(prog, "u_drops[0]"),
      };
    } else {
      gl = null;
    }
  }

  if (!gl) {
    ctx2d = canvas.getContext("2d");
  }

  const drops = Array.from({ length: 8 }, () => ({ x: 0.5, y: 0.5, age: 10, strength: 0 }));
  let dropCursor = 0;

  const state = {
    tx: 0.5,
    ty: 0.5,
    x: 0.5,
    y: 0.5,
    vx: 0,
    vy: 0,
    tActive: 0,
    active: 0,
    lastSpawnX: 0.5,
    lastSpawnY: 0.5,
    lastTime: 0,
    simTime: 0,
    visible: true,
    raf: 0,
  };

  let cw = 1;
  let ch = 1;
  const resize = () => {
    const r = canvas.getBoundingClientRect();
    const scale = Math.min(window.devicePixelRatio || 1, 1.0) * 0.72;
    cw = Math.max(1, Math.round(r.width * scale));
    ch = Math.max(1, Math.round(r.height * scale));
    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
    }
    if (gl) gl.viewport(0, 0, cw, ch);
  };

  const spawnDrop = (u, v, strength = 0.85) => {
    drops[dropCursor].x = u;
    drops[dropCursor].y = v;
    drops[dropCursor].age = 0;
    drops[dropCursor].strength = strength;
    dropCursor = (dropCursor + 1) % drops.length;
  };

  const handlePointer = (clientX, clientY, strength = 0.85) => {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const nx = clamp((clientX - r.left) / r.width, 0, 1);
    const ny = clamp(1 - (clientY - r.top) / r.height, 0, 1);
    state.tx = nx;
    state.ty = ny;
    state.tActive = 1;

    if (Math.hypot(nx - state.lastSpawnX, ny - state.lastSpawnY) > 0.028) {
      state.lastSpawnX = nx;
      state.lastSpawnY = ny;
      spawnDrop(nx, ny, strength);
    }
    wake();
  };

  const resetPointer = () => {
    state.tActive = 0;
  };

  const dropFlat = new Float32Array(8 * 4);

  const draw2DFallback = () => {
    if (!ctx2d) return;
    ctx2d.fillStyle = "#f7f7f3";
    ctx2d.fillRect(0, 0, cw, ch);
    const px = state.x * cw;
    const py = (1 - state.y) * ch;
    const g = ctx2d.createRadialGradient(px, py, 0, px, py, Math.max(cw, ch) * 0.35);
    g.addColorStop(0, "rgba(255,255,255,0.95)");
    g.addColorStop(0.5, "rgba(232,235,226,0.65)");
    g.addColorStop(1, "rgba(247,247,243,0)");
    ctx2d.fillStyle = g;
    ctx2d.fillRect(0, 0, cw, ch);

    for (const d of drops) {
      if (d.strength <= 0.01) continue;
      const alpha = Math.max(0, 0.38 * (1 - d.age * 0.6)) * d.strength;
      if (alpha <= 0.005) continue;
      ctx2d.beginPath();
      ctx2d.arc(d.x * cw, (1 - d.y) * ch, (20 + d.age * 180) * (cw / 1000), 0, Math.PI * 2);
      ctx2d.strokeStyle = `rgba(216,220,208,${alpha.toFixed(3)})`;
      ctx2d.lineWidth = 2;
      ctx2d.stroke();
    }
  };

  const tick = (now) => {
    state.raf = 0;
    const dt = state.lastTime ? Math.min(0.05, (now - state.lastTime) / 1000) : 0.016;
    state.lastTime = now;

    if (isPaused()) {
      if (gl && uniforms) {
        gl.uniform2f(uniforms.res, cw, ch);
        gl.uniform1f(uniforms.time, state.simTime);
        gl.uniform4f(uniforms.pointer, 0.5, 0.5, 0, 0);
        gl.uniform1f(uniforms.active, 0);
        gl.uniform4fv(uniforms.drops, dropFlat);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      } else {
        draw2DFallback();
      }
      return;
    }

    state.simTime += dt;
    const prevX = state.x;
    const prevY = state.y;
    state.x += (state.tx - state.x) * 0.14;
    state.y += (state.ty - state.y) * 0.14;
    state.vx = state.vx * 0.84 + (state.x - prevX) * 6.0;
    state.vy = state.vy * 0.84 + (state.y - prevY) * 6.0;
    state.active += (state.tActive - state.active) * 0.1;

    for (let i = 0; i < 8; i++) {
      const d = drops[i];
      if (d.strength > 0) {
        d.age += dt;
        if (d.age > 2.2) d.strength = 0;
      }
      dropFlat[i * 4] = d.x;
      dropFlat[i * 4 + 1] = d.y;
      dropFlat[i * 4 + 2] = d.age;
      dropFlat[i * 4 + 3] = d.strength;
    }

    if (gl && uniforms) {
      gl.uniform2f(uniforms.res, cw, ch);
      gl.uniform1f(uniforms.time, state.simTime);
      gl.uniform4f(uniforms.pointer, state.x, state.y, clamp(state.vx, -0.4, 0.4), clamp(state.vy, -0.4, 0.4));
      gl.uniform1f(uniforms.active, state.active);
      gl.uniform4fv(uniforms.drops, dropFlat);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    } else {
      draw2DFallback();
    }

    const stageVisible = state.visible && (!stage || parseFloat(getComputedStyle(stage).opacity) > 0.02);
    if (stageVisible && !document.hidden) {
      state.raf = requestAnimationFrame(tick);
    }
  };

  const wake = () => {
    if (!state.raf && !document.hidden) {
      state.lastTime = 0;
      state.raf = requestAnimationFrame(tick);
    }
  };

  if (stage) {
    stage.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "touch") handlePointer(e.clientX, e.clientY, 0.9);
    }, { passive: true });
    stage.addEventListener("pointerdown", (e) => {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const nx = clamp((e.clientX - r.left) / r.width, 0, 1);
      const ny = clamp(1 - (e.clientY - r.top) / r.height, 0, 1);
      spawnDrop(nx, ny, 1.55);
      handlePointer(e.clientX, e.clientY, 1.2);
    }, { passive: true });
    stage.addEventListener("pointerleave", resetPointer, { passive: true });
    stage.addEventListener("touchmove", (e) => {
      const t = e.touches[0];
      if (t) handlePointer(t.clientX, t.clientY, 0.95);
    }, { passive: true });
    stage.addEventListener("touchend", resetPointer, { passive: true });
  }

  if ("ResizeObserver" in window && stage) {
    new ResizeObserver(() => resize()).observe(stage);
  }

  if ("IntersectionObserver" in window && stage) {
    new IntersectionObserver(
      (entries) => {
        state.visible = entries[0]?.isIntersecting ?? true;
        if (state.visible) wake();
      },
      { threshold: 0.01 },
    ).observe(stage);
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) wake();
  });

  window.addEventListener("resize", () => {
    resize();
    wake();
  }, { passive: true });

  resize();
  wake();
}
