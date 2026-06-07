//#4
//Given an array of integers, return how many numbers
// in the array are strictly greater than the average.
//
// Constraints: the array will always have at least one element.
//
// Input:  [1, 2, 3, 4, 5]  →  Output: 2  (4 and 5 are above average 3)
// Input:  [10, 10, 10, 20] →  Output: 1  (only 20 is above average 12.5)

function countAboveAverage(arr) {
  // your code here
  const average = arr.reduce((sum, item) => sum + item, 0) / arr.length;

  let counter = 0;
  arr.forEach((element) => {
    if (element > average) {
      counter++;
    }
  });

  return counter;
}

let arr = [1, 2, 3, 4, 5];
console.log(countAboveAverage(arr));
arr = [10, 10, 10, 20];
console.log(countAboveAverage(arr));
