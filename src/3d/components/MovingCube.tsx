import { useFrame, useLoader } from "@react-three/fiber";

import { RoundedBox } from "@react-three/drei";

import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { TextureLoader, Mesh } from "three";

export interface IMovingCube {
  id: number;
  img: string;
  cubeSize: number;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
const rotationActiveSpeed = 1;

function MovingCube({ id, img, cubeSize: size, active, setActive }: IMovingCube) {
  const mesh = useRef<Mesh>() as React.MutableRefObject<Mesh>;
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (active) {
      mesh.current.rotation.y += rotationActiveSpeed * delta;
    } else {
      mesh.current.rotation.y = 0;
    }
  });
  const texture = useLoader(TextureLoader, img);

  return (
    <RoundedBox
      ref={mesh}
      scale={hovered ? 1.1 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      radius={20}
    >
      <boxGeometry args={[size, size, size]} />
      {/* <meshStandardMaterial color={hovered ? "hotpink" : "orange"} /> */}

      <meshLambertMaterial attach="material" map={texture} color="white" />
    </RoundedBox>
  );
}
export default MovingCube;
