// #8
// Given an array of integers and a target number, return all pairs
// of elements that add up to the target. Each pair should be returned
// as an array of two numbers, and you should return an array of all pairs.
// Avoid duplicate pairs.
//
// Constraints: the array may contain positive and negative integers.
// A number cannot be paired with itself at the same index.
//
// Hint: think about every possible combination of two elements,
// then check if they add up to the target.
//
// Input:  [1, 2, 3, 4, 5], target 6  →  Output: [[1,5], [2,4]]
// Input:  [1, 1, 2, 3],    target 4  →  Output: [[1,3]]
// Input:  [0, -1, 2, -3],  target -1 →  Output: [[0,-1], [2,-3]]

function findPairs(arr, target) {
  // your code here
  const result = [];
  arr.sort();
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === target) {
      result.push([arr[left], arr[right]]);

      while (left < right && arr[left] === arr[left + 1]) left++;
      while (left < right && arr[right] === arr[right - 1]) right--;

      left += 1;
      right -= 1;
    } else if (arr[left] + arr[right] < target) {
      left++;
    } else if (arr[left] + arr[right] > target) {
      right--;
    }
  }

  return result;
}

// Tests
console.log(findPairs([1, 2, 3, 4, 5], 6)); // → [[1,5], [2,4]]
console.log(findPairs([1, 1, 2, 3], 4)); // → [[1,3]]
console.log(findPairs([0, -1, 2, -3], -1)); // → [[0,-1], [2,-3]]

function findPairsSet(nums, target) {
  const seen = new Set(); // שומר מספרים שכבר עברנו עליהם
  const pairs = new Set(); // שומר את הזוגות שמצאנו (כמחרוזת, כדי למנוע כפילויות)
  const result = []; // המערך הסופי שנחזיר

  for (const num of nums) {
    const complement = target - num; // המספר המשלים שאנחנו מחפשים

    // אם ראינו את המשלים בעבר, מצאנו זוג!
    if (seen.has(complement)) {
      // נמיין את הזוג פנימית רק לצורך יצירת מפתח ייחודי (למשל "1,5" ו-"5,1" יהיו אותו דבר)
      const min = Math.min(num, complement);
      const max = Math.max(num, complement);
      const pairKey = `${min},${max}`;

      // אם הזוג הזה עדיין לא נמצא, נכניס אותו לתוצאה
      if (!pairs.has(pairKey)) {
        pairs.add(pairKey);
        result.push([min, max]); // או [complement, num] לפי הסדר שנוח לך
      }
    }

    // מוסיפים את המספר הנוכחי ל-Set של המספרים שראינו
    seen.add(num);
  }

  return result;
}

// בדיקה:
console.log(findPairsSet([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]
console.log(findPairsSet([1, 1, 1, 2, 3, 3, 3], 4)); // [[1, 3]]
console.log(findPairsSet([0, -1, 2, -3], -1)); // [[-1, 0], [-3, 2]]
