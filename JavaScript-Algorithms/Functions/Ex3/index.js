const checkExists = function (arr, number) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element == number) {
      return true;
    }
  }
  return false;
};

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));
