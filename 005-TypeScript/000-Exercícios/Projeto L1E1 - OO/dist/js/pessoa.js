"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //Construtor 
    constructor(idade, diaNasc, mesNasc, anoNasc, nome) {
        this.idade = idade;
        this.diaNasc = diaNasc;
        this.mesNasc = mesNasc;
        this.anoNasc = anoNasc;
        this.nome = nome;
    }
    //Getters e Setters 
    getIdade() {
        return this.idade;
    }
    getNome() {
        return this.nome;
    }
    //Método de trabalho  
    setDataDeNascimento(dia, mes, ano) {
        this.diaNasc = dia;
        this.mesNasc = mes;
        this.anoNasc = ano;
    }
    calculaIdade(dia, mes, ano) {
        let diaAtual = new Date(`${dia}/${mes}/${ano} 00:00:00`);
        let diaNasc = new Date(`${this.diaNasc}/${this.mesNasc}/${this.anoNasc} 00:00:00`);
        this.idade = ((((((diaAtual.valueOf() - diaNasc.valueOf()) / 1000) / 60) / 60) / 24) / 365);
    }
}
exports.Pessoa = Pessoa;
