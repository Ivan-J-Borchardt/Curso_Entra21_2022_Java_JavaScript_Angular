/*
function soma(a, b) {
    return a + b 
}
*/

function sub(a, b) {
    return a - b 
}

function mult(a, b) {
    return a * b 
}

function div(a, b) {
    return a / b 
}

var somar = require("./soma.js")

console.log(somar(2, 3));

console.log(sub(2, 3));
console.log(mult(2, 3));
console.log(div(2, 3));