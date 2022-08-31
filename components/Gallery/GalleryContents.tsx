import { Text } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { ShaderMaterial, TextureLoader } from "three";
import { galleryFragment } from "../../lib/shaders/galleryFragment";
import { galleryVertex } from "../../lib/shaders/galleryVertex";
import { GalleryImageProps } from "./Gallery";

export default function GalleryContents({
  width,
  height,
  imageProps,
  currentIndex,
  prevIndex,
}: {
  width: number;
  height: number;
  imageProps: GalleryImageProps[];
  currentIndex: number;
  prevIndex: number;
}) {
  const ref = useRef<ShaderMaterial>(null);

  const textures = useLoader(
    TextureLoader,
    imageProps.map((imageProps) => imageProps.src)
  );

  /*This is essential in making the shader work properly in a case like this.
    Serious issues occur when uniforms aren't memoized (because of how react-three/fiber works).*/
  const uniforms = useMemo(() => {
    return {
      uFirstImage: { type: "t", value: textures[prevIndex] },
      uSecondImage: { type: "t", value: textures[currentIndex] },
      uInterpolation: { type: "f", value: 0 },
    };
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      const inter = ref.current.uniforms.uInterpolation.value;
      ref.current.uniforms.uInterpolation.value += (1 - inter) * 0.1;
    }
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.uniforms.uInterpolation.value = 0;
      ref.current.uniforms.uFirstImage.value = textures[prevIndex];
      ref.current.uniforms.uSecondImage.value = textures[currentIndex];
    }
  }, [currentIndex, prevIndex]);

  return (
    <group>
      <mesh
        onClick={imageProps[currentIndex].onClick}
        onPointerOver={imageProps[currentIndex].onHover}
        onPointerOut={imageProps[currentIndex].onUnhover}
      >
        <planeBufferGeometry args={[width, height]} />
        <shaderMaterial
          ref={ref}
          uniforms={uniforms}
          vertexShader={galleryVertex}
          fragmentShader={galleryFragment}
        />
      </mesh>
      <Text>...</Text>
    </group>
  );
}
