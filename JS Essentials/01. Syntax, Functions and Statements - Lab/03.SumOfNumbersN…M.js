function solve(firstNumber, secondNumber) {
    let sum = Number(0);
    for (let i = Number(firstNumber); i <= Number(secondNumber); i++) {
        sum += i;
    }
    console.log(sum);
}

solve(-8, 20);