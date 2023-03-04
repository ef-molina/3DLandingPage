import { MeshReflectorMaterial } from '@react-three/drei';

const PlaneMirror = ({ color = 'gray' }) => {
  return (
    <mesh
      receiveShadow
      position={[0, -1, 0]}
      rotation-x={-Math.PI * 0.5}
      scale={10}
    >
      <planeGeometry />
      <MeshReflectorMaterial
        resolution={512}
        blur={[1000, 1000]}
        mixBlur={1}
        mirror={0.8}
        color={color}
      />
    </mesh>
  );
};

export default PlaneMirror;
