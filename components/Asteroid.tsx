import { Mesh, Texture, Vector3 } from "three";
import { Sphere } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export interface AsteroidProps {
  position: Vector3;
  scale: Vector3;
  radius: number;
  color: number;
  rotation?: Vector3;
  colorMap?: Texture;
  displacementMap?: Texture;
}

export default function Asteroid(props: AsteroidProps) {
  const meshRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current && props.rotation) {
      meshRef.current.rotateX(props.rotation.x);
      meshRef.current.rotateY(props.rotation.y);
      meshRef.current.rotateZ(props.rotation.z);
    }
  });
  return (
    <Sphere
      ref={meshRef}
      args={[props.radius]}
      position={props.position}
      scale={props.scale}
    >
      <meshStandardMaterial
        color={props.color}
        map={props.colorMap}
        displacementMap={props.displacementMap}
        displacementScale={1.2}
        visible={true}
      />
    </Sphere>
  );
}
