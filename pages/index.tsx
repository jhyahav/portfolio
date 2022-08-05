import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Stars } from "@react-three/drei";
import Path from "../components/Path";
import Intro from "../components/Intro";
import DyingStar from "../components/DyingStar";
import Planet from "../components/Planet";

const Home: NextPage = () => {
  return (
    <main id="canvas_container">
      <Canvas>
        <ScrollControls distance={10}>
          <Intro />
          <Path />
          <DyingStar x={100} y={100} z={100} outerRadius={500} />
          <Planet
            x={20}
            y={25}
            z={50}
            radius={20}
            colorHex={0xff0011}
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
          position={[0, -100, 200]}
          color={0x0000ff}
          intensity={100}
          decay={2}
          distance={1000}
        />
        <ambientLight intensity={0.5} color={0xffffff} />
      </Canvas>
    </main>
  );
};

export default Home;
