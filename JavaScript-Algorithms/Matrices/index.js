let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let matrix2 = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];

function generateMatrix(numRows, numColumns) {
  let matrix = [];
  let num = 1;

  for (let r = 0; r < numRows; r++) {
    matrix.push([]);
    for (let c = 0; c < numColumns; c++) {
      matrix[r].push(num++);
    }
  }
  return matrix;
}

console.log(generateMatrix(3, 4));

matrix = generateMatrix(3, 4);
console.log(matrix[1][2]); //prints 7

function printMatrix(matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      console.log(matrix[r][c]);
    }
  }
}

printMatrix(matrix);

function get(row, column) {
  return matrix[row][column];
}

console.log(get(1, 2));

function printNiceMatrix(matrix) {
  for (let r = 0; r < matrix.length; r++) {
    let str = "";
    for (let c = 0; c < matrix[r].length; c++) {
      str += matrix[r][c] + "\t";
    }
    console.log(str);
  }
}

printNiceMatrix(matrix);

function printColumn(matrix, colNum) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][colNum]);
  }
}

printColumn(matrix, 1); //prints 2, 6, 10 on separate lines

function printRow(matrix, rowNum) {
  let arr = matrix[rowNum];
  let row = "";
  for (let i = 0; i < arr.length; i++) {
    row += arr[i] + ", ";
  }
  row = row.slice(0, -2);
  console.log(row);
}

printRow(matrix, 1);

// function printRow(matrix, rowNum) {
//     for (let i = 0; i < matrix[rowNum].length; i++) {
//         console.log(matrix[rowNum][i])
//     }
// }

// printRow(matrix, 1);

function alter(matrix, row, column, value) {
  matrix[row][column] = value;
}

alter(matrix, 1, 3, 174);
printNiceMatrix(matrix);
