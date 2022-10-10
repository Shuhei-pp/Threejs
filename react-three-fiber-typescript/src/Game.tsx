import React,{ useState } from 'react'
import { Canvas, events, ThreeEvent,MeshProps} from '@react-three/fiber'
import { DoubleSide, Mesh } from 'three';
import { OrbitControls } from '@react-three/drei'
import { Marble } from './components/Parts';
import { SettingComponent } from './components/Setting';
import { calculateWinner } from './utils';

export const positionArray = [-30, -10, 10, 30]

export const Game: () => JSX.Element = () => {
  const [board, setBoard] = useState<string[][]>([[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]])
  const [isRedPlayer, setIsRedPlayer] = useState<boolean>(true)
  const [winner,setWinner] = useState<String|null>(null)

  const handleClickStick: (stickNumber: number, event: ThreeEvent<MouseEvent>) => void = (stickNumber, event) => {
    if (winner) {
      return
    }
    event.stopPropagation()//イベントが透過しないように
    let boardStatus = board
    if (boardStatus[stickNumber].length >= 4) {
      window.alert("縦に4つよりも多く置くことはできません。")
      return
    }
    boardStatus[stickNumber].push(isRedPlayer ? "R" : "B")
    setBoard(boardStatus)
    setIsRedPlayer(!isRedPlayer)
    setWinner(calculateWinner(board))
  }

  const Stick: React.FC<{ x: number, y: number, stickPosition: number }> = ({ x, y, stickPosition }) => {
    return <mesh
      position={[x, 50, y]}
      onClick={(event) => {handleClickStick(stickPosition,event) }}
      castShadow receiveShadow
      >
        <boxGeometry args={[2, 100, 2]} />
        <meshPhongMaterial color="#3f7b9d" />
    </mesh>
  }

  return (
    <div style={{position:"relative"}}>
      <p style={{ position: "absolute", color: "#ffffff", zIndex: "1" }}>
        {
          winner ?
            winner == "R" ?
              "winner:Red" : "winner:Blue" 
            :(isRedPlayer ?
              "Red" : "Blue") + "プレイヤーの番です."
        }
      </p>
      <Canvas
        camera={{ fov: 50, position: [150, 150, 150] }}
        style={{ width: "100vh", height: "100vh"}}
        shadows
      >
        
        <SettingComponent/>

        {positionArray.map((x, i) => {
          return(
            positionArray.map((y, j) => { 
              const stickPosition: number = i * 4 + j
              return <Stick x={x} y={y} stickPosition={stickPosition } key={stickPosition} />
            })
          )
        })}

        {board.map((marbles, stick) => {
          const i = Math.floor(stick / 4)
          const j = stick % 4
          return(
            marbles.map((color, height) => {
              if (color === "R") {
                return <Marble xIndex={i} yIndex={j} height={height} color={"hotpink"} key={height * 16 + i * 4 + j} />
              }
              else if(color === "B"){
                return <Marble xIndex={i} yIndex={j} height={height} color={"blue"} key={height * 16 + i * 4 + j}/>
              }  
            })
          )
        })}
      </Canvas>
    </div>
  )
}