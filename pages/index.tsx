import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Stars } from "@react-three/drei";
import Path from "../components/Path";
import Intro from "../components/Intro";
import Star from "../components/Star";

const Home: NextPage = () => {
  return (
    <main id="canvas_container">
      <Canvas>
        <ScrollControls distance={10}>
          <Intro />
          <Path />
          <Star />
        </ScrollControls>
        <Stars
          radius={100}
          depth={80}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1.25}
        />

        <ambientLight intensity={0.1} />
        <directionalLight color={"blue"} position={[0, 0, 5]} />
      </Canvas>
    </main>
  );
};

export default Home;
