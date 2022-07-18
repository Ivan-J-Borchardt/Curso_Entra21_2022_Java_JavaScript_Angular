"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./pessoa");
var einstein = new pessoa_1.Pessoa(0, 14, 3, 1879, "Einstein");
einstein.calculaIdade(11, 7, 2022);
console.log("Idade de  " + einstein.getNome() + " é: " + einstein.getIdade());
