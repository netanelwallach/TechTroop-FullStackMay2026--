// #14
// Given a SORTED array of integers and a target number, return true
// if any two elements add up to the target, false otherwise.
//
// Constraints: the array is sorted in ascending order.
// You may not use any extra arrays, objects, or hash maps.
//
// Input:  [1, 2, 3, 4, 6], target 6   →  Output: true   (2 + 4 = 6)
// Input:  [1, 2, 3, 4, 6], target 11  →  Output: false  (max pair is 4+6=10)
// Input:  [-2, 1, 3, 5, 8], target 6  →  Output: true   (1 + 5 = 6)

function hasPairWithSum(arr, target) {
  // your code here
  if (arr.length < 2) {
    return false;
  }

  let min = 0;
  let max = arr.length - 1;
  if (arr[min] + arr[min + 1] > target || arr[max] + arr[max - 1] < target) {
    return false;
  }
  //   for (min; min < max; ) {
  while (min < max) {
    if (arr[min] + arr[max] === target) {
      return true;
    } else if (arr[min] + arr[max] > target) {
      max--;
    } else {
      min++;
    }
  }
  return false;
}

// Tests
console.log(hasPairWithSum([1, 2, 3, 4, 6], 6)); // → true
console.log(hasPairWithSum([1, 2, 3, 4, 6], 11)); // → false
console.log(hasPairWithSum([-2, 1, 3, 5, 8], 6)); // → true
