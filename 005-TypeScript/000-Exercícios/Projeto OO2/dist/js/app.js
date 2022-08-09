"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const ItemPedido_1 = require("./ItemPedido");
const Pedido_1 = require("./Pedido");
var pedido;
var btSalvar = document.getElementById("idBtSalvar");
var btAddItem = document.getElementById("idAddItem");
btSalvar.onclick = function () {
    let numPedido = document.getElementById("idNumPedido");
    let clienteNome = document.getElementById("idClienteNome");
    let clienteTel = document.getElementById("idClienteTel");
    let clienteCPF = document.getElementById("idClienteCpf");
    let clienteRg = document.getElementById("idClienteRg");
    let itensPedido = [];
    let cliente = new Cliente_1.Cliente(clienteNome.value, clienteTel.value, clienteCPF.value, clienteRg.value);
    pedido = new Pedido_1.Pedido(Number(numPedido.value), cliente, itensPedido);
};
btAddItem.onclick = function () {
    let itemCod = document.getElementById("idItemCod");
    let itemDesc = document.getElementById("idDescricao");
    let itemQtd = document.getElementById("idItemQtd");
    let itemValor = document.getElementById("idItemValor");
    let itemPedido = new ItemPedido_1.ItemPedido(Number(itemCod.value), itemDesc.value, Number(itemValor.value), Number(itemQtd.value));
    pedido.addItemPedido(itemPedido);
    console.log(pedido);
};
