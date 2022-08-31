import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import GalleryControls from "./GalleryControls";
import GalleryContents from "./GalleryContents";
import { Vector3 } from "three";

export interface GalleryImageProps {
  src: string;
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(2);
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
