import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader } from "three";

export default function Planet({
  x,
  y,
  z,
  radius,
  colorHex,
  texturePath,
}: {
  x: number;
  y: number;
  z: number;
  radius: number;
  colorHex: number;
  texturePath: string;
}) {
  const texture = useLoader(TextureLoader, texturePath);
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += 0.001;
      ref.current.rotation.y += 0.001;
      ref.current.position.x += 0.001;
    }
  });
  return (
    <mesh position={[x, y, z]} ref={ref}>
      <sphereBufferGeometry args={[radius]} />
      <meshStandardMaterial map={texture} color={colorHex} />
    </mesh>
  );
}
