import { Canvas } from "@react-three/fiber";
import { Preload, ScrollControls, Stars } from "@react-three/drei";
import Path from "../components/Path";
import DyingStar from "../components/DyingStar";
import SpaceStation from "../components/SpaceStation";
import Planet from "../components/Planet";
import { PerspectiveCamera, Vector3 } from "three";
import { Suspense, useState } from "react";
import IntroPlanet from "../components/IntroPlanet";
import SceneLights from "../components/SceneLights";
import Warp from "./Warp";
import { getIntroPlanetPosition } from "../constants";
import MainSceneContents from "./MainSceneContents";

export default function Scene({
  overlayVisible,
  warpActive,
}: {
  overlayVisible: boolean;
  warpActive: boolean;
}) {
  const camera = new PerspectiveCamera();
  camera.position.set(210, 0, 0);
  camera.lookAt(new Vector3(-200, -200, -300));
  return (
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
