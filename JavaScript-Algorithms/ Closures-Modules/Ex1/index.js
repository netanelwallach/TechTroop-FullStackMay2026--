const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const toSkewerCase = function (str) {
    return str.replaceAll(" ", "-");
  };

  return {
    capitalizeFirst,
    toSkewerCase,
  };
};

const formatter = StringFormatter();

// formatter.capitalizeFirst("dorothy") //should return Dorothy
// formatter.toSkewerCase("blue box") //should return blue-box

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box
