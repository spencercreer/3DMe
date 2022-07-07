import { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import MoonMap from "../assets/textures/Moon/8k_moon.jpg";

function Moon() {
    const [active, setActive] = useState(false)
    const [colorMap] = useLoader(
        THREE.TextureLoader,
        [MoonMap]
    );
    const moonMesh = useRef<THREE.Mesh>(null!)
    useFrame(({ clock }) => {
        moonMesh.current.rotation.y = clock.getElapsedTime() / 4
        moonMesh.current.position.x = Math.sin(clock.getElapsedTime()) * 2
        moonMesh.current.position.z = Math.cos(clock.getElapsedTime()) * 2
        // moonMesh.current.position.z = Math.sin(clock.getElapsedTime())
    })
    return (
        <>
            <mesh
                // position={[-2, 0, 0]}
                scale={active ? 1.5 : 1}
                ref={moonMesh}
                onClick={() => setActive(!active)}
            >
                <sphereGeometry args={[.1, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap}
                    metalness={0.4}
                    roughness={0.7}
                />
            </mesh>
        </>
    )
}

export default Moon