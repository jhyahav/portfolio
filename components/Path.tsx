import { useScroll } from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import ModifiedCurve from "../lib/ModifiedCurve";
import { useState } from "react";

// Prevents jittering, improves performance, does not damage smoothness of animation
const EPSILON = 0.00001;

export default function Path() {
  const scroll = useScroll();
  const [currentOffset, setOffset] = useState(0);
  useFrame((state, delta) => {
    if (Math.abs(currentOffset - scroll.offset) > EPSILON) {
      setOffset(scroll.offset);
      const halfway = 0; //scroll.curve(0.5, 0.25);
      const target =
        halfway >= 0.0001
          ? new Vector3(1, 1, 1)
          : modC.getPointAt(currentOffset);

      state.camera.lookAt(target);
      //state.camera.lookAt(new Vector3(0, 0, 0));
      state.camera.position.lerp(target, 0.1);
      state.camera.updateProjectionMatrix();
      console.log(target.x, target.y, target.z);
    }
  });

  const modC = new ModifiedCurve();
  return null;
}
