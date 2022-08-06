import { Calculadora } from "./calculadora"

var calc: Calculadora

calc = new Calculadora(0); 

var resultado = calc.somar(5, 3)

calc.setMemoria(resultado); 

console.log("Soma de 5 e 3 = " + calc.getMemoria());



 
