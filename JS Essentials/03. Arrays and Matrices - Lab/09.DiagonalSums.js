function solve(matrix) {
    let leftDiagonal = [];
    let rightDiagonal = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === j){
                leftDiagonal.push(matrix[i][j]);
            } 
            if (i + j === matrix.length - 1){
                rightDiagonal.push(matrix[i][j]);
            }
        }
    }
    let output = [];
    output.push(leftDiagonal.reduce((a, b) => a + b));
    output.push(rightDiagonal.reduce((a, b) => a + b));
    console.log(output.join(' '));
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);