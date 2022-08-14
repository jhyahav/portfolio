import { Mesh, Texture, Vector3 } from "three";
import { Dodecahedron, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
export default function Asteroid({
  position,
  radius,
  color,
  rotation,
  colorMap,
  displacementMap,
}: {
  position: Vector3;
  radius: number;
  color: number;
  rotation: Vector3;
  colorMap?: Texture;
  displacementMap?: Texture;
}) {
  const meshRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotateX(rotation.x);
      meshRef.current.rotateY(rotation.y);
      meshRef.current.rotateZ(rotation.z);
    }
  });
  return (
    <Sphere
      ref={meshRef}
      args={[radius]}
      position={position}
      scale={new Vector3(1, 1.5, 0.87)}
    >
      <meshStandardMaterial
        color={color}
        map={colorMap}
        displacementMap={displacementMap}
        displacementScale={2}
      />
    </Sphere>
  );
}

//   const dodecahedron = new DodecahedronBufferGeometry(radius, 1);

//   //const index = dodecahedron.index!.array;
//   //const meshRef = useRef<Mesh>(null);
//   //const geometryRef = useRef<BufferGeometry>(null);
//   const ref = useRef<PolyhedronGeometry>(null);
//   const [vCoords, setvCoords] = useState<ArrayLike<number>>(
//     dodecahedron.getAttribute("position").array
//   );

//   useEffect(() => {
//     // setvCoords(
//     //   Array.from(dodecahedron.getAttribute("position").array).map(
//     //     (coord) => coord + (0 - (Math.random() * radius) / 4)
//     //   )
//     // );
//     //geometryRef.current?.setFromPoints(coordsToVectors(Array.from(vCoords)));
//     //console.log(Array.from(vCoords));
//     console.log(dodecahedron.index);
//     console.log(dodecahedron.getIndex());
//   }, []);

//   //   const geometryRef = useRef<ShapeBufferGeometry>(null);
//   //     setGeometry(new BufferGeometry().setFromPoints(modifiedVertices));
//   //     //console.log(geometry);
//   //     geometryRef.current?.setFromPoints(modifiedVertices);
//   //     console.log(geometryRef.current);
//   //   }, []);

//   useFrame(() => {
//     //console.log(ref.current);
//     //ref.current?.setFromPoints(coordsToVectors(Array.from(vCoords)));
//   });

//   return (
//     <Polyhedron
//       ref={ref}
//       args={[Array.from(vCoords), undefined, radius, 1]}
//       position={position}
//     >
//       <meshBasicMaterial color={color} />
//     </Polyhedron>
//     //   <mesh ref={meshRef} position={position}>
//     //     {/*<shapeBufferGeometry ref={geometryRef} attach={"geometry"} />*/}
//     //     <bufferGeometry ref={geometryRef}>
//     //       <bufferAttribute
//     //         attach={"attributes-position"}
//     //         array={vCoords}
//     //         itemSize={3}
//     //         count={vCoords.length / 3}
//     //         usage={DynamicDrawUsage}
//     //       />
//     //     </bufferGeometry>
//     //     <meshStandardMaterial color={color} map={colorMap} />
//     //     {/*displacementMap={displacementMap}*/}
//     //   </mesh>
//   );
// }

// // only works for coords.length % 3 == 0
// const coordsToVectors = (coords: Array<number>) => {
//   const vectors: Array<Vector3> = [];
//   for (let i = 0; i < coords.length; i += 3) {
//     vectors.push(new Vector3(coords[i], coords[i + 1], coords[i + 2]));
//     //console.log(i / 3);
//   }
//   //console.log(vectors);
//   return vectors;
// };
