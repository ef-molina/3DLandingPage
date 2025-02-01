import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

/**
 *
 * @returns {JSX.Element}
 *
 * This component renders three 3D objects (a torus, a sphere, and a box) in a 3D scene.
 * The objects are animated to rotate continuously.
 *
 */
const Objects = () => {
  // grabs the height and width of the viewport, useful for dynamic spacing
  const { height, width } = useThree((state) => state.viewport);

  // console.log('height: ', height);
  // console.log('width: ', width);

  // each object gets a ref
  const first = useRef();
  const second = useRef();
  const third = useRef();

  // controls the scale of objects, makes them larger or smaller
  const scale = 4;

  useFrame(({ clock }) => {
    // console.log(clock.elapsedTime);
    const elapsedTime = clock.elapsedTime;
    const speed = 0.15;

    // spins the top object
    first.current.rotation.x = elapsedTime * speed;
    first.current.rotation.y = elapsedTime * speed;

    // spins the middle object
    second.current.rotation.x = elapsedTime * speed;
    second.current.rotation.y = elapsedTime * speed;

    // spins the last object
    third.current.rotation.x = elapsedTime * speed;
    third.current.rotation.y = elapsedTime * speed;
  });
  return (
    <>
      <mesh ref={first} position={[-width / 3.5, -height * 0, 0]} scale={scale - 1.5}>
        <torusGeometry args={[1, 0.6, 16, 60]} />
        <meshStandardMaterial color={'#9da3fb'} wireframe />
      </mesh>

      <mesh ref={second} position={[0, -height * 1, 0]} scale={scale - 1}>
        <sphereGeometry />
        <meshStandardMaterial color={'#9da3fb'} wireframe />
      </mesh>

      <mesh ref={third} position={[width / 3.5, -height * 2, 0]} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color={'#9da3fb'} />
      </mesh>
    </>
  );
};

export default Objects;
