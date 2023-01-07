import React, { useState, useEffect } from "react";
import MovingCube, { IMovingCube } from "./MovingCube";
import Text3d from "./Text3d";
import { Vector3 } from "@react-three/fiber";
import { Vector3 as Vec3 } from "three";
import { Html } from "@react-three/drei";
import Modal from "react-modal";
import { Character as ICharacter } from "../../interfaces/api.interface";
import CharacterModal from "../../components/CharacterModal/CharacterModal";
import CharacterName from "../../components/CharacterName/CharacterName";

interface props {
  position: Vector3;
  character: ICharacter;
  cubeSize: number;
}
const textSize = 40;

const Character = ({ position, cubeSize, character }: props) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <Html>
        <CharacterModal active={active} setActive={setActive} character={character} />
      </Html>

      <group position={position}>
        {/* <Text3d
          text={character.name}
          position={[(-character.name.length / textSize) * cubeSize, cubeSize / 2, 1]}
          size={textSize}
          color="white"
        /> */}
        <Html
          position={[(-character.name.length / textSize) * cubeSize, cubeSize , 1]}
          zIndexRange={[0]}
        >
          <CharacterName cubeSize={cubeSize}>{character.name}</CharacterName>
        </Html>
        <MovingCube
          cubeSize={cubeSize}
          id={character.id}
          img={character.image}
          active={active}
          setActive={setActive}
        />
      </group>
    </>
  );
};

export default Character;
