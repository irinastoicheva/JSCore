function solve(capacity, arr) {
    let currentPersons = 0;
    let train = [];
    for (let i = 0; i < arr.length; i++) {
        currentPersons += Number(arr[i]);
        let personsInWagon = 0;
        if (currentPersons <= capacity) {
            personsInWagon = currentPersons;
            currentPersons = 0;
        } else {
            personsInWagon = capacity;
            currentPersons -= capacity;
        }
        train.push(personsInWagon);
    }

    let trainArr = JSON.stringify(train.join(', '));
    let trainOutput = JSON.parse(trainArr);
    console.log(`[ ${trainOutput} ]`);
    if (currentPersons > 0) {
        console.log(`Could not fit ${currentPersons} passengers`);
    } else {
        console.log(`All passengers aboard`);
    }
}

solve(10, [9, 39, 1, 0, 0]);