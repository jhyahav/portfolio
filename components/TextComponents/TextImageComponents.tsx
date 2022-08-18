import { ScrollControlsState } from "@react-three/drei";
import { Vector3 } from "three";
import {
  getCurrentTechPosition,
  getFutureTechPosition,
  getTeaPosition,
} from "../../constants";
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
    scroll.range(0, 1);
  const futureTechScrollRange = (scroll: ScrollControlsState) =>
    scroll.range(0, 1);
  const teaScrollRange = (scroll: ScrollControlsState) => scroll.range(0, 1);

  const currentImages: ImageProps[] = [
    {
      src: "/Firebase.svg",
      scale: [20, 27, 1],
      relativePosition: new Vector3(-30, 30, 0),
    },
    {
      src: "/GoogleCloud.svg",
      scale: [25, 20, 1],
      relativePosition: new Vector3(0, 30, 0),
    },
    {
      src: "/React.svg",
      scale: [22.5, 20, 1],
      relativePosition: new Vector3(30, 30, 0),
    },
    {
      src: "/Sass.svg",
      scale: [27, 20, 1],
      relativePosition: new Vector3(-30, 0, 0),
    },
    {
      src: "/Typescript.svg",
      scale: [25, 25, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Threejs.svg",
      scale: [21, 22, 1],
      relativePosition: new Vector3(30, 0, 0),
    },

    {
      src: "/Nextjs.svg",
      scale: [45, 25, 1],
      relativePosition: new Vector3(0, -30, 0),
    },
  ];

  const futureImages: ImageProps[] = [
    {
      src: "/GraphQL.svg",
      scale: [25, 25, 1],
      relativePosition: new Vector3(-15, 30, 0),
    },
    {
      src: "/Tensorflow.svg",
      scale: [25, 25.2, 1],
      relativePosition: new Vector3(15, 30, 0),
    },
    {
      src: "/Svelte.svg",
      scale: [22.5, 26.7, 1],
      relativePosition: new Vector3(-15, 0, 0),
    },
    {
      src: "/Tailwind.svg",
      scale: [30, 20, 1],
      relativePosition: new Vector3(15, 0, 0),
    },

    {
      src: "/PWA.svg",
      scale: [56, 20, 1],
      relativePosition: new Vector3(0, -30, 0),
    },
  ];

  return (
    <>
      <TextImageBillboard
        textContent={currentTechText}
        textContentPosition={new Vector3(0, 65, 1)}
        baseFontWidth={75}
        images={currentImages}
        position={getCurrentTechPosition()}
        scrollRange={currentTechScrollRange}
        baseFontSize={15}
        key={"current"}
      />
      <TextImageBillboard
        textContent={futureTechText}
        textContentPosition={new Vector3(0, 55, 1)}
        baseFontSize={9}
        baseFontWidth={85}
        images={futureImages}
        position={getFutureTechPosition()}
        scrollRange={futureTechScrollRange}
        key={"future"}
      />
      <TextImageBillboard
        textContent={teaTextUpper}
        textContentPosition={new Vector3(0, 35, 0)}
        images={[
          {
            src: "/teaforme.png",
            scale: [110, 50, 1],
            relativePosition: new Vector3(0, 0, -1),
            onClick: () => window.open("https://teafor.me/products/", "_blank"),
            onHover: () => (document.body.style.cursor = "pointer"),
            onUnhover: () => (document.body.style.cursor = "default"),
          },
        ]}
        position={getTeaPosition()}
        scrollRange={teaScrollRange}
        bottomTextContent={teaTextLower}
        bottomTextContentPosition={new Vector3(0, -25, 0)}
        baseFontWidth={110}
        baseFontSize={5}
      />
    </>
  );
}
