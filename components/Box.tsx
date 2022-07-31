import { ThreeElements, useFrame } from "@react-three/fiber";
import { MutableRefObject, useRef } from "react";
import * as THREE from "three";

export default function Box() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null;
  });

  return (
    <>
      <mesh ref={mesh}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial />
      </mesh>
    </>
  );
}
