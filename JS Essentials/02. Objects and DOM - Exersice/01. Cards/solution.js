function solve() {
    let firstCards = Array.from(document.getElementById('player1Div').children);
    for (let card of firstCards) {
        card.addEventListener('click', clickCard);
    }
    let firstCard;
    let firstCardValue = -1;

    let secondCards = Array.from(document.getElementById('player2Div').children);
    for (let card of secondCards) {
        card.addEventListener('click', clickCard);
    }
    let secondCard;
    let secondCardValue = -1;

    let result = document.querySelector('#result').children;
    let firstCardResult = result[0];
    let secondCardResult = result[2];
    let history = document.querySelector('#history');

    function clickCard(c) {
        clearResult();

        let card = c.target;
        card.setAttribute('src', 'images/whiteCard.jpg');
        if (card.parentElement.id == 'player1Div') {
            firstCard = card;
            firstCardValue = Number(card.getAttribute('name'));
            firstCardResult.textContent = firstCardValue;
        } else {
            secondCard = card;
            secondCardValue = Number(card.getAttribute('name'));
            secondCardResult.textContent = secondCardValue;
        }

        if (firstCardValue != -1 && secondCardValue != -1) {
            if (firstCardValue > secondCardValue) {
                firstCard.style.border = '2px solid green';
                secondCard.style.border = '2px solid red';

            } else {
                firstCard.style.border = '2px solid red';
                secondCard.style.border = '2px solid green';
            }

            history.textContent += `[${firstCardValue.toString()} vs ${secondCardValue.toString()}] `;
        }

        function clearResult() {
            if (firstCardValue != -1 && secondCardValue != -1) {
                firstCard = undefined;
                firstCardValue = -1;
                secondCard = undefined;
                secondCardValue = -1;
                result[0].textContent = '';
                result[2].textContent = '';
            }
        }
    }
}
