import { ScrollControlsState } from "@react-three/drei";
import { Vector3 } from "three";

// Prevents jittering, improves performance, does not damage smoothness of animation
export const EPSILON = 0.00001;
// Note that lerp mutates vectors, so it's necessary to make copies
export const getInitialPosition = () => new Vector3(-250, -260, -300);
export const getIntroPlanetPosition = () => new Vector3(20, 25, 90);
export const getStarPosition = () => new Vector3(-300, -1600, 1600);
export const getCurrentTechPosition = () => new Vector3(-300, -200, 50);
export const getFutureTechPosition = () =>
  getCurrentTechPosition().lerp(getStarPosition(), 0.15);
export const getTeaPosition = () => new Vector3(100, 0, -100);

export const introScrollRange = (scroll: ScrollControlsState) =>
  scroll.range(0.15, 0.15, 0.05);
