function solve(firstNumber, secondNumber, operator) {
    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let oper = operator;
    let result;
    if (oper === '*') (result = a * b);
    if (oper === '+') (result = a + b);
    if (oper === '-') (result = a - b);
    if (oper === '/') (result = a / b);
    if (oper === '**') (result = a ** b);
    if (oper === '%') (result = a % b);
    console.log(result);
}
solve(2, 3, '**');