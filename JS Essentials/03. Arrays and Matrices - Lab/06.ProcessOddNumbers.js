function solve(arr) {
    let output = [];
    arr.map((el, index) => {
        if (index % 2 == 1) {
            output.push(el * 2);
        }
    });
    console.log(output.reverse().join(' '));
}

solve([10, 15, 20, 25]);