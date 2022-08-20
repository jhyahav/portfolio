import { ScrollControls, Stars } from "@react-three/drei";
import Path from "../components/Path";
import DyingStar from "../components/DyingStar";
import SpaceStation from "../components/SpaceStation";
import Planet from "../components/Planet";
import { RepeatWrapping, TextureLoader, Vector3 } from "three";
import IntroPlanet from "../components/IntroPlanet";
import SceneLights from "../components/SceneLights";
import ScrollTip from "./TextComponents/ScrollTip";
import { useLoader } from "@react-three/fiber";
import AsteroidBelt from "./AsteroidBelt";
import ImageComponents from "./TextComponents/ImageComponents";
import ExperienceAndHobbies from "./TextComponents/ExperienceAndHobbies";

export default function MainSceneContents({
  overlayVisible,
  warpActive,
}: {
  overlayVisible: boolean;
  warpActive: boolean;
}) {
  const enabled = !(overlayVisible || warpActive);
  const [colorMap, displacementMap] = useLoader(TextureLoader, [
    "/rock.webp",
    "/example_displacement.jpg",
  ]);
  displacementMap.wrapS = RepeatWrapping;
  displacementMap.wrapT = RepeatWrapping;

  return (
    <group visible={enabled}>
      {/* FIXME: weird scrolling behavior at when offset is 1; scroll becomes enabled on mobile and stuff breaks  */}
      <ScrollControls distance={20} damping={1} enabled={enabled}>
        <Path />
        {overlayVisible || warpActive || (
          <DyingStar position={new Vector3(100, 100, 100)} outerRadius={1600} />
        )}
        <ScrollTip />
        <IntroPlanet colorMap={colorMap} />
        <SpaceStation scale={0.125} launched={enabled} />
        <Planet
          position={new Vector3(350, -60, 520)}
          radius={40}
          colorHex={0x00ff33}
          colorMap={colorMap}
        />
        <AsteroidBelt />
        <ImageComponents />
        <ExperienceAndHobbies />
        <Stars
          radius={5}
          depth={1300}
          count={5000}
          factor={30}
          saturation={0}
          fade
          speed={1.25}
        />
      </ScrollControls>
      <SceneLights />
    </group>
  );
}
