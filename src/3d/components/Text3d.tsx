import React, { useEffect, useState, useRef } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Canvas, useThree, extend, Object3DNode, Vector3, Euler } from "@react-three/fiber";
import { Mesh } from "three";
import helvetiker_regular from "three/examples/fonts/helvetiker_regular.typeface.json";

class CustomElement extends TextGeometry {}
extend({ CustomElement });

declare module "@react-three/fiber" {
  interface ThreeElements {
    customElement: Object3DNode<CustomElement, typeof CustomElement>;
  }
}

interface props {
  position?: Vector3;
  text: string;
  size?: number;
  color?: string;
  rotation?: Euler;
}

const Text3d = ({ position, text, color, size, rotation }: props) => {
  const font = new FontLoader().parse(helvetiker_regular);
  const container = useRef<Mesh>() as React.MutableRefObject<Mesh>;

  return (
    <mesh
      position={position}
      rotation={rotation && rotation}
      // castShadow
      receiveShadow
      scale={[0.006, 0.006, 0.006]}
      ref={container}
    >
      <customElement
        args={[
          text,
          {
            font,
            size: size ? size : 80,
            // height: 0.5,
            // size: 80,
            height: 5,
            curveSegments: 12,
            bevelEnabled: false,
            bevelThickness: 10,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 5,
          },
        ]}
      />

      <meshBasicMaterial clipShadows attach="material" color={color ? color : "black"} />
    </mesh>
  );
};

export default Text3d;
