function solve() {
    let text = document.querySelector('#text').value.split(' ');
    let parameter = document.querySelector('#naming-convention').value;
    let resultField = document.getElementById('result');
        let result = 'AAAAA';
        if (parameter === 'Camel Case') {
            result = text.map(function (word, index){
                    if (index !== 0){
                       return  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                    } else {
                        return word.toLowerCase();
                    }
                }).join('');
        } else if (parameter === 'Pascal Case') {
            result = text.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
        } else {
            result  = 'Error!'
        }
        console.log(result);

        resultField.textContent = result;
}