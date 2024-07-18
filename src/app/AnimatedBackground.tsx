// src/app/AnimatedBackground.tsx
import React, { useEffect } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '-1';
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    const generateRandomFloatSpread = (range: number) => {
      return Math.random() * range - range / 2;
    };

    for (let i = 0; i < 1000; i++) {
      vertices.push(generateRandomFloatSpread(2000)); // x
      vertices.push(generateRandomFloatSpread(2000)); // y
      vertices.push(generateRandomFloatSpread(2000)); // z
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0x888888 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 500;

    const animate = function () {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return null;
};

export default AnimatedBackground;
