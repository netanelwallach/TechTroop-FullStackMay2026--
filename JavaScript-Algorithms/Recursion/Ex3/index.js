const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function (arr1, arr2) {
  //Your code here
  if (arr1.length === 0) {
    return;
  }
  arr2.push(arr1.shift());
  swap(arr1, arr2);
};

swap(arr1, arr2);
console.log(arr1); //[]
console.log(arr2); //[1, 2, 3]
