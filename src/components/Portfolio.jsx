import {
  Center,
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  Text,
} from '@react-three/drei';
import React from 'react';
import Cube from './shapes/Cube';
import Laptop from './shapes/Laptop';
import Plane from './shapes/Plane';

const Portfolio = ({ position }) => {
  const handleDoubleClick = (e) => {
    e.eventObject.parent.position.set(0, 0, 4);
    e.eventObject.parent.rotation.set(0, 0, 0);
  };
  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <ambientLight />

      {/* <group scale={0.8} rotation={[0, 0.4, -0.1]}> */}
      <group position={position}>
        <Float rotationIntensity={0.2}>
          <group position={[-2, 0, 1]} rotation={[0, Math.PI * 0.25, 0]}>
            <rectAreaLight
              width={3.5}
              height={1.5}
              intensity={5}
              color={'#e2e0e0'}
              position={[0, -0.5, 0]}
              rotation={[Math.PI, 0, 0]}
            />
            <Laptop
              position={[0, 0, 0]}
              onDoubleClick={(e) => handleDoubleClick(e)}
            />
          </group>
          s
        </Float>

        <Text
          font='./amatic-sc-v24-latin-regular.woff'
          fontSize={2}
          position={[3, 0, -1]}
          rotation={[0, -Math.PI * 0.25, 0]}
        >
          ERIK MOLINA
        </Text>
      </group>
      <ContactShadows position={[0, -1.8, 0]} opacity={0.5} />
      {/* <Plane position={[0, -2, 0]} color='gray' /> */}
    </>
  );
};

export default Portfolio;
