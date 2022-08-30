import { Vector3 } from "three";
import { getHobbiesPosition, hobbiesVisible } from "../../lib/constants";
import { hobbiesText } from "../../lib/text";
import TextImageBillboard from "./TextImageBillboard";

export default function ExperienceAndHobbies() {
  return (
    <>
      <TextImageBillboard
        textContent={hobbiesText}
        textContentPosition={new Vector3(0, 25, 0)}
        baseFontSize={18}
        baseFontWidth={510}
        position={getHobbiesPosition()}
        scrollVisible={hobbiesVisible}
        key={"hobbies"}
        wrapText
      />
    </>
  );
}
