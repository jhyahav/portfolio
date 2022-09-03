import { Image } from "@react-three/drei";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

const BUTTON_ACTIVE_HEX = 0xaaaaaa;
const BUTTON_HOVER_HEX = 0xcccccc;
const BUTTON_INACTIVE_HEX = 0xffffff;

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
  setOverlayFadingOut,
}: {
  imageCount: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setPrevIndex: Dispatch<SetStateAction<number>>;
  width: number;
  pointerDown: boolean;
  setPointerDown: Dispatch<SetStateAction<boolean>>;
  setOverlayFadingOut: Dispatch<SetStateAction<boolean>>;
  pointerStart?: number;
  pointerCurrent?: number;
}) {
  const rightRef = useRef<Mesh>(null);
  const leftRef = useRef<Mesh>(null);

  const [rightActive, setRightActive] = useState(false);
  const [leftActive, setLeftActive] = useState(false);

  // Handles any transition between gallery images. Also activates & deactivates buttons.
  const setIndices = (direction: number) => {
    setOverlayFadingOut(true);
    if (direction === currentIndex + 1) {
      setRightActive(true);
      setTimeout(() => setRightActive(false), 175);
    }
    if (direction === currentIndex - 1) {
      setLeftActive(true);
      setTimeout(() => setLeftActive(false), 175);
    }
    setTimeout(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((imageCount + direction) % imageCount);
    }, 200);
  };

  const handleHover = (ref: typeof rightRef, active: boolean) => {
    document.body.style.cursor = active ? "pointer" : "default";
    // @ts-ignore
    ref.current?.material.color.set(
      active ? BUTTON_HOVER_HEX : BUTTON_INACTIVE_HEX
    );
  };

  // Handles gestures/pointer events, mainly for touch devices.
  useEffect(() => {
    if (pointerDown && pointerStart && pointerCurrent) {
      const delta = pointerStart - pointerCurrent;
      if (delta < -(width / 4)) {
        setIndices(currentIndex + 1);
        setPointerDown(false);
        return;
      }
      if (delta > width / 4) {
        setIndices(currentIndex - 1);
        setPointerDown(false);
        return;
      }
    }
  }, [pointerDown, pointerStart, pointerCurrent]);

  // Handles arrow keys.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) =>
      e.key === "ArrowRight"
        ? setIndices(currentIndex + 1)
        : e.key === "ArrowLeft"
        ? setIndices(currentIndex - 1)
        : null;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, setIndices]);

  // Handles button colors on activation.
  useEffect(() => {
    // @ts-ignore because color property is not recognized for some reason
    rightRef.current?.material.color.set(
      rightActive ? BUTTON_ACTIVE_HEX : BUTTON_INACTIVE_HEX
    );
    // @ts-ignore
    leftRef.current?.material.color.set(
      leftActive ? BUTTON_ACTIVE_HEX : BUTTON_INACTIVE_HEX
    );
  }, [rightActive, leftActive]);

  return (
    <>
      <Image
        ref={rightRef}
        url={"/Arrow_right.svg"}
        //@ts-ignore because of weird type behavior of scale prop
        scale={[width * 0.15, width * 0.15, 1]}
        position={new Vector3(width * 0.6, 0, 0)}
        onPointerDown={() => setIndices(currentIndex + 1)}
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
        onPointerDown={() => setIndices(currentIndex - 1)}
        onPointerOver={() => handleHover(leftRef, true)}
        onPointerOut={() => handleHover(leftRef, false)}
        transparent
      />
    </>
  );
}
