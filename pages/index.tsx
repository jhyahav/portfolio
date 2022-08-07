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

const Home: NextPage = () => {
  const camera = new PerspectiveCamera();
  camera.position.set(210, 0, 0);
  camera.rotation.set(2.76597, 1.28992, -2.77942);
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
          <pointLight
            position={getStarPosition()}
            color={0x3333ff}
            intensity={100}
            decay={2}
            distance={10000}
          />
          <ambientLight intensity={0.5} color={0xffffff} />
        </Canvas>
      </main>
    </Suspense>
  );
};

export default Home;
