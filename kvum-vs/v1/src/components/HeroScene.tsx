'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function makeHoloSphere(
  radius: number,
  latSegs: number,
  lonSegs: number,
  color: number,
  opacity: number,
): THREE.Group {
  const group = new THREE.Group();
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });

  for (let i = 1; i < latSegs; i++) {
    const phi = (i / latSegs) * Math.PI;
    const pts: THREE.Vector3[] = [];
    for (let j = 0; j <= 72; j++) {
      const th = (j / 72) * Math.PI * 2;
      pts.push(new THREE.Vector3(radius * Math.sin(phi) * Math.cos(th), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(th)));
    }
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
  }
  for (let i = 0; i < lonSegs; i++) {
    const theta = (i / lonSegs) * Math.PI * 2;
    const pts: THREE.Vector3[] = [];
    for (let j = 0; j <= 64; j++) {
      const phi = (j / 64) * Math.PI;
      pts.push(new THREE.Vector3(radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta)));
    }
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
  }
  return group;
}

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── RENDERER ──────────────────────────────────────────────
    const scene = new THREE.Scene();
    // transparent canvas — dark CSS bg + aurora glows show through
    scene.fog = new THREE.Fog(0x080c1a, 22, 52);

    const camera = new THREE.PerspectiveCamera(58, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0.2, 8.0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.domElement.style.pointerEvents = 'none';
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // ── LIGHTS ────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x8899cc, 2.2));
    const keyLight = new THREE.DirectionalLight(0xaaccff, 2.4);
    keyLight.position.set(6, 10, 8);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0x9988ee, 1.4);
    fillLight.position.set(-7, 2, 3);
    scene.add(fillLight);
    const accent1 = new THREE.PointLight(0x1a5cff, 24, 16);
    scene.add(accent1);
    const accent2 = new THREE.PointLight(0x3377ff, 14, 12);
    scene.add(accent2);
    // Aurora accent lights
    const purpleAccent = new THREE.PointLight(0x7c3aed, 8, 14);
    purpleAccent.position.set(-5, 2, 4);
    scene.add(purpleAccent);
    const cyanAccent = new THREE.PointLight(0x00e5ff, 7, 12);
    cyanAccent.position.set(5, -1, 3);
    scene.add(cyanAccent);

    // ── MATERIALS ─────────────────────────────────────────────
    const bodyMat = new THREE.MeshBasicMaterial({
      color: 0x1a5cff, transparent: true, opacity: 0.055, depthWrite: false,
    });
    const trimMat = new THREE.MeshBasicMaterial({
      color: 0x1a5cff, transparent: true, opacity: 0.055, depthWrite: false,
    });
    // Dark glass lenses — the visual anchor
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x091855, metalness: 0.0, roughness: 0.0,
      clearcoat: 1.0, clearcoatRoughness: 0.0,
      transparent: true, opacity: 0.72,
      emissive: 0x1a5cff, emissiveIntensity: 0.55,
    });
    // Blue neon strips
    const neonMat = new THREE.MeshStandardMaterial({
      color: 0x1a5cff, emissive: 0x1a5cff, emissiveIntensity: 1.4,
      metalness: 0.5, roughness: 0.02,
    });
    // Glowing lens rings
    const lensRingMat = new THREE.MeshStandardMaterial({
      color: 0x1a5cff, emissive: 0x1a5cff, emissiveIntensity: 0.9,
      metalness: 0.5, roughness: 0.02,
    });
    // Wireframe edges — more visible on dark bg
    const mkEdge = (op = 0.60) =>
      new THREE.LineBasicMaterial({ color: 0x4488ff, transparent: true, opacity: op, depthWrite: false });

    // ── VR HEADSET ────────────────────────────────────────────
    const headset = new THREE.Group();

    const addPart = (geom: THREE.BufferGeometry, mat: THREE.Material, px = 0, py = 0, pz = 0, edgeOp = 0.38) => {
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(px, py, pz);
      headset.add(mesh);
      const wire = new THREE.LineSegments(new THREE.EdgesGeometry(geom, 18), mkEdge(edgeOp));
      wire.position.set(px, py, pz);
      headset.add(wire);
    };

    addPart(new THREE.BoxGeometry(4.6, 2.3, 0.72), bodyMat, 0, 0, 0, 0.42);
    addPart(new THREE.BoxGeometry(1.2, 1.7, 0.52), bodyMat, -2.9, 0, -0.13, 0.35);
    addPart(new THREE.BoxGeometry(1.2, 1.7, 0.52), bodyMat,  2.9, 0, -0.13, 0.35);
    addPart(new THREE.BoxGeometry(3.8, 0.25, 0.42), trimMat, 0, 1.26, 0.23, 0.48);
    addPart(new THREE.BoxGeometry(0.23, 0.20, 0.20), trimMat, -1.0, 1.38, 0.44, 0.52);
    addPart(new THREE.BoxGeometry(0.23, 0.20, 0.20), trimMat,    0, 1.38, 0.44, 0.52);
    addPart(new THREE.BoxGeometry(0.23, 0.20, 0.20), trimMat,  1.0, 1.38, 0.44, 0.52);

    const lensFillG = new THREE.CircleGeometry(0.65, 72);
    const addGlass = (x: number) => {
      const m = new THREE.Mesh(lensFillG, glassMat);
      m.scale.set(1.18, 1.08, 1);
      m.position.set(x, 0, 0.38);
      headset.add(m);
    };
    addGlass(-1.1); addGlass(1.1);

    const addLensRing = (x: number) => {
      const m = new THREE.Mesh(new THREE.TorusGeometry(0.67, 0.062, 16, 120), lensRingMat);
      m.scale.set(1.18, 1.08, 1);
      m.position.set(x, 0, 0.375);
      headset.add(m);
    };
    addLensRing(-1.1); addLensRing(1.1);

    const lensLight1 = new THREE.PointLight(0x1a5cff, 12, 4.0);
    lensLight1.position.set(-1.1, 0, 0.9);
    headset.add(lensLight1);
    const lensLight2 = new THREE.PointLight(0x1a5cff, 12, 4.0);
    lensLight2.position.set(1.1, 0, 0.9);
    headset.add(lensLight2);

    const noseBridge = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.1, 0.10), trimMat);
    noseBridge.position.set(0, 0, 0.38);
    headset.add(noseBridge);

    const bStrip = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.075, 0.075), neonMat);
    bStrip.position.set(0, -1.17, 0.17);
    headset.add(bStrip);
    const tStrip = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.065, 0.065), neonMat);
    tStrip.position.set(0, 1.26, 0.37);
    headset.add(tStrip);
    const lSide = new THREE.Mesh(new THREE.BoxGeometry(0.048, 1.55, 0.048), neonMat);
    lSide.position.set(-2.26, 0, 0.19);
    headset.add(lSide);
    const rSide = new THREE.Mesh(new THREE.BoxGeometry(0.048, 1.55, 0.048), neonMat);
    rSide.position.set(2.26, 0, 0.19);
    headset.add(rSide);

    headset.rotation.x = 0.12;
    headset.scale.setScalar(1.22);
    scene.add(headset);

    // ── ORBITING SPHERES ──────────────────────────────────────
    const sphereA = makeHoloSphere(2.4, 7, 9, 0x1a5cff, 0.22);
    const orbitA  = new THREE.Group();
    orbitA.rotation.x = 0.40; orbitA.rotation.z = 0.20;
    sphereA.position.x = 6.6;
    orbitA.add(sphereA);
    scene.add(orbitA);

    const sphereB = makeHoloSphere(3.3, 6, 9, 0x2255dd, 0.15);
    const orbitB  = new THREE.Group();
    orbitB.rotation.x = -0.28; orbitB.rotation.z = -0.22;
    sphereB.position.x = -9.2;
    orbitB.add(sphereB);
    scene.add(orbitB);

    // ── FLOOR GRID ────────────────────────────────────────────
    const gridHelper = new THREE.GridHelper(40, 30, 0x1a5cff, 0x1a5cff);
    const gridMats = Array.isArray(gridHelper.material) ? gridHelper.material : [gridHelper.material];
    gridMats.forEach(m => { m.transparent = true; (m as THREE.LineBasicMaterial).opacity = 0.08; });
    gridHelper.position.y = -4.5;
    scene.add(gridHelper);

    // ── PORTAL RINGS (behind headset) ─────────────────────────
    const mkPortalRing = (radius: number, tube: number, z: number, opacity: number, color = 0x1a5cff) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(radius, tube, 16, 200),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false }),
      );
      m.position.z = z;
      return m;
    };
    const portalRing1 = mkPortalRing(6.5, 0.030, -2.5, 0.70, 0x1a5cff);
    const portalRing2 = mkPortalRing(5.9, 0.018, -4.5, 0.38, 0x7c3aed);
    const portalRing3 = mkPortalRing(5.2, 0.012, -7.0, 0.22, 0x00e5ff);
    portalRing1.rotation.x = 0.12;
    portalRing2.rotation.x = -0.08;
    portalRing3.rotation.x = 0.05;
    scene.add(portalRing1, portalRing2, portalRing3);

    // ── MOUSE + SPRING ────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    let rotX = 0.12, rotY = 0, velX = 0, velY = 0;
    const STIFFNESS = 0.18, DAMPING = 0.70;
    const MAX_ROT_Y = 1.2, MAX_ROT_X = 0.50;

    let curScale = 1.22;
    let bounceVel = 0;
    let flashIntensity = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x =  (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onClick = () => {
      if (window.scrollY < window.innerHeight * 0.9) {
        velY += 0.75;
        velX -= 0.38;
        bounceVel = 0.30;
        flashIntensity = 1.0;
      }
    };
    window.addEventListener('click', onClick);

    let scrollRatio = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onScroll = () => {
      if (prefersReducedMotion) return;
      scrollRatio = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // ── ANIMATION LOOP ────────────────────────────────────────
    let rafId: number;
    const t0 = performance.now();

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const t = (performance.now() - t0) / 1000;

      const wantX = 0.12 + mouse.y * -MAX_ROT_X;
      const wantY = mouse.x *  MAX_ROT_Y;
      velX = (velX + (wantX - rotX) * STIFFNESS) * DAMPING;
      velY = (velY + (wantY - rotY) * STIFFNESS) * DAMPING;
      rotX += velX;
      rotY += velY;
      headset.rotation.x = rotX;
      headset.rotation.y = rotY;
      headset.position.y = Math.sin(t * 0.44) * 0.12;

      bounceVel += (1.22 - curScale) * 0.28;
      bounceVel *= 0.72;
      curScale += bounceVel;
      headset.scale.setScalar(curScale);

      if (flashIntensity > 0.01) {
        flashIntensity *= 0.82;
        lensLight1.intensity = 12 + flashIntensity * 65;
        lensLight2.intensity = 12 + flashIntensity * 65;
        lensRingMat.emissiveIntensity = 0.9 + flashIntensity * 4;
        neonMat.emissiveIntensity = 1.4 + flashIntensity * 2.5;
      } else {
        flashIntensity = 0;
      }

      const dist = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
      const prox = Math.max(0, 1.0 - dist / 0.7);

      if (flashIntensity < 0.05) {
        const targetRingEmissive = 0.9 + prox * 1.8;
        lensRingMat.emissiveIntensity += (targetRingEmissive - lensRingMat.emissiveIntensity) * 0.07;
        const targetGlassEmissive = 0.55 + prox * 0.45;
        glassMat.emissiveIntensity += (targetGlassEmissive - glassMat.emissiveIntensity) * 0.07;
        const targetLensIntensity = 12 + prox * 18;
        lensLight1.intensity += (targetLensIntensity - lensLight1.intensity) * 0.07;
        lensLight2.intensity += (targetLensIntensity - lensLight2.intensity) * 0.07;
        neonMat.emissiveIntensity += (1.4 - neonMat.emissiveIntensity) * 0.05;
      }

      orbitA.rotation.y = t * 0.20;
      sphereA.rotation.y = t * 0.30;
      sphereA.rotation.x = t * 0.10;
      orbitB.rotation.y = t * 0.12;
      sphereB.rotation.y = -t * 0.16;
      sphereB.rotation.z =  t * 0.07;

      // Portal ring rotation
      portalRing1.rotation.z = t * 0.07;
      portalRing2.rotation.z = -t * 0.055;
      portalRing3.rotation.z = t * 0.04;

      // Scroll: camera moves toward portal
      const targetCamZ = 8.0 - scrollRatio * 2.8;
      camera.position.z += (targetCamZ - camera.position.z) * 0.06;

      accent1.position.set(Math.sin(t * 0.32) * 5.5, Math.cos(t * 0.22) * 3.0 + 1.5, Math.cos(t * 0.36) * 2.0 + 4.5);
      accent2.position.set(Math.cos(t * 0.26) * 4.8, Math.sin(t * 0.18) * 2.5 - 0.5, Math.sin(t * 0.30) * 2.5 + 3.5);

      renderer.render(scene, camera);
    };

    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}
