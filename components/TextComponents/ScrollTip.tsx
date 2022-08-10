import { Float, ScrollControlsState } from "@react-three/drei";
import TextBillboard from "./TextBillboard";
import { getInitialPosition } from "../../constants";
import { useThree } from "@react-three/fiber";

export default function ScrollTip() {
  const scrollRange = (scroll: ScrollControlsState) => scroll.range(0.0, 0.07);
  const { camera } = useThree();
  const position = camera.position.clone().lerp(getInitialPosition(), 0.1);
  //FIXME: Could have issues with float on narrow screens. Check.
  return (
    <Float
      speed={0.25}
      floatingRange={[-0.0025, 0.0025]}
      floatIntensity={0.000025}
    >
      <TextBillboard
        scrollRange={scrollRange}
        position={position}
        textContent={"Scroll up & down to navigate!"}
      />
    </Float>
  );
}
