import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import "./ThreeConnectedBackground.css";

export default function ThreeConnectedBackground({
  baseDensity = 15000, // larger = fewer points
  baseMaxDistance = 160,
  particleSpeed = 0.25,
  pointSize = 3.0,
  bgColor = "#000",
  lineColor = "#79f0ff",
}) {
  const mountRef = useRef(null);
  const rafRef = useRef(null);
  const rendererRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const mount = mountRef.current;

    const getDynamicSettings = () => {
      const w = window.innerWidth;
      let density = baseDensity;
      let maxDist = baseMaxDistance;

      // Mobile: fewer particles + shorter connections
      if (w < 768) {
        density *= 0.7;
        maxDist *= 0.8;
      }
      // Very small: minimal load
      if (w < 500) {
        density *= 0.5;
        maxDist *= 0.7;
      }
      return { density, maxDist };
    };

    const initScene = () => {
      const { density, maxDist } = getDynamicSettings();

      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5)); // lower pixel ratio for perf
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const camera = new THREE.PerspectiveCamera(
        50,
        mount.clientWidth / mount.clientHeight,
        1,
        2000
      );
      camera.position.z = 600;

      let width = mount.clientWidth;
      let height = mount.clientHeight;

      const onResize = () => {
        width = mount.clientWidth;
        height = mount.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", onResize);

      const area = width * height;
      const particleCount = Math.max(
        30,
        Math.min(180, Math.round(area / density))
      );

      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width - width / 2;
        const y = Math.random() * height - height / 2;
        const z = (Math.random() - 0.5) * 60;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        velocities[i * 3] = (Math.random() - 0.5) * particleSpeed;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * particleSpeed;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * (particleSpeed * 0.3);
      }

      const pointsGeometry = new THREE.BufferGeometry();
      pointsGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
      );
      const pointsMaterial = new THREE.PointsMaterial({
        size: pointSize,
        sizeAttenuation: true,
        color: new THREE.Color(lineColor),
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      scene.add(points);

      const maxPairs = Math.min(
        (particleCount * (particleCount - 1)) / 2,
        particleCount * 10
      );
      const linePositions = new Float32Array(maxPairs * 6);
      const lineColors = new Float32Array(maxPairs * 6);

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions, 3).setUsage(
          THREE.DynamicDrawUsage
        )
      );
      lineGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(lineColors, 3).setUsage(
          THREE.DynamicDrawUsage
        )
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.85,
      });

      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      const mouse = { x: 0, y: 0, active: false };
      const onPointerMove = (e) => {
        mouse.active = true;
        const rect = mount.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        mouse.x = clientX - rect.left - width / 2;
        mouse.y = -(clientY - rect.top - height / 2);
      };
      const onPointerLeave = () => (mouse.active = false);

      mount.addEventListener("mousemove", onPointerMove, { passive: true });
      mount.addEventListener("touchmove", onPointerMove, { passive: true });
      mount.addEventListener("mouseleave", onPointerLeave);
      mount.addEventListener("touchend", onPointerLeave);

      const maxDistSq = maxDist * maxDist;
      const colorA = new THREE.Color(lineColor);
      const colorB = new THREE.Color(0x9b66ff);

      const setColorForPair = (idx, t) => {
        lineColors[idx * 6] = colorA.r * (1 - t) + colorB.r * t;
        lineColors[idx * 6 + 1] = colorA.g * (1 - t) + colorB.g * t;
        lineColors[idx * 6 + 2] = colorA.b * (1 - t) + colorB.b * t;
        lineColors[idx * 6 + 3] = lineColors[idx * 6];
        lineColors[idx * 6 + 4] = lineColors[idx * 6 + 1];
        lineColors[idx * 6 + 5] = lineColors[idx * 6 + 2];
      };

      let lastTime = performance.now();
      let frameSkip = 0; // FPS limiter

      const tick = () => {
        frameSkip++;
        if (frameSkip % 2 !== 0) {
          // render every 2nd frame (~30 FPS on 60Hz)
          rafRef.current = requestAnimationFrame(tick);
          return;
        }

        const now = performance.now();
        const dt = Math.min(50, now - lastTime) / 1000;
        lastTime = now;

        for (let i = 0; i < particleCount; i++) {
          let ix = i * 3;
          positions[ix] += velocities[ix] * dt * 60;
          positions[ix + 1] += velocities[ix + 1] * dt * 60;

          const halfW = width / 2;
          const halfH = height / 2;
          if (positions[ix] < -halfW) positions[ix] = halfW;
          else if (positions[ix] > halfW) positions[ix] = -halfW;
          if (positions[ix + 1] < -halfH) positions[ix + 1] = halfH;
          else if (positions[ix + 1] > halfH) positions[ix + 1] = -halfH;
        }

        pointsGeometry.attributes.position.needsUpdate = true;

        let pairCount = 0;
        for (let i = 0; i < particleCount; i++) {
          const ax = positions[i * 3];
          const ay = positions[i * 3 + 1];
          const az = positions[i * 3 + 2];
          for (let j = i + 1; j < particleCount; j++) {
            const bx = positions[j * 3];
            const by = positions[j * 3 + 1];
            const bz = positions[j * 3 + 2];
            const dx = ax - bx;
            const dy = ay - by;
            const dz = az - bz;
            const dist2 = dx * dx + dy * dy + dz * dz;
            if (dist2 <= maxDistSq) {
              const base = pairCount * 6;
              linePositions[base] = ax;
              linePositions[base + 1] = ay;
              linePositions[base + 2] = az;
              linePositions[base + 3] = bx;
              linePositions[base + 4] = by;
              linePositions[base + 5] = bz;
              const t = 1 - Math.sqrt(dist2) / maxDist;
              setColorForPair(pairCount, t);
              pairCount++;
              if (pairCount >= maxPairs) break;
            }
          }
          if (pairCount >= maxPairs) break;
        }

        lineGeometry.setDrawRange(0, pairCount * 2);
        lineGeometry.attributes.position.array.set(linePositions);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.array.set(lineColors);
        lineGeometry.attributes.color.needsUpdate = true;

        renderer.render(scene, camera);
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    initScene();
  }, []);

  return (
    <div
      className="three-connected-bg"
      ref={mountRef}
      aria-hidden="true"
      style={{ background: bgColor }}
    />
  );
}
