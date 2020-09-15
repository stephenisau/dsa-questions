/**
 * Modified Word Search, return indices of words found in 2d array
 * https://leetcode.com/problems/word-search/
 * Word Search
 */


 const wordSearch = (board, word) => {
   const ROWS = board.length;
   const COLS = board[0].length;
   let locations = [];
   let found = false;
   for (let ROW = 0; ROW < ROWS; ROW++) {
     for (let COL = 0; COL < COLS; COL++) {
      if (DFS(board, row, col, word)) {
        found = true;
      }
     }
   }
   if (found) {
    for (let ROW = 0; ROW < ROWS; ROW++) {
      for (let COL = 0; COL < COLS; COL++) {
        let curr = board[ROW][COL];
        if (curr === "-") locations.push([ROW, COL]);
      }
   };
   return locations;
 }



 function DFS(board, row, col, word) {
  if (word.length === 0) return true;
  if (word[0] !== board[row][col]) return false;
  if (row < 0 || row > board.length && col < 0 || col > board[0].length) return false;

  board[row][col] = "-";

  const DIRECTIONS = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0]
  ];

  for (let [dx, dy] of DIRECTIONS) {
      let cx = row + dx;
      let cy = col + dy;
      let found = DFS(board, cx, cy, word.slice(1));
      if (found) return true;
  }
  
  board[row][col] = word[0];
  return false;
}
