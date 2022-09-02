import { Text, Image } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  MeshStandardMaterial,
  ShaderMaterial,
  TextureLoader,
  Vector3,
} from "three";
import { galleryFragment } from "../../lib/shaders/galleryFragment";
import { galleryVertex } from "../../lib/shaders/galleryVertex";
import { baseTextProps } from "../TextComponents/TextImageBillboard";
import { GalleryImageProps } from "./Gallery";

const MAX_OPACITY = 0.8;

export default function GalleryContents({
  width,
  height,
  imageProps,
  currentIndex,
  prevIndex,
  setOverlayFadingOut,
  overlayFadingOut,
}: {
  width: number;
  height: number;
  imageProps: GalleryImageProps[];
  currentIndex: number;
  prevIndex: number;
  overlayFadingOut: boolean;
  setOverlayFadingOut: Dispatch<SetStateAction<boolean>>;
}) {
  const [overlayFadingIn, setOverlayFadingIn] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const imageMaterialRef = useRef<ShaderMaterial>(null);
  const overlayMaterialRef = useRef<MeshStandardMaterial>(null);
  const textRef = useRef<typeof Text>(null);
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
    if (imageMaterialRef.current) {
      const inter = imageMaterialRef.current.uniforms.uInterpolation.value;
      imageMaterialRef.current.uniforms.uInterpolation.value +=
        (1 - inter) * 0.1;
    }
  });

  // Manages activation of transition shader when indices are updated.
  useEffect(() => {
    if (imageMaterialRef.current) {
      imageMaterialRef.current.uniforms.uInterpolation.value = 0;
      imageMaterialRef.current.uniforms.uFirstImage.value = textures[prevIndex];
      imageMaterialRef.current.uniforms.uSecondImage.value =
        textures[currentIndex];
    }
  }, [currentIndex, prevIndex]);

  const overlayTextProps = {
    outlineWidth: width / 180,
    fontSize: width / 16,
    maxWidth: 0.9 * width,
    ...baseTextProps,
  };

  useFrame((state, delta) => {
    if (overlayFadingIn) {
      overlayOpacity < MAX_OPACITY
        ? setOverlayOpacity(overlayOpacity + delta * 5)
        : setOverlayFadingIn(false);
    }
    if (overlayFadingOut) {
      overlayOpacity > 0
        ? setOverlayOpacity(overlayOpacity - delta * 5)
        : setOverlayFadingOut(false);
    }
  });

  return (
    <group>
      <mesh
        onPointerOver={imageProps[currentIndex].onHover}
        onPointerOut={imageProps[currentIndex].onUnhover}
        onPointerDown={() => setOverlayFadingIn(true)}
      >
        <planeBufferGeometry args={[width, height]} />
        <shaderMaterial
          ref={imageMaterialRef}
          uniforms={uniforms}
          vertexShader={galleryVertex}
          fragmentShader={galleryFragment}
        />
      </mesh>
      <mesh onPointerDown={() => setOverlayFadingOut(true)}>
        <planeBufferGeometry args={[width, height]} />
        <meshStandardMaterial
          ref={overlayMaterialRef}
          transparent
          color={0x000000}
          opacity={overlayOpacity}
        />
        <Text
          ref={textRef}
          fillOpacity={overlayOpacity / MAX_OPACITY}
          outlineOpacity={overlayOpacity / MAX_OPACITY}
          {...overlayTextProps}
          position={new Vector3(0, height * 0.45, 1)}
        >
          {imageProps[currentIndex].description}
        </Text>
        <Image
          url="/GitHub.svg"
          // onClick={imageProps[currentIndex].onClick}
          opacity={overlayOpacity / MAX_OPACITY}
          scale={height / 8}
          onClick={() => console.log("GitHub")}
          transparent
          position={new Vector3(0.42 * width, -0.4 * height, 1)}
        />
      </mesh>
    </group>
  );
}
