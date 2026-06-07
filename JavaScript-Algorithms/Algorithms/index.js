// naive duplicatrs - O(n^2)

const arr = [1, 2, 3, 4, 5, 4, 6, 3, 7, 3, 8, 9, 3, 1];
duplicates = {};

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      duplicates[arr[i]] = true;
      break;
    }
  }
}

console.log(arr);
console.log(duplicates);

// dupicates using sort

const arr2 = arr.sort();
// const arr2 = arr.sort(function (a, b) {
//   return a - b;
// });
for (let i = 0; i < arr2.length - 1; i++) {
  const value = arr[i];
  if (arr2[i] === arr2[i + 1]) {
    console.log(arr2[i]);
    i++;
    // while (arr2[i] === value) {
    //   i++;
    // }
    // i--;
  }
}
// nauve twoSum method
function twoSum(arr, sum) {
  let result = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        result = true;
        break;
        // console.log(
        //   "Values at positions " + i + " and " + j + " give us the wanted sum",
        // );
      }
    }
    if (result) {
      break;
    }
  }
  return result;
}

console.log(twoSum(arr, 12));

// sorted 2 pointer technique
function twoSumSorted(arr, target) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  let currentSum = 0;

  while (left < right) {
    currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return true;
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

const nums = [4, 2, 7, 11, 1, 5];
const target = 9;
console.log(twoSumSorted(nums, target));

function twoSumSet(arr, target) {
  const differences = new Set();
  let difference;

  for (let i = 0; i < arr.length; i++) {
    difference = target - arr[i];

    if (differences.has(difference)) {
      return true;
    }
    differences.add(arr[i]);
  }

  return false;
}

console.log(twoSumSet(nums, target));
