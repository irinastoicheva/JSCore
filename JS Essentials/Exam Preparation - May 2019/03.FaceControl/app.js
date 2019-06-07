function getData() {
    let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    let sort = input.splice(input.length - 1);
    let section = sort[0].action;
    let criteriaSort = sort[0].criteria;

    let sectionPeopleIn = document.querySelector('#peopleIn');
    let sectionBlacklist = document.querySelector('#blacklist');
    let sectionPeopleOut = document.querySelector('#peopleOut');

    let peopleIn = [];
    let blackList = [];
    let peopleOut = [];

    for (let i = 0; i < input.length; i++) {
        let token = input[i];
        let obj = {'firstName': token.firstName, 'lastName': token.lastName};
        switch (token.action) {
            case 'peopleIn':
                if (peopleIn, obj) {
                    if (!checkContainsObj(blackList, obj)) {
                        peopleIn.push(obj)
                    } else if (checkContainsObj(peopleOut, obj)) {
                        let index = getIndex(peopleOut, obj);
                        peopleOut.splice(index, 1);
                        peopleIn.push(obj);
                    }
                }
                break;
            case
            'peopleOut':
                if (checkContainsObj(peopleIn, obj) && !(checkContainsObj(peopleOut, obj))) {
                    let index = getIndex(peopleIn, obj);
                    peopleIn.splice(index, 1);
                    peopleOut.push(obj);
                }
                break;
            case
            'blacklist':
                if (!checkContainsObj(blackList, obj)) {
                    if (checkContainsObj(peopleIn, obj)) {
                        let index = getIndex(peopleIn, obj);
                        peopleIn.splice(index, 1);
                    } else if (checkContainsObj(peopleOut, obj)) {
                        let index = getIndex(peopleOut, obj);
                        peopleOut.splice(index, 1);
                    }
                    blackList.push(obj);
                }
                break;
        }
    }

    switch (section) {
        case 'peopleIn':
            peopleIn.sort(dynamicSort(criteriaSort));
            break;
        case 'peopleOut':
            peopleOut.sort(dynamicSort(criteriaSort));
            break;
        case 'blacklist':
            blackList.sort(dynamicSort(criteriaSort));
            break;
    }

    for (let i = 0; i < peopleIn.length; i++) {
        sectionPeopleIn.children[1].textContent += JSON.stringify(peopleIn[i]);
        sectionPeopleIn.children[1].textContent += ' ';
    }

    for (let i = 0; i < peopleOut.length; i++) {
        sectionPeopleOut.children[1].textContent += JSON.stringify(peopleOut[i]);
        sectionPeopleOut.children[1].textContent += ' ';
    }

    for (let i = 0; i < blackList.length; i++) {
        sectionBlacklist.children[1].textContent += JSON.stringify(blackList[i]);
        sectionBlacklist.children[1].textContent += ' ';
    }

    function getIndex(arr, obj) {
        let index = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].firstName == obj.firstName && arr[i].lastName == obj.lastName) {
                index = +i;
            }
        }
        return index;
    }

    function checkContainsObj(arr, obj) {
        let result = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].firstName == obj.firstName && arr[i].lastName == obj.lastName) {
                result = true;
            }
        }
        return result;
    }

    function dynamicSort(property) {
        let sortOrder = 1;
        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
}