let currencyApi =Object.entries((await (await fetch(
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_aF2mKNo5DIIqoAxActu8FwgQJElbQXtQn2fKS8Hu")).json()).data);
currencyApi.push(['USD', { code: 'USD', value: 1 }]);
let countriesJson = await(await fetch("countries.json")).json();
let selectBoxes = document.querySelectorAll('select');
let inputFields = document.querySelectorAll('input');
let input1 = inputFields[0];
let input2 = inputFields[1];
selectBoxes.forEach(function (x) {
    countriesJson.forEach(function (e,index) {
        let option = document.createElement('option');
        option.value = e.code;
        option.innerText = e.country;
        x.appendChild(option);
    })
})

let selectBox1Value = selectBoxes[0].value;
let selectBox2Value = selectBoxes[1].value;
selectBoxes.forEach(function (e, index) {
    e.oninput = function () {
        if (index ==0) {
            selectBox1Value = selectBoxes[0].value;
        }
        else {
            selectBox2Value = selectBoxes[1].value;
        }
    }
})
let input1Curruncy = '';
let input2Curruncy = '';
input1.oninput = function () {
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < currencyApi.length; i++){
        if (currencyApi[i][0] == selectBox1Value) {
            index1 = i;
        }
        if (currencyApi[i][0] == selectBox2Value) {
            index2 = i;
        }
        
    }
    input1Curruncy = currencyApi[index1][1].value;
    input2Curruncy = currencyApi[index2][1].value;
    input2.value = +(input1.value / input1Curruncy * input2Curruncy).toFixed(2);
}
input2.oninput = function () {
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < currencyApi.length; i++){
        if (currencyApi[i][0] == selectBox1Value) {
            index1 = i;
        }
        if (currencyApi[i][0] == selectBox2Value) {
            index2 = i;
        }
        
    }
    input1Curruncy = currencyApi[index1][1].value;
    input2Curruncy = currencyApi[index2][1].value;
    input1.value = +(input2.value / input2Curruncy * input1Curruncy).toFixed(2);
}