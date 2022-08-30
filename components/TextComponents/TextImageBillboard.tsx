import {
  Billboard,
  Image,
  ScrollControlsState,
  Text,
  useScroll,
} from "@react-three/drei";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Vector3 } from "three";

const DEFAULT_VIEWPORT_WIDTH = 1080;
const DEFAULT_FONT_SIZE = 10;
const DEFAULT_TEXT_WIDTH = 120;

export interface ImageProps {
  src: string;
  relativePosition: Vector3;
  scale: [number, number, number];
  onClick?: (event: ThreeEvent<MouseEvent>) => void;
  onHover?: (event: ThreeEvent<PointerEvent>) => void;
  onUnhover?: (event: ThreeEvent<PointerEvent>) => void;
}

export default function TextImageBillboard({
  scrollVisible,
  position,
  textContent,
  textContentPosition,
  images,
  bottomTextContent,
  bottomTextContentPosition,
  baseFontSize = DEFAULT_FONT_SIZE,
  baseFontWidth = DEFAULT_TEXT_WIDTH,
}: {
  scrollVisible: (scroll: ScrollControlsState) => boolean;
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
  const adjustor = Math.max(size.width, size.height);
  const [fontSize, setFontSize] = useState(baseFontSize);
  const [maxTextWidth, setMaxTextWidth] = useState(baseFontWidth);
  const [adjustedImages, setAdjustedImages] = useState(images);
  const [upperTextPosition, setUpperTextPosition] =
    useState(textContentPosition);
  const [lowerTextPosition, setLowerTextPosition] = useState(
    bottomTextContentPosition
  );

  useEffect(() => {
    setFontSize(adjustSize(baseFontSize, adjustor));
    setMaxTextWidth(adjustSize(baseFontWidth, size.width));
    setUpperTextPosition(
      textContentPosition && adjustVector(textContentPosition, adjustor)
    );
    setLowerTextPosition(
      bottomTextContentPosition &&
        adjustVector(bottomTextContentPosition, adjustor)
    );
    setAdjustedImages(
      images?.map((image) => {
        const newScale: [number, number, number] = [
          adjustSize(image.scale[0], adjustor),
          adjustSize(image.scale[1], adjustor),
          image.scale[2],
        ];
        const newPosition = adjustVector(image.relativePosition, adjustor);
        return {
          ...image,
          relativePosition: newPosition,
          scale: newScale,
        };
      })
    );
  }, [
    size.width,
    size.height,
    baseFontSize,
    baseFontWidth,
    bottomTextContentPosition,
    textContentPosition,
    images,
  ]);
  const scroll = useScroll();
  const [visible, setVisible] = useState(true);
  useFrame((state, delta) => {
    setVisible(scrollVisible(scroll));
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
        <Text {...textProps} position={upperTextPosition}>
          {textContent}
        </Text>
        {adjustedImages &&
          adjustedImages.length > 0 &&
          adjustedImages.map((image: ImageProps) => (
            <Image
              position={image.relativePosition}
              //@ts-ignore
              scale={image.scale}
              url={image.src}
              transparent
              zoom={1}
              onClick={visible ? image.onClick : undefined}
              onPointerOver={visible ? image.onHover : undefined}
              onPointerOut={image.onUnhover}
              key={image.src}
            />
          ))}
        {bottomTextContent && (
          <Text {...textProps} position={lowerTextPosition}>
            {bottomTextContent}
          </Text>
        )}
      </>
    </Billboard>
  );
}

const adjustSize = (original: number, width: number) =>
  (original * width) / DEFAULT_VIEWPORT_WIDTH;

const adjustVector = (vector: Vector3, width: number) =>
  vector.clone().multiplyScalar(adjustSize(1, width));
