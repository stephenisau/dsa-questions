function zeroMatrix(matrix) {
  let rows = [];
  let cols = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  while (rows.length) {
    let currRow = rows.pop();
    for (let i = 0 ; i < matrix[currRow].length; i++) {
      matrix[currRow][i] = 0;
    }
  }

  while (cols.length) {
    let currCol = cols.pop();
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][currCol] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`${matrix[i][j]}`)
    }
  }
  return matrix;
}


let matrix = [
  [1, 2, 3, 4],
  [0, 3, 5, 6],
  [1, 0, 2, 4]
]

zeroMatrix(matrix);
