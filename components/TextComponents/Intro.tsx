import { Vector3 } from "three";
import { getIntroPlanetPosition, introScrollRange } from "../../constants";
import TextBillboard from "./TextBillboard";
import { introText } from "../../lib/text";

const DEFAULT_WIDTH = 1080;

export default function Intro() {
  return (
    <TextBillboard
      scrollRange={introScrollRange}
      position={getIntroPlanetPosition().add(new Vector3(-12, -5, -105))}
      textContent={introText}
    />
  );
}
