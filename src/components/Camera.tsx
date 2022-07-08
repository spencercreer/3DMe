import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { OrthographicCamera as OrthoCamera, Vector3 } from "three";

interface CameraProps {
    cameraPos: Vector3,
  setCameraPos?: React.Dispatch<React.SetStateAction<any>>;
}

const Camera = ({ cameraPos, setCameraPos, ...props }: CameraProps) => {

//   const camera = useRef<OrthoCamera>(null!);

//   useFrame((state) => {
//     if (setCameraPos) {
//       setCameraPos({x: state.camera.position.x, y: state.camera.position.y, z: state.camera.position.z})
//     }
//   })

//   useEffect(() => {
//     camera.current.rotation.order = "YXZ";
//     camera.current.translateZ(1000);
//   }, []);

  return (
    <PerspectiveCamera
    position={cameraPos}
    />
  );
};

export default Camera;
