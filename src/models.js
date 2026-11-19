import { THREE } from "./vendor/libs.js";

const {
  Group,
  Vector3,
  BoxGeometry,
  CylinderGeometry,
  PlaneGeometry,
  MeshStandardMaterial,
  ShadowMaterial,
  Mesh,
  Scene,
  OrthographicCamera,
  HemisphereLight,
  DirectionalLight,
  WebGLRenderer,
  PCFSoftShadowMap,
  SRGBColorSpace,
  MathUtils,
} = THREE;

const clamp = MathUtils.clamp;
const lerp = MathUtils.lerp;

const smoothstep = (value) => {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
};

const UNIT_BOX = new BoxGeometry(1, 1, 1);
const UNIT_CYLINDER = new CylinderGeometry(1, 1, 1, 12);

const makeMaterial = (color, overrides = {}) =>
  new MeshStandardMaterial({
    color,
    roughness: 0.82,
    metalness: 0.08,
    flatShading: true,
    ...overrides,
  });

const MATERIALS = {
  stone: makeMaterial(14013381),
  chalk: makeMaterial(15329243),
  edge: makeMaterial(11910316),
  ink: makeMaterial(2438958),
  dark: makeMaterial(1516829),
  steel: makeMaterial(11253932, { metalness: 0.52, roughness: 0.45 }),
  green: makeMaterial(9813842),
  timber: makeMaterial(11968633),
  timberDark: makeMaterial(10915689),
  glass: makeMaterial(7902603, {
    transparent: true,
    opacity: 0.34,
    depthWrite: false,
    roughness: 0.25,
  }),
  highlight: makeMaterial(15003362, {
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  }),
  road: makeMaterial(9081991),
};

