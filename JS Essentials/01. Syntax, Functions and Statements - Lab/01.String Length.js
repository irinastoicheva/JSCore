function solve(a, b, c) {
    let first = a.length;
    let second = b.length;
    let third = c.length;
    let sum = first + second + third;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}
solve('Ana', 'Pesho', 'Gosho');