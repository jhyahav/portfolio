import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Sphere, Stars } from "@react-three/drei";
import Path from "../components/Path";
import Intro from "../components/Intro";
import DyingStar from "../components/DyingStar";

const Home: NextPage = () => {
  return (
    <main id="canvas_container">
      <Canvas>
        <ScrollControls distance={10}>
          <Intro />
          <Path />
          <DyingStar x={100} y={100} z={100} outerRadius={500} />
          <mesh position={[20, 25, 50]}>
            <sphereBufferGeometry args={[20]} />
            <meshStandardMaterial />
          </mesh>
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
        {/*<pointLight
          position={[-180, 100, 20]}
          color={0x0000ff}
          intensity={1000}
          decay={2}/>*/}
        <ambientLight intensity={1000} color={0x0000ff} />
      </Canvas>
    </main>
  );
};

export default Home;
