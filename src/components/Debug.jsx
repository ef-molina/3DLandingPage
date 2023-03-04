import { OrbitControls } from '@react-three/drei';
import { button, useControls } from 'leva';
import { Perf } from 'r3f-perf';
import Cube from './shapes/Cube';
import Plane from './shapes/Plane';

const Debug = () => {
  const { perfVisible } = useControls({
    perfVisible: true,
  });
  const controls = useControls('Sphere', {
    position: {
      value: { x: -3, y: 0 },
      step: 0.01,
      joystick: 'invertY',
    },
    color: '#ff0000',
    visible: true,
    clickMe: button(() => {
      console.log('ok');
    }),
    choice: { options: ['Hover', 'Spin', 'Bounce'] },
  });
  return (
    <>
      {perfVisible && <Perf position='top-left' />}
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 2]} />

      {/* ========================== Sphere ============================ */}
      <mesh
        //   position={[-3, 0, 0]}
        position={[controls.position.x, controls.position.y, 0]}
        visible={controls.visible}
      >
        <sphereGeometry />
        <meshStandardMaterial
          color={controls.color}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      <Cube position={[3, 0, 0]} scale={1.5} />

      <Plane />
    </>
  );
};

export default Debug;
