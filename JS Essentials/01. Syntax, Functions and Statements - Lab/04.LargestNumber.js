function solve(firstNumber, secondNumber, thirdNumber) {
    let result = Math.max(Number(firstNumber), Number(secondNumber), Number(thirdNumber));
    console.log(`The largest number is ${result}.`);
}

solve(1, 2, 3);