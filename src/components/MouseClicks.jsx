import { OrbitControls, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { meshBounds } from '@react-three/drei';
import React, { useRef } from 'react';
import BurgerLogo from './shapes/BurgerLogo';
import Cube from './shapes/Cube';
import Plane from './shapes/Plane';

const MouseClicks = () => {
  const cube = useRef();
  const burger = useRef();

  useFrame((state, delta) => {
    cube.current.rotation.y += delta;

    // burger.current.rotation.y += delta;
  });

  const handleClick = (e) => {
    e.stopPropagation();
    console.log('Click: ', e);
  };

  const handleRightClick = (e) => console.log('DoubleClick: ', e);

  const handleDoubleClick = (e) =>
    console.log(
      'Double click: ',
      e.object.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
    );

  const handlePointerDown = (e) => console.log('Pointer Down: ', e);

  const handlePointerEnter = (e) => {
    document.body.style.cursor = 'pointer';
    console.log('Pointer Enter: ', e);
  };
  const handlePointerLeave = (e) => {
    document.body.style.cursor = 'default';
    console.log('Pointer Leave: ', e);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.object.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
  };

  return (
    <>
      <color args={['#bac2af']} attach='background' />
      <OrbitControls />
      <ambientLight intensity={0.5} />

      <BurgerLogo
        ref={burger}
        scale={0.5}
        position={[2, -1, 0]}
        onClick={(e) => handleClick(e)}
        onDoubleClick={(e) => handleDoubleClick(e)}
        onPointerMove={(e) => handlePointerMove(e)}
      />
      <Cube
        ref={cube}
        raycast={meshBounds} // creates an area around object for less percision
        color='mediumpurple'
        position={[-2, -0.2, 2]}
        scale={1.5}
        onClick={(e) => handleClick(e)} // triggers when clicked down and released on object
        onPointerMove={(e) => e.stopPropagation()} //stops mouse from registering behind object
        onContextMenu={(e) => handleRightClick(e)} // triggers on rightclick
        onDoubleClick={(e) => handleDoubleClick(e)} // triggers on double click
        onPointerDown={(e) => handlePointerDown(e)} // triggers when only clicked down
        onPointerEnter={(e) => handlePointerEnter(e)} // triggers when cursor first touches object
        onPointerLeave={(e) => handlePointerLeave(e)} // triggers when cursor first touches object
      />
      <mesh position={[3, 0, 3]}>
        <sphereGeometry />
        <meshBasicMaterial color='blue' wireframe />
      </mesh>

      <Plane color='lightblue' />
    </>
  );
};

export default MouseClicks;
