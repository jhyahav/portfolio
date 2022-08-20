import { ScrollControlsState } from "@react-three/drei";
import {
  experienceScrollRange,
  experienceVisible,
  getExperiencePosition,
  getHobbiesPosition,
  hobbiesScrollRange,
  hobbiesVisible,
} from "../../lib/constants";
import { hobbiesText, otherExperienceText } from "../../lib/text";
import TextImageBillboard from "./TextImageBillboard";

export default function ExperienceAndHobbies() {
  //const tempScroll = (scroll: ScrollControlsState) => scroll.range(0, 1);
  return (
    <>
      <TextImageBillboard
        textContent={otherExperienceText}
        baseFontSize={20}
        baseFontWidth={260}
        position={getExperiencePosition()}
        scrollVisible={experienceVisible}
        key={"other"}
      />
      <TextImageBillboard
        textContent={hobbiesText}
        baseFontSize={15}
        baseFontWidth={140}
        position={getHobbiesPosition()}
        scrollVisible={hobbiesVisible}
        key={"hobbies"}
      />
    </>
  );
}
