function solve() {
    let menu = document.querySelector('#selectMenuTo');

    let binaryOption = document.createElement('option');
    binaryOption.text = 'Binary';
    binaryOption.value = 'binary';
    menu.add(binaryOption);

    let hexOption = document.createElement('option');
    hexOption.text = 'Hexadecimal';
    hexOption.value = 'hexadecimal';
    menu.add(hexOption);

    let btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', () => {

        let number = document.querySelector('#input');
        let numberValue = Number(number.value);

        let typeConvert = menu.value;

        let result = 0;

        if (typeConvert == 'binary') {
            result = numberValue.toString(2);
        } else if (typeConvert == 'hexadecimal') {
            result = numberValue.toString(16).toUpperCase();
        }

        let outputField = document.querySelector('#result');
        outputField.value = result;
    });

}