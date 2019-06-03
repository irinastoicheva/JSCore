function solve(matrix) {
    let isMagic = true;
    let sum = matrix[0].reduce((a, b) => a + b);
    checkIsMagicRows();
    matrix = rotate();
    checkIsMagicRows();
    console.log(isMagic);

    function checkIsMagicRows() {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i].reduce((a, b) => a + b) !== sum) {
                isMagic = false;
            }
        }
    };

    function rotate() {
        let result = [];
        for (let i = 0; i < matrix[0].length; i++) {
            let row = matrix.map(e => e[i]).reverse();
            result.push(row);
        }
        return result;
    };
}
solve([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]]

);