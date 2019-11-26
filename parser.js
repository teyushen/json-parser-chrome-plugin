let inputString = document.getElementById('inputString');
let responseField = document.getElementById("responseJson");


inputString.onkeyup = function() {
    let json = inputString.value;
    if (isJson(json)) {
        responseField.innerHTML = JSON.stringify(JSON.parse(json), undefined, 4);

        // console.log(JSON.stringify(json));
    }
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}