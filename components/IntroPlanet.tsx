import Planet from "./Planet";
import Intro from "./Intro";
import { getIntroPlanetPosition } from "../constants";

export default function IntroPlanet() {
  return (
    <Planet
      position={getIntroPlanetPosition()}
      radius={10}
      colorHex={0xff0011}
      texturePath={"/rock.webp"}
    >
      <Intro />
    </Planet>
  );
}
