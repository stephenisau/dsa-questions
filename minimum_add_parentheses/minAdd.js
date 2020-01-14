/*
Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

*/

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let closeCount = 0;
    let openCount = 0;
    for (let i = 0; i < S.length; i++) {
      if (openCount < 0) {
        closeCouunt++;
        openCount = 0;
      }
      if (S[i] === "(") {
         closeCount++;
      }
      if (S[i] === ")") {
        openCount++;
        closeCount--;
      }
    }
    return closeCount + openCount;
};


console.log(minAddToMakeValid('(())'))