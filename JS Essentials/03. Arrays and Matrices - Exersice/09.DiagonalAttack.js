function solve(matrix) {
    let leftDiagonal = [];
    let rightDiagonal = [];

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ');
        for (let j = 0; j < matrix[i].length; j++) {
            if (i + j === matrix.length - 1) {
                rightDiagonal.push(Number(matrix[i][j]));
            }
            if (i === j) {
                leftDiagonal.push(Number(matrix[i][j]));
            }
        }
    }

    let sumLeftDiagonal = leftDiagonal.reduce((a, b) => a + b);
    let sumRightDiagonal = rightDiagonal.reduce((a, b) => a + b);

    if (sumLeftDiagonal === sumRightDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = sumRightDiagonal;
                if (i + j === matrix.length - 1) {
                    matrix[i][j] = rightDiagonal.shift();
                }
                if (i === j) {
                    matrix[i][j] = leftDiagonal.shift();
                }
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);