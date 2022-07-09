import React from "react";
import * as THREE from "three";
import { Extrude, OrbitControls, Center } from "@react-three/drei";

const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };
const SIDE = 10;

export default function BlockExtrude() {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <>
      <Extrude args={[shape, extrudeSettings]} position={[0,0,0]}>
        <meshPhysicalMaterial
          flatShading
          color="#3E64FF"
          thickness={SIDE}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={0.8}
          ior={1.25}
          attenuationDistance={0}
        />
      </Extrude>
    </>
  );
}