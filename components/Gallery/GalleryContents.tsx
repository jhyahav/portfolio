import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { ShaderMaterial, Texture, TextureLoader } from "three";
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

  // const uniforms = {
  //   uFirstImage: { type: "t", value: textures[prevIndex] },
  //   uSecondImage: { type: "t", value: textures[currentIndex] },
  //   uInterpolation: { type: "f", value: 0 },
  // };

  const uniforms = useMemo(() => {
    return {
      uFirstImage: { type: "t", value: textures[prevIndex] },
      uSecondImage: { type: "t", value: textures[currentIndex] },
      uInterpolation: { type: "f", value: 0 },
    };
  }, []);

  useEffect(() => {
    console.log("Changed");
  }, [uniforms]);

  // TODO: check using treeshaking w/ extend API!

  useFrame((state, delta) => {
    if (ref.current) {
      const inter = ref.current.uniforms.uInterpolation.value;
      ref.current.uniforms.uInterpolation.value += (1 - inter) * 0.1;
      ref.current.uniforms.uFirstImage.value = textures[prevIndex];
      ref.current.uniforms.uSecondImage.value = textures[currentIndex];
      //console.log(inter);
    }
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.uniforms.uInterpolation.value = 0;
      ref.current.uniforms.uFirstImage.value = textures[prevIndex];
      ref.current.uniforms.uSecondImage.value = textures[currentIndex];
    }
    // console.log(
    //   ref.current?.uniforms.uSecondImage.value,
    //   ref.current?.uniforms.uFirstImage.value,
    //   ref.current?.uniforms.uInterpolation.value
    // );
  }, [currentIndex, prevIndex]);

  return (
    <mesh
      onClick={imageProps[currentIndex].onClick}
      onPointerOver={imageProps[currentIndex].onHover}
      onPointerOut={imageProps[currentIndex].onUnhover}
    >
      <planeBufferGeometry args={[width, height]} />
      <shaderMaterial
        ref={ref}
        uniforms={uniforms}
        needsUpdate={true}
        uniformsNeedUpdate={true}
        vertexShader={galleryVertex}
        fragmentShader={galleryFragment}
      />
    </mesh>
  );
}