const addBox = (parent, x, y, z, w, h, d, material = MATERIALS.ink) => {
  const mesh = new Mesh(UNIT_BOX, material);
  mesh.position.set(x, y, z);
  mesh.scale.set(w, h, d);
  mesh.castShadow = !material.transparent;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const addCylinder = (parent, x, y, z, r, h, material = MATERIALS.steel) => {
  const mesh = new Mesh(UNIT_CYLINDER, material);
  mesh.position.set(x, y, z);
  mesh.scale.set(r, h, r);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

const addGroup = (parent, x = 0, y = 0, z = 0) => {
  const group = new Group();
  group.position.set(x, y, z);
  parent.add(group);
  return group;
};

const addPlinth = (parent, width = 7.6, depth = 4.2) => {
  addBox(parent, 0, -0.16, 0, width, 0.22, depth, MATERIALS.stone);
  addBox(parent, 0, -0.035, 0, width - 0.12, 0.06, depth - 0.12, MATERIALS.chalk);
};

const addPanel = (
  parent,
  width,
  height,
  { timber = false, green = false, horizontal = false, frameless = false } = {}
) => {
  addBox(
    parent,
    0,
    height / 2,
    0,
    width,
    height,
    0.045,
    timber ? MATERIALS.timber : MATERIALS.glass
  );

  [-1, 1].forEach((side) =>
    addBox(
      parent,
      side * (width / 2 - (frameless ? 0.006 : 0.03)),
      height / 2,
      0.005,
      frameless ? 0.012 : 0.06,
      height,
      frameless ? 0.05 : 0.09,
      frameless ? MATERIALS.steel : MATERIALS.ink
    )
  );

  [0, height].forEach((y) =>
    addBox(
      parent,
      0,
      y,
      0.005,
      width + 0.035,
      frameless ? 0.04 : 0.075,
      0.1,
      frameless ? MATERIALS.steel : MATERIALS.ink
    )
  );

  if (timber) {
    const slats = Math.round(width / 0.2);
    for (let i = 0; i < slats; i++) {
      addBox(
        parent,
        -width / 2 + ((i + 0.5) * width) / slats,
        height / 2,
        0.04,
        width / slats - 0.018,
        height - 0.12,
        0.08,
        i % 3 ? MATERIALS.timber : MATERIALS.timberDark
      );
    }
    addBox(parent, 0, height * 0.43, 0.1, width, 0.11, 0.08);
  } else {
    if (!frameless) {
      addBox(parent, 0, height * 0.51, 0.005, width, 0.04, 0.07);
    }
    addBox(
      parent,
      -width * 0.28,
      height * 0.65,
      0.033,
      0.015,
      height * 0.38,
      0.006,
      MATERIALS.highlight
    );
    if (horizontal) {
      for (let x = -width / 2 + width / 3; x < width / 2; x += width / 3) {
        addBox(parent, x, height / 2, 0, 0.045, height, 0.075);
      }
    }
  }

  if (green) {
    addBox(parent, 0, 0.05, 0.062, width * 0.93, 0.035, 0.026, MATERIALS.green);
  }
};

const createArmDrive = (parent) => {
  const body = addCylinder(parent, 0, 0, 0, 0.066, 1, MATERIALS.ink);
  const rod = addCylinder(parent, 0, 0, 0, 0.03, 1, MATERIALS.steel);
  const collar = addCylinder(parent, 0, 0, 0, 0.075, 0.09, MATERIALS.green);
  const dir = new Vector3();
  const up = new Vector3(0, 1, 0);

  return (from, to) => {
    dir.subVectors(to, from);
    const length = dir.length();
    dir.normalize();
    const bodyLength = length * 0.57;

    body.position.copy(from).addScaledVector(dir, bodyLength / 2);
    body.scale.y = bodyLength;
    rod.position.copy(from).addScaledVector(dir, bodyLength + (length - bodyLength) / 2);
    rod.scale.y = length - bodyLength;
    collar.position.copy(from).addScaledVector(dir, 0.07);
    [body, rod, collar].forEach((part) => part.quaternion.setFromUnitVectors(up, dir));
  };
};

// ۱) جک‌های پارکینگی
export function createJackModel(withCanopy = false) {
  const root = new Group();
  addPlinth(root, 7.7, 4.4);

  [-1, 1].forEach((side) => {
    addBox(root, side * 2.86, 1.55, 0, 0.64, 3.1, 0.8, MATERIALS.stone);
    addBox(root, side * 2.86, 3.13, 0, 0.73, 0.09, 0.91, MATERIALS.chalk);
    addBox(root, side * 3.38, 0.95, -0.09, 0.4, 1.9, 0.6, MATERIALS.chalk);
    [1, 2].forEach((y) =>
      addBox(root, side * 2.86, y, 0.405, 0.64, 0.012, 0.012, MATERIALS.edge)
    );
  });

  if (withCanopy) {
    addBox(root, 0, 3.29, -0.06, 6.45, 0.25, 1.12, MATERIALS.chalk);
    addBox(root, 0, 3.12, 0.36, 5.12, 0.065, 0.12, MATERIALS.ink);
    addBox(root, -3.23, 0.08, 0.4, 0.04, 0.012, 1.7, MATERIALS.green);
  }

  const leaves = [-1, 1].map((side) => {
    const hingeX = side * 2.51;
    const pivot = addGroup(root, hingeX, 0.15, 0.03);
    const leafBody = addGroup(pivot, -side * 1.235, 0, 0);
    addPanel(leafBody, 2.45, 2.63, { timber: true });
    [0.35, 2.36].forEach((y) =>
      addCylinder(root, hingeX, y, 0.055, 0.066, 0.22, MATERIALS.ink)
    );
    const updateArm = createArmDrive(root);
    return { g: pivot, side, hingeX, drive: updateArm };
  });

  addBox(root, 2.9, 1.3, 0.435, 0.19, 0.3, 0.055, MATERIALS.ink);
  addBox(root, 2.9, 1.37, 0.468, 0.11, 0.055, 0.008, MATERIALS.green);

  return {
    root,
    update(progress) {
      const angle = smoothstep(progress) * Math.PI * 0.43;
      leaves.forEach(({ g, side, hingeX, drive }) => {
        g.rotation.y = side * angle;
        const localAttach = new Vector3(-side * 0.97, 1.12, 0.18).applyAxisAngle(
          new Vector3(0, 1, 0),
          g.rotation.y
        );
        const worldAttach = new Vector3(
          hingeX + localAttach.x,
          1.12,
          0.03 + localAttach.z
        );
        drive(new Vector3(hingeX + side * 0.13, 1.12, 0.43), worldAttach);
      });
    },
  };
}

// ۲) درب‌های شیشه‌ای اتوماتیک
export function createGlassModel() {
  const root = new Group();
  addPlinth(root, 7.5, 4.1);
  addBox(root, 0, 0.04, -0.65, 6.65, 0.075, 1.8, MATERIALS.edge);

  [-1, 1].forEach((side) => {
    addBox(root, side * 3.27, 1.6, -0.06, 0.24, 3.2, 0.45, MATERIALS.stone);
    const fixedPanel = addGroup(root, side * 2.36, 0.08, -0.065);
    addPanel(fixedPanel, 1.46, 2.92);
  });

  addBox(root, 0, 3.14, 0, 6.75, 0.31, 0.42, MATERIALS.steel);
  addBox(root, 0, 3.04, 0.23, 0.32, 0.115, 0.11, MATERIALS.ink);
  addBox(root, 0, 3.06, 0.293, 0.15, 0.032, 0.012, MATERIALS.green);
  addBox(root, 0, 0.055, 0.055, 6.35, 0.04, 0.23, MATERIALS.ink);

  const slidingPanels = [-1, 1].map((side) => {
    const panel = addGroup(root, side * 0.785, 0.085, 0.07);
    addPanel(panel, 1.52, 2.9);
    addBox(panel, -side * 0.57, 1.32, 0.073, 0.024, 0.36, 0.04, MATERIALS.steel);
    return { g: panel, s: side };
  });

  addBox(root, 0, 0.006, 1.22, 2.4, 0.014, 0.66, MATERIALS.road);

  return {
    root,
    update(progress) {
      slidingPanels.forEach(({ g, s }) => {
        g.position.x = s * (0.785 + smoothstep(progress) * 1.54);
      });
    },
  };
}

// ۳) درب‌های کرکره‌ای
export function createShutterModel() {
  const root = new Group();
  addPlinth(root, 7.5, 4.4);

  [-1, 1].forEach((side) => {
    addBox(root, side * 2.96, 1.7, -0.22, 0.77, 3.4, 0.9, MATERIALS.stone);
    addBox(root, side * 2.62, 1.48, 0.065, 0.11, 2.97, 0.2, MATERIALS.ink);
  });

  addBox(root, 0, 3.31, -0.19, 6.74, 0.5, 0.85, MATERIALS.chalk);
  addBox(root, 0, 3.34, 0.25, 5.45, 0.4, 0.08, MATERIALS.edge);

  const shaft = addCylinder(root, 0, 3.1, -0.35, 0.28, 5.12, MATERIALS.ink);
  shaft.rotation.z = Math.PI / 2;

  addBox(root, 2.93, 2.65, 0.35, 0.28, 0.59, 0.27, MATERIALS.green);
  addBox(root, 2.93, 2.23, 0.35, 0.05, 0.25, 0.04, MATERIALS.ink);

  const slats = Array.from({ length: 21 }, (_, idx) =>
    addBox(
      root,
      0,
      0.13 + idx * 0.14,
      0.07,
      5.2,
      0.132,
      0.09,
      idx % 2 ? MATERIALS.steel : MATERIALS.edge
    )
  );
  const bottomBar = addBox(root, 0, 0.065, 0.08, 5.23, 0.12, 0.13, MATERIALS.ink);

  return {
    root,
    update(progress) {
      const lift = smoothstep(progress) * 3.26;
      slats.forEach((slat, idx) => {
        const y = 0.13 + idx * 0.14 + lift;
        if (y <= 2.96) {
          slat.position.set(0, y, 0.07);
          slat.rotation.x = 0;
        } else {
          const angle = (y - 2.96) / 0.29;
          const radius = 0.29 + Math.floor(angle / (Math.PI * 2)) * 0.025;
          slat.position.set(
            0,
            2.96 + radius * Math.sin(angle),
            0.07 - radius + radius * Math.cos(angle)
          );
          slat.rotation.x = -angle;
        }
      });
      bottomBar.position.y = Math.min(3.04, 0.065 + lift);
    },
  };
}

// ۴) راهبندهای اتوماتیک
export function createBarrierModel() {
  const root = new Group();
  addPlinth(root, 7.5, 4.4);
  addBox(root, 0.6, 0.025, 0, 5.2, 0.035, 4.18, MATERIALS.road);
  [-1.05, 0.4, 1.85].forEach((z) =>
    addBox(root, 0.8, 0.047, z, 0.065, 0.012, 0.7, MATERIALS.chalk)
  );

  const postX = -2.68;
  addBox(root, postX, 0.89, 0, 0.64, 1.78, 0.77, MATERIALS.ink);
  addBox(root, postX, 1.81, 0, 0.7, 0.1, 0.83, MATERIALS.green);
  addBox(root, postX, 0.81, 0.395, 0.46, 1.23, 0.033, MATERIALS.edge);
  addBox(root, postX + 0.13, 1.15, 0.42, 0.07, 0.1, 0.035, MATERIALS.ink);
  addBox(root, postX, 1.53, 0.41, 0.22, 0.11, 0.035, MATERIALS.dark);

  const boomPivot = addGroup(root, postX, 1.65, 0.08);
  const hub = addCylinder(boomPivot, 0, 0, 0, 0.18, 0.22, MATERIALS.steel);
  hub.rotation.x = Math.PI / 2;

  addBox(boomPivot, 2.37, 0.025, 0.17, 4.84, 0.15, 0.16, MATERIALS.chalk);
  for (let i = 0; i < 6; i++) {
    addBox(boomPivot, 0.5 + i * 0.74, 0.025, 0.262, 0.23, 0.152, 0.024, MATERIALS.ink);
  }
  addBox(boomPivot, 4.71, 0.025, 0.264, 0.13, 0.154, 0.026, MATERIALS.green);

  addBox(root, 2.15, 0.75, 0.22, 0.16, 1.5, 0.16, MATERIALS.ink);
  addBox(root, 2.15, 1.5, 0.22, 0.31, 0.08, 0.26, MATERIALS.steel);

  return {
    root,
    tall: true,
    update(progress) {
      boomPivot.rotation.z = smoothstep(progress) * Math.PI * 0.47;
    },
  };
}

// ۵) شیشهٔ بالکنی
export function createBalconyModel() {
  const root = new Group();
  addPlinth(root, 7.5, 5);
  addBox(root, 0, 0.07, -0.28, 6.1, 0.13, 3.6, MATERIALS.timberDark);

  for (let z = -1.95; z < 1.5; z += 0.27) {
    addBox(root, 0, 0.141, z, 6.06, 0.015, 0.016, MATERIALS.timber);
  }

  [-1, 1].forEach((side) => {
    [-1.6, 1.4].forEach((z) =>
      addBox(root, side * 2.9, 1.65, z, 0.17, 3.02, 0.17, MATERIALS.timber)
    );
    addBox(root, side * 2.9, 3.12, -0.1, 0.19, 0.25, 3.5, MATERIALS.timber);
    const sideGlass = addGroup(root, side * 2.9, 0.19, -0.13);
    sideGlass.rotation.y = Math.PI / 2;
    addPanel(sideGlass, 2.88, 2.76, { frameless: true });
  });

  [-1.65, 1.43].forEach((z) => {
    addBox(root, 0, 3.12, z, 6.11, 0.27, 0.19, MATERIALS.timber);
    addBox(root, 0, 0.18, z, 5.8, 0.055, 0.075, MATERIALS.steel);
  });
  addBox(root, 0, 3.31, -0.08, 6.32, 0.1, 3.54, MATERIALS.chalk);

  const panels = Array.from({ length: 6 }, (_, idx) => {
    const pivot = addGroup(root, -2.82 + idx * 0.947, 0.22, 1.45);
    const leaf = addGroup(pivot, 0.46, 0, 0);
    addPanel(leaf, 0.92, 2.73, { frameless: true });
    addBox(leaf, 0.3, 1.2, 0.04, 0.02, 0.22, 0.03, MATERIALS.steel);
    return pivot;
  });

  addBox(root, 0, 2.93, 1.55, 5.7, 0.023, 0.025, MATERIALS.green);

  return {
    root,
    update(progress) {
      panels.forEach((pivot, idx) => {
        const local = clamp(progress * 6 - idx, 0, 1);
        pivot.position.x = lerp(
          -2.82 + idx * 0.947,
          -2.82 + idx * 0.08,
          smoothstep(local / 0.56)
        );
        pivot.rotation.y = (smoothstep((local - 0.5) / 0.5) * Math.PI) / 2;
      });
    },
  };
}

// ۶ و ۷) درب‌های فولدینگ و سکشنال
function createOverheadDoorModel(sectional = false) {
  const root = new Group();
  addPlinth(root, 7.7, sectional ? 6 : 4.4);

  [-1, 1].forEach((side) => {
    addBox(root, side * 2.93, 1.62, -0.16, 0.55, 3.24, 0.7, MATERIALS.stone);
    addBox(root, side * 2.62, 1.57, 0.14, 0.075, 3.1, 0.16, MATERIALS.ink);
  });

  addBox(root, 0, 3.3, -0.4, 6.43, 0.25, 1.35, MATERIALS.chalk);
  addBox(root, 0, 3.1, 0.23, 5.34, 0.12, 0.19, MATERIALS.ink);
  if (sectional) {
    addBox(root, 0, 3.39, -1.8, 6.43, 0.08, 3.4, MATERIALS.chalk);
  }

  if (!sectional) {
    const upperPivot = addGroup(root, 0, 3.08, 0.22);
    const upperPanel = addGroup(upperPivot, 0, -1.46, 0);
    addPanel(upperPanel, 5.21, 1.46, { horizontal: true });

    const lowerPivot = addGroup(upperPivot, 0, -1.46, 0);
    const lowerPanel = addGroup(lowerPivot, 0, -1.46, 0);
    addPanel(lowerPanel, 5.21, 1.46, { horizontal: true, green: true });

    [-2.3, 0, 2.3].forEach((x) => {
      const hinge = addCylinder(upperPivot, x, -1.46, 0.075, 0.045, 0.19, MATERIALS.steel);
      hinge.rotation.z = Math.PI / 2;
    });

    return {
      root,
      update(progress) {
        const angle = smoothstep(progress) * Math.PI * 0.46;
        upperPivot.rotation.x = -angle;
        lowerPivot.rotation.x = 2 * angle;
      },
    };
  }

  [-1, 1].forEach((side) => {
    addBox(root, side * 2.57, 1.33, 0.16, 0.06, 2.24, 0.06, MATERIALS.steel);
    addBox(root, side * 2.57, 2.97, -1.36, 0.06, 0.06, 3.16, MATERIALS.steel);
    addBox(root, side * 2.57, 2.7, 0.16, 0.06, 0.06, 0.56, MATERIALS.steel);
  });

  addBox(root, 0, 3.12, -1.35, 0.42, 0.18, 0.5, MATERIALS.ink);
  addBox(root, 0, 3.18, -1.12, 0.2, 0.06, 0.2, MATERIALS.green);
  addBox(root, 0, 3.06, -0.62, 5, 0.05, 0.05, MATERIALS.steel);

  const panels = Array.from({ length: 5 }, (_, idx) => {
    const panel = addGroup(root, 0, 0.3 + idx * 0.6, 0.21);
    addBox(panel, 0, 0, 0, 5.14, 0.58, 0.1, MATERIALS.edge);
    addBox(panel, 0, 0.215, 0.058, 5.08, 0.03, 0.014, MATERIALS.steel);
    addBox(panel, 0, -0.215, 0.058, 5.08, 0.03, 0.014, MATERIALS.steel);
    if (idx === 0) {
      addBox(panel, 0, -0.26, 0.05, 5.14, 0.06, 0.12, MATERIALS.ink);
    }
    if (idx === 3) {
      [-1.55, 0, 1.55].forEach((x) =>
        addBox(panel, x, 0, 0.056, 0.82, 0.26, 0.02, MATERIALS.ink)
      );
    }
    return panel;
  });

  return {
    root,
    wide: true,
    update(progress) {
      const lift = smoothstep((progress - 0.25) / 0.75) * 3.2;
      const curveRadius = 0.52;
      panels.forEach((panel, idx) => {
        const y = 0.3 + idx * 0.6 + lift;
        const over = y - 2.45;
        if (over < 0) {
          panel.position.set(0, y, 0.21);
          panel.rotation.x = 0;
        } else if (over < (curveRadius * Math.PI) / 2) {
          const angle = over / curveRadius;
          panel.position.set(
            0,
            2.45 + curveRadius * Math.sin(angle),
            0.21 - curveRadius + curveRadius * Math.cos(angle)
          );
          panel.rotation.x = -angle;
        } else {
          panel.position.set(
            0,
            2.97,
            0.21 - curveRadius - (over - (curveRadius * Math.PI) / 2)
          );
          panel.rotation.x = -Math.PI / 2;
        }
      });
    },
  };
}

export const createFoldingModel = () => createOverheadDoorModel(false);
export const createSectionalModel = () => createOverheadDoorModel(true);

export const MODEL_FACTORIES = {
  jack: createJackModel,
  glass: createGlassModel,
  shutter: createShutterModel,
  barrier: createBarrierModel,
  balcony: createBalconyModel,
  folding: createFoldingModel,
  sectional: createSectionalModel,
};

// رندر سه‌بعدی تعاملی برای هر کارت محصول
export function createProductStage(host, models) {
  let renderer;
  try {
    renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch {
    host.dataset.rendering = "static";
    return null;
  }

  renderer.setPixelRatio(
    Math.min(devicePixelRatio, matchMedia("(max-width:63.99em)").matches ? 1.25 : 1.5)
  );
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.domElement.setAttribute("aria-hidden", "true");
  host.append(renderer.domElement);
  host.classList.add("has-renderer");

  const scene = new Scene();
  const camera = new OrthographicCamera(-5, 5, 4, -4, 0.1, 60);
  camera.position.set(7, 6.4, 10);
  camera.lookAt(0, 1.25, 0);

  scene.add(new HemisphereLight(16777215, 9476998, 2.55));

  const sun = new DirectionalLight(16775400, 3.15);
  sun.position.set(-3, 9, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -7;
  sun.shadow.camera.right = 7;
  sun.shadow.camera.top = 7;
  sun.shadow.camera.bottom = -7;
  sun.shadow.normalBias = 0.035;
  scene.add(sun);

  const shadowFloor = new Mesh(
    new PlaneGeometry(24, 24),
    new ShadowMaterial({ opacity: 0.12 })
  );
  shadowFloor.rotation.x = -Math.PI / 2;
  shadowFloor.position.y = -0.275;
  shadowFloor.receiveShadow = true;
  scene.add(shadowFloor);

  Object.values(models).forEach((model) => {
    scene.add(model.root);
    model.root.visible = false;
    model.update(0);
  });

  let activeModel;
  let rafId = 0;
  let isVisible = true;
  let dragStartX = null;
  let startRotationY = 0;

  host.tabIndex = 0;
  host.setAttribute("aria-keyshortcuts", "ArrowLeft ArrowRight Home");

  const scheduleRender = () => {
    if (rafId || !isVisible || document.hidden) return;
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      renderer.render(scene, camera);
    });
  };

  const setRotationY = (angle) => {
    if (!activeModel) return;
    activeModel.root.rotation.y = clamp(angle, -0.6, 0.6);
    host.dataset.rotation = activeModel.root.rotation.y.toFixed(3);
    scheduleRender();
  };

  host.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0 || event.target.closest("button,a")) return;
    dragStartX = event.clientX;
    startRotationY = activeModel?.root.rotation.y || 0;
    host.setPointerCapture(event.pointerId);
  });

  host.addEventListener("pointermove", (event) => {
    if (dragStartX !== null) {
      setRotationY(startRotationY + (event.clientX - dragStartX) * 0.005);
    }
  });

  const endDrag = () => {
    dragStartX = null;
  };
  host.addEventListener("pointerup", endDrag);
  host.addEventListener("pointercancel", endDrag);

  host.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home"].includes(event.key)) return;
    event.preventDefault();
    const nextAngle =
      event.key === "Home"
        ? 0
        : (activeModel?.root.rotation.y || 0) + (event.key === "ArrowLeft" ? -0.12 : 0.12);
    setRotationY(nextAngle);
  });

  const refresh = () => {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) return;

    const aspect = width / height;
    const frustumHeight = Math.max(
      activeModel?.tall ? 8.6 : 5.9,
      (activeModel?.wide ? 10.6 : 9.4) / aspect
    );
    camera.left = (-frustumHeight * aspect) / 2;
    camera.right = (frustumHeight * aspect) / 2;
    camera.top = frustumHeight / 2;
    camera.bottom = -frustumHeight / 2;
    camera.position.set(7, activeModel?.tall ? 7.9 : 6.4, 10);
    camera.lookAt(0, activeModel?.tall ? 2.3 : 1.25, 0);
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    scheduleRender();
  };

  new ResizeObserver(refresh).observe(host);
  new IntersectionObserver(
    (entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) scheduleRender();
    },
    { rootMargin: "150px" }
  ).observe(host);
  document.addEventListener("visibilitychange", scheduleRender);

  renderer.domElement.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    host.classList.remove("has-renderer");
    host.dataset.rendering = "static";
  });
  renderer.domElement.addEventListener("webglcontextrestored", () => {
    host.classList.add("has-renderer");
    host.dataset.rendering = "webgl";
    scheduleRender();
  });

  return {
    select(key) {
      const next = models[key];
      if (activeModel !== next) {
        if (activeModel) activeModel.root.visible = false;
        activeModel = next;
        activeModel.root.visible = true;
        host.dataset.model = key;
        refresh();
      }
    },
    update(progress) {
      if (!activeModel) return;
      activeModel.update(progress);
      host.dataset.progress = progress.toFixed(3);
      scheduleRender();
    },
    refresh,
  };
}
