const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};

const keys = Object.keys(dictionary);
let str = "";

for (let i = 0; i < keys.length; i++) {
  const arr = dictionary[keys[i]];

  str += "Words that begin with  " + keys[i] + ":\n";

  for (let j = 0; j < arr.length; j++) {
    const element = arr[j];
    str += element + "\n";
  }
}

console.log(str);
