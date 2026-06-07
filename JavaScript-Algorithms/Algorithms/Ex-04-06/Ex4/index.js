// #5
//Given an array of integers, return the element that appears
// most frequently. If there is a tie, return the one that appears
// first in the array.
//
// Constraints: the array will always have at least one element.
//
// Hint: think about how you can count occurrences of each element
// as you loop through, then find the highest count.
//
// Input:  [1, 2, 2, 3, 3, 3]  →  Output: 3
// Input:  [5, 1, 5, 2, 1, 5]  →  Output: 5
// Input:  [4, 4, 2, 2, 1]     →  Output: 4  (tie → first one wins)

function mostFrequent(arr) {
  // your code here
  const occurrences = arr.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});

  let maxCount = 0;
  let result = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const currentOccurance = occurrences[item];

    if (currentOccurance > maxCount) {
      maxCount = currentOccurance;
      result = item;
    }
  }

  return result;
}

let arr = [1, 2, 2, 3, 3, 3];
console.log(mostFrequent(arr));
arr = [5, 1, 5, 2, 1, 5];
console.log(mostFrequent(arr));
arr = [4, 4, 2, 2, 1];
console.log(mostFrequent(arr));
arr = [1, 2, 2, 2, 1, 1];
console.log(mostFrequent(arr));
