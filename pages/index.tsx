import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Stars } from "@react-three/drei";
import Box from "../components/Box";
import { Vector3 } from "three";

const Home: NextPage = () => {
  return (
    <main id="canvas_container">
      <Canvas>
        <ScrollControls distance={10}>
          <Box initialPosition={new Vector3(1, 1, -10)} />
          <Box initialPosition={new Vector3(7, 4, -3)} />
        </ScrollControls>
        <Stars
          radius={100}
          depth={30}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1.25}
        />

        <ambientLight intensity={0.1} />
        <directionalLight color={"red"} position={[0, 0, 5]} />
      </Canvas>
    </main>
  );
};

export default Home;
