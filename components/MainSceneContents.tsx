import { ScrollControls, Stars } from "@react-three/drei";
import Path from "../components/Path";
import DyingStar from "../components/DyingStar";
import SpaceStation from "../components/SpaceStation";
import { Vector3 } from "three";
import SceneLights from "../components/SceneLights";
import ScrollTip from "./TextComponents/ScrollTip";
import AsteroidBelt from "./AsteroidBelt";
import ImageComponents from "./TextComponents/ImageComponents";
import ExperienceAndHobbies from "./TextComponents/ExperienceAndHobbies";
import Planets from "./Planets";

export default function MainSceneContents({
  overlayVisible,
  warpActive,
}: {
  overlayVisible: boolean;
  warpActive: boolean;
}) {
  const enabled = !(overlayVisible || warpActive);

  return (
    <group visible={enabled}>
      {/* distance can be increased to accommodate additional sections */}
      <ScrollControls distance={25} damping={2} enabled={enabled}>
        <Path />
        {overlayVisible || warpActive || (
          <DyingStar position={new Vector3(100, 100, 100)} outerRadius={1600} />
        )}
        <ScrollTip />
        <Planets />
        <SpaceStation scale={0.125} launched={enabled} />
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
