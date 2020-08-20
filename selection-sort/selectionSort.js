const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
  }
  return arr;
}




let test = [34, 22, 10, 18, 17];

console.log(selectionSort(test)) // => [10, 17, 18, 22, 34]