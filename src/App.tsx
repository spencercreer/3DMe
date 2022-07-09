import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { MapControls, Stars } from "@react-three/drei";
import Camera from "./components/Camera";
import Sun from "./components/Sun";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import BlockExtrude from "./components/BlockExtrude";
import Moon from "./components/Moon";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
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
        <Venus />
        <Earth />
        <Moon />
        <Ufo setCameraPos={setCameraPos} />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />
      </Canvas>
    );
  // }
}

export default App;
