function solve() {

    let checkboxes = document.getElementsByTagName('input');
    checkboxes[0].disabled = false;

    let createButton = document.getElementsByTagName('button')[0];
    createButton.addEventListener('click', create);

    function create() {
        let furnitureList = JSON.parse(document.getElementsByTagName('textarea')[0].value);
        for (let i = 0; i < furnitureList.length; i++) {
            let furniture = furnitureList[i];
            let table = document.getElementsByTagName('table')[0];
            let row = table.insertRow();

            let cell = row.insertCell();
            let img = document.createElement('img');
            img.setAttribute('src', furniture['img']);
            cell.appendChild(img);

            cell = row.insertCell();
            let name = document.createElement('p');
            name.textContent = furniture.name;
            cell.appendChild(name);

            cell = row.insertCell();
            let price = document.createElement('p');
            price.textContent = furniture['price'];
            cell.appendChild(price);

            cell = row.insertCell();
            let decFactor = document.createElement('p');
            decFactor.textContent = furniture['decFactor'];
            cell.appendChild(decFactor);

            cell = row.insertCell();
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            cell.appendChild(checkbox);
        }
        createButton.disabled = true;
    }

    checkboxes = document.getElementsByTagName('input');
    for (let i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes[i];
        checkbox.addEventListener('click', () => {
            checkbox.checked = true;
        });
    }

    let buyButton = document.getElementsByTagName('button')[1];
    buyButton.addEventListener('click', buy);

    function buy() {
        let furnName = [];
        let totalPrice = 0;
        let decFactor = 0;
        let counter = 0;

        let furniture = Array.from(document.getElementsByTagName('tr'));
        for (let i = 1; i < furniture.length; i++) {
            if (furniture[i].children[4].children[0].checked == true) {
                furnName.push(furniture[i].children[1].textContent);
                totalPrice += Number(furniture[i].children[2].textContent);
                decFactor += Number(furniture[i].children[3].textContent);
                counter+=1;
            }
        }
        let outputField = document.getElementsByTagName('textarea')[1];
        outputField.value = `Bought furniture: ${furnName.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${(decFactor/counter)}`;
        console.log(counter);
    }
}