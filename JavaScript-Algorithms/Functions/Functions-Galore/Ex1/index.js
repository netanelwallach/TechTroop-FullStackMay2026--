const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

const getAge = function (number) {
  let str = "";
  if (number < 21) {
    str = "an Underage";
  } else if (number <= 55) {
    str = number + " years old";
  } else {
    str = "a 55+";
  }
  return str;
};

const getProfession = function (str) {
  const words = str.split(" ");
  let result = "";
  words.forEach((element) => {
    result += capitalize(element) + " ";
  });
  return result;
};

const getCityCountry = function (city, country) {
  let result = capitalize(city) + ", " + capitalize(country);
  return result;
};

const getCatchphrase = function (str) {
  let result = capitalize(str);
  return result;
};

const getSummary = function (person) {
  // let summary = "";
  // summary += capitalize(person.name);
  // summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  // summary += getProfession(person.profession);
  // summary += `from ${getCityCountry(person.city, person.country)}. `;
  // summary +=
  //   capitalize(person.name) +
  //   ` loves to say "${getCatchphrase(person.catchphrase)}".`;
  // return summary;
  const name = capitalize(person.name);
  const age = getAge(person.age);
  const profession = getProfession(person.profession).trim();
  const location = getCityCountry(person.city, person.country);
  const catchphrase = getCatchphrase(person.catchphrase);

  // הכל במחרוזת אחת נקייה ועקבית:
  return `${name} is ${age} ${profession} from ${location}. ${name} loves to say "${catchphrase}".`;
};

people_info.forEach((element) => {
  console.log(getSummary(element));
});
