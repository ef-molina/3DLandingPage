import { Point, Points } from '@react-three/drei';
import React from 'react';

/**
 *
 * @returns {JSX.Element}
 * * This component renders a 3D scene with 5000 particles.
 *
 */
const Particles = () => {
  // creates an empty array to hold 5000 particles
  const amount = new Array(5000).fill([]);

  return (
    <Points limit={5000}>
      <pointsMaterial size={0.05} vertexColors />

      {amount.map((index) => (
        <Point key={index} position={[(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 50]} color='white' />
      ))}
    </Points>
  );
};

export default Particles;
