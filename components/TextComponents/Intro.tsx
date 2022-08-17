import { Vector3 } from "three";
import { getIntroPlanetPosition, introScrollRange } from "../../constants";
import TextImageBillboard from "./TextImageBillboard";
import { introText } from "../../lib/text";

const DEFAULT_WIDTH = 1080;

export default function Intro() {
  return (
    <TextImageBillboard
      scrollRange={introScrollRange}
      position={getIntroPlanetPosition().add(new Vector3(-12, -5, -105))}
      textContent={introText}
    />
  );
}
