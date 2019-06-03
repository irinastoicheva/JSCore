function solve(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'add': output.push(i+1); break;
            case 'remove': output.pop(); break;
        }
    }
    if (output.length === 0){
        console.log('Empty');
    }else{
        console.log(output.join('\n'));
    }
}

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);