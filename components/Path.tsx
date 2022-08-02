import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import ModifiedCurve from "../lib/ModifiedCurve";

export default function Path() {
  const scroll = useScroll();
  useFrame((state, delta) => {
    const halfway = 0; //scroll.curve(0.5, 0.25);
    const target =
      halfway >= 0.0001
        ? new THREE.Vector3(1, 1, 1)
        : modC.getPointAt(scroll.offset);
    state.camera.lookAt(target);
    state.camera.position.lerp(target, 0.1);
    console.log(target.x, target.y, target.z);
  });

  const modC = new ModifiedCurve();
  return (
    <mesh>
      <tubeGeometry args={[modC, 50, 0, undefined, true]} />
      <meshStandardMaterial color={0xffffff} metalness={0.6} />
    </mesh>
  );
}
