import { Scene, Group, Mesh, BoxGeometry, CylinderGeometry, PlaneGeometry, MeshStandardMaterial, ShadowMaterial, OrthographicCamera, WebGLRenderer, HemisphereLight, DirectionalLight, Vector3, MathUtils, PCFSoftShadowMap, SRGBColorSpace } from 'three';
const clamp = MathUtils.clamp;
const lerp = MathUtils.lerp;
const smooth = value => { const t = clamp(value, 0, 1); return t * t * (3 - 2 * t); };
const unit = new BoxGeometry(1, 1, 1);
const cylinderUnit = new CylinderGeometry(1, 1, 1, 12);
const material = (color, extra = {}) => new MeshStandardMaterial({ color, roughness: .82, metalness: .08, flatShading: true, ...extra });
const materials = {
  stone: material(0xd5d3c5), chalk: material(0xe9e7db), edge: material(0xb5bcac),
  ink: material(0x25372e), dark: material(0x17251d), steel: material(0xabb8ac, { metalness: .52, roughness: .45 }),
  green: material(0x95bf52), timber: material(0xb6a079), timberDark: material(0xa68f69),
  glass: material(0x78958b, { transparent: true, opacity: .34, depthWrite: false, roughness: .25 }),
  highlight: material(0xe4eee2, { transparent: true, opacity: .5, depthWrite: false }), road: material(0x8a9487)
};
const box = (parent, x, y, z, w, h, d, mat = materials.ink) => {
  const mesh = new Mesh(unit, mat); mesh.position.set(x, y, z); mesh.scale.set(w, h, d);
  mesh.castShadow = !mat.transparent; mesh.receiveShadow = true; parent.add(mesh); return mesh;
};
const cylinder = (parent, x, y, z, r, h, mat = materials.steel) => {
  const mesh = new Mesh(cylinderUnit, mat); mesh.position.set(x, y, z); mesh.scale.set(r, h, r);
  mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
};
const group = (parent, x = 0, y = 0, z = 0) => { const g = new Group(); g.position.set(x, y, z); parent.add(g); return g; };
const platform = (root, width = 7.6, depth = 4.2) => {
  box(root, 0, -.16, 0, width, .22, depth, materials.stone);
  box(root, 0, -.035, 0, width - .12, .06, depth - .12, materials.chalk);
};
const framePanel = (parent, w, h, { timber = false, green = false, horizontal = false, frameless = false } = {}) => {
  box(parent, 0, h / 2, 0, w, h, .045, timber ? materials.timber : materials.glass);
  [-1, 1].forEach(s => box(parent, s * (w / 2 - (frameless ? .006 : .03)), h / 2, .005, frameless ? .012 : .06, h, frameless ? .05 : .09, frameless ? materials.steel : materials.ink));
  [0, h].forEach(y => box(parent, 0, y, .005, w + .035, frameless ? .04 : .075, .1, frameless ? materials.steel : materials.ink));
  if (timber) {
    const count = Math.round(w / .2);
    for (let i = 0; i < count; i++) box(parent, -w / 2 + (i + .5) * w / count, h / 2, .04, w / count - .018, h - .12, .08, i % 3 ? materials.timber : materials.timberDark);
    box(parent, 0, h * .43, .1, w, .11, .08);
  } else {
    if (!frameless) box(parent, 0, h * .51, .005, w, .04, .07);
    box(parent, -w * .28, h * .65, .033, .015, h * .38, .006, materials.highlight);
    if (horizontal) for (let x = -w / 2 + w / 3; x < w / 2; x += w / 3) box(parent, x, h / 2, 0, .045, h, .075);
  }
  if (green) box(parent, 0, .05, .062, w * .93, .035, .026, materials.green);
};
const actuator = parent => {
  const body = cylinder(parent, 0, 0, 0, .066, 1, materials.ink);
  const rod = cylinder(parent, 0, 0, 0, .03, 1, materials.steel);
  const cap = cylinder(parent, 0, 0, 0, .075, .09, materials.green);
  const direction = new Vector3(); const up = new Vector3(0, 1, 0);
  return (a, b) => {
    direction.subVectors(b, a); const length = direction.length(); direction.normalize();
    const first = length * .57;
    body.position.copy(a).addScaledVector(direction, first / 2); body.scale.y = first;
    rod.position.copy(a).addScaledVector(direction, first + (length - first) / 2); rod.scale.y = length - first;
    cap.position.copy(a).addScaledVector(direction, .07);
    [body, rod, cap].forEach(m => m.quaternion.setFromUnitVectors(up, direction));
  };
};
function buildGate(hero = false) {
  const root = new Group(); platform(root, 7.7, 4.4);
  [-1, 1].forEach(s => {
    box(root, s * 2.86, 1.55, 0, .64, 3.1, .8, materials.stone);
    box(root, s * 2.86, 3.13, 0, .73, .09, .91, materials.chalk);
    box(root, s * 3.38, .95, -.09, .4, 1.9, .6, materials.chalk);
    [1, 2].forEach(y => box(root, s * 2.86, y, .405, .64, .012, .012, materials.edge));
  });
  if (hero) {
    box(root, 0, 3.29, -.06, 6.45, .25, 1.12, materials.chalk);
    box(root, 0, 3.12, .36, 5.12, .065, .12, materials.ink);
    box(root, -3.23, .08, .4, .04, .012, 1.7, materials.green);
  }
  const leaves = [-1, 1].map(side => {
    const hingeX = side * 2.51; const g = group(root, hingeX, .15, .03);
    const panel = group(g, -side * 1.235, 0, 0); framePanel(panel, 2.45, 2.63, { timber: true });
    [.35, 2.36].forEach(y => cylinder(root, hingeX, y, .055, .066, .22, materials.ink));
    const drive = actuator(root); return { g, side, hingeX, drive };
  });
  box(root, 2.9, 1.3, .435, .19, .3, .055, materials.ink);
  box(root, 2.9, 1.37, .468, .11, .055, .008, materials.green);
  return { root, update(p) {
    const a = smooth(p) * Math.PI * .43;
    leaves.forEach(({ g, side, hingeX, drive }) => {
      g.rotation.y = side * a;
      const local = new Vector3(-side * .97, 1.12, .18).applyAxisAngle(new Vector3(0, 1, 0), g.rotation.y);
      const end = new Vector3(hingeX + local.x, 1.12, .03 + local.z);
      drive(new Vector3(hingeX + side * .13, 1.12, .43), end);
    });
  } };
}
function buildGlass() {
  const root = new Group(); platform(root, 7.5, 4.1);
  box(root, 0, .04, -.65, 6.65, .075, 1.8, materials.edge);
  [-1, 1].forEach(s => {
    box(root, s * 3.27, 1.6, -.06, .24, 3.2, .45, materials.stone);
    const fixed = group(root, s * 2.36, .08, -.065); framePanel(fixed, 1.46, 2.92);
  });
  box(root, 0, 3.14, 0, 6.75, .31, .42, materials.steel);
  box(root, 0, 3.04, .23, .32, .115, .11, materials.ink);
  box(root, 0, 3.06, .293, .15, .032, .012, materials.green);
  box(root, 0, .055, .055, 6.35, .04, .23, materials.ink);
  const leaves = [-1, 1].map(s => { const g = group(root, s * .785, .085, .07); framePanel(g, 1.52, 2.9); box(g, -s * .57, 1.32, .073, .024, .36, .04, materials.steel); return { g, s }; });
  box(root, 0, .006, 1.22, 2.4, .014, .66, materials.road);
  return { root, update(p) { leaves.forEach(({ g, s }) => { g.position.x = s * (.785 + smooth(p) * 1.54); }); } };
}
function buildShutter() {
  const root = new Group(); platform(root, 7.5, 4.4);
  [-1, 1].forEach(s => { box(root, s * 2.96, 1.7, -.22, .77, 3.4, .9, materials.stone); box(root, s * 2.62, 1.48, .065, .11, 2.97, .2, materials.ink); });
  box(root, 0, 3.31, -.19, 6.74, .5, .85, materials.chalk);
  box(root, 0, 3.34, .25, 5.45, .4, .08, materials.edge);
  const axle = cylinder(root, 0, 3.1, -.35, .28, 5.12, materials.ink); axle.rotation.z = Math.PI / 2;
  box(root, 2.93, 2.65, .35, .28, .59, .27, materials.green);
  box(root, 2.93, 2.23, .35, .05, .25, .04, materials.ink);
  const slats = Array.from({ length: 21 }, (_, i) => box(root, 0, .13 + i * .14, .07, 5.2, .132, .09, i % 2 ? materials.steel : materials.edge));
  const bottom = box(root, 0, .065, .08, 5.23, .12, .13, materials.ink);
  return { root, update(p) {
    const lift = smooth(p) * 3.26;
    slats.forEach((slat, i) => {
      const distance = .13 + i * .14 + lift;
      if (distance <= 2.96) { slat.position.set(0, distance, .07); slat.rotation.x = 0; }
      else { const angle = (distance - 2.96) / .29; const r = .29 + Math.floor(angle / (Math.PI * 2)) * .025; slat.position.set(0, 2.96 + r * Math.sin(angle), .07 - r + r * Math.cos(angle)); slat.rotation.x = -angle; }
    });
    bottom.position.y = Math.min(3.04, .065 + lift);
  } };
}
function buildBarrier() {
  const root = new Group(); platform(root, 7.5, 4.4);
  box(root, .6, .025, 0, 5.2, .035, 4.18, materials.road);
  [-1.05, .4, 1.85].forEach(z => box(root, .8, .047, z, .065, .012, .7, materials.chalk));
  const x = -2.68;
  box(root, x, .89, 0, .64, 1.78, .77, materials.ink);
  box(root, x, 1.81, 0, .7, .1, .83, materials.green);
  box(root, x, .81, .395, .46, 1.23, .033, materials.edge);
  box(root, x + .13, 1.15, .42, .07, .1, .035, materials.ink);
  box(root, x, 1.53, .41, .22, .11, .035, materials.dark);
  const pivot = group(root, x, 1.65, .08);
  const bearing = cylinder(pivot, 0, 0, 0, .18, .22, materials.steel); bearing.rotation.x = Math.PI / 2;
  box(pivot, 2.37, .025, .17, 4.84, .15, .16, materials.chalk);
  for (let i = 0; i < 6; i++) box(pivot, .5 + i * .74, .025, .262, .23, .152, .024, materials.ink);
  box(pivot, 4.71, .025, .264, .13, .154, .026, materials.green);
  box(root, 2.15, .75, .22, .16, 1.5, .16, materials.ink);
  box(root, 2.15, 1.5, .22, .31, .08, .26, materials.steel);
  return { root, tall: true, update(p) { pivot.rotation.z = smooth(p) * Math.PI * .47; } };
}
function buildBalcony() {
  const root = new Group(); platform(root, 7.5, 5);
  box(root, 0, .07, -.28, 6.1, .13, 3.6, materials.timberDark);
  for (let z = -1.95; z < 1.5; z += .27) box(root, 0, .141, z, 6.06, .015, .016, materials.timber);
  [-1, 1].forEach(s => {
    [-1.6, 1.4].forEach(z => box(root, s * 2.9, 1.65, z, .17, 3.02, .17, materials.timber));
    box(root, s * 2.9, 3.12, -.1, .19, .25, 3.5, materials.timber);
    const fixed = group(root, s * 2.9, .19, -.13); fixed.rotation.y = Math.PI / 2; framePanel(fixed, 2.88, 2.76, { frameless: true });
  });
  [-1.65, 1.43].forEach(z => { box(root, 0, 3.12, z, 6.11, .27, .19, materials.timber); box(root, 0, .18, z, 5.8, .055, .075, materials.steel); });
  box(root, 0, 3.31, -.08, 6.32, .1, 3.54, materials.chalk);
  const panes = Array.from({ length: 6 }, (_, i) => {
    const hinge = group(root, -2.82 + i * .947, .22, 1.45);
    const panel = group(hinge, .46, 0, 0); framePanel(panel, .92, 2.73, { frameless: true });
    box(panel, .3, 1.2, .04, .02, .22, .03, materials.steel); return hinge;
  });
  box(root, 0, 2.93, 1.55, 5.7, .023, .025, materials.green);
  return { root, update(p) {
    panes.forEach((hinge, i) => {
      const q = clamp(p * 6 - i, 0, 1);
      hinge.position.x = lerp(-2.82 + i * .947, -2.82 + i * .08, smooth(q / .56));
      hinge.rotation.y = smooth((q - .5) / .5) * Math.PI / 2;
    });
  } };
}
function buildFolding(sectional = false) {
  const root = new Group(); platform(root, 7.7, sectional ? 6 : 4.4);
  [-1, 1].forEach(s => { box(root, s * 2.93, 1.62, -.16, .55, 3.24, .7, materials.stone); box(root, s * 2.62, 1.57, .14, .075, 3.1, .16, materials.ink); });
  box(root, 0, 3.3, -.4, 6.43, .25, 1.35, materials.chalk);
  box(root, 0, 3.1, .23, 5.34, .12, .19, materials.ink);
  if (!sectional) {
    const top = group(root, 0, 3.08, .22);
    const upper = group(top, 0, -1.46, 0); framePanel(upper, 5.21, 1.46, { horizontal: true });
    const lower = group(top, 0, -1.46, 0); const lowerPanel = group(lower, 0, -1.46, 0); framePanel(lowerPanel, 5.21, 1.46, { horizontal: true, green: true });
    [-2.3, 0, 2.3].forEach(x => { const hinge = cylinder(top, x, -1.46, .075, .045, .19, materials.steel); hinge.rotation.z = Math.PI / 2; });
    return { root, update(p) { const angle = smooth(p) * Math.PI * .46; top.rotation.x = -angle; lower.rotation.x = 2 * angle; } };
  }
  [-1, 1].forEach(s => box(root, s * 2.57, 3.16, -1.83, .065, .09, 3.6, materials.steel));
  box(root, 0, 3.37, -2.17, .46, .21, .55, materials.green);
  box(root, 0, 3.25, -1.73, .075, .04, 3.5, materials.steel);
  const panels = Array.from({ length: 6 }, (_, i) => { const g = group(root, 0, .26 + i * .477, .21); box(g, 0, 0, 0, 5.2, .456, .115, materials.edge); box(g, 0, .2, .069, 5.14, .015, .016, materials.steel); if (i === 4) [-1.55, 0, 1.55].forEach(x => box(g, x, 0, .063, .86, .22, .018, materials.ink)); return g; });
  return { root, wide: true, update(p) {
    panels.forEach((g, i) => {
      const distance = .26 + i * .477 + smooth(p) * 3.43; const extra = distance - 2.57; const r = .48;
      if (extra < 0) { g.position.set(0, distance, .21); g.rotation.x = 0; }
      else if (extra < r * Math.PI / 2) { const a = extra / r; g.position.set(0, 2.57 + r * Math.sin(a), .21 - r + r * Math.cos(a)); g.rotation.x = -a; }
      else { g.position.set(0, 3.05, .21 - r - (extra - r * Math.PI / 2)); g.rotation.x = -Math.PI / 2; }
    });
  } };
}

