import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import MercuryMap from "../assets/textures/Mercury/8k_mercury.jpg";

function Mercury() {
    const [active, setActive] = useState(false)
    const [colorMap] = useLoader(
        THREE.TextureLoader,
        [MercuryMap]
    );

    const mercuryMesh = useRef<THREE.Mesh>(null!)
    useFrame(({ clock }) => {
        mercuryMesh.current.rotation.y = clock.getElapsedTime() / 4
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
                position={[-4, 0, 0]}
                onPointerEnter={() => setActive(true)}
                onPointerLeave={() => setActive(false)}
                ref={mercuryMesh}
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

export default Mercury