function spaceshipCrafting() {
    let inputs = document.getElementsByTagName('input');
    let losses = +1 - (Number(inputs[4].value)) / +400;
    let titanium = Math.round(Number(inputs[0].value) * losses / 25).toFixed(0);
    let aluminium = Math.round(Number(inputs[1].value) * losses / 50).toFixed(0);
    let magnesium = Math.round(Number(inputs[2].value) * losses / 75).toFixed(0);
    let carbon = Math.round(Number(inputs[3].value) * losses / 100).toFixed(0);

    let theUndefinedShip = 0;
    let nullMaster = 0;
    let JSONCrew = 0;
    let falseFleet = 0;

    while (true) {
        let isCreated = false;
        if (titanium - 7 >= 0 && aluminium - 9 >= 0 && magnesium - 7 >= 0 && carbon - 7 >= 0) {
            titanium -= 7;
            aluminium -= 9;
            magnesium -= 7;
            carbon -= 7;
            theUndefinedShip++;
            isCreated = true;
        }
        if (titanium - 5 >= 0 && aluminium - 7 >= 0 && magnesium - 7 >= 0 && carbon - 5 >= 0) {
            titanium -= 5;
            aluminium -= 7;
            magnesium -= 7;
            carbon -= 5;
            nullMaster++;
            isCreated = true;
        }
        if (titanium - 3 >= 0 && aluminium - 5 >= 0 && magnesium - 5 >= 0 && carbon - 2 >= 0) {
            titanium -= 3;
            aluminium -= 5;
            magnesium -= 5;
            carbon -= 2;
            JSONCrew++;
            isCreated = true;
        }
        if (titanium - 2 >= 0 && aluminium - 2 >= 0 && magnesium - 3 >= 0 && carbon - 1 >= 0) {
            titanium -= 2;
            aluminium -= 2;
            magnesium -= 3;
            carbon -= 1;
            falseFleet++;
            isCreated = true;
        }
        if (!isCreated) {
            break;
        }
    }

    let firstOutputArr = [];
    if (theUndefinedShip > 0) {
        let token = `${theUndefinedShip} THE-UNDEFINED-SHIP`;
        firstOutputArr.push(token);
    }
    if (nullMaster > 0) {
        let token = `${nullMaster} NULL-MASTER`;
        firstOutputArr.push(token);
    }
    if (JSONCrew > 0) {
        let token = `${JSONCrew} JSON-CREW`;
        firstOutputArr.push(token);
    }
    if (falseFleet > 0) {
        let token = `${falseFleet} FALSE-FLEET`;
        firstOutputArr.push(token);
    }
    let secondOutput = firstOutputArr.join(', ');
    let firstOutput = `${titanium} titanium bars, ${aluminium} aluminum bars, ${magnesium} magnesium bars, ${carbon} carbon bars`;

    let outputFields = document.getElementsByTagName('p');
    outputFields[0].textContent = firstOutput;
    outputFields[1].textContent = secondOutput;
}