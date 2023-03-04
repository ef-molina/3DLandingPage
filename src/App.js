import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import ScrollBasedAnimations from './components/ScrollBasedAnimations';

const App = () => {
  // camera and canvas styles
  const closeCameraSettings = {
    fov: 75,
    near: 0.1,
    far: 200,
    position: [0, 0, 10],
  };

  return (
    <Canvas
      flat
      dpr={2} // default pixel ratio
      camera={closeCameraSettings}
      shadows={true}
    >
      <Perf />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 3, 1]} intensity={2.5} />
      <ScrollBasedAnimations />
    </Canvas>
  );
};

export default App;
