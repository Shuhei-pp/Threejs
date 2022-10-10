
import { positionArray } from "../Game"

export const Marble: React.FC<{ xIndex: number, yIndex: number, height: number, color: string }> = ({ xIndex, yIndex, height, color }) => {
  return (
    <mesh position={[positionArray[xIndex], height * 16 + 8, positionArray[yIndex]]} castShadow receiveShadow>
      <sphereBufferGeometry args={[8, 30, 30]} attach="geometry" />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}