console.log("before setTimeout");
setTimeout(function () {
  console.log("in the callback");
}, 1000);
console.log("after setTimeout");

//synchronous function
// const getRandomWord = function () {
//   let words = [
//     "Bonanza",
//     "Elusive",
//     "Hindrance",
//     "Astute",
//     "Polaroid",
//     "Phonic",
//     "Yonder",
//   ];
//   return words[Math.floor(Math.random() * words.length)];
// };

// const getRandomWord = function () {
//   let words = [
//     "Bonanza",
//     "Elusive",
//     "Hindrance",
//     "Astute",
//     "Polaroid",
//     "Phonic",
//     "Yonder",
//   ];

//   // using setTimeout to simulate an async operation that takes time
//   setTimeout(() => {
//     return words[Math.floor(Math.random() * words.length)];
//   }, 1000);
// };

// console.log(getRandomWord()); // undefined

// const getRandomWord = function (callback) {
//   let words = [
//     "Bonanza",
//     "Elusive",
//     "Hindrance",
//     "Astute",
//     "Polaroid",
//     "Phonic",
//     "Yonder",
//   ];
//   setTimeout(() => {
//     callback(words[Math.floor(Math.random() * words.length)]);
//   }, 1000);
// };

// getRandomWord((randomWord) => {
//   console.log(randomWord);
// });

const getRandomWord = function (callback) {
  let words = [
    "Bonanza",
    "Elusive",
    "Hindrance",
    "Astute",
    "Polaroid",
    "Phonic",
    "Yonder",
  ];
  setTimeout(() => {
    callback(words[Math.floor(Math.random() * words.length)]);
  }, 1000);
};

const getSynonyms = function (word, callback) {
  let thesauraus = {
    Absolute: ["Definitive", "Certain", "Sure", "Unequivocal"],
    Astute: ["Sharp", "Poignant", "Clever"],
    Azure: ["Blue", "Cyan", "Sky-blue"],
    Bright: ["Luminous", "Brilliant"],
    Bonanza: ["Plethora", "Smorgasboard", "Copious", "Plenty"],
    Elusive: ["Slick", "Slippery", "Ethereal", "Loose"],
    Erode: ["Destroy", "Wear out", "Tarnish"],
    Hindrance: ["Bother", "Disturbance", "Problematic"],
    Phonic: ["Soundful"],
    Ploy: ["Plan", "Ruse"],
    Polaroid: ["Photograph"],
    Yap: ["Bark", "Blab", "Chatter"],
    Yonder: ["There", "Away", "Far", "Afar"],
  };

  setTimeout(() => {
    callback(thesauraus[word]);
  }, 1000);
};

const getSentiment = function (word, callback) {
  let wordSentiment = {
    Definitive: 1,
    Sharp: 1,
    Blue: 0,
    Luminous: 1,
    Plethora: 1,
    Slick: -1,
    Destroy: -1,
    Bother: -1,
    Soundful: 0,
    Plan: 0,
    Photograph: 0,
    Bark: -1,
    There: -1,
  };
  setTimeout(() => {
    callback(JSON.stringify(wordSentiment[word]));
  }, 1000);
};

const getSentimentDescription = function (sentiment) {
  return sentiment == "1"
    ? "Positive"
    : sentiment == "-1"
      ? "Negative"
      : "Neutral";
};

getRandomWord((randomWord) => {
  console.log(`Random Word: ${randomWord}`);

  getSynonyms(randomWord, (synonyms) => {
    if (!synonyms) {
      console.log("No synonyms found.");
      return;
    }

    console.log(`Synonyms of ${randomWord}:`, synonyms);
    let synonym = synonyms[0]; // Use the first synonym

    getSentiment(synonym, (sentiment) => {
      let sentimentDescription = getSentimentDescription(sentiment);
      console.log(
        `Sentiment of "${synonym}" (Synonym of ${randomWord}): ${sentimentDescription}`,
      );
    });
  });
});

// with error
getRandomWord(
  function (word) {
    getSynonyms(
      word,
      function (synonyms) {
        getSentiment(
          synonyms[0],
          function (sentiment) {
            console.log(
              `The word ${word} has a synonym ${synonyms[0]} which has a ${getSentimentDescription(sentiment)} sentiment`,
            );
          },
          function (error) {
            console.log(error);
          },
        );
      },
      function (error) {
        console.log(error);
      },
    );
  },
  function (error) {
    console.log(error);
  },
);