function createStage(host, models) {
  let renderer;
  try { renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
  catch { host.dataset.rendering = 'static'; return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, matchMedia('(max-width:63.99em)').matches ? 1.25 : 1.5));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.append(renderer.domElement); host.classList.add('has-renderer');
  const scene = new Scene(); const camera = new OrthographicCamera(-5, 5, 4, -4, .1, 60);
  camera.position.set(7, 6.4, 10); camera.lookAt(0, 1.25, 0);
  scene.add(new HemisphereLight(0xffffff, 0x909b86, 2.55));
  const sun = new DirectionalLight(0xfff8e8, 3.15); sun.position.set(-3, 9, 6); sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024); sun.shadow.camera.left = -7; sun.shadow.camera.right = 7;
  sun.shadow.camera.top = 7; sun.shadow.camera.bottom = -7; sun.shadow.normalBias = .035;
  scene.add(sun);
  const floor = new Mesh(new PlaneGeometry(24, 24), new ShadowMaterial({ opacity: .12 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = -.275; floor.receiveShadow = true; scene.add(floor);
  Object.values(models).forEach(model => { scene.add(model.root); model.root.visible = false; model.update(0); });
  let selected; let frame = 0; let visible = true;
  let startX = null; let startRotation = 0;
  host.tabIndex = 0;
  host.setAttribute('aria-keyshortcuts', 'ArrowLeft ArrowRight Home');
  const rotate = angle => { if (!selected) return; selected.root.rotation.y = clamp(angle, -.6, .6); host.dataset.rotation = selected.root.rotation.y.toFixed(3); draw(); };
  host.addEventListener('pointerdown', event => { if (!event.isPrimary || event.button !== 0) return; startX = event.clientX; startRotation = selected?.root.rotation.y || 0; host.setPointerCapture(event.pointerId); });
  host.addEventListener('pointermove', event => { if (startX !== null) rotate(startRotation + (event.clientX - startX) * .005); });
  const release = () => { startX = null; };
  host.addEventListener('pointerup', release); host.addEventListener('pointercancel', release);
  host.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home'].includes(event.key)) return;
    event.preventDefault(); rotate(event.key === 'Home' ? 0 : (selected?.root.rotation.y || 0) + (event.key === 'ArrowLeft' ? -.12 : .12));
  });
  const draw = () => {
    if (frame || !visible || document.hidden) return;
    frame = requestAnimationFrame(() => { frame = 0; renderer.render(scene, camera); });
  };
  const resize = () => {
    const width = host.clientWidth, height = host.clientHeight;
    if (!width || !height) return;
    const aspect = width / height; const viewHeight = Math.max(selected?.tall ? 8.6 : 5.9, (selected?.wide ? 10.6 : 9.4) / aspect);
    camera.left = -viewHeight * aspect / 2; camera.right = viewHeight * aspect / 2;
    camera.top = viewHeight / 2; camera.bottom = -viewHeight / 2;
    camera.position.set(7, selected?.tall ? 7.9 : 6.4, 10); camera.lookAt(0, selected?.tall ? 2.3 : 1.25, 0);
    camera.updateProjectionMatrix(); renderer.setSize(width, height, false); draw();
  };
  new ResizeObserver(resize).observe(host);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) draw(); }, { rootMargin: '150px' }).observe(host);
  document.addEventListener('visibilitychange', draw);
  renderer.domElement.addEventListener('webglcontextlost', event => { event.preventDefault(); host.classList.remove('has-renderer'); host.dataset.rendering = 'static'; });
  renderer.domElement.addEventListener('webglcontextrestored', () => { host.classList.add('has-renderer'); host.dataset.rendering = 'webgl'; draw(); });
  return {
    select(key) {
      const model = models[key]; if (selected === model) return;
      if (selected) selected.root.visible = false;
      selected = model; selected.root.visible = true; host.dataset.model = key; resize();
    },
    update(progress) { if (!selected) return; selected.update(progress); host.dataset.progress = progress.toFixed(3); draw(); },
    refresh: resize
  };
}

export { createStage, buildGate, buildGlass, buildShutter, buildBarrier, buildBalcony, buildFolding };
