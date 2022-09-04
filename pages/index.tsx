import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState, useTransition } from "react";
import LaunchOverlay from "../components/LaunchOverlay";
import Scene from "../components/Scene";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [warpActive, setWarpActive] = useState(false);
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  return (
    <>
      <Head>
        <title>Jonathan Yahav - About me</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      {overlayVisible && (
        <LaunchOverlay
          {...{
            setOverlayVisible,
            warpActive,
            setWarpActive,
            canvasLoaded,
          }}
        />
      )}
      <main>
        <Scene
          {...{ overlayVisible, warpActive, canvasLoaded, setCanvasLoaded }}
        />
      </main>
    </>
  );
};

export default Home;
