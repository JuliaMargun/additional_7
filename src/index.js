module.exports = function solveSudoku(matrix) {
	var matrixWithPossibleNumbers = matrix;

  for (var i = 0; i < 9; ++i) {
  	for (var j = 0; j < 9; ++j) {

  		var allNumbers = [1,2,3,4,5,6,7,8,9];
  		if (matrix[i][j] == 0)
  		{
  			for (var t = 0; t < 9; ++t) {
  				if (matrix[i][t] != 0)
  					allNumbers[matrix[i][t] - 1] = 0;
  			}
  			for (t = 0; t < 9; ++t) {
  				if (matrix[t][j] != 0)
  					allNumbers[matrix[t][j] - 1] = 0;
  			}

  			var remainCol = i % 3;
  			var remainRow = j % 3;
  			for (t = i - remainCol; t < i - remainCol + 3; ++t) {
  				for (var q = j - remainRow; q < j - remainRow + 3; ++q) {
  					if (matrix[t][q] != 0) {
  						allNumbers[matrix[t][q] - 1] = 0;
  					}
  				}
  			}
  			allNumbers.sort((a,b) => b - a);
  			q = 8;
  			while (allNumbers[q] == 0) {
  				allNumbers.pop();
  				--q;
  			}
  			matrixWithPossibleNumbers[i][j] = allNumbers;
  		}
  	}
  }
  	return matrixWithPossibleNumbers;
 }

