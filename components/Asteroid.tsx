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
  roughness?: number;
}

export default function Asteroid(props: AsteroidProps) {
  const meshRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      if (props.rotation) {
        meshRef.current.rotateX(props.rotation.x);
        meshRef.current.rotateY(props.rotation.y);
        meshRef.current.rotateZ(props.rotation.z);
      }
    }
  });
  return (
    <mesh ref={meshRef} position={props.position} scale={props.scale}>
      <sphereGeometry args={[props.radius]} />
      <meshStandardMaterial
        color={props.color}
        map={props.colorMap}
        displacementMap={props.displacementMap}
        displacementScale={0.4 * props.radius}
        visible={true}
        roughness={props.roughness}
      />
    </mesh>
  );
}
