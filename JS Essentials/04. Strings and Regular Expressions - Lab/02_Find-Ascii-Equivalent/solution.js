function solve() {
    let inputText = document.querySelector('#text').value.split(' ');
    let numbers = [];
    let words = [];

    inputText.map(function (part) {
        if (parseInt(part)) {
            numbers.push(part);
        } else {
            words.push(part);
        }
    });

    let resultField = document.querySelector('#result');

    for (let i = 0; i < words.length; i++) {
       words[i] = Array.from(words[i]).map(function(l){return l.charCodeAt(0)});
       let p = document.createElement('p');
       p.textContent = words[i].join(' ');
       resultField.appendChild(p);
    }

    numbers = numbers.map(l => String.fromCharCode(l));
    let p = document.createElement('p');
    p.textContent = numbers.join('');
    resultField.appendChild(p);
}