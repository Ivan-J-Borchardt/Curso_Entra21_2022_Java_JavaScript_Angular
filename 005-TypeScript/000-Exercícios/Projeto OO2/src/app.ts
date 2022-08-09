import { Cliente } from "./Cliente"; 
import { ItemPedido } from "./ItemPedido";
import { Pedido } from "./Pedido";

var pedido: Pedido; 

var btSalvar = document.getElementById("idBtSalvar") as HTMLButtonElement; 
var btAddItem = document.getElementById("idAddItem") as HTMLButtonElement; 

btSalvar.onclick = function(){
    let numPedido = document.getElementById("idNumPedido") as HTMLInputElement; 
    let clienteNome = document.getElementById("idClienteNome") as HTMLInputElement; 
    let clienteTel = document.getElementById("idClienteTel") as HTMLInputElement; 
    let clienteCPF = document.getElementById("idClienteCpf") as HTMLInputElement; 
    let clienteRg = document.getElementById("idClienteRg") as HTMLInputElement; 

    let itensPedido: ItemPedido[] = []; 

    let cliente = new Cliente(clienteNome.value, clienteTel.value, clienteCPF.value, clienteRg.value); 

    pedido = new Pedido(Number(numPedido.value), cliente, itensPedido)
}


btAddItem.onclick = function(){
    let itemCod = document.getElementById("idItemCod") as HTMLInputElement; 
    let itemDesc = document.getElementById("idDescricao") as HTMLInputElement; 
    let itemQtd = document.getElementById("idItemQtd") as HTMLInputElement; 
    let itemValor = document.getElementById("idItemValor") as HTMLInputElement; 

    let itemPedido = new ItemPedido(Number(itemCod.value), itemDesc.value, Number(itemValor.value), Number(itemQtd.value)); 

    pedido.addItemPedido(itemPedido); 

    console.log(pedido);
    
}

