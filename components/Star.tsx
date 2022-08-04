import { fragment } from "./../lib/shaders/fragment";
import { vertex } from "./../lib/shaders/vertex";
import { TextureLoader, DoubleSide, RepeatWrapping, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
export default function Star() {
  const resolution = new Vector3(1080, 720, 1);
  const url = "/texture.jpg";
  const loader = new TextureLoader();
  const texture = loader.load(url);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  const uniforms = {
    iTime: { type: "f", value: 0.1 },
    iChannel0: {
      type: "t",
      value: loader.load(url),
    },
    iChannel1: { type: "t", value: loader.load(url) },
    iResolution: { type: "vec3", value: resolution },
  };

  useFrame((state, delta) => {
    uniforms.iTime.value += delta;
    resolution.set(state.size.width, state.size.height, 1.0);
  });

  return (
    <mesh position={[25, 20, 50]}>
      <sphereBufferGeometry args={[100]} />
      <shaderMaterial
        //extensions={}
        side={DoubleSide}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}
