import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ThickPlane from './shapes/ThickPlane';
import BurgerLogo from './shapes/BurgerLogo';
import {
  Debug,
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
  CylinderCollider,
  InstancedRigidBodies,
} from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Hamburger from './shapes/Hamburger';

const PhysicsModule = () => {
  const [hitSound] = useState(() => new Audio('./hit.mp3'));
  const cube = useRef();
  const ball = useRef();
  const spin = useRef();

  const cubeJump = () => {
    console.log(cube.current);
    const mass = cube.current.mass();
    cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 });
    cube.current.applyTorqueImpulse({ x: 0, y: Math.PI, z: 0 });
  };
  const ballJump = () => {
    console.log(ball.current);
    ball.current.applyImpulse({ x: 0, y: 20, z: 0 });
    // ball.current.applyTorqueImpulse({ x: Math.PI, y: 0, z: 0 });
  };

  //  ================== Generate CUBES================================
  const cubesCount = 500;
  const cubes = useRef();

  const cubesTransforms = useMemo(() => {
    const positions = [];
    const rotations = [];
    const scales = [];

    for (let i = 0; i < cubesCount; i++) {
      positions.push([
        (Math.random() - 0.5) * 16,
        6 + i * 0.2,
        (Math.random() - 0.5) * 16,
      ]);
      rotations.push([0, 0, 0]);
      scales.push([1, 1, 1]);
    }
    return { positions, rotations, scales };
  }, []);

  const collisionEnter = () => {
    // hitSound.currentTime = 0;
    // hitSound.volume = Math.random();
    // hitSound.play();
  };
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const eulerRotation = new THREE.Euler(0, time * 4, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    spin.current.setNextKinematicRotation(quaternionRotation);
    const angle = time * 0.5;
    const x = Math.cos(angle) * 2;
    const z = Math.sin(angle) * 2;
    spin.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z });
  });
  return (
    <>
      <Perf position='top-left' />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[1, 2, 3]} />

      <Physics gravity={[0, -20, 0]}>
        {/* <Debug /> */}

        {/* ================================ SPHERE ============================== */}
        <RigidBody
          ref={ball}
          colliders='ball'
          position={[2, 1.5, 0]}
          restitution={1.5} // how much bounce
          friction={0.7} // how much it slides ex: carpet or cement
        >
          <mesh castShadow onClick={ballJump}>
            <sphereGeometry scale={1.2} />
            <meshStandardMaterial color={'mediumpurple'} />
          </mesh>
        </RigidBody>

        {/* ================================ CUBE ============================== */}
        <RigidBody
          position={[-2, 1.5, 0]}
          ref={cube}
          gravityScale={1}
          restitution={1}
          colliders={false}
          onCollisionEnter={collisionEnter}
          // onCollisionExit={() => console.log('exit')}
          onSleep={() => console.log('sleep')}
        >
          <mesh castShadow onClick={cubeJump}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial />
          </mesh>
          <CuboidCollider mass={1} args={[0.75, 0.75, 0.75]} />
        </RigidBody>

        {/* ================================ SPINNER ============================== */}
        <RigidBody
          ref={spin}
          position={[0, -0.8, 0]}
          friction={0}
          type='kinematicPosition'
        >
          <mesh castShadow scale={[0.4, 0.4, 15]}>
            <boxGeometry />
            <meshStandardMaterial color={'red'} />
          </mesh>
        </RigidBody>

        {/* ================================== BURGER =================================== */}
        <RigidBody colliders={false} position={[0, 5, 0]} friction={0.7}>
          <Hamburger scale={0.255} position={[0, -0.68, 0]} />
          <CylinderCollider args={[0.6, 1.25]} />
        </RigidBody>

        {/* ====================================== PLANE ================================== */}

        <RigidBody type='fixed' friction={0}>
          <ThickPlane color={'gray'} />
        </RigidBody>

        <RigidBody type='fixed'>
          <mesh
            position={[0, 4, -9.85]}
            receiveShadow
            rotation={[Math.PI * 0.5, 0, 0]}
          >
            <boxGeometry args={[20, 0.25, 10]} />
            <meshStandardMaterial color={'gray'} />
          </mesh>
          <mesh
            position={[-9.85, 4, 0]}
            receiveShadow
            rotation={[0, 0, Math.PI * 0.5]}
          >
            <boxGeometry args={[10, 0.25, 20]} />
            <meshStandardMaterial color={'gray'} />
          </mesh>
          <mesh rotation={[0, 0, -Math.PI * 0.5]} position={[9.85, 4, 0]}>
            <boxGeometry args={[10, 0.25, 20]} />
            <meshStandardMaterial color={'gray'} />
          </mesh>
          <CuboidCollider args={[9, 5, 0.15]} position={[0, 4, 10]} />
        </RigidBody>

        {/* ============================== instance CUBES ======================= */}

        <InstancedRigidBodies
          positions={cubesTransforms.positions}
          rotations={cubesTransforms.rotations}
          scales={cubesTransforms.scales}
        >
          <instancedMesh ref={cubes} castShadow args={[null, null, cubesCount]}>
            <boxGeometry />
            <meshStandardMaterial color='tomato' />
          </instancedMesh>
        </InstancedRigidBodies>
      </Physics>
    </>
  );
};

export default PhysicsModule;

//  <RigidBody>
//           <Cube castShadow scale={1.5} position={[-2, 2, 0]} color='#bacaff' />
//           <mesh castShadow position={[-2, 2, -1]}>
//             <boxGeometry args={[3, 2, 1]} />
//             <meshStandardMaterial />
//           </mesh>
//         </RigidBody>

//  <RigidBody
//    colliders={false}
//    rotation={[Math.PI * 0.5, 0, 0]}
//    position={[0, 0, 0]}
//  >
//    <CuboidCollider args={[1.5, 1.5, 0.5]} />
//    <mesh castShadow>
//      <torusGeometry args={[1, 0.5, 16, 32]} />
//      <meshStandardMaterial />
//    </mesh>
//  </RigidBody>;
