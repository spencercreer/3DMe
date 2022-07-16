import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    stslayer1: THREE.Mesh
  }
  materials: {
    ['default #2']: THREE.MeshStandardMaterial
  }
}

export default function Shuttle({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('/STS.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={4000} near={10} fov={25.11} position={[10, -10, 10]} />
      <mesh geometry={nodes.stslayer1.geometry} material={materials['default #2']}
      rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload('/STS.glb')
