import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Texture, Vector3 } from "three";
import React from "react";
export default function Planet({
  position,
  radius,
  colorHex,
  colorMap,
  displacementMap,
  children,
}: {
  position: Vector3;
  radius: number;
  colorHex: number;
  colorMap?: Texture;
  displacementMap?: Texture;
  children?: React.ReactNode;
}) {
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
        <meshStandardMaterial
          map={colorMap}
          displacementMap={displacementMap}
          color={colorHex}
        />
      </mesh>
      {children}
    </group>
  );
}
