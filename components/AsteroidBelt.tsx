import { Torus } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh, RepeatWrapping, Texture, TextureLoader, Vector3 } from "three";
import { MeshSurfaceSampler } from "three-stdlib";
import { getStarPosition } from "../constants";
import Asteroid, { AsteroidProps } from "./Asteroid";

const [COUNT, MIN_RAD, MAX_RAD] = [500, 1, 10];

export default function AsteroidBelt() {
  const [asteroids, setAsteroids] = useState<Array<JSX.Element> | undefined>();
  const torusRef = useRef<Mesh>(null);

  // initialize maps
  const colorMaps = useLoader(TextureLoader, ["/rock.webp"]);
  const displacementMaps = useLoader(TextureLoader, [
    "/example_displacement.jpg",
  ]);
  wrap(colorMaps);
  wrap(displacementMaps);

  // initialize asteroid elements
  useEffect(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x = 14.99;
      torusRef.current.rotation.y = 0.1;
      setAsteroids(
        generateAsteroids(torusRef.current, colorMaps, displacementMaps)
      );
    }
  }, [torusRef.current, colorMaps, displacementMaps]);
  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group>
      <Torus
        ref={torusRef}
        args={[1100, 50, 10, 32]}
        position={getStarPosition().lerp(new Vector3(-600, 0, 0), 0.25)}
      >
        <meshBasicMaterial visible={false} color={0x000000} />
        {asteroids}
      </Torus>
    </group>
  );
}

// assumes inputs are integers
const randInt = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);

const generateAsteroids = (
  torus: Mesh,
  colorMaps?: Array<Texture>,
  displacementMaps?: Array<Texture>
): Array<JSX.Element> => {
  const props: Array<AsteroidProps> = [];
  const positions = generatePositions(torus);
  for (let i = 0; i < COUNT; i++) {
    const position = positions[i];
    const scale = new Vector3(
      1 + Math.random() / 2,
      1 + Math.random() / 2,
      1 + Math.random() / 2
    );
    const radius = randInt(MAX_RAD, MIN_RAD);
    //TODO: randomize colors
    const color = 0x444444;
    //FIXME: make sure taking the length and not (length-1) works fine. it should, since random() never returns 1.
    const displacementMap = displacementMaps
      ? displacementMaps[randInt(displacementMaps.length, 0)]
      : undefined;
    const colorMap = colorMaps
      ? colorMaps[randInt(colorMaps.length, 0)]
      : undefined;
    const rotation = new Vector3(0.001, 0, 0);
    props.push({
      position: position,
      scale: scale,
      radius: radius,
      color: color,
      colorMap: colorMap,
      displacementMap: displacementMap,
      rotation: rotation,
    });
  }
  return props.map((propsObj, index) => <Asteroid {...propsObj} key={index} />);
};

const generatePositions = (mesh: Mesh) => {
  const sampler = new MeshSurfaceSampler(mesh);
  const positions = [];
  sampler.build();
  for (let i = 0; i < COUNT; i++) {
    const tempPosition = new Vector3();
    sampler.sample(tempPosition);
    positions.push(tempPosition);
  }
  return positions;
};

const wrap = (textureArr: Array<Texture>) => {
  textureArr.forEach((texture: Texture) => {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  });
};
