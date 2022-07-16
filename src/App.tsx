import { useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { MapControls, Stars } from "@react-three/drei";
import Camera from "./components/Camera";
import Loading from "./components/Loading";
import Sun from "./components/Sun";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import Moon from "./components/Moon";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
import Ufo from "./components/Ufo";
import Shuttle from "./components/Shuttle";
import { useGet } from "./utils/API";
import "./styles.css";

function App() {
  const [cameraPos, setCameraPos] = useState(new THREE.Vector3(0, 0, 10));
  let { response, loading } = useGet("https://api.le-systeme-solaire.net/rest/bodies?data=id,isPlanet,rel&order=isPlanet")
  console.log(response)

  if (loading) {
    return (
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <Loading />
          <Stars />
        </Suspense>
      </Canvas>
    )
  }
  else {
    return (
      <Canvas>
        <Suspense fallback={null}>
          <MapControls />
          <Camera cameraPos={cameraPos} setCameraPos={setCameraPos} />
          <Stars fade={true} />
          <Sun />
          <Mercury />
          <Venus />
          <Earth />
          <Moon />
          <Mars />
          <Jupiter />
          <Saturn />
          <Uranus />
          <Neptune />
          <Ufo setCameraPos={setCameraPos} />
          <Shuttle />
        </Suspense>
      </Canvas>
    );
  }
}

export default App;
