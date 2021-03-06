/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['loadingText_-_L']: THREE.Mesh
    ['loadingText_-_o']: THREE.Mesh
    ['loadingText_-_a']: THREE.Mesh
    ['loadingText_-_d']: THREE.Mesh
    ['loadingText_-_i']: THREE.Mesh
    ['loadingText_-_n']: THREE.Mesh
    ['loadingText_-_g']: THREE.Mesh
    ['loadingText_-_']: THREE.Mesh
    ['loadingText_-__1']: THREE.Mesh
    ['loadingText_-__2']: THREE.Mesh
  }
  materials: {
    ['Simply Delicious']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('/LoadingText.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0}>
        <mesh geometry={nodes['loadingText_-_L'].geometry} material={materials['Simply Delicious']} position={[-50.35, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-_o'].geometry} material={materials['Simply Delicious']} position={[-38, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-_a'].geometry} material={materials['Simply Delicious']} position={[-24.79, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-_d'].geometry} material={materials['Simply Delicious']} position={[-12.21, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-_i'].geometry} material={materials['Simply Delicious']} position={[1.42, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-_n'].geometry} material={materials['Simply Delicious']} position={[6.96, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-_g'].geometry} material={materials['Simply Delicious']} position={[20.99, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-_'].geometry} material={materials['Simply Delicious']} position={[34.61, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-__1'].geometry} material={materials['Simply Delicious']} position={[39.56, 3.68, 4.59]} scale={0.49} />
        <mesh geometry={nodes['loadingText_-__2'].geometry} material={materials['Simply Delicious']} position={[44.51, 3.68, 4.59]} scale={0.49} />
      </group>
    </group>
  )
}

useGLTF.preload('/LoadingText.glb')
