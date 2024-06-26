import type { NextPage } from 'next';
import React, { useRef, useState, Suspense } from 'react';
import THREE from 'three';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';
import { motion } from 'framer-motion';

const DrawCanvas: NextPage = () => {
  const Box = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame(
      (state, delta) => (
        (ref.current.rotation.x += 0.01),
        (ref.current.rotation.y += 0.01),
        (ref.current.rotation.z += 0.01)
      )
    );
    return (
      <>
        <mesh
          {...props}
          ref={ref}
          scale={active ? 3 : 1}
          onClick={(event) => setActive(!active)}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? 'aqua' : 'tomato'} />
        </mesh>
      </>
    );
  };

  return (
    <Canvas
      style={{
        width: 100 + 'vw',
        height: 100 + 'vh',
        // position: 'fixed',
        // top: 0,
        // left: 0,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default DrawCanvas;
