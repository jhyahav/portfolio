import {
  Billboard,
  Image,
  ScrollControlsState,
  Text,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import { Vector3 } from "three";
import { ImageProps } from "./ImageProps";

// The width based on which all default sizes are defined and adjustments are calculated.
const DEFAULT_VIEWPORT_WIDTH = 1080;
// Images and text will not be rescaled past this point. This prevents wacky behavior on large screens.
const MAX_VIEWPORT_WIDTH = 1400;
const DEFAULT_FONT_SIZE = 10;
const DEFAULT_TEXT_WIDTH = 120;
const GALLERY_RATIO = 11;

export const baseTextProps: {
  color: string;
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
  font: string;
} = {
  color: "white",
  outlineColor: "black",
  anchorX: "center",
  anchorY: "top",
  textAlign: "justify",
  font: "/VT323-Regular.ttf",
};

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
  wrapText = false,
  children,
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
  wrapText?: boolean;
  children?: ReactElement;
}) {
  const { size } = useThree();
  const width = Math.min(size.width, MAX_VIEWPORT_WIDTH);
  const adjustor = wrapText ? Math.max(width, size.height) : width;
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

  const textProps = {
    outlineWidth: fontSize * 0.1,
    fontSize: fontSize,
    maxWidth: maxTextWidth,
    ...baseTextProps,
  };

  return (
    <Billboard position={position} visible={visible} follow>
      <>
        <Text {...textProps} position={upperTextPosition}>
          {textContent}
        </Text>
        {/*The point of this code is to enable dynamic resizing of the Gallery's content based on viewport size, as implemented for text and images. Instead of passing all of Gallery's props through TextImageBillboard or reimplementing the logic elsewhere, the width of the gallery is bound to its fontSize via cloning. The aspect ratio for all gallery images is the same (5:4).*/}
        {visible &&
          children &&
          cloneElement(children, {
            width: fontSize * GALLERY_RATIO,
            height: fontSize * GALLERY_RATIO * 0.8,
          })}
        {!children &&
          adjustedImages &&
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
