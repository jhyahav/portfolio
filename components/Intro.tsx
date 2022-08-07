import { Billboard, Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { Vector3 } from "three";
import { getIntroPlanetPosition, introScrollRange } from "../constants";

export default function Intro() {
  const scroll = useScroll();
  const [visible, setVisible] = useState(true);
  useFrame((state, delta) => {
    setVisible(introScrollRange(scroll) < 0.5);
  });
  return (
    <Billboard
      position={getIntroPlanetPosition().add(new Vector3(-12, -5, -70))}
      visible={visible}
      follow={true}
    >
      <Text
        fontSize={3}
        outlineColor={"red"}
        anchorX={"center"}
        anchorY={"top"}
        textAlign={"center"}
        maxWidth={60}
      >
        Hi, I'm Jonathan. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nam tenetur et pariatur aliquid labore nesciunt maxime
        exercitationem, unde inventore tempora ullam adipisci cumque harum
        maiores at fugiat, voluptas nisi numquam!
      </Text>
    </Billboard>
  );
}
