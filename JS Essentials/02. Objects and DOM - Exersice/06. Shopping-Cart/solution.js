function solve() {
    let products = document.getElementsByClassName('product');
    let bread = products[0];
    let milk = products[1];
    let tomatoes = products[2];

    let textField = document.getElementsByTagName('textarea')[0];
    let sum = 0;
    let list = [];

    let breadChildren = bread.children;
    let breadAdd = breadChildren[2];
    let breadBtn = breadAdd.children[0];

    breadBtn.addEventListener('click', () => {
        sum += 0.80;
        list.push('Bread');
        textField.textContent += 'Added Bread for 0.80 to the cart.\n';
    });
    let milkChildren = milk.children;
    let milkAdd = milkChildren[2];
    let milkBtn = milkAdd.children[0];

    milkBtn.addEventListener('click', () => {
        sum += 1.09;
        list.push('Milk');
        textField.textContent += 'Added Milk for 1.09 to the cart.\n';
    });
    let tomatoesChildren = tomatoes.children;
    let tomatoesAdd = tomatoesChildren[2];
    let tomatoesBtn = tomatoesAdd.children[0];

    tomatoesBtn.addEventListener('click', () => {
        sum += 0.99;
        list.push('Tomatoes');
        textField.textContent += 'Added Tomatoes for 0.99 to the cart.\n';
    });
    let btnCheckout = document.getElementsByClassName('checkout')[0];
    btnCheckout.addEventListener('click', () => {
        textField.textContent += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`;
        btnCheckout.disabled = true;
        breadBtn.disabled = true;
        milkBtn.disabled = true;
        tomatoesBtn.disabled = true;
    });
}