/**
 * @param {*} text 
 * @returns {number}
 */

const bracketMatch = (text) => {
  let diff = 0;
  let diffCount = 0;
  let n = text.length;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(') {
      diff += 1;
    }
    else if (text[i] === ')') {
      diff -= 1;
    }
    if (diff < 0) {
      diff += 1
      diffCount += 1
    }
  }
  return diff + diffCount
}

module.exports = {
  bracketMatch
}