import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader, Vector3 } from "three";
import Asteroid, { AsteroidProps } from "./Asteroid";

const [COUNT, MIN_X, MAX_X, MIN_Y, MAX_Y, ZVAL] = [
  500, -1150, 580, -1000, -600, 845,
];

export default function AsteroidBelt() {
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
  return <>{asteroids}</>;
}

// assumes inputs are integers
const randInt = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);
