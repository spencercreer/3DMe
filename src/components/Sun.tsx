import { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import SunMap from "../assets/textures/Sun/8k_sun.jpg";
import { useGet } from "../utils/API";

function Sun() {
    const [active, setActive] = useState(false)
    const [colorMap] = useLoader(
        THREE.TextureLoader,
        [SunMap]
    );

    const sunMesh = useRef<THREE.Mesh>(null!);
    useFrame(({ clock }) => {
        sunMesh.current.rotation.y = clock.getElapsedTime() / 4
    });

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

export default Sun