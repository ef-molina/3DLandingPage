import { useThree, extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import {
  Float,
  Text,
  Html,
  OrbitControls,
  PivotControls,
  TransformControls,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { MeshNormalMaterial } from 'three';

const DreiHelpers = () => {
  const sphereRef = useRef();
  const cubeRef = useRef();
  const objectGroup = useRef();

  useFrame((state, delta) => {
    //State contains camera, renderer ect. . .
    // cubeRef.current.rotation.y -= delta;
    // objectGroup.current.rotation.y += delta;
    //This makes the camera rotate while focusing on the center of the scene
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle * 0.1) * 8;
    // state.camera.position.z = Math.cos(angle * 0.1) * 8;
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[-1, 2, 3]} intensity={1} />
      <ambientLight intensity={0.5} />

      <group ref={objectGroup}>
        <PivotControls anchor={[0, 0, 0]} depthTest={false}>
          {/* ===================== SPHERE ======================== */}
          <mesh ref={sphereRef} scale={1} position={[-4, 0, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color='blue' wireframe={true} />
            <Html
              position={[1, 1, 0]}
              wrapperClass='label'
              center
              distanceFactor={6}
              occlude={[sphereRef, cubeRef]}
            >
              Sphere 🌎
            </Html>
          </mesh>
        </PivotControls>

        {/* ===================== CUBE ======================== */}
        <mesh ref={cubeRef} scale={1.5} position={[4, 0, 0]}>
          {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' wireframe={false} />
        </mesh>
        {/* <TransformControls object={cubeRef} mode='translate' /> */}
      </group>

      {/* ===================== FLOOR ======================== */}
      <mesh position={[0, -1, 0]} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />

        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.8}
          color='gold'
        />
      </mesh>

      {/* ========================== TEXT ========================= */}
      <Float speed={2}>
        <Text
          font='./amatic-sc-v24-latin-regular.woff'
          fontSize={1}
          position={[0, 1, 0]}
          maxWidth={4}
          textAlign='center'
        >
          I love my wife.
          <meshNormalMaterial />
        </Text>
      </Float>
    </>
  );
};

export default DreiHelpers;
