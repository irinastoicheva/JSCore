function solve() {
    let buttonAdd = document.getElementsByTagName('button')[0];
    buttonAdd.addEventListener('click', () => {
        let textInput = document.getElementsByTagName('input')[0].value.toLowerCase();
        if (textInput != '') {
            let text = '';
            for (let i = 0; i < textInput.length; i++) {
                if (i == 0) {
                    text += textInput[i].toUpperCase();
                } else {
                    text += textInput[i];
                }
            }
            let list = document.getElementsByTagName('ol')[0];
            let numberRow = textInput.charCodeAt(0) - 97;
            console.log(numberRow);
            let rows = list.children;
            if (rows[+numberRow].textContent == '') {
                rows[+numberRow].textContent = text;
            } else {
                rows[+numberRow].textContent += `, ${text}`;
            }
            document.getElementsByTagName('input')[0].value = '';
        }
    });
}