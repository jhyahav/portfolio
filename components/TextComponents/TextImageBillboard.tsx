import {
  Billboard,
  ScrollControlsState,
  useScroll,
  Text,
  Image,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { Vector3 } from "three";

const DEFAULT_VIEWPORT_WIDTH = 1080;
const DEFAULT_FONT_SIZE = 5;
const DEFAULT_TEXT_WIDTH = 40;

export interface ImageProps {
  src: string;
  relativePosition: Vector3;
  scale: [number, number, number];
}

//TODO: resize image based on resolution, as implemented for text!
export default function TextImageBillboard({
  scrollRange,
  position,
  textContent,
  textContentPosition,
  images,
  bottomTextContent,
  bottomTextContentPosition,
  baseFontSize = DEFAULT_FONT_SIZE,
  baseFontWidth = DEFAULT_TEXT_WIDTH,
}: {
  scrollRange: (scroll: ScrollControlsState) => number;
  position: Vector3;
  textContent: string;
  textContentPosition?: Vector3;
  images?: ImageProps[];
  bottomTextContent?: string;
  bottomTextContentPosition?: Vector3;
  baseFontSize?: number;
  baseFontWidth?: number;
}) {
  const { size } = useThree();
  const [fontSize, setFontSize] = useState(baseFontSize);
  const [maxTextWidth, setMaxTextWidth] = useState(baseFontWidth);
  const adjustSize = (original: number, width: number) =>
    (original * width) / DEFAULT_VIEWPORT_WIDTH;
  // TODO: test for height as well?
  useEffect(() => {
    setFontSize(adjustSize(baseFontSize, size.width));
    setMaxTextWidth(adjustSize(baseFontWidth, size.width));
  }, [size.width]);
  const scroll = useScroll();
  const [visible, setVisible] = useState(true);
  useFrame((state, delta) => {
    setVisible(scrollRange(scroll) < 0.5);
  });
  const textProps: {
    color: string;
    outlineWidth: number;
    fontSize: number;
    outlineColor: string;
    anchorX: number | "center" | "left" | "right";
    anchorY:
      | number
      | "top"
      | "bottom"
      | "middle"
      | "top-baseline"
      | "bottom-baseline";
    textAlign?: "center" | "left" | "right" | "justify";
    maxWidth: number;
    font: string;
  } = {
    color: "white",
    outlineWidth: fontSize * 0.1,
    fontSize: fontSize,
    outlineColor: "black",
    anchorX: "center",
    anchorY: "top",
    textAlign: "justify",
    maxWidth: maxTextWidth,
    font: "/VT323-Regular.ttf",
  };
  return (
    <Billboard position={position} visible={visible} follow>
      <>
        <Text {...textProps} position={textContentPosition}>
          {textContent}
        </Text>
        {images &&
          images.length > 0 &&
          images.map((image: ImageProps) => (
            <Image
              position={image.relativePosition}
              //@ts-ignore
              scale={image.scale}
              url={image.src}
              transparent
              zoom={1}
            />
          ))}
        {bottomTextContent && (
          <Text {...textProps} position={bottomTextContentPosition}>
            {bottomTextContent}
          </Text>
        )}
      </>
    </Billboard>
  );
}
