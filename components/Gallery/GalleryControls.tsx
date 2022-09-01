import { Image } from "@react-three/drei";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

export default function GalleryControls({
  imageCount,
  currentIndex,
  setCurrentIndex,
  setPrevIndex,
  width,
  pointerDown,
  setPointerDown,
  pointerStart,
  pointerCurrent,
}: {
  imageCount: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setPrevIndex: Dispatch<SetStateAction<number>>;
  width: number;
  pointerDown: boolean;
  setPointerDown: Dispatch<SetStateAction<boolean>>;
  pointerStart?: number;
  pointerCurrent?: number;
}) {
  const rightRef = useRef<Mesh>(null);
  const leftRef = useRef<Mesh>(null);

  const setIndices = (direction: number) => {
    setPrevIndex(currentIndex);
    setCurrentIndex((imageCount + direction) % imageCount);
  };

  //TODO: add handlers for arrow keys

  const handleHover = (ref: typeof rightRef, active: boolean) => {
    document.body.style.cursor = active ? "pointer" : "default";
    //@ts-ignore
    ref.current.material.color.set(active ? 0x999999 : 0xffffff);
  };

  useEffect(() => {
    if (pointerDown && pointerStart && pointerCurrent) {
      const delta = pointerStart - pointerCurrent;
      if (delta < -(width / 3)) {
        setIndices(currentIndex + 1);
        setPointerDown(false);
      }
      if (delta > width / 3) {
        setIndices(currentIndex - 1);
        setPointerDown(false);
      }
    }
  }, [pointerDown, pointerStart, pointerCurrent]);

  return (
    <>
      <Image
        ref={rightRef}
        url={"/Arrow_right.svg"}
        //@ts-ignore
        scale={[width * 0.15, width * 0.15, 1]}
        position={new Vector3(width * 0.6, 0, 0)}
        onClick={() => setIndices(currentIndex + 1)}
        onPointerOver={() => handleHover(rightRef, true)}
        onPointerOut={() => handleHover(rightRef, false)}
        transparent
      />
      <Image
        ref={leftRef}
        url={"/Arrow_left.svg"}
        //@ts-ignore
        scale={[width * 0.15, width * 0.15, 1]}
        position={new Vector3(width * -0.6, 0, 0)}
        onClick={() => setIndices(currentIndex - 1)}
        onPointerOver={() => handleHover(leftRef, true)}
        onPointerOut={() => handleHover(leftRef, false)}
        transparent
      />
    </>
  );
}
