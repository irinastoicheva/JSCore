function solve(input) {
    let paragraphInput = document.getElementById('input');
    let arrParagraph = paragraphInput.textContent.split('. ');

    let outputSection = document.getElementById('output');

    for (let i = 0; i < arrParagraph.length; i += 3) {
        let createParagraph = document.createElement('p');
        createParagraph.textContent = arrParagraph[i] + '.';
        if (arrParagraph[i + 1] != null) {
            createParagraph.textContent += ' ' + arrParagraph[i + 1] + '.';
        }
        if (arrParagraph[i + 2] != null) {
            createParagraph.textContent += ' ' + arrParagraph[i + 2] + '.';
        }

        outputSection.appendChild(createParagraph);
    }
}
