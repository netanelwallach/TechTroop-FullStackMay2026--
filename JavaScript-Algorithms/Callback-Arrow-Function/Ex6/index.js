const commentOnWeather = (temp) =>
  console.log("It's " + determineWeather(temp));

const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"
