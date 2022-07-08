"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(memoria) {
        this.memoria = memoria;
    }
    somar(num1, num2) {
        return num1 + num2;
    }
    subtrair(num1, num2) {
        return num1 - num2;
    }
    dividir(num1, num2) {
        return num1 / num2;
    }
    multiplicar(num1, num2) {
        return num1 * num2;
    }
    getMemoria() {
        return this.memoria;
    }
    setMemoria(num) {
        this.memoria = num;
    }
}
exports.Calculadora = Calculadora;
var calc = new Calculadora(0);
console.log(calc.getMemoria());
