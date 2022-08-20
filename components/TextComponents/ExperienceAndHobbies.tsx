import { Vector3 } from "three";
import {
  experienceVisible,
  getExperiencePosition,
  getHobbiesPosition,
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
        textContentPosition={new Vector3(0, 60, 0)}
        baseFontSize={20}
        baseFontWidth={260}
        position={getExperiencePosition()}
        scrollVisible={experienceVisible}
        key={"other"}
      />
      <TextImageBillboard
        textContent={hobbiesText}
        baseFontSize={20}
        baseFontWidth={260}
        position={getHobbiesPosition()}
        scrollVisible={hobbiesVisible}
        key={"hobbies"}
      />
    </>
  );
}
