import { ImageProps } from "./../TextComponents/TextImageBillboard";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import GalleryControls from "./GalleryControls";
import GalleryContents from "./GalleryContents";
import { Vector3 } from "three";
import { EPSILON } from "../../lib/constants";

export interface GalleryImageProps extends ImageProps {
  onClick: (event: ThreeEvent<MouseEvent>) => void;
  onHover: (event: ThreeEvent<PointerEvent>) => void;
  onUnhover: (event: ThreeEvent<PointerEvent>) => void;
  description?: string;
}
export default function Gallery({
  imageProps,
  position,
  width,
  height,
}: {
  imageProps: GalleryImageProps[];
  position: Vector3;
  width: number;
  height: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(0);
  //TODO: add me
  //const [currentWidth, setCurrentWidth] = useState();

  useEffect(() => {
    console.log(currentIndex);
    console.log(prevIndex);
  }, [currentIndex, prevIndex]);

  // useFrame((state, delta) => {
  //   if (
  //     Math.ceil(state.clock.elapsedTime) % 2 === 0 &&
  //     Math.round(state.clock.elapsedTime) - state.clock.elapsedTime < EPSILON
  //   ) {
  //     setPrevIndex(currentIndex);
  //     setCurrentIndex((currentIndex + 1) % imageProps.length);
  //     console.log(state.clock.elapsedTime);
  //   }
  // });

  return (
    <group position={position}>
      <GalleryContents
        {...{ width, height, imageProps, currentIndex, prevIndex }}
      />
      <GalleryControls
        imageCount={imageProps.length}
        {...{ currentIndex, setCurrentIndex, setPrevIndex }}
      />
    </group>
  );
}
