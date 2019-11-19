const findEvenIndex = require('./findEvenIndex');

describe("#findEvenIndex", () => {
  it ('is a function', function () {
    expect (typeof findEvenIndex).toEqual('function');
  });

  it('handles basic test cases', () => {
    expect(findEvenIndex([1,2,3,4,3,2,1])).toEqual(3);
    expect(findEvenIndex([1,100,50,-51,1,1])).toEqual(1);
    expect(findEvenIndex([1,2,3,4,5,6])).toEqual(-1);
    expect(findEvenIndex([20,10,30,10,10,15,35])).toEqual(3);
  })
})