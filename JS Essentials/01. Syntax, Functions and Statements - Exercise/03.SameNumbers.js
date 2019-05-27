function solve(number) {
    number = Number(number);
    let firstInput = true;
    let firstNumber = Math.floor(number % 10);
    let sum = Number(0);
    while (number > 0){
        let num = Math.floor(number % 10);
        if (num != firstNumber){
            firstInput = false;
        }
        sum += num;
        number = Math.floor(number / 10);
    }

    console.log(firstInput);
    console.log(Math.floor(sum));
}

solve(2272);