import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';

function RotatingBox({ rotationSpeed }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += rotationSpeed;
  });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

const Card3D = ({ role, des, imgUrl, borderColor, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-6 transform transition-transform duration-300 ease-in-out"
      style={{ borderColor, borderWidth: '2px', borderStyle: 'solid' }}
      initial={{ x: isEven ? -200 : 200, opacity: 0, rotateY: 90 }}
      animate={{ x: 0, opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} />
          <RotatingBox rotationSpeed={0.01} />
        </Canvas>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-white text-2xl font-bold leading-tight">{role}</div>
        <div className="text-gray-400 text-base leading-normal">{des}</div>
        <a href="#"><div className="m-1 text-green-700 text-xl font-medium font-['Inter']">See Projects</div></a>
      </div>
    </motion.div>
  );
};

export default Card3D;
