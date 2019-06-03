function solve(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }
    let number = 0;
    let minValue = Math.min(rows, cols);
    for (let i = 0; i < minValue * 2; i++) {
        matrix = addElementsInFirstEmptyRow();
        matrix = rotate();
    }
    for (let i = 0; i < 3; i++) {
        if (matrix[0][0] != 1) {
            matrix = rotate();
        }
    }

    function addElementsInFirstEmptyRow() {
        let containsEmptyElement = false;
        for (let i = 0; i < matrix.length; i++) {
            if (containsEmptyElement) {
                break;
            }
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 0) {
                    containsEmptyElement = true;
                    matrix[i][j] = ++number;
                }
            }
        }
        return matrix;
    }

    function rotate() {
        let result = [];
        for (let i = 0; i < matrix[0].length; i++) {
            let row = matrix.map(e => e[i]);
            result.unshift(row);
        }
        return result;
    };

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

solve(6, 3);