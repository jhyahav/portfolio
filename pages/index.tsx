import type { NextPage } from "next";
import { useState } from "react";
import LaunchOverlay from "../components/LaunchOverlay";
import Scene from "../components/Scene";

const Home: NextPage = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [warpActive, setWarpActive] = useState(false);
  return (
    <>
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
