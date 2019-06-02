function solve(arr) {
    arr.map((element) => {return Number(element)});
    let outputArr = [];
    for (let element of arr) {
        if (element >= 0){
            outputArr.push(element);
        } else {
            outputArr.unshift(element);
        }
    }
    for (let element of outputArr) {
        console.log(element);
    }
}
solve([7, -2, 8, 9]);
