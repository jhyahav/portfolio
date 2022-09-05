import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import * as textSections from "../lib/text";
import * as images from "../components/TextComponents/ImageProps";
import { ImageProps } from "../components/TextComponents/ImageProps";
import { GalleryImageProps } from "../components/TextComponents/ImageProps";
import { useEffect } from "react";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Accessible: NextPage = () => {
  // Add accessible class to enable scrolling on this page
  useEffect(() => {
    document.querySelector("body")?.classList.add("accessible");
  });

  // destructure imageProp arrays and take their respective sources
  const [current, other, future, tea, otherProjects, contact] = [
    images.currentImages,
    images.otherImages,
    images.futureImages,
    images.teaImages,
    images.otherProjectImages,
    images.contactImages,
  ].map((section) => getSources(section));
  return (
    <>
      <Head>
        <title>Jonathan Yahav - About me</title>
      </Head>
      <main>
        <h1>Hi, I&apos;m Jonathan.</h1>
        <p>{textSections.introText}</p>
        <AccessibleSection
          text={textSections.currentTechText}
          imageSources={current}
          width={100}
          height={100}
        />
        <AccessibleSection
          text={textSections.otherTechText}
          imageSources={other}
          width={100}
          height={100}
        />
        <AccessibleSection
          text={textSections.futureTechText}
          imageSources={future}
          width={100}
          height={100}
        />
        <AccessibleSection
          text={textSections.teaTextUpper}
          lowerText={textSections.teaTextLower}
          imageSources={tea}
          width={1000}
          height={1000}
        />
      </main>
    </>
  );
};

//TODO: complete Accessible page.

export default Accessible;

const AccessibleSection = ({
  text,
  lowerText,
  imageSources,
  width,
  height,
}: {
  text: string;
  lowerText?: string;
  imageSources?: string[];
  width?: number;
  height?: number;
}) => {
  return (
    <section key={text}>
      <p>{text}</p>
      {imageSources && width && height && (
        <ImageGroup imageSources={imageSources} width={width} height={height} />
      )}
      {lowerText && <p>{lowerText}</p>}
    </section>
  );
};

const ImageGroup = ({
  width,
  height,
  imageSources,
}: {
  width: number;
  height: number;
  imageSources: string[];
}) => {
  return (
    <>
      {imageSources.map((src) => (
        <Image {...{ src, width, height }} alt={getFileName(src)} key={src} />
      ))}
    </>
  );
};

const getSources = (imageProps: ImageProps[] | GalleryImageProps[]) =>
  imageProps.map((image) => image.src);

const getFileName = (path: string) => {
  const match = path.match(/([0-z])\w+/);
  return match ? match[0] : undefined;
};
