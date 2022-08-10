import {
  Billboard,
  ScrollControlsState,
  useScroll,
  Text,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { Vector3 } from "three";
const DEFAULT_VIEWPORT_WIDTH = 1080;
const DEFAULT_FONT_SIZE = 3.5;
const DEFAULT_TEXT_WIDTH = 40;

export default function TextBillboard({
  scrollRange,
  position,
  textContent,
}: {
  scrollRange: (scroll: ScrollControlsState) => number;
  position: Vector3;
  textContent: String;
}) {
  const { size } = useThree();
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [maxTextWidth, setMaxTextWidth] = useState(DEFAULT_TEXT_WIDTH);
  const adjustSize = (original: number, width: number) =>
    (original * width) / DEFAULT_VIEWPORT_WIDTH;
  // TODO: test for height as well?
  useEffect(() => {
    setFontSize(adjustSize(DEFAULT_FONT_SIZE, size.width));
    setMaxTextWidth(adjustSize(DEFAULT_TEXT_WIDTH, size.width));
  }, [size.width]);
  const scroll = useScroll();
  const [visible, setVisible] = useState(true);
  useFrame((state, delta) => {
    setVisible(scrollRange(scroll) < 0.5);
  });
  return (
    <Billboard position={position} visible={visible} follow>
      <Text
        color={"white"}
        outlineWidth={fontSize * 0.1}
        fontSize={fontSize}
        outlineColor={"black"}
        anchorX={"center"}
        anchorY={"top"}
        textAlign={"justify"}
        maxWidth={maxTextWidth}
        font={"/VT323-Regular.ttf"}
      >
        {textContent}
      </Text>
    </Billboard>
  );
}
