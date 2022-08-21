import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
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
  return (
    <>
      <Head>
        <title>about me - jhyahav</title>
      </Head>
      {overlayVisible && (
        <LaunchOverlay
          setOverlayVisible={setOverlayVisible}
          setWarpActive={setWarpActive}
        />
      )}
      <main>
        <Scene overlayVisible={overlayVisible} warpActive={warpActive} />
      </main>
    </>
  );
};

export default Home;
