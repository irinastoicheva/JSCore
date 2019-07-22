const input = [2, 3, 10, 5];

function aggregate(arr) {
    console.log('Sum = ', reducer(arr, (a, b)  => a + b, 0));
    console.log('Min = ', reducer(arr, (a, b) => Math.min(a, b), Number.MAX_SAFE_INTEGER));
    console.log('Max = ', reducer(arr, (a, b) => Math.max(a, b), Number.MIN_SAFE_INTEGER));
    console.log('Product = ', reducer(arr, (a, b) => a * b, 1));
    console.log('Join = ', reducer(arr, (a, b) => `${a}${b}`, ''));

    function reducer(arr, operator, initial) {
        let result = initial;

        for (let element of arr) {
            result = operator(result, element)
        }

        return result;
    }
}



aggregate(input);

