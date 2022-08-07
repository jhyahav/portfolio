import { useScroll } from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import ModifiedCurve from "../lib/ModifiedCurve";
import { useState } from "react";
import {
  EPSILON,
  getIntroPlanetPosition,
  getStarPosition,
  introScrollRange,
} from "../constants";

export default function Path() {
  const scroll = useScroll();
  const [currentOffset, setOffset] = useState(0);
  useFrame((state, delta) => {
    if (Math.abs(currentOffset - scroll.offset) > EPSILON) {
      setOffset(scroll.offset);
      const position = modC.getPointAt(currentOffset);
      const viewTarget = getIntroPlanetPosition().lerp(
        getStarPosition(),
        introScrollRange(scroll)
      );
      state.camera.lookAt(viewTarget);
      state.camera.position.lerp(position, 0.1);
      state.camera.updateProjectionMatrix();
      console.log(viewTarget.x, viewTarget.y, viewTarget.z);
    }
  });

  const modC = new ModifiedCurve();
  return null;
}
