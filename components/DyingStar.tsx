import { fragment } from "../lib/shaders/fragment";
import { vertex } from "../lib/shaders/vertex";
import {
  TextureLoader,
  Texture,
  DoubleSide,
  RepeatWrapping,
  Vector3,
  Vector2,
  FrontSide,
  BackSide,
} from "three";
import { useFrame, useLoader } from "@react-three/fiber";
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
      <sphereBufferGeometry args={[outerRadius]} />
      <shaderMaterial
        side={BackSide}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}
