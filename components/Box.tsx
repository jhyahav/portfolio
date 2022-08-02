import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";

export default function Box({
  initialPosition,
  focused,
}: {
  initialPosition: Vector3;
  focused: boolean;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  /*  const scroll = useScroll();
  useFrame((state, delta) => {
    if (focused && mesh.current) {
      state.camera.lookAt(mesh.current?.position);
      state.camera.position.lerp(
        mesh.current?.position.setZ(mesh.current.position.z - 1),
        0.01
      );
      state.camera.updateProjectionMatrix();
    }
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x +=
          0.1 * scroll.offset) &&
        (mesh.current.position.z = initialPosition.z + 10 * scroll.offset)
      : null;
  });*/

  return (
    <mesh ref={mesh} position={initialPosition}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial />
    </mesh>
  );
}
