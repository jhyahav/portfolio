import { Text } from "@react-three/drei";
import { Vector3 } from "three";

export default function Intro() {
  return <Text position={new Vector3(0, 120, -1)}>Hi, I'm Jonathan.</Text>;
}
