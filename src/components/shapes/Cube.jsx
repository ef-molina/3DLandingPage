import React, { forwardRef } from 'react';

const Cube = React.forwardRef((props, ref) => {
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial color={props.color} toneMapped={props.toneMapped} />
    </mesh>
  );
});

export default Cube;

//  <mesh
//       ref={ref}
//       castShadow
//       position={position}
//       scale={scale}
//       onClick={onClick}
//     >
//       <boxGeometry args={args} />
//       <meshStandardMaterial
//         color={color}
//         wireframe={wireframe}
//         envMapIntensity={envMapIntensity}
//       />
//     </mesh>
