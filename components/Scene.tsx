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
  setWarpActive,
}: {
  overlayVisible: boolean;
  warpActive: boolean;
  setWarpActive: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    disableScroll.on();
  }, []);

  // TODO: add nicer loader

  const camera = new PerspectiveCamera();
  camera.position.set(210, 0, 0);
  camera.lookAt(getInitialPosition());
  return (
    <Suspense fallback={<div>Loading!</div>}>
      <Canvas camera={camera}>
        <Preload all />
        {warpActive && <Warp {...{ setWarpActive }} />}
        <MainSceneContents
          overlayVisible={overlayVisible}
          warpActive={warpActive}
        />
      </Canvas>
    </Suspense>
  );
}
