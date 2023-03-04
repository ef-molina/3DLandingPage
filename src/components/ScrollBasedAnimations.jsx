import { Scroll, ScrollControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import React from 'react';
import Objects from './Objects';
import Html from './Html';
import Particles from './Particles';

const ScrollBasedAnimations = () => {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    // camera.position.z = THREE.MathUtils.lerp(
    //   camera.position.z,
    //   Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
    //   0.01
    // );
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
