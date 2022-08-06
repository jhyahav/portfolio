import { useScroll } from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import ModifiedCurve from "../lib/ModifiedCurve";
import { useState } from "react";

// Prevents jittering, improves performance, does not damage smoothness of animation
const EPSILON = 0.00001;
// Note that lerp mutates vectors, so it's necessary to make copies
const planetPosition = new Vector3(20, 25, 50);
const starPosition = new Vector3(0, -100, 300);

export default function Path() {
  const scroll = useScroll();
  const [currentOffset, setOffset] = useState(0);
  useFrame((state, delta) => {
    if (Math.abs(currentOffset - scroll.offset) > EPSILON) {
      setOffset(scroll.offset);
      const position = modC.getPointAt(currentOffset);
      const viewTarget = new Vector3()
        .copy(planetPosition)
        .lerp(new Vector3().copy(starPosition), scroll.range(0.15, 0.1));
      state.camera.lookAt(viewTarget);
      state.camera.position.lerp(position, 0.1);
      state.camera.updateProjectionMatrix();
      console.log(viewTarget.x, viewTarget.y, viewTarget.z);
    }
  });

  const modC = new ModifiedCurve();
  return null;
}
