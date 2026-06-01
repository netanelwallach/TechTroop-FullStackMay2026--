let year = 2024;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap

let leap = false;
str = "";
if (year % 4 != 0) {
  //leap = false
} else if (year % 4 == 0 && year % 100 != 0) {
  leap = true;
} else if (year % 400 == 0) {
  leap = true;
} //else {year = false}

str += "Year " + year + " ";
if (leap) {
  str += "is";
} else {
  str += "isn't";
}
str += " a leap year.";
console.log(str);
