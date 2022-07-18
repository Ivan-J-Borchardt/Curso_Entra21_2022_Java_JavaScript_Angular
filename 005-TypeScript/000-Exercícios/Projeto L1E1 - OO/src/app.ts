import { Pessoa } from "./pessoa";

var einstein  = new Pessoa(0, 14, 3, 1879, "Einstein"); 

einstein.calculaIdade(11, 7, 2022); 
console.log("Idade de  " + einstein.getNome() + " é: " +  einstein.getIdade());
