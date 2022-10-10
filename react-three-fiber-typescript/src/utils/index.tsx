export const calculateWinner: (board: string[][]) => string | null = (board: string[][]) => {
  // Y軸が揃ったか判定
  for (const stickStatus of board) {
    if (stickStatus.length == 4) {
      const winner = valueComparison(stickStatus)
      if (winner) {
        return winner
      }
    }
  }

  // x軸が揃ったか判定
  for (const yIndex of [0, 1, 2, 3]) {
    for (const zIndex of [0, 1, 2, 3]) {
      const winner = valueComparison([board[zIndex * 4][yIndex], board[zIndex * 4 + 1][yIndex], board[zIndex * 4 + 2][yIndex], board[zIndex * 4 + 3][yIndex]])
      if (winner) {
        return winner
      }
    }
  }
  
  // z軸が揃ったか判定
  for (const yIndex of [0, 1, 2, 3]) {
    for (const xIndex of [0, 1, 2, 3]) {
      const winner = valueComparison([board[0+xIndex][yIndex], board[4+xIndex][yIndex], board[8+xIndex][yIndex], board[12+xIndex][yIndex]])
      if (winner) {
        return winner
      }
    }
  }

  // xz軸が揃ったか判定
  for (const yIndex of [0, 1, 2, 3]) {
    let winner = valueComparison([board[0][yIndex], board[5][yIndex], board[10][yIndex], board[15][yIndex]])
    if (winner) {
      return winner
    }
    winner = valueComparison([board[3][yIndex], board[6][yIndex], board[9][yIndex], board[12][yIndex]])
    if (winner) {
      return winner
    }
  }

  // yz軸が揃ったか判定
  for (const xIndex of [0, 1, 2, 3]) {
    let winner = valueComparison([board[xIndex][0], board[xIndex+4][1], board[xIndex+8][2], board[xIndex+12][3]])
    if (winner) {
      return winner
    }
    winner = valueComparison([board[xIndex][3], board[xIndex+4][2], board[xIndex+8][1], board[xIndex+12][0]])
    if (winner) {
      return winner
    }
  }

  // xy軸が揃ったか判定
  for (const zIndex of [0, 1, 2, 3]) {
    let winner = valueComparison([board[zIndex*4][0], board[zIndex*4+1][1], board[zIndex*4+2][2], board[zIndex*4+3][3]])
    if (winner) {
      return winner
    }
    winner = valueComparison([board[zIndex*4][3], board[zIndex*4+1][2], board[zIndex*4+2][1], board[zIndex*4+3][0]])
    if (winner) {
      return winner
    }
  }

  // xyz軸が揃ったか判定
  let winner = valueComparison([board[0][0], board[5][1], board[10][2], board[15][3]])
  if (winner) {
    return winner
  }
  winner = valueComparison([board[3][3], board[6][2], board[9][1], board[12][0]])
  if (winner) {
    return winner
  }

  return null
}

const valueComparison = (array:string[])=> {
  if (array[0] == array[1] && array[0] == array[2] && array[0] == array[3]) {
    return array[0]
  }
  return null
}