function solve(input) {
    let arr = [];
    let word = '';
    let counter = -1;
    for (let i = 0; i < input.length; i++) {

        if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90
            || input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 122
            || input[i].charCodeAt(0) == 95 || input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57) {
            word += input[i].toUpperCase();
        } else {
            if (word != '') {
                counter++;
                arr[counter] = word;
                word = '';
            }
        }
    }
    if (word != '') {
        arr[counter + 1] = word;
    }
    console.log(arr.join(', '));
}

solve('FUNCTIONS, IN, JS, CAN, BE, NESTED ,     I, E, HOLD, OTHER, FUNCTIONS');