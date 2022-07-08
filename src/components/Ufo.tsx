import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface keys {
    [key: string]: string
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    Space: 'jump',
}
const keys: keys = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    Space: 'jump',
}

interface CameraProps {
    setCameraPos?: React.Dispatch<React.SetStateAction<any>>;
}

function Ufo({ setCameraPos, ...props }: CameraProps) {
    const [active, setActive] = useState(false)

    const ufoMesh = useRef<THREE.Mesh>(null!)
    useFrame(({ clock }) => {
        ufoMesh.current.rotation.y = clock.getElapsedTime() / 3
    })

    useEffect(() => {
        const handleKeyDown = (e: any) => {
            console.log(e)
            if (e.key === "ArrowUp") {
                // earthMesh.current.position.y += 1;
                ufoMesh.current.position.y += 1;
            }
            if (e.key === "ArrowDown") {
                // earthMesh.current.position.y -= 1;
                ufoMesh.current.position.y -= 1;
            }
            if (e.key === "ArrowLeft") {
                // earthMesh.current.position.x -= 1;
                ufoMesh.current.position.x -= 1;
            }
            if (e.key === "ArrowRight") {
                // earthMesh.current.position.x += 1;
                ufoMesh.current.position.x += 1;
            }
            if (setCameraPos) {
                setCameraPos(new THREE.Vector3(ufoMesh.current.position.x, ufoMesh.current.position.y, 10 ))
            }
            // setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
        }
        const handleKeyUp = (e: any) => {
            console.log(e)
            // setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
        }
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])


    return (
        <mesh ref={ufoMesh} position={[5, 5, 0]}>
            <sphereGeometry args={[.7, 32, 32]} />
            <meshPhongMaterial color={'pink'} />
        </mesh>

    )
}

export default Ufo


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