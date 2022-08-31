import { Image } from "@react-three/drei";
import { Dispatch, SetStateAction, useRef } from "react";
import { Mesh, Vector3 } from "three";

export default function GalleryControls({
  imageCount,
  currentIndex,
  setCurrentIndex,
  setPrevIndex,
  width,
}: {
  imageCount: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setPrevIndex: Dispatch<SetStateAction<number>>;
  width: number;
}) {
  const rightRef = useRef<Mesh>(null);
  const leftRef = useRef<Mesh>(null);

  const setIndices = (direction: number) => {
    setPrevIndex(currentIndex);
    setCurrentIndex((imageCount + direction) % imageCount);
  };

  //TODO: add handlers for arrow keys, button clicks and mobile swipes

  const handleHover = (ref: typeof rightRef, active: boolean) => {
    document.body.style.cursor = active ? "pointer" : "default";
    //@ts-ignore
    ref.current.material.color.set(active ? 0x999999 : 0xffffff);
  };

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
