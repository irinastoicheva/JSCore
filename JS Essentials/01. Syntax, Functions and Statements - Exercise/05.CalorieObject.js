function solve(arr) {
let output = {};
    for (let i = 0; i < arr.length; i+=2) {
       output[arr[i]] = arr[i+1];
    }

    console.log(output);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);