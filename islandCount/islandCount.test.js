const {
  getNumOfIslands,
  markIslands,
  pushIfValid
} = require('./islandCount');

describe('islandCount', () => {

  it ('handles regular matrix', () => {
    let matrix = [
          [0,    1,    0,    1,    0],
          [0,    0,    1,    1,    1],
          [1,    0,    0,    1,    0],
          [0,    1,    1,    0,    0],
          [1,    0,    1,    0,    1] 
        ]
    expect(getNumOfIslands(matrix)).toEqual(6);
  });
});