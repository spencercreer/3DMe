import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import {
  // OrthographicCamera,
  // OrbitControls,
  MapControls,
  Stars,
  // Text3D,
  // Stats
} from "@react-three/drei";
import Camera from "./components/Camera";
import Sun from "./components/Sun";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Saturn from "./components/Saturn";
import Ufo from "./components/Ufo";
import { useGet } from "./utils/API";
import "./styles.css";

function App() {
  const [cameraPos, setCameraPos] = useState(new THREE.Vector3(0, 0, 10));
  let { data, loading } = useGet("https://api.le-systeme-solaire.net/rest/bodies?data=id,isPlanet,rel&order=isPlanet")

  if (loading) {
    return <div color={'white'}>loading...</div>
  }
  else {
    console.log(data)
    return (
      <Canvas>
        {/* <Stats/> */}
        {/* <OrbitControls /> */}
        <MapControls />
        <Camera cameraPos={cameraPos} setCameraPos={setCameraPos} />
        {/* <OrthographicCamera ref={camera} rotation={[Math.atan(-1 / Math.sqrt(2)), -Math.PI / 4, 0]} onUpdate={(self) => self.updateProjectionMatrix()} /> */}
        <Stars fade={true} />
        <Sun />
        <Earth />
        <Moon />
        <Ufo setCameraPos={setCameraPos} />
      </Canvas>
    );
  }
}

export default App;
