import { ImageProps } from "./../TextComponents/TextImageBillboard";
import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import GalleryControls from "./GalleryControls";
import GalleryContents from "./GalleryContents";
import { Vector3 } from "three";

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

  return (
    <group position={position}>
      <GalleryContents
        {...{ width, height, imageProps, currentIndex, prevIndex }}
      />
      <GalleryControls
        imageCount={imageProps.length}
        {...{ currentIndex, setCurrentIndex, setPrevIndex, width }}
      />
    </group>
  );
}
