import { Vector3 } from "three";
import { getIntroPlanetPosition, introScrollRange } from "../../constants";
import TextBillboard from "./TextBillboard";

const DEFAULT_WIDTH = 1080;

export default function Intro() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tenetur et pariatur aliquid labore nesciunt maxime exercitationem, unde inventore tempora ullam adipisci cumque harum maiores at fugiat, voluptas nisi numquam!";

  return (
    <TextBillboard
      scrollRange={introScrollRange}
      position={getIntroPlanetPosition().add(new Vector3(-12, -5, -105))}
      textContent={lorem}
    />
  );
}
