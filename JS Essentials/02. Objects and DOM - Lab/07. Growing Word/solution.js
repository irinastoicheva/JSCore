function growingWord() {
    let text = document.querySelector('#exercise p');
    let color = text.style.color;
    switch (color) {
        case '': text.style.color = 'blue'; break;
        case 'blue': text.style.color = 'green'; break;
        case 'green': text.style.color = 'red'; break;
        case 'red': text.style.color = 'blue'; break;
    }

    let sizeArr = text.style.fontSize.split('px');
    let size = Number(sizeArr[0]);
    switch (size) {
        case 0: text.style.fontSize = `${2}px`; break;
        default:
            text.style.fontSize = `${size * 2}px`; break;
    }
}
