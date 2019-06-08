function solve(matrix) {
    let currentBanknotesInATM = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        if (row.length > 2) {
            insert(row);
        } else if (row.length === 2) {
            withdraw(row);
        } else if (row.length === 1) {
            let count = currentBanknotesInATM.filter(x => x === +row[0]).length;
            console.log(`Service Report: Banknotes from ${row[0]}$: ${count}.`);
        }
    }

    function withdraw(arr) {
        let balanceOfAccount = +arr[0];
        let moneyToDraw = +arr[1];
        let difference = arr.reduce((a, b) => +a - +b);
        if (sumArr(currentBanknotesInATM) < moneyToDraw) {
            console.log(`ATM machine is out of order!`);
        } else if (difference < 0) {
            console.log(`Not enough money in your account. Account balance: ${balanceOfAccount}$.`);
        } else {
            currentBanknotesInATM = currentBanknotesInATM.sort((a, b) => b - a, 0);
            let sum = 0;
            for (let i = 0; i < currentBanknotesInATM.length; i++) {
                let currentBanknote = +currentBanknotesInATM[i];
                if (currentBanknote <= moneyToDraw - sum) {
                    sum += currentBanknote;
                    currentBanknotesInATM.splice(i, 1);
                    i--;
                }
                if (moneyToDraw === sum) {
                    break;
                }
            }
            console.log(`You get ${sum}$. Account balance: ${balanceOfAccount - sum}$. Thank you!`);
        }
    }

    function sumArr(arr) {
        return arr.reduce((a, b) => a + b);
    }

    function insert(arr) {
        currentBanknotesInATM.push(...arr);
        let sum = sumArr(arr);
        let sumInATM = sumArr(currentBanknotesInATM);
        console.log(`Service Report: ${sum}$ inserted. Current balance: ${sumInATM}$.`);
    }
}

solve([[20, 5, 100, 20, 1],
        [457, 25],
        [1],
        [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
        [20, 85],
        [5000, 4500],
    ]
);