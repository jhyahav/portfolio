import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as constants from "../lib/constants";
import ModifiedCurve from "../lib/ModifiedCurve";

export default function Path() {
  const scroll = useScroll();
  const [currentOffset, setOffset] = useState(0);
  useFrame((state, delta) => {
    if (
      Math.abs(currentOffset - scroll.offset) > constants.EPSILON ||
      scroll.offset > constants.EPSILON ||
      scroll.offset > 1 - constants.EPSILON
    ) {
      setOffset(scroll.offset);
      const position = modC.getPointAt(currentOffset);

      const initToIntro = constants
        .getInitialPosition()
        .lerp(
          constants.getIntroPlanetPosition(),
          constants.initScrollRange(scroll)
        );
      const introToStar = initToIntro
        .clone()
        .lerp(constants.getStarPosition(), constants.introScrollRange(scroll));
      const starToCurrentTech = introToStar
        .clone()
        .lerp(
          constants.getCurrentTechPosition(),
          constants.currentTechScrollRange(scroll)
        );

      const currentToFuture = starToCurrentTech
        .clone()
        .lerp(
          constants.getFutureTechPosition(),
          constants.futureTechScrollRange(scroll)
        );

      const futureToTea = currentToFuture
        .clone()
        .lerp(constants.getTeaPosition(), constants.teaScrollRange(scroll));

      const teaToExperience = futureToTea
        .clone()
        .lerp(
          constants.getExperiencePosition(),
          constants.experienceScrollRange(scroll)
        );

      const experienceToHobbies = teaToExperience
        .clone()
        .lerp(
          constants.getHobbiesPosition(),
          constants.hobbiesScrollRange(scroll)
        );

      const hobbiesToContact = experienceToHobbies
        .clone()
        .lerp(
          constants.getContactPosition(),
          constants.contactScrollRange(scroll)
        );

      const viewTarget = hobbiesToContact;

      state.camera.lookAt(viewTarget);
      state.camera.position.lerp(position, 0.1);
      state.camera.updateProjectionMatrix();
    }
  });

  const modC = new ModifiedCurve();
  return null;
}
