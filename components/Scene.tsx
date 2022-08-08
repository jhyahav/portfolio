import { Canvas } from "@react-three/fiber";
import { Preload, ScrollControls, Stars } from "@react-three/drei";
import Path from "../components/Path";
import DyingStar from "../components/DyingStar";
import SpaceStation from "../components/SpaceStation";
import Planet from "../components/Planet";
import { PerspectiveCamera, Vector3 } from "three";
import { Suspense } from "react";
import IntroPlanet from "../components/IntroPlanet";
import SceneLights from "../components/SceneLights";

export default function Scene({ overlayVisible }: { overlayVisible: boolean }) {
  const camera = new PerspectiveCamera();
  camera.position.set(210, 0, 0);
  camera.rotation.set(2.873873, 1.115695, -2.9);
  return (
    <Suspense fallback={<div>Add loader here...</div>}>
      <Canvas camera={camera}>
        <Preload all />
        <ScrollControls distance={10} enabled={!overlayVisible}>
          <Path />
          {overlayVisible || (
            <DyingStar
              position={new Vector3(100, 100, 100)}
              outerRadius={1600}
            />
          )}
          <IntroPlanet />
          <SpaceStation scale={0.125} overlayVisible={overlayVisible} />
          <Planet
            position={new Vector3(350, -60, 520)}
            radius={40}
            colorHex={0x00ff33}
            texturePath={"/rock.webp"}
          />
          <Stars
            radius={5}
            depth={1300}
            count={5000}
            factor={30}
            saturation={0}
            fade
            speed={1.25}
          />
        </ScrollControls>
        <SceneLights />
      </Canvas>
    </Suspense>
  );
}
