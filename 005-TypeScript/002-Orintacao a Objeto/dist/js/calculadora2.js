"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    //Modificadores de Acesso: public, private, protected, readonly 
    //Método construtor 
    constructor(memoria) {
        this.memoria = memoria;
    }
    //Métodos de Acesso  (Getter e Setter) 
    getMemoria() {
        return this.memoria;
    }
    setMemoria(num) {
        this.memoria = num;
    }
    //Métodos de Trabalho (Worker)
    somar(num1, num2) {
        this.memoria = num1 + num2;
        return this.memoria;
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
}
exports.Calculadora = Calculadora;
