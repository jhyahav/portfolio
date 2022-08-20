import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { PerspectiveCamera } from "three";
import { Suspense, useEffect } from "react";
import Warp from "./Warp";
import { getInitialPosition } from "../lib/constants";
import MainSceneContents from "./MainSceneContents";
import disableScroll from "disable-scroll";

export default function Scene({
  overlayVisible,
  warpActive,
}: {
  overlayVisible: boolean;
  warpActive: boolean;
}) {
  useEffect(() => {
    disableScroll.on();
  }, []);
  const camera = new PerspectiveCamera();
  camera.position.set(210, 0, 0);
  camera.lookAt(getInitialPosition());
  return (
    // TODO: add a loader!!!
    <Suspense fallback={<div>Add loader here...</div>}>
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
