import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";

export class Pedido{

    private cod: number; 
    private cliente: Cliente;
    private itensPedido: ItemPedido[]; 

    constructor(cod: number, cliente: Cliente, itensPedido: ItemPedido[]){
        this.cod = cod; 
        this.cliente = cliente; 
        this.itensPedido = itensPedido; 
    }

    //Getters e Setters
    public getCod(): number{
        return this.cod;
    }

    public getCliente(): Cliente{
        return this.cliente; 
    }

    public getItensPedido(): ItemPedido[]{
        return this.itensPedido; 
    }

    //Setters
    public setCod(cod: number){
        this.cod = cod; 
    }

    public setCliente(cliente: Cliente){
        this.cliente = cliente; 
    }

    public setItensPedido(itensPedido: ItemPedido[]){
        this.itensPedido = itensPedido; 
    }

    //Método Worker 
    public addItemPedido(itemPedido: ItemPedido){
        this.itensPedido.push(itemPedido); 
    }

}