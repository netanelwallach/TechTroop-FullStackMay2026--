const prompt = require("prompt-sync")({ sigint: true });

let score = 0;
const quizData = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What year is it?", answer: "2026" },
  { question: "What is the largest ocean on Earth?", answer: "Pacific" },
];

for (let i = 0; i < quizData.length; i++) {
  console.log(`Question ${i + 1}: ${quizData[i].question}`);
  const userAnswer = prompt("> ");

  if (userAnswer.trim().toLowerCase() === quizData[i].answer.toLowerCase()) {
    console.log("Correct!\n");
    score++;
  } else {
    console.log(`Incorrect. The correct answer was: ${quizData[i].answer}\n`);
  }
}

console.log(`Final Score: ${score}/${quizData.length} correct!`);
