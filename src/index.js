
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];

  if (!matrix) {
    return arr;
  }

    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        matrix[i] = matrix[i].sort((a, b) => b - a);
      }

    }

    for (let z =0; z<matrix.length; z++) {
      
          arr = arr.concat(matrix[z]) ;
    }

  return arr;
}
