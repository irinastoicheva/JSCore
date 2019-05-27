function solve(arr) {
    let output = [];
    for (let i = 1; i < arr.length; i++) {
        let input = arr[i].split(/[ ]*[|][ ]*/);
        let token = [];
        for (let j = 0; j < input.length; j++) {
            if (input[j] != '') {
                token.push(input[j]);
            }
        }

        let obj = {
            Town: token[0],
            Latitude: Number(token[1]),
            Longitude: Number(token[2])
        }
        output.push(obj);
    }
    console.log(JSON.stringify(output))
}

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);