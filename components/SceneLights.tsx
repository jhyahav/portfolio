import { getStarPosition } from "../constants";

export default function SceneLights() {
  return (
    <>
      <pointLight
        position={getStarPosition()}
        color={0x3333ff}
        intensity={100}
        decay={2}
        distance={10000}
      />
      <ambientLight intensity={0.5} color={0xffffff} />
    </>
  );
}
