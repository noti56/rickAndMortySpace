import React, { useCallback, useEffect, useState } from "react";
import { Camera, Canvas, useFrame, useThree } from "@react-three/fiber";
import { useAppSelector } from "../../store/hook";
import dictionaryToArray from "../../utills/dictionaryToArray";
import { Character as ICharacter } from "../../interfaces/api.interface";
import Character from "../components/Character";
import { OrbitControls } from "@react-three/drei";

const cubeSize = 2;
const gridRows = 5;

const CharacterScene = () => {
  const characters: ICharacter[] = dictionaryToArray(
    useAppSelector((state) => state.characters).all
  );
  const filteredCharacters: ICharacter[] = dictionaryToArray(
    useAppSelector((state) => state.characters).filtered
  );

  const [charactersDividedIntoRows, setCharactersDividedIntoRows] = useState<Array<ICharacter[]>>(
    []
  );

  useEffect(() => {
    if (filteredCharacters.length == 0) {
      setCharactersDividedIntoRows(splitArray(characters, characters.length / gridRows));
    } else {
      setCharactersDividedIntoRows(
        splitArray(filteredCharacters, filteredCharacters.length / gridRows)
      );
    }
  }, [characters.length, JSON.stringify(filteredCharacters)]);

  const splitArray = (arr: any[], numChunks: number): Array<any[]> => {
    const chunkSize = Math.ceil(arr.length / numChunks);
    let i = 0;
    const chunks = [];
    while (i < arr.length) {
      chunks.push(arr.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return chunks;
  };

  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <mesh position={[(-characters.length * 2) / characters.length / gridRows - cubeSize *2, -cubeSize*3, -characters.length / cubeSize]}>
        {charactersDividedIntoRows.map((characterSubArray, index) => (
          <mesh
            key={index}
            position={[-characterSubArray.length, index * cubeSize * 2, 0]}
          >
            {characterSubArray.map((ch, subIndex) => (
              <Character
                cubeSize={cubeSize}
                key={ch.id}
                position={[subIndex * cubeSize * (cubeSize + cubeSize / gridRows), 0, 0]}
                character={ch}
              />
            ))}
          </mesh>
        ))}
      </mesh>
    </Canvas>
  );
};

export default CharacterScene;
