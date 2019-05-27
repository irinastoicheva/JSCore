function solve(arr) {
    let number = Number(arr[0]);
    for (let i = 1; i < 6; i++) {
        let operaton = arr[i];

        switch (operaton) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= number * 0.2; break;
        }

        console.log(number);
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);