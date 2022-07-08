import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import EarthDayMap from "../assets/textures/Earth/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/Earth/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/Earth/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/Earth/8k_earth_clouds.jpg";
import { useGet } from "../utils/API";

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

    const { data, loading } = useGet('https://api.le-systeme-solaire.net/rest/bodies/terre')
    console.log(data)
    if (loading) {
        // return <div>Loading...</div>
    } else if (data != {}) {
        // const radius = data.equaRadius
    }

    return (
            <group
                scale={active ? 1.5 : 1}
                onPointerEnter={() => setActive(true)}
                onPointerLeave={() => setActive(false)}
            >
                <mesh
                    ref={cloudsMesh}
                >
                    <sphereGeometry args={[1.005, 32, 32]} />
                    <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
                </mesh>
                <mesh
                    ref={earthMesh}
                // onClick={() => setActive(!active)}
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
            </group>
    )
}

export default Earth


// const usePersonControls = () => {
//     interface keys {
//       [key: string]: string
//       KeyW: 'forward',
//       KeyS: 'backward',
//       KeyA: 'left',
//       KeyD: 'right',
//       Space: 'jump',
//     }
//     const keys: keys = {
//       KeyW: 'forward',
//       KeyS: 'backward',
//       KeyA: 'left',
//       KeyD: 'right',
//       Space: 'jump',
//     }

//     const moveFieldByKey = (key: string) => keys[key]

//     const [movement, setMovement] = useState({
//       forward: false,
//       backward: false,
//       left: false,
//       right: false,
//       jump: false,
//     })

//     useEffect(() => {
//         console.log('hello')
//       const handleKeyDown = (e: any) => {
//         // console.log(e)
//         // setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
//       }
//       const handleKeyUp = (e: any) => {
//         // console.log(e)
//         // setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
//       }
//       document.addEventListener('keydown', handleKeyDown)
//       document.addEventListener('keyup', handleKeyUp)
//       return () => {
//         document.removeEventListener('keydown', handleKeyDown)
//         document.removeEventListener('keyup', handleKeyUp)
//       }
//     }, [])
//     console.log(movement)
//     return movement
//   }