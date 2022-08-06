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

const Home: NextPage = () => {
  const camera = new PerspectiveCamera();
  camera.position.set(210, 0, 0);
  camera.rotation.set(2.76597, 1.28992, -2.77942);
  return (
    <main id="canvas_container">
      <Canvas camera={camera}>
        <ScrollControls distance={10}>
          <Intro />
          <Path />
          <DyingStar x={100} y={100} z={100} outerRadius={500} />
          <Planet
            x={20}
            y={25}
            z={50}
            radius={10}
            colorHex={0xff0011}
            texturePath={"/rock.webp"}
          />
          <SpaceStation scale={0.25} />
          <Planet
            x={350}
            y={-60}
            z={520}
            radius={40}
            colorHex={0x00ff33}
            texturePath={"/rock.webp"}
          />
        </ScrollControls>
        <Stars
          radius={100}
          depth={85}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1.25}
        />
        <pointLight
          position={[0, -1000, 3000]}
          color={0x3333ff}
          intensity={100}
          decay={2}
          distance={10000}
        />
        <ambientLight intensity={0.5} color={0xffffff} />
      </Canvas>
    </main>
  );
};

export default Home;
