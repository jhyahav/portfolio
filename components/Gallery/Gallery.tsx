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
  const [pointerDown, setPointerDown] = useState(false);
  const [pointerStart, setPointerStart] = useState<number>();
  const [pointerCurrent, setPointerCurrent] = useState<number>();
  return (
    <group
      position={position}
      onPointerUp={(e) => {
        setPointerDown(false);
      }}
      onPointerMove={(e) => {
        setPointerCurrent(e.point.x);
      }}
      onPointerCancel={(e) => {
        console.log("cancel");
        setPointerDown(false);
        setPointerCurrent(e.point.x);
      }}
      // onPointerMissed={(e) => {
      //   console.log(e.clientX);
      // }}
      onPointerDown={(e) => {
        setPointerDown(true);
        setPointerStart(e.point.x);
        setPointerCurrent(e.point.x);
      }}
    >
      <GalleryContents
        {...{ width, height, imageProps, currentIndex, prevIndex }}
      />
      <GalleryControls
        imageCount={imageProps.length}
        {...{
          currentIndex,
          setCurrentIndex,
          setPrevIndex,
          width,
          pointerDown,
          setPointerDown,
          pointerStart,
          pointerCurrent,
        }}
      />
    </group>
  );
}
