// const person = {
//   username: "Felicia",
//   introduce: function () {
//     console.log("Hi, I'm Felicia");
//   },
// };

// person.introduce(); //prints "Hi, I'm Felicia"

// Throws an error
// const person = {
//   username: "Felicia",
//   introduce: function(){
//     console.log("Hi, I'm " + username)
//   }
// }

// person.introduce() //throws an error

const counter = {
  count: 0,

  updateCounter: function () {
    this.count += 1;
  },
};

counter.updateCounter();
counter.updateCounter();
counter.updateCounter();

console.log(counter.count);

const cat = {
  makeNoise: function () {
    console.log(this.noise);
  },
  noise: "Meow!",
};

const dog = {
  makeNoise: cat.makeNoise,
  noise: "Woof!",
};

cat.makeNoise();
dog.makeNoise();

// const makeNoiseFunction = function () {
//   console.log(this.noise);
// };

// const cat = {
//   makeNoise: makeNoiseFunction,
//   noise: "Meow!",
// };

// const dog = {
//   makeNoise: makeNoiseFunction,
//   noise: "Woof!",
// };

// cat.makeNoise();
// dog.makeNoise();

const person = {
  username: "Felicia",
  introduce: function () {
    console.log("Hi, I'm " + this.username);
  },
};

person.introduce(); //prints "Hi, I'm Felicia"
