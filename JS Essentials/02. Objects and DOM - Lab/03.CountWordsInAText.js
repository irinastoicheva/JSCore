function solve(input) {
    let inputArr = input.toString().split(/[\W+]/);
    let arr = [];
    for (let i = 0; i <inputArr.length ; i++) {
        if (inputArr[i] != ''){
            arr.push(inputArr[i]);
        }
    }
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == null){
            obj[arr[i]] = Number(1);
        }
        else {
            obj[arr[i]] += Number(1);
        }
    }
    console.log(JSON.stringify(obj));
}

solve("Far too slow, you're far too slow.");