// code if getRandomWord returned promise
// getRandomWord()
//     .then((word) => {
//         console.log(word);
//     })

// full example of promise
// makeAsyncOperation()
//   .then((result) => {
//     console.log("promise completed successfully");
//   })
//   .catch((error) => {
//     console.log("promise failed");
//   })
//   .finally(() => {
//     console.log("will be printed any way");
//   });

const getRandomWordPromise = function () {
  let words = [
    "Bonanza",
    "Elusive",
    "Hindrance",
    "Astute",
    "Polaroid",
    "Phonic",
    "Yonder",
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(words[Math.floor(Math.random() * words.length)]);
    }, 1000);
  });
};

const getSynonymsPromise = function (word) {
  let thesauraus = {
    Absolute: ["Definitive", "Certain", "Sure", "Unequivocal"],
    Astute: ["Sharp", "Poignant", "Clever"],
    Azure: ["Blue", "Cyan", "Sky-blue"],
    Bright: ["Luminous", "Brilliant"],
    Bonanza: ["Plethora", "Smorgasboard", "Copious", "Plenty"],
    Elusive: ["Slick", "Slippery", "Ethereal", "Loose"],
    Erode: ["Destroy", "Wear out", "Tarnish"],
    Hindrance: ["Bother", "Disturbance", "Problematic"],
    Phonic: ["Soundful"],
    Ploy: ["Plan", "Ruse"],
    Polaroid: ["Photograph"],
    Yap: ["Bark", "Blab", "Chatter"],
    Yonder: ["There", "Away", "Far", "Afar"],
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(thesauraus[word]);
    }, 1000);
  });
};

const getSentimentPromise = function (word) {
  let wordSentiment = {
    Definitive: 1,
    Sharp: 1,
    Blue: 0,
    Luminous: 1,
    Plethora: 1,
    Slick: -1,
    Destroy: -1,
    Bother: -1,
    Soundful: 0,
    Plan: 0,
    Photograph: 0,
    Bark: -1,
    There: -1,
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(wordSentiment[word]);
    }, 1000);
  });
};

// No need for promises here
const getSentimentDescriptionPromise = function (sentiment) {
  return sentiment === 1
    ? "Positive"
    : sentiment === -1
      ? "Negative"
      : "Neutral";
};

function getData() {
  return new Promise((resolve, reject) => {
    fetch("https://example.com/data")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed");
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

getRandomWordPromise()
  .then((word) => {
    return getSynonymsPromise(word);
  })
  .then((synonyms) => {
    console.log(synonyms);
  });

getRandomWordPromise()
  .then((word) => {
    return getSynonymsPromise(word);
  })
  .catch((error) => console.log(error))
  .then((synonyms) => {
    console.log(synonyms);
  })
  .catch((error) => console.log(error));

getRandomWordPromise()
  .then((word) => {
    return getSynonymsPromise(word);
  })
  .then((synonyms) => {
    return getSentimentPromise(synonyms[0]);
  })
  .then((sentiment) => {
    const sentimentDescription = getSentimentDescriptionPromise(sentiment);
    console.log(sentimentDescription);
  });

let word = null;
let synonyms = null;

getRandomWordPromise()
  .then((wordParam) => {
    word = wordParam;
    return getSynonymsPromise(word);
  })
  .then((synonymsParam) => {
    synonyms = synonymsParam;
    return getSentimentPromise(word);
  })
  .then((sentiment) => {
    const sentimentDescription = getSentimentDescriptionPromise(sentiment);
    console.log(
      `The word ${word} has synonyms ${synonyms} and a ${sentimentDescription} sentiment`,
    );
  });

// let word = null;

getRandomWordPromise()
  .then((wordParam) => {
    word = wordParam;
    let synonymsPromise = getSynonymsPromise(word);
    let sentimentPromise = getSentimentPromise(word);
    return Promise.all([synonymsPromise, sentimentPromise]);
  })
  .then((promiseResults) => {
    // The first item in the array is our synonyms array, and the second is the sentiment for the word we got.
    let [synonyms, sentiment] = promiseResults;
    const sentimentDescription = getSentimentDescriptionPromise(sentiment);
    console.log(
      `The word ${word} has a ${sentimentDescription} sentiment and synonyms ${synonyms}`,
    );
  });
