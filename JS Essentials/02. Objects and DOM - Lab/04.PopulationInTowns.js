function solve(input) {
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        let arr = input[i].split(' <-> ');
        if (obj[arr[0]] == null) {
            obj[arr[0]] = Number(arr[1]);
        } else {
            obj[arr[0]] += Number(arr[1]);
        }
    }
    let objString = JSON.stringify(obj);
    let array = objString.split(/[^ \w]+/);
    let totalArray = [];
    for (let i = 0; i < array.length ; i++) {
        if (array[i] != '') {
            totalArray.push(array[i]);
        }
    }

    for (let i = 0; i <totalArray.length ; i+= 2) {
        console.log(`${totalArray[i]} : ${totalArray[i+1]}`)
    }
}

solve(["Istanbul <-> 100000", "Honk Kong <-> 2100004", "Jerusalem <-> 2352344", "Mexico City <-> 23401925", "Istanbul <-> 1000"]);