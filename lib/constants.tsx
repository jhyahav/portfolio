import { ScrollControlsState } from "@react-three/drei";
import { Vector3 } from "three";

// Prevents jittering, improves performance, does not damage smoothness of animation
export const EPSILON = 0.00001;
// Note that lerp mutates vectors, so it's necessary to make copies

export const [
  getInitialPosition,
  getIntroPlanetPosition,
  getStarPosition,
  getCurrentTechPosition,
  getFutureTechPosition,
  getTeaPosition,
  getExperiencePosition,
  getHobbiesPosition,
  getContactPosition,
] = [
  () => new Vector3(-250, -260, -300),
  () => new Vector3(20, 25, 90),
  () => new Vector3(-300, -1600, 1600),
  () => new Vector3(-300, -200, 50),
  () => new Vector3(150, -175, 225),
  () => new Vector3(10, 60, -100),
  () => new Vector3(0, 200, -25),
  () => new Vector3(-50, -150, 175),
  () => new Vector3(0, -15, 100),
];

export const [
  initScrollRange,
  introScrollRange,
  currentTechScrollRange,
  futureTechScrollRange,
  teaScrollRange,
  experienceScrollRange,
  hobbiesScrollRange,
  contactScrollRange,
] = [
  (scroll: ScrollControlsState) => scroll.range(0, 0.08),
  (scroll: ScrollControlsState) => scroll.range(0.15, 0.1, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.25, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.4, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.55, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.7, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.81, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.91, 0.06, 0.01),
];

export const [
  initVisible,
  introVisible,
  currentVisible,
  futureVisible,
  teaVisible,
  experienceVisible,
  hobbiesVisible,
  contactVisible,
] = [
  (scroll: ScrollControlsState) => scroll.visible(0, 0.08),
  (scroll: ScrollControlsState) => scroll.visible(0, 0.2),
  (scroll: ScrollControlsState) => scroll.visible(0.25, 0.2),
  (scroll: ScrollControlsState) => scroll.visible(0.4, 0.22),
  (scroll: ScrollControlsState) => scroll.visible(0.57, 0.12),
  (scroll: ScrollControlsState) => scroll.visible(0.69, 0.17),
  (scroll: ScrollControlsState) => scroll.visible(0.84, 0.1),
  (scroll: ScrollControlsState) => scroll.visible(0.91, 1),
];
