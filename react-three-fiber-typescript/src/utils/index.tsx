export const calculateWinner:(board: string[][])=>string|null = (board: string[][]) => {
  for (const stickStatus of board) {
    if (stickStatus.length == 4) {
      const winner = valueComparison(stickStatus)
      if (winner) {
        return winner
      }
    }
  }
  return null
}

const valueComparison = (array:string[])=> {
  if (array[0] == array[1] && array[0] == array[2] && array[0] == array[3]) {
    return array[0]
  }
  return null
}