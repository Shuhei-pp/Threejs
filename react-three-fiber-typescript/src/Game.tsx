import React,{ useState } from 'react'
import { Canvas, events, ThreeEvent } from '@react-three/fiber'
import { DoubleSide, EqualStencilFunc } from 'three';
import { OrbitControls } from '@react-three/drei'

// type TypeBoard = {
  
// }

export const Game: () => JSX.Element = () => {
  const [board, setBoard] = useState<string[][]>([[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])
  const [isRedPlayer, setIsRedPlayer]=useState<boolean>(true)
  const positionArray = [-30, -10, 10, 30]

  const handleClickStick: (stickNumber: number, event: ThreeEvent<MouseEvent>) => void = (stickNumber, event) => {
    event.stopPropagation()//イベントが透過しないように
    let boardStatus = board
    boardStatus[stickNumber].push(isRedPlayer ? "R" : "B")
    setBoard(boardStatus)
    setIsRedPlayer(!isRedPlayer)
  }
  return (
    <>
      <h1>{isRedPlayer ? "Red" : "Blue" }</h1>
      <Canvas
        camera={{ fov: 50, position: [150, 150, 150] }}
        style={{ width: "100vh", height: "100vh" }}
        shadows
      >
        <OrbitControls />
        <directionalLight
          position={[100, 60, -62]}
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <color attach="background" args={['#1e1e1e']} />

        {positionArray.map((x, i) => {
        return(
          positionArray.map((y, j) => { 
            const stickPosition: number = i * 4 + j
            return (
              <mesh
              position={[x, 50, y]}
              key={stickPosition}
                onClick={(event) => {handleClickStick(stickPosition,event) }}
              castShadow receiveShadow
              >
                <boxGeometry args={[2, 100, 2]} />
                <meshPhongMaterial color="#3f7b9d" />
              </mesh>
            )
          })
          )
        })}

        {board.map((marbles, stick) => {
          const i = Math.floor(stick / 4)
          const j = stick % 4
          return(
            marbles.map((color, height) => {
              if (color === "R") {
                return (
                  <mesh position={[positionArray[i], height * 16+8, positionArray[j]]} key={height*16+i*4+j} castShadow receiveShadow>
                    <sphereBufferGeometry args={[8, 30, 30]} attach="geometry" />
                    <meshStandardMaterial color="hotpink" />
                  </mesh>
                )
              }
              else if(color === "B"){
                return (
                  <mesh position={[positionArray[i], height* 16+8, positionArray[j]]} key={height*16+i*4+j} castShadow receiveShadow>
                    <sphereBufferGeometry args={[8, 30, 30]} attach="geometry" />
                    <meshStandardMaterial color="Blue" />
                  </mesh>
                )
              }  
            })
          )
        })}

        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#E5E5E5" side={DoubleSide} />
        </mesh>

      </Canvas>
    </>
  )
}