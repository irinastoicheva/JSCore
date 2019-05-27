function solve(arr) {
    let obj = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let output;
    let overLimit = arr[0] - obj[arr[1]];
    if (overLimit > 0 && overLimit <= 20) {
        output = "speeding";
    }
    else if (overLimit > 20 && overLimit <= 40) {
        output = "excessive speeding";
    }
    else if (overLimit > 40) {
        output = "reckless driving";
    }
     else {
        output = '';
    }
    console.log(output);
}

solve([21, 'residential']);