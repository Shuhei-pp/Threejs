import React from 'react'
import { Canvas } from '@react-three/fiber'
import { DoubleSide } from 'three';
import { OrbitControls } from '@react-three/drei'

export const Game: () => JSX.Element = () => {
  const positionArray = [-30,-10,10,30]
  return (
    <Canvas camera={{ fov: 50, position: [150, 150, 150] }} style={{ width: "100vh", height: "100vh" }} shadows>
      
      <OrbitControls />
      
      <directionalLight
        position={[100, 60, -62]}
        intensity={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />

      {positionArray.map((x, i) => {
        return(
          positionArray.map((y, j) => { 
            return (
              <mesh position={[x, 50, y]} key={i * 4 + j} castShadow receiveShadow>
                <boxGeometry args={[1, 100, 1]} />
                <meshPhongMaterial color={"blue"} />
              </mesh>
            )
          })
        )
      })}

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#E5E5E5" side={DoubleSide} />
      </mesh>

    </Canvas>
  )
}