// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
// Input:  "the quick brown fox"   →  Output: "quick"
// Input:  "cat elephant dog"      →  Output: "elephant"
// Input:  "one two six ten"       →  Output: "one"  (tie → first wins)

function longestWord(str) {
  // your code here
  let maxWord = "";
  let currentWord = "";

  for (let i = 0; i <= str.length; i++) {
    const char = str[i];

    if (char === " " || i === str.length) {
      if (currentWord.length > maxWord.length) {
        maxWord = currentWord;
      }
      currentWord = "";
    } else {
      currentWord += char;
    }
  }

  return maxWord;
}

// function longestWord(str) {
//     let maxStart = 0;
//     let maxLength = 0;

//     let currentStart = 0;
//     let currentLength = 0;

//     for (let i = 0; i <= str.length; i++) {
//         if (i === str.length || str[i] === ' ') {
//             if (currentLength > maxLength) {
//                 maxLength = currentLength;
//                 maxStart = currentStart;
//             }
//             currentStart = i + 1;
//             currentLength = 0;
//         } else {
//             currentLength++;
//         }
//     }

//     return str.substring(maxStart, maxStart + maxLength);
// }

console.log(longestWord("the quick brown fox"));
console.log(longestWord("cat elephant dog"));
console.log(longestWord("one two six ten"));
