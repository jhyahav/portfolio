import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Stars } from "@react-three/drei";
import Path from "../components/Path";
import Intro from "../components/Intro";
import DyingStar from "../components/DyingStar";
import SpaceStation from "../components/SpaceStation";
import Planet from "../components/Planet";
import { PerspectiveCamera, Vector3 } from "three";
import { Suspense } from "react";
import IntroPlanet from "../components/IntroPlanet";
import { getStarPosition } from "../constants";
import SceneLights from "../components/SceneLights";

const Home: NextPage = () => {
  const camera = new PerspectiveCamera();
  camera.position.set(210, 0, 0);
  camera.rotation.set(2.873873, 1.115695, -2.9);
  return (
    <Suspense fallback={<div>Add loader here...</div>}>
      <main id="canvas_container">
        <Canvas camera={camera}>
          <ScrollControls distance={10}>
            <Path />
            <DyingStar
              position={new Vector3(100, 100, 100)}
              outerRadius={1600}
            />
            <IntroPlanet />
            <SpaceStation scale={0.125} />
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
      </main>
    </Suspense>
  );
};

export default Home;
