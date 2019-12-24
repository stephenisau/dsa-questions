function uniqueChars(str) {
  // check if characters in a string are unique, don't use extra data structure
  // O(n^2) because we can't use additional data structures
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
}