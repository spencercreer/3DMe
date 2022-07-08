import { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import SaturnMap from "../assets/textures/Saturn/8k_saturn.jpg";
import SaturnRingMap from "../assets/textures/Saturn/8k_saturn_ring_alpha.png";

function Saturn() {
    const [active, setActive] = useState(false)
    const [colorMap, ringMap] = useLoader(
        THREE.TextureLoader,
        [SaturnMap, SaturnRingMap]
    );
    const saturnMesh = useRef<THREE.Mesh>(null!)
    useFrame(({ clock }) => {
        saturnMesh.current.rotation.y = clock.getElapsedTime() / 4
    })

    const curve = new THREE.EllipseCurve(
        0, 0,            // ax, aY
        3, 5,           // xRadius, yRadius
        0, 2 * Math.PI,  // aStartAngle, aEndAngle
        false,            // aClockwise
        30                // aRotation
    );

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 1000 });

    return (
        <>
            <mesh
                scale={active ? 1.5 : 1}
                ref={saturnMesh}
                onClick={() => setActive(!active)}
                position={[0, 0, 0]}
            >
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap}
                    metalness={0.6}
                />
            </mesh>
            <mesh
                scale={active ? 1.5 : 1}
                // ref={saturnMesh}
                onClick={() => setActive(!active)}
                position={[0, 0, 0]}
                geometry={geometry}
                material={material}
            >
            </mesh>
        </>
    )
}


export default Saturn