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
  getOtherTechPosition,
  getFutureTechPosition,
  getTeaPosition,
  getExperiencePosition,
  getHobbiesPosition,
  getContactPosition,
  getCreamPlanetPosition,
  getGasPlanetPosition,
] = [
  () => new Vector3(-250, -260, -300),
  () => new Vector3(20, 25, 90),
  () => new Vector3(-300, -1600, 1600),
  () => new Vector3(-200, -100, 200),
  () => new Vector3(-350, -250, 100),
  () => new Vector3(150, -175, 225),
  () => new Vector3(10, 60, -80),
  () => new Vector3(0, 200, -25),
  () => new Vector3(-50, -60, 550),
  () => new Vector3(0, -35, 80),
  () => new Vector3(700, -140, 1400),
  () => new Vector3(0, 200, -1200),
];

export const [
  initScrollRange,
  introScrollRange,
  currentTechScrollRange,
  futureTechScrollRange,
  teaScrollRange,
  pastProjectsScrollRange,
  hobbiesScrollRange,
  contactScrollRange,
] = [
  (scroll: ScrollControlsState) => scroll.range(0, 0.05),
  (scroll: ScrollControlsState) => scroll.range(0.15, 0.04, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.27, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.42, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.55, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.7, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.81, 0.06, 0.01),
  (scroll: ScrollControlsState) => scroll.range(0.93, 0.06, 0.01),
];

export const [
  initVisible,
  introVisible,
  currentVisible,
  otherVisible,
  futureVisible,
  teaVisible,
  pastProjectsVisible,
  hobbiesVisible,
  contactVisible,
] = [
  (scroll: ScrollControlsState) => scroll.visible(0, 0.08),
  (scroll: ScrollControlsState) => scroll.visible(0, 0.2),
  (scroll: ScrollControlsState) => scroll.visible(0.16, 0.13),
  (scroll: ScrollControlsState) => scroll.visible(0.29, 0.2),
  (scroll: ScrollControlsState) => scroll.visible(0.42, 0.22),
  (scroll: ScrollControlsState) => scroll.visible(0.57, 0.15),
  (scroll: ScrollControlsState) => scroll.visible(0.69, 0.17),
  (scroll: ScrollControlsState) => scroll.visible(0.84, 0.155),
  (scroll: ScrollControlsState) => scroll.visible(0.91, 1),
];
