import { getStarPosition } from "../lib/constants";

export default function SceneLights() {
  return (
    <>
      <pointLight
        position={getStarPosition()}
        color={0x7adeff}
        intensity={20}
        decay={2}
        distance={10000}
      />
      <ambientLight intensity={0.5} color={0xffffff} />
    </>
  );
}
