//#2
// Given a string, return it reversed.
// You may not use any built-in reverse functions.
//
// Constraints: the string will only contain lowercase letters.
// Think about iterating from the end toward the beginning.
//
// Hint: you can build a new string character by character by iterating backwards.
//
// Input:  "hello"     →  Output: "olleh"
// Input:  "algorithm" →  Output: "mhtirogla"

function reverseString(str) {
  // your code here

  let arr = str.toLowerCase();
  let result = arr.split("");

  let i = 0;
  let size = result.length - 1;

  while (i < size) {
    let temp = result[i];
    result[i] = result[size];
    result[size] = temp;

    i++;
    size--;
  }

  return result.join("");
}

console.log(reverseString("hello"));
console.log(reverseString("algorithm"));
