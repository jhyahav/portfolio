import { ScrollControlsState } from "@react-three/drei";
import { Vector3 } from "three";
import {
  currentTechText,
  futureTechText,
  teaTextLower,
  teaTextUpper,
} from "../../lib/text";
import TextImageBillboard from "./TextImageBillboard";
import { ImageProps } from "./TextImageBillboard";

export default function TextImageComponents() {
  const currentTechScrollRange = (scroll: ScrollControlsState) =>
    scroll.range(0, 0.1);
  const currentTechPosition = new Vector3(210, 0, 0);
  const futureTechScrollRange = (scroll: ScrollControlsState) =>
    scroll.range(0, 0.1);
  const futureTechPosition = new Vector3(210, 0, 0);
  const teaScrollRange = (scroll: ScrollControlsState) => scroll.range(0, 0.1);
  const teaPosition = new Vector3(0, 0, 0);

  const currentImages: ImageProps[] = [
    {
      src: "/Firebase.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/GoogleCloud.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/React.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Sass.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Nextjs.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Threejs.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Typescript.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
  ];

  const futureImages: ImageProps[] = [
    {
      src: "/GraphQL.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/PWA.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Svelte.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Tailwind.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Tensorflow.svg",
      scale: [1, 1, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
  ];

  return (
    <>
      <TextImageBillboard
        textContent={currentTechText}
        images={currentImages}
        position={currentTechPosition}
        scrollRange={currentTechScrollRange}
        key={"current"}
      />
      <TextImageBillboard
        textContent={futureTechText}
        images={futureImages}
        position={futureTechPosition}
        scrollRange={futureTechScrollRange}
        key={"future"}
      />
      <TextImageBillboard
        textContent={teaTextUpper}
        textContentPosition={new Vector3(0, 30, 0)}
        images={[
          {
            src: "/teaforme.png",
            scale: [110, 50, 1],
            relativePosition: new Vector3(0, 0, -1),
          },
        ]}
        position={teaPosition}
        scrollRange={teaScrollRange}
        bottomTextContent={teaTextLower}
        bottomTextContentPosition={new Vector3(0, -25, 0)}
        baseFontWidth={140}
        baseFontSize={5}
      />
    </>
  );
}
