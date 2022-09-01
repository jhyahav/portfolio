import { Vector3 } from "three";
import { GalleryImageProps } from "../Gallery/Gallery";
import { ImageProps } from "./TextImageBillboard";

const hoverProps = {
  onHover: () => (document.body.style.cursor = "pointer"),
  onUnhover: () => (document.body.style.cursor = "default"),
};

export const currentImages: ImageProps[] = [
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

export const otherImages: ImageProps[] = [
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

export const futureImages: ImageProps[] = [
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

export const teaImages: ImageProps[] = [
  {
    src: "/teaforme.png",
    scale: [110, 50, 1],
    relativePosition: new Vector3(0, 0, -1),
    onClick: () => window.open("https://teafor.me/products/", "_blank"),
    ...hoverProps,
  },
];

export const otherProjectImages: GalleryImageProps[] = [
  {
    src: "/coacss.png",
    onClick: () => {},
    ...hoverProps,
  },
  {
    src: "/jchat.png",
    onClick: () => {},
    ...hoverProps,
  },
  {
    src: "/screenshot2.png",
    onClick: () => {},
    ...hoverProps,
  },
];

export const contactImages: ImageProps[] = [
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
