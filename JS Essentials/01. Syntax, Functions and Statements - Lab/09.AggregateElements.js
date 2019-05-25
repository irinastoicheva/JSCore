function solve(arr) {
let sum1 = Number(0);
let sum2 = Number(0);
let sum3 = '';
    for (let i = 0; i < arr.length ; i++) {
        sum1 += arr[i];
        sum2 += 1/arr[i];
        sum3 += arr[i];
    }
    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
}

solve([1, 2, 3]);