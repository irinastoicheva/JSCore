function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    let distanceFirstPoint = Math.sqrt(x1* x1 + y1 * y1);
    if (distanceFirstPoint != Math.ceil(distanceFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }

    let distanceSecondPoint = Math.sqrt(x2* x2 + y2 * y2);
    if (distanceSecondPoint != Math.ceil(distanceSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }

    let distanceBetweenPoints = Math.sqrt( (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    if (distanceBetweenPoints != Math.ceil(distanceBetweenPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
    else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
}

solve([2, 1, 1, 1]);