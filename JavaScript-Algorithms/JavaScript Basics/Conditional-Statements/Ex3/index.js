let temperature = 20;
let weather = "sunny";
// Your conditional code here

if (weather == "rainy") {
  console.log("Watch a movie indoors");
} else if (weather == "cloudy") {
  if (temperature <= 21) {
    console.log("Visit a museum");
  } else {
    console.log("Go hiking");
  }
} else if (weather == "sunny") {
  if (temperature < 15) {
    console.log("Stay inside and read");
  } else if (temperature < 24) {
    console.log("Go for a walk");
  } else {
    console.log("Go to the beach");
  }
}
