function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i+=2) {
        if (obj[arr[i]] == null){
         obj[arr[i]] = Number(arr[i+1]);
        }
        else {
            obj[arr[i]] += Number(arr[i+1]);
        }
    }
    console.log(JSON.stringify(obj));
}

solve(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]);