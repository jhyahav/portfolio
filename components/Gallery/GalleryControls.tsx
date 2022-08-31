import { Html } from "@react-three/drei";
import { Dispatch, SetStateAction } from "react";
import { ArrowLeft, ArrowRight } from "./ArrowIcons";

export default function GalleryControls({
  imageCount,
  currentIndex,
  setCurrentIndex,
  setPrevIndex,
}: {
  imageCount: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setPrevIndex: Dispatch<SetStateAction<number>>;
}) {
  const setIndices = (direction: number) => {
    setPrevIndex(currentIndex);
    setCurrentIndex((imageCount + direction) % imageCount);
  };

  //TODO: add handlers for arrow keys, button clicks and mobile swipes

  //TODO: return buttons

  return (
    <Html>
      <button onClick={() => setIndices(currentIndex + 1)}>
        <ArrowRight />
      </button>
      <button onClick={() => setIndices(currentIndex - 1)}>
        <ArrowLeft />
      </button>
    </Html>
  );
}
