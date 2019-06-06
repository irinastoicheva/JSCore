function solve() {
    let text = document.querySelector('#text').value;
    let number = Number(document.querySelector('#number').value);

    if (text.length % number !== 0) {
        text += text.substr(0, number - (text.length % number));
    }

    let result = [];

    for (let i = 0; i < text.length; i += number) {
        result.push(text.substr(i, number));
    }
    console.log(result);
    let resultField = document.querySelector('#result');
    resultField.textContent += result.join(' ');
}