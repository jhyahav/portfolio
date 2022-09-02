import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import * as textSections from "./../lib/text";
import * as images from "./../components/TextComponents/ImageProps";
import { ImageProps } from "../components/TextComponents/ImageProps";
import { GalleryImageProps } from "../components/Gallery/Gallery";

const PlainText: NextPage = () => {
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
        <div>
          <p>{textSections.currentTechText}</p>
          <ImageGroup imageSources={current} width={100} height={100} />
        </div>
        <div>
          <p>{textSections.otherTechText}</p>
          <ImageGroup imageSources={other} width={100} height={100} />
        </div>
        <div>
          <p>{textSections.futureTechText}</p>
          <ImageGroup imageSources={future} width={100} height={100} />
        </div>
      </main>
    </>
  );
};

export default PlainText;

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
        <Image
          src={src}
          width={100}
          height={100}
          alt={getFileName(src)}
          key={src}
        />
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
