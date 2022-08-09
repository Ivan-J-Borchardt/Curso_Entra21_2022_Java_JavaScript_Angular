"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, rg, cpf, tel) {
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.tel = tel;
    }
    //Getters e Setters
    getNome() {
        return this.nome;
    }
    getRg() {
        return this.rg;
    }
    getCpf() {
        return this.cpf;
    }
    getTel() {
        return this.tel;
    }
    //Setters 
    setNome(nome) {
        this.nome = nome;
    }
    setRg(rg) {
        this.rg = rg;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setTel(tel) {
        this.tel = tel;
    }
}
exports.Cliente = Cliente;
