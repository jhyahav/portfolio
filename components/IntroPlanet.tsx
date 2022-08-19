import Planet from "./Planet";
import Intro from "./TextComponents/Intro";
import { getIntroPlanetPosition } from "../lib/constants";
import { Texture } from "three";

export default function IntroPlanet({
  colorMap,
  displacementMap,
}: {
  colorMap: Texture;
  displacementMap?: Texture;
}) {
  return (
    <Planet
      position={getIntroPlanetPosition()}
      radius={10}
      colorHex={0xff0011}
      colorMap={colorMap}
    >
      <Intro />
    </Planet>
  );
}
