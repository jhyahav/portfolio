import {
  BufferGeometry,
  DodecahedronGeometry,
  DynamicDrawUsage,
  Mesh,
  ShapeBufferGeometry,
  Texture,
  Vector3,
} from "three";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
export default function Asteroid({
  position,
  radius,
  //geometry,
  color,
  rotation,
  colorMap,
  displacementMap,
}: {
  position: Vector3;
  radius: number;
  //geometry: BufferGeometry;
  color: number;
  rotation: Vector3;
  colorMap?: Texture;
  displacementMap?: Texture;
}) {
  const meshRef = useRef<Mesh>(null);
  const geometryRef = useRef<BufferGeometry>(null);
  const [vCoords, setvCoords] = useState<ArrayLike<number>>(
    new DodecahedronGeometry(radius).getAttribute("position").array
  );

  useLayoutEffect(() => {
    const dodecahedron = new DodecahedronGeometry(radius);
    setvCoords(
      Array.from(dodecahedron.getAttribute("position").array).map(
        (coord) => coord + (0 - (Math.random() * radius) / 4)
      )
    );
    geometryRef.current?.setFromPoints(coordsToVectors(Array.from(vCoords)));
    console.log(vCoords);
  }, []);

  //   const geometryRef = useRef<ShapeBufferGeometry>(null);
  //     setGeometry(new BufferGeometry().setFromPoints(modifiedVertices));
  //     //console.log(geometry);
  //     geometryRef.current?.setFromPoints(modifiedVertices);
  //     console.log(geometryRef.current);
  //   }, []);

  //   useEffect(()=> {

  //   }, [geometryRef.current])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotateX(rotation.x);
      meshRef.current.rotateY(rotation.y);
      meshRef.current.rotateZ(rotation.z);
      state.camera.lookAt(meshRef.current.position);
    }
    console.log(meshRef.current);
  });

  return (
    <Sparkles color={"red"}>
      <mesh ref={meshRef} position={position}>
        {/*<shapeBufferGeometry ref={geometryRef} attach={"geometry"} />*/}
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach={"attributes-position"}
            array={vCoords}
            itemSize={3}
            count={vCoords.length / 3}
            usage={DynamicDrawUsage}
          />
        </bufferGeometry>
        <meshStandardMaterial color={color} map={colorMap} />
        {/*displacementMap={displacementMap}*/}
      </mesh>
    </Sparkles>
  );
}

// only works for coords.length % 3 == 0
const coordsToVectors = (coords: Array<number>) => {
  const vectors: Array<Vector3> = [];
  for (let i = 0; i < coords.length; i += 3) {
    vectors.push(new Vector3(coords[i], coords[i + 1], coords[i + 2]));
    //console.log(i / 3);
  }
  //console.log(vectors);
  return vectors;
};
