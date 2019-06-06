function solve() {
    let input = document.getElementById('input').value.split('');
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '1') {
            sum++;
        }
    }
    if (sum / 10 > 0) {
        sum = sum / 10 + sum % 10
    }
    for (let i = 0; i < sum; i++) {
        input.pop();
        input.shift();
    }
    
    let result = '';

    for (let i = 0; i < input.length; i += 8) {
        let part = input.slice(i, i + 8);
        let binary = part.join('');
        let digit = parseInt(binary, 2);
        result += String.fromCharCode(digit);
    }

    let resultField = document.getElementById('resultOutput');
    resultField.textContent += result;
}