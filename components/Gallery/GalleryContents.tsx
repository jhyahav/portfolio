import { Text, Image, Sparkles } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ShaderMaterial, TextureLoader, Vector3 } from "three";
import { EPSILON } from "../../lib/constants";
import { galleryFragment } from "../../lib/shaders/galleryFragment";
import { galleryVertex } from "../../lib/shaders/galleryVertex";
import { hoverProps } from "../TextComponents/ImageProps";
import { baseTextProps } from "../TextComponents/TextImageBillboard";
import { GalleryImageProps } from "./Gallery";

const MAX_OPACITY = 0.8;
const MAX_INFO_SCALE = 1 / 7;
const ICON_SCALE = 1 / 8;
const MIN_INFO_SCALE = 1 / 9;
export default function GalleryContents({
  width,
  height,
  imageProps,
  currentIndex,
  prevIndex,
  overlayFadingIn,
  setOverlayFadingIn,
  setOverlayFadingOut,
  overlayFadingOut,
}: {
  width: number;
  height: number;
  imageProps: GalleryImageProps[];
  currentIndex: number;
  prevIndex: number;
  overlayFadingIn: boolean;
  setOverlayFadingIn: Dispatch<SetStateAction<boolean>>;
  overlayFadingOut: boolean;
  setOverlayFadingOut: Dispatch<SetStateAction<boolean>>;
}) {
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [infoClicked, setInfoClicked] = useState(false);
  const [infoScale, setInfoScale] = useState(ICON_SCALE);
  const [infoGrowing, setInfoGrowing] = useState(true);
  const imageMaterialRef = useRef<ShaderMaterial>(null);
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

  // Part of interpolation management during transition.
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
    outlineWidth: width / 160,
    fontSize: width / 16,
    maxWidth: 0.9 * width,
    fillOpacity: overlayOpacity / MAX_OPACITY,
    outlineOpacity: overlayOpacity / MAX_OPACITY,
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

  useFrame((state, delta) => {
    //FIXME: info grows huge/disappears when browser is minimized.
    if (!infoClicked) {
      infoGrowing
        ? infoScale >= MAX_INFO_SCALE
          ? setInfoGrowing(false)
          : setInfoScale(infoScale + delta / 25)
        : infoScale <= MIN_INFO_SCALE
        ? setInfoGrowing(true)
        : setInfoScale(infoScale - delta / 25);
    } else {
      setInfoScale(ICON_SCALE);
    }
  });

  return (
    <group>
      <mesh
        onPointerOver={imageProps[currentIndex].onHover}
        onPointerOut={imageProps[currentIndex].onUnhover}
      >
        <planeBufferGeometry args={[width, height]} />
        <shaderMaterial
          ref={imageMaterialRef}
          uniforms={uniforms}
          vertexShader={galleryVertex}
          fragmentShader={galleryFragment}
        />
      </mesh>
      <mesh>
        <planeBufferGeometry args={[width, height]} />
        <meshStandardMaterial
          transparent
          color={0x000000}
          opacity={overlayOpacity}
        />
        <Text {...overlayTextProps} position={new Vector3(0, height * 0.3, 1)}>
          {imageProps[currentIndex].description}
        </Text>
        <Image
          url="/close.svg"
          opacity={overlayOpacity / MAX_OPACITY}
          visible={overlayOpacity > EPSILON}
          scale={height * ICON_SCALE}
          onClick={() => setOverlayFadingOut(true)}
          onPointerOver={hoverProps.onHover}
          onPointerOut={hoverProps.onUnhover}
          transparent
          position={new Vector3(0.42 * width, 0.35 * height, 1)}
        />
        <Image
          url="/info.svg"
          opacity={1 - overlayOpacity / MAX_OPACITY}
          visible={overlayOpacity < 1 - EPSILON}
          scale={height * infoScale}
          onClick={() => {
            setOverlayFadingIn(true);
            setInfoClicked(true);
          }}
          onPointerOver={hoverProps.onHover}
          onPointerOut={hoverProps.onUnhover}
          transparent
          position={new Vector3(0.42 * width, 0.348 * height, 1)}
        />

        <group
          onClick={imageProps[currentIndex].onClick}
          onPointerOver={hoverProps.onHover}
          onPointerOut={hoverProps.onUnhover}
          visible={overlayOpacity > EPSILON}
        >
          <Text
            {...overlayTextProps}
            fontSize={width / 25}
            outlineWidth={width / 250}
            position={new Vector3(0.23 * width, -0.378 * height, 1)}
          >
            view source code
          </Text>
          <Image
            url="/GitHub.svg"
            opacity={overlayOpacity / MAX_OPACITY}
            scale={height / 8}
            transparent
            position={new Vector3(0.42 * width, -0.4 * height, 1)}
          />
        </group>
      </mesh>
    </group>
  );
}
