import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import MarsMap from "../assets/textures/Mars/8k_mars.jpg";

function Mars() {
    const [active, setActive] = useState(false)
    const [colorMap] = useLoader(
        THREE.TextureLoader,
        [MarsMap]
    );

    const marsMesh = useRef<THREE.Mesh>(null!)
    useFrame(({ clock }) => {
        marsMesh.current.rotation.y = clock.getElapsedTime() / 4
    });

    const fontProps = { font: '/Inter-Bold.woff', fontSize: 2, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }

    return (
        <>
            {
                active &&
                <Text position={[0, 3, 0]} {...fontProps}>
                    hello world!
                </Text>
            }

            <mesh
                scale={active ? 1.5 : 1}
                position={[5, 0, 0]}
                onPointerEnter={() => setActive(true)}
                onPointerLeave={() => setActive(false)}
                ref={marsMesh}
            >
                <sphereGeometry args={[.6, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap}
                    metalness={0.4}
                    roughness={0.7}
                />
            </mesh>
        </>
    )

}

export default Mars