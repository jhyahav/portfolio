import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import * as textSections from "../lib/text";
import * as images from "../components/TextComponents/ImageProps";
import { ImageProps } from "../components/TextComponents/ImageProps";
import { GalleryImageProps } from "../components/TextComponents/ImageProps";
import { useEffect } from "react";
import Link from "next/link";

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
        <h2>{textSections.introText}</h2>
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
          width={1076.5}
          height={500}
          href={"https://teafor.me/products/"}
        />
        <h1>Other projects</h1>
        {images.otherProjectImages.map((image) => (
          <AccessibleSection
            lowerText={image.description}
            imageSources={[image.src]}
            width={625}
            height={500}
            href={image.href}
            key={image.src}
          />
        ))}
        <section>
          <h2>{textSections.hobbiesText}</h2>
        </section>
      </main>
    </>
  );
};

//TODO: complete Accessible page.
// TODO: other projects: add proper hrefs

export default Accessible;

const AccessibleSection = ({
  text,
  lowerText,
  imageSources,
  width,
  height,
  href,
}: {
  text?: string;
  lowerText?: string;
  imageSources?: string[];
  width?: number;
  height?: number;
  href?: string;
}) => {
  return (
    <section key={text ? text : lowerText}>
      {text && <h2>{text}</h2>}
      {imageSources &&
        width &&
        height &&
        (imageSources.length > 1 ? (
          <ImageGroup
            imageSources={imageSources}
            width={width}
            height={height}
          />
        ) : href ? (
          <Link href={href} passHref>
            <a target={"_blank"}>
              <Image
                className="link"
                src={imageSources[0]}
                alt={getFileName(imageSources[0])}
                {...{ width, height }}
              />
            </a>
          </Link>
        ) : null)}
      {lowerText && <h3>{lowerText}</h3>}
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
    <div className="image-container">
      {imageSources.map((src) => (
        <Image {...{ src, width, height }} alt={getFileName(src)} key={src} />
      ))}
    </div>
  );
};

const getSources = (imageProps: ImageProps[] | GalleryImageProps[]) =>
  imageProps.map((image) =>
    image.src === "/Nextjs.svg" ? "/Nextjs_white.svg" : image.src
  );

const getFileName = (path: string) => {
  const match = path.match(/([0-z])\w+/);
  return match ? match[0] : undefined;
};
