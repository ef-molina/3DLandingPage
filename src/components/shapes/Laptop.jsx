import { Html } from '@react-three/drei';
import React from 'react';

const Laptop = (props) => {
  return (
    <>
      <group {...props}>
        <mesh>
          <boxGeometry
            args={[1080 * 0.0036, 720 * 0.0036, 0.05]}
            wrapperClass='screen'
          />
          <meshStandardMaterial color={'gray'} />
        </mesh>
        <mesh position={[0, -1.3, 1.27]} rotation={[Math.PI * 0.5, 0, 0]}>
          <boxGeometry
            args={[1080 * 0.0036, 720 * 0.0036, 0.05]}
            wrapperClass='screen'
          />
          <meshStandardMaterial color={'gray'} />
        </mesh>
        <mesh position={[0, -1.29, 0.9]} rotation={[Math.PI * 0.5, 0, 0]}>
          <boxGeometry
            args={[1200 * 0.003, 720 * 0.002, 0.05]}
            wrapperClass='screen'
          />
          <meshStandardMaterial color={'#232020'} />
        </mesh>
        <mesh position={[0, -1.275, 2.1]} rotation={[Math.PI * 0.5, 0, 0]}>
          <boxGeometry
            args={[450 * 0.003, 720 * 0.0012, 0.001]}
            wrapperClass='screen'
          />
          <meshStandardMaterial color={'#888888'} />
        </mesh>

        <Html transform wrapperClass='htmlScreen' distanceFactor={1.5}>
          {/* <iframe src='http://10.27.27.118:8080/' /> */}
          <iframe src='http://localhost:3000/' />
        </Html>
      </group>
    </>
  );
};

export default Laptop;
