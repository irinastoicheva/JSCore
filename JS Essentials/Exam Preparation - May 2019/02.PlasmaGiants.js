function solve(arr, number) {
    let arr1 = arr.slice(0, (arr.length) / 2);
    let arr2 = arr.slice((arr.length) / 2);

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    while (arr1.length > 0 && arr2.length > 0) {
        firstPlayerPoints += arr1.splice(0, number).reduce((a, b) => a * b);
        secondPlayerPoints += arr2.splice(0, number).reduce((a, b) => a * b);
    }

    let damage = Math.min(...arr);
    let minPoints = Math.max(...arr);

    let counter = 1;
    if (damage !== 0) {
        while (firstPlayerPoints > minPoints && secondPlayerPoints > minPoints) {
            firstPlayerPoints -= damage;
            secondPlayerPoints -= damage;
            counter++;
        }
    };

    if (firstPlayerPoints == secondPlayerPoints) {
        console.log(`Its a draw ${firstPlayerPoints} - ${secondPlayerPoints}`);
    } else if (firstPlayerPoints > secondPlayerPoints) {
        console.log(`First Giant defeated Second Giant with result ${firstPlayerPoints} - ${secondPlayerPoints} in ${counter} rounds`);
    } else {
        console.log(`Second Giant defeated First Giant with result ${secondPlayerPoints} - ${firstPlayerPoints} in ${counter} rounds`);
    }
}

solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);