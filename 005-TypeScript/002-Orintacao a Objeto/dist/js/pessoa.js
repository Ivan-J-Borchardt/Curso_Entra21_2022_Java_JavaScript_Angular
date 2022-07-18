"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //Modificadores de Acesso --- public, private, protected
    //método Construtor
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    //Métodos de acesso (getter e setter)
    get nome() {
        if (this._nome == "") {
            return "Nome nao atribuido";
        }
        return this._nome;
    }
    set nome(nome) {
        if (nome != "") {
            this._nome = nome;
        }
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        if (this.validarCpf(cpf)) {
            this._cpf = cpf;
        }
    }
    //Métodos da classe - Comportamentos da classe 
    cumprimentar(nome) {
        console.log(`Olá ${nome} meu nome é ${this._nome}`);
    }
    validarCpf(cpf) {
        if (cpf == "") {
            return false;
        }
        return true;
    }
}
exports.Pessoa = Pessoa;
