function solve() {
    let keyButtons = document.getElementsByClassName('keys')[0].children;
    let expressionOutputField = document.querySelector('#expressionOutput');
    for (let i = 0; i < keyButtons.length; i++) {
        let keyButton = keyButtons[i];
        keyButton.addEventListener('click', () => {
            switch (keyButton.textContent) {
                case '+': expressionOutputField.textContent += ` ${keyButton.textContent} `; break;
                case '-': expressionOutputField.textContent += ` ${keyButton.textContent} `; break;
                case 'x': expressionOutputField.textContent += ` ${keyButton.textContent} `; break;
                case '/': expressionOutputField.textContent += ` ${keyButton.textContent} `; break;
                case '=':
                    let text = expressionOutputField.textContent.split(' ');
                    let result = 'NaN';
                    let leftNumber = Number(text[0]);
                    let operator = text[1];
                    let rightNumber = Number(text[2]);
                    if (rightNumber != ''){
                        switch (operator) {
                            case '+': result = leftNumber + rightNumber; break;
                            case '-': result = leftNumber - rightNumber; break;
                            case 'x': result = leftNumber * rightNumber; break;
                            case '/': result = leftNumber / rightNumber; break;
                        }
                    }

                    document.querySelector('#resultOutput').textContent = result;
                    break;
                default:
                    expressionOutputField.textContent += keyButton.textContent;
                    break;
            }
        });
    }
    let buttonClear = document.getElementsByClassName('clear')[0];
    buttonClear.addEventListener('click', () => {
        expressionOutputField.textContent = '';
        document.querySelector('#resultOutput').textContent = '';
    });
}
