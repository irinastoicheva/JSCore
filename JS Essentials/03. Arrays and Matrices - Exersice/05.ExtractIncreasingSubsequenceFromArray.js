function solve(arr) {
    arr = arr.map(Number);
    let result = [arr[0]];
    let biggestNumber = [arr[0]];

    for (let i = 1; i < arr.length; i++) {

        let currentNumber =arr[i];

        if (currentNumber >= biggestNumber) {
            result.push(currentNumber);
            biggestNumber = currentNumber;
        }
    }
    console.log(result.join('\n'));
}

solve([20,
    3,
    2,
    15,
    6,
    1]
);