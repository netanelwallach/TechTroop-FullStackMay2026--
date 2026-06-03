// const sentence =
//   "This is a sentence that i a repeateble sentence to check sentence occurrences";

const sentence = "the quick brown fox jumps over the lazy dog the fox";

const words = sentence.split(" ");

const occurrences = {};
for (const word of words) {
  occurrences[word] = (occurrences[word] || 0) + 1;
  //   if (occurrences[word]) {
  //     occurrences[word] += 1;
  //   } else {
  //     occurrences[word] = 1;
  //   }
}
console.log(occurrences);

const occurrencesReduced = words.reduce((counts, word) => {
  counts[word] = (counts[word] || 0) + 1;
  return counts;
}, {});

console.log(occurrencesReduced);

function add(num) {
  function innerAdd(innerNum) {
    return num + innerNum;
  }
  return innerAdd;
}

console.log(add(5)(2));
console.log(add(19)(2));
