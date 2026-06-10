// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")
// Input:  ""          →  Output: 0

function lengthOfLongestSubstring(str) {
  // your code here
  let max = 0;
  let start = 0;
  const lastSeen = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (lastSeen[char] !== undefined && lastSeen[char] >= start) {
      start = lastSeen[char] + 1;
    }

    lastSeen[char] = i;
    if (i - start + 1 > max) {
      max = i - start + 1;
    }
  }

  return max;
}

// Tests
console.log(lengthOfLongestSubstring("abcabcbb")); // → 3
console.log(lengthOfLongestSubstring("bbbbb")); // → 1
console.log(lengthOfLongestSubstring("pwwkew")); // → 3
console.log(lengthOfLongestSubstring("")); // → 0
console.log(lengthOfLongestSubstring("bcbf")); // → 0
