// #9
// Given a string of words separated by spaces, return the sentence
// with the word order reversed. The words themselves should stay intact.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in reverse functions.
//
// Input:  "hello world"          →  Output: "world hello"
// Input:  "the quick brown fox"  →  Output: "fox brown quick the"
// Input:  "one"                  →  Output: "one"

function reverseWords(str) {
  // your code here
  //   const cleaned = str.trim();
  //   if (cleaned.length > 0 && !cleaned.includes(" ")) {
  //     return str;
  //   }
  const words = str.split(" ");

  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }
  return words.join(" ");
}

// Tests
console.log(reverseWords("hello world")); // → "world hello"
console.log(reverseWords("the quick brown fox")); // → "fox brown quick the"
console.log(reverseWords("one")); // → "one"

// function reverseWords(str) {
//   const words = str.split(" ");
//   let result = "";

//   for (let i = words.length - 1; i >= 0; i--) {
//     result += words[i];
//     if (i !== 0) result += " ";
//   }

//   return result;
// }
