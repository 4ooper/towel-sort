
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let new_array = [];
    for(i=0;i<matrix.length;i++)
            for(j=0;j<matrix[i].length;j++)
                    new_array += matrix[i][j] + ' ';
  return new_array;
}
