import { Float, ScrollControlsState } from "@react-three/drei";
import TextImageBillboard from "./TextImageBillboard";
import { getInitialPosition, initVisible } from "../../lib/constants";
import { useThree } from "@react-three/fiber";

export default function ScrollTip() {
  const { camera } = useThree();
  const position = camera.position.clone().lerp(getInitialPosition(), 0.2);
  return (
    <Float
      speed={0.25}
      floatingRange={[-0.0025, 0.0025]}
      floatIntensity={0.00025}
    >
      <TextImageBillboard
        scrollVisible={initVisible}
        position={position}
        textContent={"Scroll up & down to navigate!"}
        baseFontSize={10}
        baseFontWidth={100}
      />
    </Float>
  );
}
