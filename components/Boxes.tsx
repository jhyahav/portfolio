import { useScroll } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import Box from "./Box";

export default function Boxes() {
  const [focusedElement, setFocusedElement] = useState(0);
  const list: Array<number> = [0, 1, 2];
  list.reverse();
  const scroll = useScroll();
  useEffect(() => {
    setFocusedElement(scroll.offset == 0 ? 0 : Math.ceil(scroll.offset * 10));
  }, [scroll]);
  return (
    <>
      {list.map((num: number) => {
        return (
          <Box
            initialPosition={new Vector3(4 * num, num, -2 * num)}
            key={num}
            focused={false}
          />
        );
      })}
    </>
  );
}
