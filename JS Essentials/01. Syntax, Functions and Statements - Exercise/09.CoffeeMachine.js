function solve(arr) {
    let sum = Number(0);
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i];
        let arrOfWords = token.split(/[,][ ]/);

        let price = Number(0);
        let money = Number(arrOfWords[0]);
        let typeOfDrink = arrOfWords[1];
        if (typeOfDrink === 'coffee') {
            if (arrOfWords[2] === 'caffeine') {
                price += 0.80;
            }
            else if (arrOfWords[2] === 'decaf'){
                price += 0.90;
            }
        }
        else if (typeOfDrink === 'tea') {
            price += 0.80;
        }
        if (arrOfWords[arrOfWords.length - 2] === 'milk') {
            price += 0.10;
        }
        if (arrOfWords[arrOfWords.length - 1] > 0 && arrOfWords[arrOfWords.length - 1] <= 5) {
            price += Number(0.10);
        }

        if (money >= price) {
            console.log(`You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${(money - price).toFixed(2)}`);
            sum += price;
        }
        else {
            console.log(`Not enough money for ${typeOfDrink}. Need $${(price - money).toFixed(2)} more.`);
        }
    }
    console.log(`Income Report: $${sum.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);