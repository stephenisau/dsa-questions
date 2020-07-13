const plusOne = digits => {
  for (let i = 0; i < digits.length; i++) {
    let idx = n - 1 - i;
    if (digits[idx] === 9) {
      digits[idx] = 0;
    } else {
      digits[idx] += 1;
      return digits
    }
  }
  return [1, ...digits];
}

// const plusOne = digits => {
//   let string = ""
//   let output = []
//   for (let i = 0; i < digits.length; i++) {
//     string += digits[i].toString();

//   }
//         num = int(string)
//         num = num + 1
//         str_num = str(num)
//         for i in range(len(str_num)):
//             output.append(str_num[i])
//         return output
// }