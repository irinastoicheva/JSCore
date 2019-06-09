function solve(days) {
    let sumCaffeine = 0;
    for (let i = 1; i <= days ; i++) {
        sumCaffeine += +4.5 * +40;
        sumCaffeine += +5 * +8;
        sumCaffeine += +10.5 * +20;
        if (i % 5 === 0){
            sumCaffeine += +15 * +30;
        }
        if (i % 9 === 0){
            sumCaffeine += +10 * +8;
            sumCaffeine += +10 * +30;
        }
    }
    console.log(`${sumCaffeine} milligrams of caffeine were consumed`);
}
solve(8);