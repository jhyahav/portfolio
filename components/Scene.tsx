import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { DefaultLoadingManager, PerspectiveCamera } from "three";
import { Dispatch, SetStateAction, Suspense, useEffect } from "react";
import Warp from "./Warp";
import { getInitialPosition } from "../lib/constants";
import MainSceneContents from "./MainSceneContents";
import disableScroll from "disable-scroll";

export default function Scene({
  overlayVisible,
  warpActive,
  canvasLoaded,
  setCanvasLoaded,
}: {
  overlayVisible: boolean;
  warpActive: boolean;
  canvasLoaded: boolean;
  setCanvasLoaded: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    disableScroll.on();
  }, []);

  DefaultLoadingManager.onLoad = () => {
    setCanvasLoaded(true);
    console.log("Finished loading scene");
  };
  const camera = new PerspectiveCamera();
  camera.position.set(210, 0, 0);
  camera.lookAt(getInitialPosition());
  return (
    <Suspense fallback={<div>Loading!</div>}>
      {/* {canvasLoaded && <div>LOADER</div>} */}
      <Canvas camera={camera}>
        <Preload all />
        {warpActive && <Warp />}
        <MainSceneContents
          overlayVisible={overlayVisible}
          warpActive={warpActive}
        />
      </Canvas>
    </Suspense>
  );
}
