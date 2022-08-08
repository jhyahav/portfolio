import type { NextPage } from "next";
import { useState } from "react";
import LaunchOverlay from "../components/LaunchOverlay";
import Scene from "../components/Scene";

const Home: NextPage = () => {
  const [overlayVisible, setOverlayVisible] = useState(true);
  return (
    <>
      {overlayVisible && <LaunchOverlay setVisible={setOverlayVisible} />}
      <main>
        <Scene overlayVisible={overlayVisible} />
      </main>
    </>
  );
};

export default Home;
