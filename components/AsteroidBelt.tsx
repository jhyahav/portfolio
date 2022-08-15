import { Torus } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh, RepeatWrapping, TextureLoader, Vector3 } from "three";
import { getStarPosition } from "../constants";
import Asteroid, { AsteroidProps } from "./Asteroid";

const [COUNT, MIN_X, MAX_X, MIN_Y, MAX_Y, ZVAL] = [
  500, -1150, 580, -1000, -600, 845,
];

export default function AsteroidBelt() {
  const torusRef = useRef<Mesh>(null);
  useEffect(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x = 14.99;
      torusRef.current.rotation.y = 0.1;
    }
  }, [torusRef.current]);
  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.z += 0.01;
    }
  });
  const colorMaps = useLoader(TextureLoader, ["/rock.webp"]);
  const displacementMaps = useLoader(TextureLoader, [
    "/example_displacement.jpg",
  ]);
  colorMaps.forEach((texture) => {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  });
  const props: Array<AsteroidProps> = [];
  for (let i = 0; i < COUNT; i++) {
    const position = new Vector3(
      randInt(MAX_X, MIN_X),
      randInt(MAX_Y, MIN_Y),
      ZVAL
    );
    const scale = new Vector3(
      1 + Math.random() / 2,
      1 + Math.random() / 2,
      1 + Math.random() / 2
    );
    const radius = randInt(10, 1);
    //TODO: randomize colors
    const color = 0x444444;
    //FIXME: make sure taking the length and not (length-1) works fine. it should, since random() never returns 1.
    const displacementMap =
      displacementMaps[randInt(displacementMaps.length, 0)];
    const colorMap = colorMaps[randInt(colorMaps.length, 0)];
    props.push({
      position: position,
      scale: scale,
      radius: radius,
      color: color,
      colorMap: colorMap,
      displacementMap: displacementMap,
    });
  }

  const asteroids = props.map((propsObj, index) => (
    <Asteroid {...propsObj} key={index} />
  ));
  return (
    <group>
      {asteroids}
      <Torus
        ref={torusRef}
        args={[1100, 100, 10, 32]}
        position={getStarPosition().lerp(new Vector3(-600, 0, 0), 0.25)}
      >
        <meshBasicMaterial visible={true} color={0xff0000} />
      </Torus>
    </group>
  );
}

// assumes inputs are integers
const randInt = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);
