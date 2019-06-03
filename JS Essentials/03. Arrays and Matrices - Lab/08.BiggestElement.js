function solve(matrix) {
let biggestElementInRows = [];
    for (let i = 0; i < matrix.length; i++) {
        let sortedRow = matrix[i].sort((a,b) => a - b);
        biggestElementInRows.push(sortedRow.pop());
    }
    biggestElementInRows.sort((a,b) => a - b);
    console.log(biggestElementInRows.pop());
}
solve([[20, 50, 10],
    [8, 33, 145]]);