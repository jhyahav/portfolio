import { Vector3 } from "three";
import {
  contactVisible,
  currentVisible,
  futureVisible,
  getContactPosition,
  getCurrentTechPosition,
  getFutureTechPosition,
  getTeaPosition,
  teaVisible,
} from "../../lib/constants";
import {
  contactText,
  currentTechText,
  futureTechText,
  teaTextLower,
  teaTextUpper,
} from "../../lib/text";
import TextImageBillboard, { ImageProps } from "./TextImageBillboard";

export default function ImageComponents() {
  const hoverProps = {
    onHover: () => (document.body.style.cursor = "pointer"),
    onUnhover: () => (document.body.style.cursor = "default"),
  };

  const currentImages: ImageProps[] = [
    {
      src: "/Firebase.svg",
      scale: [30, 40.5, 1],
      relativePosition: new Vector3(-45, 45, 0),
    },
    {
      src: "/GoogleCloud.svg",
      scale: [37.5, 30, 1],
      relativePosition: new Vector3(0, 45, 0),
    },
    {
      src: "/React.svg",
      scale: [33.75, 30, 1],
      relativePosition: new Vector3(45, 45, 0),
    },
    {
      src: "/Sass.svg",
      scale: [40.5, 30, 1],
      relativePosition: new Vector3(-45, 0, 0),
    },
    {
      src: "/Typescript.svg",
      scale: [37.5, 37.5, 1],
      relativePosition: new Vector3(0, 0, 0),
    },
    {
      src: "/Threejs.svg",
      scale: [31.5, 33, 1],
      relativePosition: new Vector3(45, 0, 0),
    },

    {
      src: "/Nextjs.svg",
      scale: [67.5, 37.5, 1],
      relativePosition: new Vector3(0, -45, 0),
    },
  ];

  const futureImages: ImageProps[] = [
    {
      src: "/GraphQL.svg",
      scale: [37.5, 37.5, 1],
      relativePosition: new Vector3(-22.5, 45, 0),
    },
    {
      src: "/Tensorflow.svg",
      scale: [37.5, 38.25, 1],
      relativePosition: new Vector3(22.5, 45, 0),
    },
    {
      src: "/Svelte.svg",
      scale: [33.75, 40.05, 1],
      relativePosition: new Vector3(-22.5, 0, 0),
    },
    {
      src: "/tailwind.svg",
      scale: [46.5, 30, 1],
      relativePosition: new Vector3(22.5, 0, 0),
    },

    {
      src: "/PWA.svg",
      scale: [84, 30, 1],
      relativePosition: new Vector3(0, -45, 0),
    },
  ];

  const contactImages: ImageProps[] = [
    {
      src: "/LinkedIn.png",
      scale: [40, 40, 1],
      relativePosition: new Vector3(-30, 0, 0),
      onClick: () =>
        window.open("https://www.linkedin.com/in/jhyahav/", "_blank"),
      ...hoverProps,
    },
    {
      src: "/GitHub.svg",
      scale: [40, 40, 1],
      relativePosition: new Vector3(30, 0, 0),
      onClick: () => window.open("https://github.com/jhyahav", "_blank"),
      ...hoverProps,
    },
  ];

  return (
    <>
      <TextImageBillboard
        textContent={currentTechText}
        textContentPosition={new Vector3(0, 90, 1)}
        baseFontWidth={113}
        images={currentImages}
        position={getCurrentTechPosition()}
        scrollVisible={currentVisible}
        baseFontSize={22.5}
        key={"current"}
      />
      <TextImageBillboard
        textContent={futureTechText}
        textContentPosition={new Vector3(0, 80, 1)}
        baseFontSize={15}
        baseFontWidth={180}
        images={futureImages}
        position={getFutureTechPosition()}
        scrollVisible={futureVisible}
        key={"future"}
      />
      <TextImageBillboard
        textContent={teaTextUpper}
        textContentPosition={new Vector3(0, 35, 0)}
        // TODO: add indication that this is clickable
        images={[
          {
            src: "/teaforme.png",
            scale: [110, 50, 1],
            relativePosition: new Vector3(0, 0, -1),
            onClick: () => window.open("https://teafor.me/products/", "_blank"),
            ...hoverProps,
          },
        ]}
        position={getTeaPosition()}
        scrollVisible={teaVisible}
        bottomTextContent={teaTextLower}
        bottomTextContentPosition={new Vector3(0, -25, 0)}
        baseFontWidth={110}
        baseFontSize={5}
        key={"tea"}
      />
      <TextImageBillboard
        textContent={contactText}
        baseFontSize={12}
        baseFontWidth={180}
        textContentPosition={new Vector3(0, 35, 1)}
        images={contactImages}
        position={getContactPosition()}
        scrollVisible={contactVisible}
        key={"contact"}
      />
    </>
  );
}
