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
      position={getIntroPlanetPosition().add(new Vector3(-12, -5, -105))}
      visible={visible}
      follow
    >
      <Text
        color={"white"}
        outlineWidth={0.3}
        fontSize={3}
        outlineColor={"black"}
        anchorX={"center"}
        anchorY={"top"}
        textAlign={"justify"}
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
