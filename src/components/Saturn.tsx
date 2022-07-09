import { useState, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import SaturnMap from "../assets/textures/Saturn/8k_saturn.jpg";
import SaturnRingMap from "../assets/textures/Saturn/8k_saturn_ring_alpha.png";
import { Shape } from "three"
// import { Canvas, extend, useThree, useUpdate } from "react-three-fiber"
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial"
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry"
import { Line2 } from "three/examples/jsm/lines/Line2"
import { Extrude } from "@react-three/drei";

function Saturn() {
    const [active, setActive] = useState(false)
    const [colorMap, ringMap] = useLoader(
        THREE.TextureLoader,
        [SaturnMap, SaturnRingMap]
    );
    // const saturnMesh = useRef<THREE.Mesh>(null!)
    // useFrame(({ clock }) => {
    //     saturnMesh.current.rotation.y = clock.getElapsedTime() / 4
    // })

    const curve = new THREE.EllipseCurve(
        0, 0,            // ax, aY
        3, 5,           // xRadius, yRadius
        0, 2 * Math.PI,  // aStartAngle, aEndAngle
        false,            // aClockwise
        30                // aRotation
    );

    const points = curve.getPoints(50);
    const geometry = new THREE.Shape().setFromPoints(points);

    const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };

    return (
        <>
            {/* <Extrude args={[geometry, extrudeSettings]} position={[0, 0, 0]} >
                <meshPhysicalMaterial
                    map={ringMap}
                    thickness={0.01}
                />
            </Extrude> */}
            <mesh
                scale={active ? 1.5 : 1}
                // ref={saturnMesh}
                onClick={() => setActive(!active)}
                position={[50, 0, 0]}
            >
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap}
                    metalness={1}
                />
            </mesh>
        </>
    )
}


export default Saturn