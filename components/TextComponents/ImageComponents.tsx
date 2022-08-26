import { Vector3 } from "three";
import * as constants from "../../lib/constants";
import {
  contactText,
  currentTechText,
  futureTechText,
  otherTechText,
  pastProjectsText,
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

  const otherImages: ImageProps[] = [
    {
      src: "/C_Logo.png",
      scale: [66, 75, 1],
      relativePosition: new Vector3(-40, 0, 0),
    },
    {
      src: "/Java.svg",
      scale: [40, 75, 1],
      relativePosition: new Vector3(40, 0, 0),
    },
    {
      src: "/Python.svg",
      scale: [70, 75, 1],
      relativePosition: new Vector3(0, -90, 0),
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
        position={constants.getCurrentTechPosition()}
        scrollVisible={constants.currentVisible}
        baseFontSize={22.5}
        key={"current"}
      />

      <TextImageBillboard
        textContent={otherTechText}
        textContentPosition={new Vector3(0, 70, 1)}
        baseFontSize={22.5}
        baseFontWidth={300}
        images={otherImages}
        position={constants.getOtherTechPosition()}
        scrollVisible={constants.otherVisible}
        key={"otherTech"}
      />

      <TextImageBillboard
        textContent={futureTechText}
        textContentPosition={new Vector3(0, 80, 1)}
        baseFontSize={15}
        baseFontWidth={180}
        images={futureImages}
        position={constants.getFutureTechPosition()}
        scrollVisible={constants.futureVisible}
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
        position={constants.getTeaPosition()}
        scrollVisible={constants.teaVisible}
        bottomTextContent={teaTextLower}
        bottomTextContentPosition={new Vector3(0, -25, 0)}
        baseFontWidth={110}
        baseFontSize={5}
        key={"tea"}
      />

      <TextImageBillboard
        textContent={pastProjectsText}
        textContentPosition={new Vector3(0, 60, 0)}
        baseFontSize={20}
        baseFontWidth={260}
        position={constants.getExperiencePosition()}
        scrollVisible={constants.pastProjectsVisible}
        key={"other"}
      />

      <TextImageBillboard
        textContent={contactText}
        baseFontSize={12}
        baseFontWidth={180}
        textContentPosition={new Vector3(0, 35, 1)}
        images={contactImages}
        position={constants.getContactPosition()}
        scrollVisible={constants.contactVisible}
        key={"contact"}
      />
    </>
  );
}
