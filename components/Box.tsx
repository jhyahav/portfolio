import { Float, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";

export default function Box({ initialPosition }: { initialPosition: Vector3 }) {
  const [clicked, setClicked] = useState(false);
  const mesh = useRef<THREE.Mesh>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (clicked && mesh.current) {
      state.camera.lookAt(mesh.current?.position);
      state.camera.position.lerp(mesh.current?.position, 0.1);
      state.camera.updateProjectionMatrix();
    }
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x +=
          0.1 * scroll.offset) &&
        (mesh.current.position.z = initialPosition.z + 10 * scroll.offset)
      : null;
  });

  return (
    <Float floatingRange={[-1, 1]} floatIntensity={1.5} speed={2}>
      <mesh
        ref={mesh}
        position={initialPosition}
        onClick={() => setClicked(!clicked)}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial />
      </mesh>
    </Float>
  );
}
