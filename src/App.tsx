import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { MapControls, Stars } from "@react-three/drei";
import Camera from "./components/Camera";
import Sun from "./components/Sun";
import Mercury from "./components/Mercury";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Mars from "./components/Mars";
import Saturn from "./components/Saturn";
import Ufo from "./components/Ufo";
import { useGet } from "./utils/API";
import "./styles.css";

function App() {
  const [cameraPos, setCameraPos] = useState(new THREE.Vector3(0, 0, 10));
  // let { data, loading } = useGet("https://api.le-systeme-solaire.net/rest/bodies?data=id,isPlanet,rel&order=isPlanet")

  // if (loading) {
  //   return <div color={'white'}>loading...</div>
  // }
  // else {
  //   console.log(data)
    return (
      <Canvas>
        <MapControls />
        <Camera cameraPos={cameraPos} setCameraPos={setCameraPos} />
        <Stars fade={true} />
        <Sun />
        <Mercury />
        <Earth />
        <Moon />
        <Ufo setCameraPos={setCameraPos} />
        <Mars />
      </Canvas>
    );
  // }
}

export default App;
