import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Box from "../components/Box";

const Home: NextPage = () => {
  return (
    <main id="canvas_container">
      <Canvas>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <ambientLight intensity={0.1} />
        <directionalLight color={"red"} position={[0, 0, 5]} />
        <Box />
      </Canvas>
    </main>
  );
};

export default Home;
