import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { getCreamPlanetPosition, getGasPlanetPosition } from "../lib/constants";
import { wrap } from "./AsteroidBelt";
import IntroPlanet from "./IntroPlanet";
import Planet from "./Planet";

export default function Planets() {
  const [
    rockColorMap1,
    rockColorMap2,
    gasColorMap,
    displacementMap1,
    displacementMap2,
  ] = useLoader(TextureLoader, [
    "/rock.webp",
    "/planet.jpg",
    "/gas_planet.png",
    "/displacement1.png",
    "/displacement3.png",
  ]);
  wrap([
    rockColorMap1,
    rockColorMap2,
    gasColorMap,
    displacementMap1,
    displacementMap2,
  ]);
  return (
    <>
      <IntroPlanet
        colorMap={rockColorMap1}
        displacementMap={displacementMap2}
      />
      <Planet
        position={getCreamPlanetPosition()}
        radius={60}
        colorHex={0xfffdd0}
        colorMap={rockColorMap2}
        displacementMap={displacementMap1}
        displacementScale={3}
      />
      <Planet
        position={getGasPlanetPosition()}
        radius={100}
        colorHex={0x0055aa}
        colorMap={gasColorMap}
      />
    </>
  );
}
