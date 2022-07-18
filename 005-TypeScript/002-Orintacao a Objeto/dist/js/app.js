"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora_1 = require("./calculadora");
var calc;
calc = new calculadora_1.Calculadora(0);
var resultado = calc.somar(5, 3);
calc.setMemoria(resultado);
console.log("Soma de 5 e 3 = " + calc.getMemoria());
