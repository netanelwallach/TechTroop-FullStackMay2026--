const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const cleanText = function (str) {
  const newStr = str.toLowerCase();
  return newStr;
};

const removeSpecialChars = function (str, toRemove) {
  let result = str;
  for (const remove of toRemove) {
    result = result.split(remove).join("");
  }
  return result;
};

const countWords = function (story, specialChars, wordCounts) {
  let storyLowerCase = cleanText(story);
  let cleanStory = removeSpecialChars(storyLowerCase, specialChars);

  let words = cleanStory.split(" ");

  for (const word of words) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }

  return wordCounts;
};

console.log(countWords(story, specialChars, wordCounts));

// const storyLowerCase = story.toLowerCase();
// let cleanStory = storyLowerCase;
//
// for (const specialChar of specialChars) {
//   cleanStory = cleanStory.split(specialChar).join("");
// }
