function solve() {
    let word = document.querySelector('#word').value;
    let text = JSON.parse(document.querySelector('#text').value);
    console.log(text);

    let resultField = document.querySelector('#result');
    let arr = text[0].split(' ');
    let wordReplace = arr[2];
    text.map(function (part) {
        let pattern = new RegExp(wordReplace, 'ig');
        part = part.replace(pattern, word);
        let p = document.createElement('p');
        p.textContent = part;
        resultField.appendChild(p);
        console.log(part);
    });


}