import { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import EarthDayMap from "../assets/textures/Earth/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/Earth/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/Earth/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/Earth/8k_earth_clouds.jpg";

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

export default Earth