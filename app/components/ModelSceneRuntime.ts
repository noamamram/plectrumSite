import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { ModelSceneMode } from "./ModelScene";

const models = [
  { path: "/models/shirt.glb", size: 2.65, position: [0.2, 0.55, 0] },
  { path: "/models/sleeve.glb", size: 1.55, position: [2.65, 0.55, 0.15] },
  { path: "/models/hat.glb", size: 1.32, position: [1.65, -1.45, 0.2] },
  { path: "/models/glove.glb", size: 1.5, position: [3.1, -1.25, 0.1] },
] as const;

const frontRotations: Record<string, number> = {
  "/models/shirt.glb": Math.PI * 1.5,
  "/models/sleeve.glb": Math.PI,
  "/models/hat.glb": Math.PI,
  "/models/glove.glb": Math.PI * 1.5,
};

export function mountModelScene(
  container: HTMLDivElement,
  mode: ModelSceneMode,
  modelPath?: string,
) {
  delete container.dataset.failed;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(
    mode === "hero" ? 0.9 : 0,
    0.1,
    mode === "hero" ? 7.8 : mode === "card" ? 4.1 : 4.5,
  );

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch {
    container.dataset.failed = "true";
    return () => undefined;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  container.appendChild(renderer.domElement);

  const stage = new THREE.Group();
  scene.add(stage);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x1a2230, 2.1));
  const key = new THREE.DirectionalLight(0xffffff, 3.2);
  key.position.set(-4, 5, 6);
  scene.add(key);
  const cyan = new THREE.PointLight(0xcceeff, 2.8, 12);
  cyan.position.set(4, -1, 3);
  scene.add(cyan);
  const rim = new THREE.PointLight(0xe3ebff, 2.4, 10);
  rim.position.set(-4, 1, 1);
  scene.add(rim);

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  const loaded: THREE.Object3D[] = [];
  let disposed = false;

  const loadModel = (
    path: string,
    targetSize: number,
    position: readonly number[],
    index: number,
  ) => {
    loader.load(
      path,
      (gltf) => {
        if (disposed) return;
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const dimensions = box.getSize(new THREE.Vector3());
        const largest =
          Math.max(dimensions.x, dimensions.y, dimensions.z) || 1;
        const scale = targetSize / largest;
        model.scale.setScalar(scale);
        box.setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.set(
          position[0] - center.x,
          position[1] - center.y,
          position[2] - center.z,
        );

        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const materials = Array.isArray(child.material)
              ? child.material
              : [child.material];
            materials.forEach((material) => {
              material.needsUpdate = true;
            });
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });

        model.userData.baseX = model.position.x;
        model.userData.baseY = model.position.y;
        model.userData.index = index;
        model.userData.frontRotationY = frontRotations[path] ?? 0;
        model.rotation.y = model.userData.frontRotationY;
        stage.add(model);
        loaded.push(model);
      },
      undefined,
      () => {
        container.dataset.failed = "true";
      },
    );
  };

  const sceneModels =
    mode !== "hero" && modelPath
      ? [{
          path: modelPath,
          size: mode === "card" ? 2.55 : 3.15,
          position: [0, 0, 0] as const,
        }]
      : models;

  sceneModels.forEach((model, index) =>
    loadModel(model.path, model.size, model.position, index),
  );

  const resize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = Math.max(width / Math.max(height, 1), 0.1);
    camera.updateProjectionMatrix();
  };
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(container);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let pointerX = 0;
  let pointerY = 0;
  let scrollProgress = 0;
  let dragging = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let dragRotationX = 0;
  let dragRotationY = 0;
  let idleRotation = 0;

  const onPointerMove = (event: PointerEvent) => {
    pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
    pointerY = (event.clientY / window.innerHeight - 0.5) * 2;

    if (mode !== "hero" && dragging) {
      const deltaX = event.clientX - lastPointerX;
      const deltaY = event.clientY - lastPointerY;
      dragRotationY += deltaX * 0.014;
      dragRotationX = THREE.MathUtils.clamp(
        dragRotationX + deltaY * 0.009,
        -0.85,
        0.85,
      );
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
    }
  };
  const onPointerDown = (event: PointerEvent) => {
    if (mode === "hero") return;
    dragging = true;
    lastPointerX = event.clientX;
    lastPointerY = event.clientY;
    dragRotationX = stage.rotation.x;
    dragRotationY = stage.rotation.y;
    idleRotation = 0;
    container.setPointerCapture(event.pointerId);
    container.dataset.dragging = "true";
  };
  const onPointerUp = (event: PointerEvent) => {
    if (mode === "hero") return;
    dragging = false;
    if (container.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }
    delete container.dataset.dragging;
  };
  const onScroll = () => {
    scrollProgress = Math.min(
      window.scrollY / Math.max(window.innerHeight, 1),
      1,
    );
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  container.addEventListener("pointerdown", onPointerDown);
  container.addEventListener("pointerup", onPointerUp);
  container.addEventListener("pointercancel", onPointerUp);
  onScroll();

  let frame = 0;
  const clock = new THREE.Clock();
  const render = () => {
    const time = clock.getElapsedTime();
    if (!reduceMotion) {
      if (mode !== "hero") {
        if (!dragging) idleRotation += 0.0018;
        const targetY = dragRotationY + pointerX * 0.48 + idleRotation;
        const targetX = dragRotationX - pointerY * 0.22;
        stage.rotation.y += (targetY - stage.rotation.y) * 0.14;
        stage.rotation.x += (targetX - stage.rotation.x) * 0.14;
      } else {
        stage.rotation.y += (pointerX * 0.035 - stage.rotation.y) * 0.03;
        stage.rotation.x += (-pointerY * 0.018 - stage.rotation.x) * 0.03;
      }
      loaded.forEach((object) => {
        const index = object.userData.index as number;
        const frontRotationY = object.userData.frontRotationY as number;
        const separation =
          mode === "hero" ? scrollProgress * (index - 0.8) * 0.16 : 0;
        object.position.x =
          object.userData.baseX +
          separation +
          Math.sin(time * 0.48 + index) * 0.025;
        object.position.y =
          object.userData.baseY + Math.cos(time * 0.42 + index) * 0.035;
        object.rotation.y =
          frontRotationY + Math.sin(time * 0.28 + index) * 0.035;
      });
    }
    renderer.render(scene, camera);
    frame = window.requestAnimationFrame(render);
  };
  render();

  return () => {
    disposed = true;
    observer.disconnect();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("scroll", onScroll);
    container.removeEventListener("pointerdown", onPointerDown);
    container.removeEventListener("pointerup", onPointerUp);
    container.removeEventListener("pointercancel", onPointerUp);
    window.cancelAnimationFrame(frame);
    loaded.forEach((object) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry?.dispose();
          const material = child.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material?.dispose();
          }
        }
      });
    });
    dracoLoader.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
