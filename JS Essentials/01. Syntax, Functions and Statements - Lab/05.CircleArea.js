function solve(input) {
    let typeOfInput = typeof input;
    if (typeOfInput == 'number') {
        console.log((Number(input) * Number(input) * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}

solve(true);