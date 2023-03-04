import { Point, Points } from '@react-three/drei';
import React from 'react';

const Particles = () => {
  // creates an empty array
  const amount = new Array(5000).fill([]);

  return (
    <Points limit={5000}>
      <pointsMaterial size={0.05} vertexColors />

      {amount.map((value, index) => (
        <Point
          key={index}
          position={[
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 100,
            (Math.random() - 0.5) * 50,
          ]}
          color='white'
        />
      ))}
    </Points>
  );
};

export default Particles;
