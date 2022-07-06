"use strict";
var out = document.getElementById("idOut");
var bt = document.getElementById("idBt");
bt.onclick = function () {
    let temp = document.getElementById("idTemp");
    let escalaC = document.getElementById("idC");
    let escalaF = document.getElementById("idF");
    let escalaK = document.getElementById("idK");
    if (escalaC.checked) {
        let tempF = cToF(Number(temp.value));
        let tempK = cToK(Number(temp.value));
        out.value = `${temp.value} C | ${tempF} F | ${tempK} K`;
    }
    else if (escalaF.checked) {
        let tempC = fToC(Number(temp.value));
        let tempK = fToK(Number(temp.value));
        out.value = `${tempC} C | ${temp.value} F | ${tempK} K`;
    }
    else if (escalaK.checked) {
        let tempC = kToC(Number(temp.value));
        let tempF = kToF(Number(temp.value));
        out.value = `${tempC} C | ${tempF} F | ${temp.value} K`;
    }
};
function cToF(temp) {
    let tempF = (9 * temp + 160) / 5;
    return tempF;
}
function cToK(temp) {
    let tempK = (temp + 273);
    return tempK;
}
function fToC(temp) {
    let tempC = (temp - 32) / 1.8;
    return tempC;
}
function fToK(temp) {
    let tempK = ((temp - 32) / 1.8) + 273;
    return tempK;
}
function kToC(temp) {
    let tempK = temp - 273;
    return tempK;
}
function kToF(temp) {
    let tempK = ((temp - 273) * 1.8) + 32;
    return tempK;
}
