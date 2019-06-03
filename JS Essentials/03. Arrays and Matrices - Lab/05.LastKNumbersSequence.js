function solve(k, n) {
    let arr = [1];

    for (let i = 1; i < k ; i++) {
        let token;
        if (i - n < 0) {
            token = arr.slice(0, i);
        }else {
            token = arr.slice(i-n, i);
        }
       arr.push(token.reduce((a,b) => a+b, 0));
    }
    console.log(arr.join(' '));
}

solve(6, 3);