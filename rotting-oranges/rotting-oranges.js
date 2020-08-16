// https://leetcode.com/problems/rotting-oranges



const orangesRotting = grid => {
  if (grid.length < 1) return 0;

  let ROW = grid.length;
  let COL = grid[0].length;
  let FRESH = 1;
  let ROTTEN = 2;
  const DIRECTIONS = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1]
  ];

  let freshCount = 0;
  let rottenQueue = [];
  let minutes = 0;

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (grid[i][j] === 1) freshCount++;
      if (grid[i][j] === 2) rottenQueue([i, j, minutes])// push indices and minutes onto queue
    }
  }

  while (rottenQueue.length) {
    let orange = rottenQueue.shift();
    let [x, y, _minutes] = orange;
    for (let [dx, dy] of DIRECTIONS) {
      const cx = x + dx;
      const cy = y + dy;
      if (cx < 0 || cy < 0 || cx >= ROW || cy >= COL || grid[cx][cy] !== FRESH) {
        continue
      }
      grid[cx][cy] = ROTTEN;// set the new grid to be rotten
      freshCount--;
      minutes = _minutes + 1;
      rottenQueue.push([cx, cy, minutes]);
    };
  };

  return freshCount > 0 ? -1 : minutes;
}