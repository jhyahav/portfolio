import { Vector3 } from "three";
import { getIntroPlanetPosition, introVisible } from "../../lib/constants";
import TextImageBillboard from "./TextImageBillboard";
import { introText } from "../../lib/text";

export default function Intro() {
  return (
    <TextImageBillboard
      scrollVisible={introVisible}
      baseFontSize={5}
      baseFontWidth={40}
      position={getIntroPlanetPosition().add(new Vector3(-10, -5, -100))}
      textContent={introText}
    />
  );
}
