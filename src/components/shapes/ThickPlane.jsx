import React from 'react';

const ThickPlane = (props) => {
  return (
    <mesh position={[0, -1.15, 0]} receiveShadow {...props}>
      <boxGeometry args={[20, 0.25, 20]} />
      <meshStandardMaterial {...props} />
    </mesh>
  );
};

export default ThickPlane;
