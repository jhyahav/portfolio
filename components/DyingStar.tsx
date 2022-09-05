import { useFrame, useLoader } from "@react-three/fiber";
import {
  BackSide,
  RepeatWrapping,
  TextureLoader,
  Vector2,
  Vector3,
} from "three";
import { fragment } from "../lib/shaders/fragment";
import { vertex } from "../lib/shaders/vertex";

//TODO: FIXME: bufferGeometry aliases have been deprecated. Remove all of them!

export default function DyingStar({
  position,
  outerRadius,
}: {
  position: Vector3;
  outerRadius: number;
}) {
  const urls = ["/rock.webp", "/noise.jpg"];
  const textures = useLoader(TextureLoader, urls);
  textures.forEach((texture) => {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  });
  const uniforms = {
    iTime: { type: "f", value: 1 },
    iChannel0: {
      type: "t",
      value: textures[0],
    },
    iChannel1: { type: "t", value: textures[1] },
    uvScale: { type: "vec2", value: new Vector2(2.75, 2.0) },
  };

  useFrame((state, delta) => {
    uniforms.iTime.value += delta;
  });

  return (
    <mesh position={position}>
      <sphereGeometry args={[outerRadius]} />
      <shaderMaterial
        side={BackSide}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}
