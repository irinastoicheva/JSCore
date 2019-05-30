function solve() {
    let btn = document.querySelector('#searchBtn');
    btn.addEventListener('click', () => {
        let insertField = document.querySelector('#searchField');
        let insertText = insertField.value.toLowerCase();
        let tableBody = document.getElementsByTagName('tbody')[0];
        let rowsInTableBody = tableBody.children;
        for (let i = 0; i < rowsInTableBody.length; i++) {
            let row = rowsInTableBody[i];
            let cellInRow = row.children;
            for (let j = 0; j < cellInRow.length; j++) {
                let cell = cellInRow[j];
                let cellText = cell.textContent.toLowerCase();
                if (cellText.includes(insertText)) {
                    row.classList.add('select');
                    insertField.value = '';
                }
            }
        }
    });
}