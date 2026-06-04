const reverseString = function (str) {
  //Your code here
  let size = str.length;
  if (size === 1) {
    return str;
  }
  let reverse = str.charAt(size - 1);
  return reverse + reverseString(str.slice(0, -1));
};

// const reverseString = function (str, left = 0, right = str.length - 1) {
//   // תנאי עצירה 1: אם המצביעים נפגשו או חצו זה את זה, סיימנו
//   if (left >= right) {
//     // אם נשאר תו בודד באמצע (מחרוזת באורך אי-זוגי), נחזיר אותו. אחרת, מחרוזת ריקה.
//     return left === right ? str.charAt(left) : "";
//   }

//   // שולפים את התו הראשון והאחרון של המקטע הנוכחי
//   let firstChar = str.charAt(left);
//   let lastChar = str.charAt(right);

//   // השרשור שביקשת: תו אחרון + (קריאה רקורסיבית לאמצע) + תו ראשון
//   return lastChar + reverseString(str, left + 1, right - 1) + firstChar;
// };

console.log(reverseString("Algorithm"));
console.log(reverseString("hello"));
