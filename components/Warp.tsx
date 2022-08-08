import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { warpFragment } from "../lib/shaders/warpFragment";
import { warpVertex } from "../lib/shaders/warpVertex";

export default function Warp() {
  const ref = useRef(null);
  const uniforms = {
    iTime: { type: "f", value: 2 },
  };
  useFrame((state, delta) => {
    uniforms.iTime.value += delta;
  });

  return (
    <Suspense fallback={<div id="overlay" />}>
      <mesh>
        <planeBufferGeometry args={[2, 2]} />
        <shaderMaterial
          vertexShader={warpVertex}
          fragmentShader={warpFragment}
          uniforms={uniforms}
        />
      </mesh>
    </Suspense>
  );
}
