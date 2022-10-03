import React from 'react'
import { Canvas } from '@react-three/fiber'
import { DoubleSide } from 'three';
import { OrbitControls } from '@react-three/drei'

export const Game:()=>JSX.Element = () => {
  return (
    <Canvas camera={{ fov: 50, position: [100, 100, 100] }} style={{ width: "100vh", height: "100vh" }} shadows>
      
      <OrbitControls />
      
      <directionalLight
        position={[100, 70, -60]}
        intensity={2}
        shadow-mapSize-width={2048} // 描画精度
        shadow-mapSize-height={2048}
        castShadow
      />
      
      <mesh position={[0, 50, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 100, 1]} />
        <meshPhongMaterial color={"blue"}/>
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#E5E5E5" side={DoubleSide} />
      </mesh>

    </Canvas>
  )
}