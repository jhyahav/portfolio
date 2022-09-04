import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import GalleryControls from "./GalleryControls";
import GalleryContents from "./GalleryContents";
import { Vector3 } from "three";
import disableScroll from "disable-scroll";
import { GalleryImageProps } from "../TextComponents/ImageProps";

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
  const [prevIndex, setPrevIndex] = useState(0);
  const [pointerDown, setPointerDown] = useState(false);
  const [pointerStart, setPointerStart] = useState<number>();
  const [pointerCurrent, setPointerCurrent] = useState<number>();
  const [overlayFadingIn, setOverlayFadingIn] = useState(false);
  const [overlayFadingOut, setOverlayFadingOut] = useState(false);

  return (
    <group
      position={position}
      onPointerUp={(e) => {
        setPointerDown(false);
        disableScroll.off();
      }}
      onPointerMove={(e) => {
        setPointerCurrent(e.point.x);
      }}
      onPointerCancel={(e) => {
        setPointerDown(false);
        setPointerCurrent(e.point.x);
        disableScroll.off();
      }}
      onPointerOut={() => disableScroll.off()}
      onPointerDown={(e) => {
        setPointerDown(true);
        setPointerStart(e.point.x);
        setPointerCurrent(e.point.x);
        disableScroll.on();
      }}
    >
      <GalleryContents
        {...{
          width,
          height,
          imageProps,
          currentIndex,
          prevIndex,
          overlayFadingIn,
          setOverlayFadingIn,
          overlayFadingOut,
          setOverlayFadingOut,
        }}
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
          setOverlayFadingOut,
        }}
      />
    </group>
  );
}
