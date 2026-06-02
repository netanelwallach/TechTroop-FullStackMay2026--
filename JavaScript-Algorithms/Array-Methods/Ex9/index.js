let studentScores = [
  92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81,
];

let letterGrades = studentScores
  .map((s) => {
    if (s < 70) {
      return "F";
    } else if (s < 80) {
      return "C";
    } else if (s < 90) {
      return "B";
    } else {
      return "A";
    }
  })
  .reduce(
    (counts, grade) => {
      counts[grade] += 1;
      return counts;
    },
    { A: 0, B: 0, C: 0, F: 0 },
  );

console.log(letterGrades);
