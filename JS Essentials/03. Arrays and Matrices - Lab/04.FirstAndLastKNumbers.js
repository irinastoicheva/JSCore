function solve(arr) {
    let number = Number(arr.shift());
    console.log(arr.slice(0, number).join(' '));
    console.log(arr.reverse().slice(0, number).reverse().join(' '));
}

solve([2,
    7, 8, 9]
);