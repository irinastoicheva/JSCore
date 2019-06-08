function solve(input) {
let totalSum = +0;
    for (let i = 0; i < input.length; i++) {
        let arr = input[i];
        let token = arr.split(', ');
        let money = Number(token[0]);
        let typeDrink = token[1];
        let sum = Number(0);

        if (typeDrink === 'coffee') {
            if (token[2] == 'caffeine') {
                sum += +0.8;
            } else if (token[2] == 'decaf') {
                sum += +0.9;
            }
        }else if(typeDrink === 'tea'){
            sum += +0.8;
        }

        if (token[token.length - 2] === 'milk') {
            sum += +0.1;
        }
        if (token[token.length - 1] > 0 && token[token.length - 1] <= 5){
            sum += +0.1;
        }

        if (money >= sum){
            console.log(`You ordered ${typeDrink}. Price: ${sum.toFixed(2)}$ Change: ${(money - sum).toFixed(2)}$`);
            totalSum += sum;
        }else{
            console.log(`Not enough money for ${typeDrink}. Need ${(sum - money).toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${totalSum.toFixed(2)}$`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
);