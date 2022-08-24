import { useFrame, useThree } from "@react-three/fiber";
import { getInitialPosition } from "../lib/constants";
import { warpFragment } from "../lib/shaders/warpFragment";
import { warpVertex } from "../lib/shaders/warpVertex";

export default function Warp() {
  const uniforms = {
    iTime: { type: "f", value: 2 },
  };
  useFrame((state, delta) => {
    uniforms.iTime.value += delta;
  });

  const { camera } = useThree();

  return (
    <mesh position={camera.position.clone().lerp(getInitialPosition(), 0.1)}>
      <planeBufferGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={warpVertex}
        fragmentShader={warpFragment}
        uniforms={uniforms}
      />
    </mesh>
  );
}
