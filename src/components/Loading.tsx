import { Text } from "@react-three/drei";

const Loading = () => {

  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false, bevelSegments: 8 }

  return (
    <Text position={[0, 3, 0]} {...fontProps}>
      Loading...
    </Text>
  )
}

export default Loading

// import * as THREE from 'three'
// import { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import { GLTF } from 'three-stdlib'
// import modelSrc from '../assets/models/LoadingText.glb?url';

// type GLTFResult = GLTF & {
//   nodes: {
//     ['loadingText_-_L']: THREE.Mesh
//     ['loadingText_-_o']: THREE.Mesh
//     ['loadingText_-_a']: THREE.Mesh
//     ['loadingText_-_d']: THREE.Mesh
//     ['loadingText_-_i']: THREE.Mesh
//     ['loadingText_-_n']: THREE.Mesh
//     ['loadingText_-_g']: THREE.Mesh
//     ['loadingText_-_']: THREE.Mesh
//     ['loadingText_-__1']: THREE.Mesh
//     ['loadingText_-__2']: THREE.Mesh
//   }
//   materials: {
//     ['Simply Delicious']: THREE.MeshStandardMaterial
//   }
// }

// export default function Loading({ ...props }: JSX.IntrinsicElements['group']) {
//   const group = useRef<THREE.Group>(null)
//   const { nodes, materials } = useGLTF(modelSrc) as GLTFResult
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0}>
//         <mesh geometry={nodes['loadingText_-_L'].geometry} material={materials['Simply Delicious']} position={[-50.35, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-_o'].geometry} material={materials['Simply Delicious']} position={[-38, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-_a'].geometry} material={materials['Simply Delicious']} position={[-24.79, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-_d'].geometry} material={materials['Simply Delicious']} position={[-12.21, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-_i'].geometry} material={materials['Simply Delicious']} position={[1.42, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-_n'].geometry} material={materials['Simply Delicious']} position={[6.96, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-_g'].geometry} material={materials['Simply Delicious']} position={[20.99, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-_'].geometry} material={materials['Simply Delicious']} position={[34.61, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-__1'].geometry} material={materials['Simply Delicious']} position={[39.56, 3.68, 4.59]} scale={0.49} />
//         <mesh geometry={nodes['loadingText_-__2'].geometry} material={materials['Simply Delicious']} position={[44.51, 3.68, 4.59]} scale={0.49} />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload(modelSrc)