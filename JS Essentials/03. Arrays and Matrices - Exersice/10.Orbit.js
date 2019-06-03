function solve(arr) {
    let rows = arr[0];
    let cols = arr[1];

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    let starRow = arr[2];
    let starCol = arr[3];
    let numberOfOrbits = Math.max(rows - starRow, cols - starCol);
    let number = numberOfOrbits;
    while (numberOfOrbits >= 0) {
        for (let i = starRow - numberOfOrbits; i <= starRow + numberOfOrbits; i++) {
            for (let j = starCol - numberOfOrbits; j <= starCol + numberOfOrbits; j++) {
                if (i >= 0 && i < matrix.length && j >= 0 && j < matrix[i].length) {
                    matrix [i][j] = numberOfOrbits + 1;
                }
            }
        }
        numberOfOrbits--;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

solve([4, 4, 0, 0]);