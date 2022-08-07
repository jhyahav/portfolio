import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader, Vector3 } from "three";
import React from "react";
export default function Planet({
  position,
  radius,
  colorHex,
  texturePath,
  children,
}: {
  position: Vector3;
  radius: number;
  colorHex: number;
  texturePath: string;
  children?: React.ReactNode;
}) {
  const texture = useLoader(TextureLoader, texturePath);
  const planetRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotateOnAxis(
        new Vector3(64 / 635, -1, -(64 / 635)),
        Math.PI / 200
      );
    }
  });
  return (
    <group position={position}>
      <mesh ref={planetRef}>
        <sphereBufferGeometry args={[radius]} />
        <meshStandardMaterial map={texture} color={colorHex} />
      </mesh>
      {children}
    </group>
  );
}
