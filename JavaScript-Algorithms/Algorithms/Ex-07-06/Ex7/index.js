// #7
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false

function isAnagram(a, b) {
  // your code here
  if (a.length !== b.length) {
    return false;
  } else {
    const aObj = {};
    const bObj = {};
    for (let i = 0; i < a.length; i++) {
      const letterA = a[i];
      const letterB = b[i];
      aObj[letterA] = (aObj[letterA] || 0) + 1;
      bObj[letterB] = (bObj[letterB] || 0) + 1;
    }
    return Object.keys(aObj).every(
      (key) => bObj.hasOwnProperty(key) && aObj[key] === bObj[key],
    );
  }
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("cat", "car"));
