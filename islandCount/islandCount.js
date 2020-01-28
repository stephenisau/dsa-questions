const getNumOfIslands = (matrix) => {
  let islandCount = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        markIslands(matrix, rows, cols, i, j);
        islandCount++;
      }
    }
  }

  return islandCount;
}

const markIslands = (matrix, rows, cols, i, j) => {
  // BFS SOLUTION
  let queue = [];
  queue.push([i, j]);
  while (queue.length > 0) {
    let [x, y] = queue.pop();
    if (matrix[x][y] === 1) {
      matrix[x][y] = -1;
      pushIfValid(queue, rows, cols, x - 1, y);
      pushIfValid(queue, rows, cols, x + 1, y);
      pushIfValid(queue, rows, cols, x, y - 1);
      pushIfValid(queue, rows, cols, x, y + 1);
    }
  }
}

const pushIfValid = (queue, rows, cols, x, y) => {
  if (x >= 0 && x < rows && y >= 0 && y < cols) {
    queue.push([x, y]);
  }
}

module.exports = {
  getNumOfIslands,
  markIslands,
  pushIfValid
}