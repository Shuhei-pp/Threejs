import React from "react"
import { OrbitControls } from "@react-three/drei"
import { DoubleSide } from "three"

export const SettingComponent = () => {
  return (
    <>
      <OrbitControls />
      <directionalLight
        position={[100, 60, -62]}
        intensity={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
      <color attach="background" args={['#1e1e1e']} />

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#E5E5E5" side={DoubleSide} />
      </mesh>
    </>
  )
}