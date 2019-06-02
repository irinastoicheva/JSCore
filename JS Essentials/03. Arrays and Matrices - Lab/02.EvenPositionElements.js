function solve(arr) {
let newArr = [];
    arr.map((e, index) => {
    if (index % 2 == 0) {
      newArr.push(e);
    }
    });
    return newArr.join(' ');
}
solve(['20', '30', '40']);