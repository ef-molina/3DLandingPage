import { MeshReflectorMaterial } from '@react-three/drei';
import React from 'react';

const Plane = (props) => {
  return (
    <mesh
      receiveShadow
      position={[0, -1, 0]}
      rotation-x={-Math.PI * 0.5}
      scale={10}
      {...props}
    >
      <planeGeometry />
      <meshStandardMaterial {...props} />
    </mesh>
  );
};

export default Plane;
