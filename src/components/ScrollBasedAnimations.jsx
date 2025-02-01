import { Scroll, ScrollControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import React from 'react';
import Objects from './Objects';
import Html from './Html';
import Particles from './Particles';

/**
 *
 * @returns {JSX.Element}
 *
 * Scroll-based animations
 * - Camera movement
 * - Text movement
 * - Particle movement
 * - Object movement
 *
 */
const ScrollBasedAnimations = () => {
  // This is to get the mouse position from the useFrame hook
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01);
  });

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <Objects />
        <Particles stars={5000} />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
};

export default ScrollBasedAnimations;
