function vector(row, column) {
  let vector = [];

  for (let i = 0; i < row; i++) {
    vector[i] = [];
    for (let j = 0; j < column; j++) {
      vector[i][j] = "*";
    }
  }

  return vector;
}

console.log(vector(3, 4))
