import { fragment } from "./../lib/shaders/fragment";
import { vertex } from "./../lib/shaders/vertex";
import {
  TextureLoader,
  Texture,
  DoubleSide,
  RepeatWrapping,
  Vector3,
  Vector2,
} from "three";
import { useFrame } from "@react-three/fiber";
export default function Star() {
  const resolution = new Vector3(1080, 720, 1);
  const urls = ["/texture.jpg", "/noise.jpg"];
  const loader = new TextureLoader();
  const textures: Array<Texture> = [];
  urls.forEach((url, i) => (textures[i] = loader.load(url)));
  textures.forEach((texture) => {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  });
  const uniforms = {
    iTime: { type: "f", value: 0.1 },
    iChannel0: {
      type: "t",
      value: textures[0],
    },
    iChannel1: { type: "t", value: textures[1] },
    iResolution: { type: "vec3", value: resolution },
    uvScale: { type: "vec2", value: new Vector2(3.5, 7.0) },
  };

  useFrame((state, delta) => {
    uniforms.iTime.value += delta;
    resolution.set(state.size.width, state.size.height, 1.0);
  });

  return (
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry args={[500]} />
      <shaderMaterial
        side={DoubleSide}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}
