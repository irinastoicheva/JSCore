function solve() {
    let questions = document.getElementsByTagName('h2');
    let correctAnswer = 0;
    let incorrectAnswer = 0;

    let leftButtons = document.getElementsByClassName('quiz-answer low-value');
    let leftButton = leftButtons[0];
    leftButton.addEventListener('click', () => {
        correctAnswer++;
        second();
    });

    let rightButtons = document.getElementsByClassName('quiz-answer high-value');
    let rightButton = rightButtons[0];
    rightButton.addEventListener('click', () => {
        incorrectAnswer++;
        second();
    });

    function second() {
        let section2 = document.getElementsByTagName('section')[1];
        let section1 = document.getElementsByTagName('section')[0];
        section1.style.display = "none";
        section2.style.display = 'block';

        let leftButton1 = leftButtons[1];
        leftButton1.addEventListener('click', () => {
            incorrectAnswer++;
            third();
        });

        let rightButton1 = rightButtons[1];
        rightButton1.addEventListener('click', () => {
            correctAnswer++;
            third();
        });

        function third() {
            let section3 = document.getElementsByTagName('section')[2];
            section2.style.display = "none";
            section3.style.display = 'block';
            let leftButton2 = leftButtons[2];
            leftButton2.addEventListener('click', () => {
                correctAnswer++;
                theEnd();
            });

            let rightButton2 = rightButtons[2];
            rightButton2.addEventListener('click', () => {
                incorrectAnswer++;
                theEnd();
            });

            function theEnd() {
                section3.style.display = 'none';

                let oldParent = document.getElementById('results');
                let oldChild = document.getElementsByClassName('results-inner')[0];
                let h1 = oldChild.children[0];
                let wrapper = document.createElement('div');
                oldParent.appendChild(wrapper);
                wrapper.appendChild(oldChild);

                if (correctAnswer === 3) {
                    h1.textContent = "You are recognized as top JavaScript fan!";
                } else {
                    h1.textContent = `You have ${correctAnswer} right answers`;
                }

                oldParent.style.display = 'block';

            }
        }
    }
}