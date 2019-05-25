function solve(number) {
    for (let i = 1; i <= Number(number); i++) {
        for (let j = 1; j <= Number(number); j++) {
            process.stdout.write('* ');
        }
        console.log();
    }
}

solve(5);