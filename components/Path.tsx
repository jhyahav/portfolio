import { useScroll } from "@react-three/drei";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import ModifiedCurve from "../lib/ModifiedCurve";
import { useState } from "react";
import {
  EPSILON,
  getInitialPosition,
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
      const planetToStar = getIntroPlanetPosition().lerp(
        getStarPosition(),
        introScrollRange(scroll)
      );
      const viewTarget = getInitialPosition().lerp(
        planetToStar.clone(),
        scroll.range(0, 0.08)
      );
      state.camera.lookAt(viewTarget);
      state.camera.position.lerp(position, 0.1);
      state.camera.updateProjectionMatrix();
    }
    console.log(scroll.offset);
  });

  const modC = new ModifiedCurve();
  return null;
}
