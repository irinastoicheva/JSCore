function solve(numberOfSteps, lengthOfStep, speed) {
    let lengthToUniversity = numberOfSteps * lengthOfStep / 1000;
    let grossTimeToUniversity = lengthToUniversity / speed;
    let additionalMinutes = Math.floor(lengthToUniversity / 0.5);
    let netTimeToUniversity = grossTimeToUniversity + additionalMinutes / 60;
    let hours = Math.floor(netTimeToUniversity);
    let minutes = Math.floor((netTimeToUniversity - hours) * 60);
    let seconds = Math.round(((netTimeToUniversity - hours) * 60 - minutes) * 60).toFixed(0);

    console.log(`${hours.toString().padStart(2, 0)}:${
        minutes.toString().padStart(2, 0)}:${
        seconds.toString().padStart(2, 0)}`);
}

solve(2564, 0.70, 5.5);