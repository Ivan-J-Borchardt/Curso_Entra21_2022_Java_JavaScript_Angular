"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(cod, cliente, itensPedido) {
        this.cod = cod;
        this.cliente = cliente;
        this.itensPedido = itensPedido;
    }
    //Getters e Setters
    getCod() {
        return this.cod;
    }
    getCliente() {
        return this.cliente;
    }
    getItensPedido() {
        return this.itensPedido;
    }
    //Setters
    setCod(cod) {
        this.cod = cod;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    setItensPedido(itensPedido) {
        this.itensPedido = itensPedido;
    }
    //Método Worker 
    addItemPedido(itemPedido) {
        this.itensPedido.push(itemPedido);
    }
}
exports.Pedido = Pedido;
