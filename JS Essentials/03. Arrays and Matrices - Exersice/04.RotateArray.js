function solve(arr) {
    let number = Number(arr.pop());
    for (let i = 0; i < number % arr.length ; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);