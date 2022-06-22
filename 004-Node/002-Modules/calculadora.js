/*
function soma(a, b) {
    return a + b 
}


function sub(a, b) {
    return a - b 
}

function mult(a, b) {
    return a * b 
}

function div(a, b) {
    return a / b 
}
*/

var somar = require("./soma.js")
var dividir = require("./divisao.js")
var multiplicar = require("./multiplicacao.js")
var subtrair = require("./subtracao.js")

console.log(somar(3, 5));
console.log(dividir(5, 2));
console.log(multiplicar(3, 4));
console.log(subtrair(10, 3));