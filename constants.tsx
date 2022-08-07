import { ScrollControlsState } from "@react-three/drei";
import { Vector3 } from "three";

// Prevents jittering, improves performance, does not damage smoothness of animation
export const EPSILON = 0.00001;
// Note that lerp mutates vectors, so it's necessary to make copies
export const getIntroPlanetPosition = () => new Vector3(20, 25, 90);
export const getStarPosition = () => new Vector3(-300, -1600, 1600);

export const introScrollRange = (scroll: ScrollControlsState) =>
  scroll.range(0.15, 0.15, 0.05);
