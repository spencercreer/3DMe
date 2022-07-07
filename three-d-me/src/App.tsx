import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei'
import SunMap from "./assets/textures/Sun/8k_sun.jpg"
import EarthDayMap from "./assets/textures/Earth/8k_earth_daymap.jpg"
import EarthNormalMap from "./assets/textures/Earth/8k_earth_normal_map.jpg"
import EarthSpecularMap from "./assets/textures/Earth/8k_earth_specular_map.jpg"
import EarthCloudsMap from "./assets/textures/Earth/8k_earth_clouds.jpg"
import "./styles.css";

function App() {

  return (
    <Canvas>
      <OrbitControls />
      <Stars
        fade={true}
      />
      <Sun />
      <Earth />
    </Canvas>
  );
}

function Earth() {
  const [active, setActive] = useState(false)
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    THREE.TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  const earthMesh = useRef<THREE.Mesh>(null!)
  const cloudsMesh = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    earthMesh.current.rotation.y = clock.getElapsedTime() / 4
    cloudsMesh.current.rotation.y = clock.getElapsedTime() / 3
  })
  return (
    <>
      <mesh
        scale={active ? 1.5 : 1}
        ref={cloudsMesh}
        onClick={() => setActive(!active)}
      >
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh
        scale={active ? 1.5 : 1}
        ref={earthMesh}
        onClick={() => setActive(!active)}
        >
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
          />
      </mesh>
    </>
  )
}

function Sun() {
  const [active, setActive] = useState(false)
  const [colorMap] = useLoader(
    THREE.TextureLoader,
    [SunMap]
    );
    const sunMesh = useRef<THREE.Mesh>(null!)
  useFrame(({ clock }) => {
    sunMesh.current.rotation.y = clock.getElapsedTime() / 4
  })
  return (
    <>
      <pointLight color="#f6f3ea" position={[-10, 0, 0]} intensity={1} />
      <pointLight color="#f6f3ea" position={[-30, 0, 0]} intensity={1} />
      <pointLight color="#f6f3ea" position={[-20, 15, 0]} intensity={1} />
      <pointLight color="#f6f3ea" position={[-20, -15, 0]} intensity={1} />
      <pointLight color="#f6f3ea" position={[-20, 0, 15]} intensity={1} />
      <pointLight color="#f6f3ea" position={[-20, 0, -15]} intensity={1} />
      <mesh
        position={[-20, 0, 0]}
        scale={active ? 1.5 : 1}
        ref={sunMesh}
        onClick={() => setActive(!active)}
        >
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial
        map={colorMap}
        />
      </mesh>
    </>
  )
}

export default App;

// const usePersonControls = () => {
  //   const keys = {
    //     [key: string]: key,
    //     KeyW: 'forward',
    //     KeyS: 'backward',
    //     KeyA: 'left',
    //     KeyD: 'right',
    //     Space: 'jump',
    //   }
    
    //   const moveFieldByKey = (key: string) => keys[key]
    
    //   const [movement, setMovement] = useState({
      //     forward: false,
      //     backward: false,
      //     left: false,
      //     right: false,
      //     jump: false,
      //   })
      
      //   useEffect(() => {
        //     const handleKeyDown = (e) => {
          //       setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
          //     }
          //     const handleKeyUp = (e) => {
            //       setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
//     }
//     document.addEventListener('keydown', handleKeyDown)
//     document.addEventListener('keyup', handleKeyUp)
//     return () => {
  //       document.removeEventListener('keydown', handleKeyDown)
  //       document.removeEventListener('keyup', handleKeyUp)
  //     }
  //   }, [])
  //   return movement
  // }
  
  // onContextMenu={(e) => console.log('context menu')}
  // onDoubleClick={(e) => console.log('double click')}
  // onWheel={(e) => console.log('wheel spins')}
  // onPointerUp={(e) => console.log('up')}
  // onPointerDown={(e) => console.log('down')}
  // onPointerOver={(e) => console.log('over')}
  // onPointerOut={(e) => console.log('out')}
  // onPointerEnter={(e) => console.log('enter')}
  // onPointerLeave={(e) => console.log('leave')}
  // onPointerMove={(e) => console.log('move')}
  // onPointerMissed={() => console.log('missed')}
  // onUpdate={(self) => console.log('props have been updated')}