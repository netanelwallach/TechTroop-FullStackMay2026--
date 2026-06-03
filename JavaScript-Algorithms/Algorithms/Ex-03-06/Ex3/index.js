//#3
// Given a string, return the number of vowels (a, e, i, o, u) it contains.
// Treat uppercase and lowercase the same.
//
// Constraints: input may contain spaces and mixed case. Vowels are only a e i o u.
//
// Hint: a string of vowels makes the membership check clean —
// check if each character is inside it.
//
// Input:  "hello world" →  Output: 3
// Input:  "Algorithm"   →  Output: 3

function countVowels(str) {
  // your code here
  let arr = str.toLowerCase();
  let result = 0;
  const vowels = "aeiou";

  for (let char of arr) {
    if (vowels.includes(char)) {
      result++;
    }
  }
  return result;
}

console.log(countVowels("hello world"));
console.log(countVowels("Algorithm"));
