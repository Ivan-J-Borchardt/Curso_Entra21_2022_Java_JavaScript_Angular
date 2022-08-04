"use strict";
console.log("Olá TypeScript");
//Tipos primitivos 
// string, boolean, number, ...
let idade;
var nome = "Joao Da Silva";
idade = 10;
const isAluno = true;
//Atribuindo um tipo de dado por inferência 
let idadeAluno = 10;
//idadeAluno = "sdfsdf"
//Tipos Object 
//Array 
const idades = [10, 14, 20, 5, 24];
console.log(idades);
console.log(typeof (idades));
console.log(idades.length);
idades.push(23);
//console.log(idades.toUppesCase());// <-- Gera erro de compilação 
//tupla (tuple)
let minhaTupla;
minhaTupla = [12, "Mariana", ["a", "c", "a"], 45];
//Objetos literais (Object Literals)
const user = {
    nome: "Joana",
    idade: 18
};
console.log(user);
//Tipo Any (Evite Usar)
let varA = 0;
varA = "Oi";
varA = true;
varA = [];
//Union Type 
var id;
id = 200;
id = "200";
var userId;
userId = 10;
userId = "10";
//Literal Types
let estadoUser;
estadoUser = null;
estadoUser = "autenticado";
//estadoUser = "teste"; <--- isso gera erro... 
//Enum  <--- uma espécie de coleção de constantes que são aceitas em um determinado domínio
var Tamanho;
(function (Tamanho) {
    Tamanho["P"] = "Pequeno";
    Tamanho["M"] = "M\u00E9dio";
    Tamanho["G"] = "Grande";
})(Tamanho || (Tamanho = {}));
;
const camisa = {
    desc: "Camisa basica preta",
    size: Tamanho.P
};
function somaNum(nums) {
    return nums.n1 + nums.n2;
}
var nums = { n1: 3, n2: 4 };
console.log(somaNum(nums));
function subtraiNum(nums) {
    return nums.n1 - nums.n2;
}
nums = { n1: 8, n2: 2 };
console.log(subtraiNum(nums));
//Narrowing 
function facaAlgo(info) {
    if (typeof info === "number") {
        console.log("O dado é numérico");
    }
    else {
        console.log("O dado é lógico");
    }
}
facaAlgo(6);
facaAlgo(true);
//Generics 
function exibirItensArray(vetor) {
    vetor.forEach(element => {
        console.log(`Item: ${element}`);
    });
}
var x1 = [0, 2, 4, 6];
var x2 = ["a", "b", "c"];
exibirItensArray(x1);
exibirItensArray(x2);
//Funções
//tipagem dos parâmetros
function soma(num1, num2) {
    return num1 + num2;
}
//tipagem do retorno 
function digaOla(nome) {
    return "olá " + nome;
}
console.log(soma(2, 5));
console.log(digaOla("Fulano"));
//funções sem retorno (void) 
function gravarLog(msn) {
    console.log(msn);
}
//funções com parâmetros opcionais 
function saudar(nome, saudacao) {
    if (saudacao) {
        console.log(`Olá ${saudacao} ${nome}`);
        // console.log("Olá" + saudacao +" " + nome);
    }
    else {
        console.log(`Olá ${nome}`);
    }
}
saudar("Fulano", "Sr.");
saudar("Joana");
//Tipagem de elementos da tela (usando a interface HTML...Element)
//Input 
var entradaTela = document.getElementById("idIn");
console.log(entradaTela.value);
entradaTela.value = "34";
//Botao
var botao = document.getElementById("idBt");
botao.onclick = function () {
    console.log(entradaTela.value);
};
//Botao com input 
var botaoInput = document.getElementById("idBt2");
botaoInput.onclick = function () {
    if (opcao1.checked) {
        console.log("Opcao 1");
    }
    else {
        console.log("Opcao 2");
    }
};
//Radio Button
var opcao1 = document.getElementById("idOp1");
var opcao2 = document.getElementById("idOp2");
//Classes
class Pessoa {
    nome;
    idade;
    constructor(nome1, idade) {
        this.nome = nome1;
        this.idade = idade;
    }
    mostrarNomeUsuario() {
        console.log(`O Nome do usuário é ${this.nome}`);
    }
}
const userNovo = new Pessoa("José", 23);
console.log("-------------------------------");
console.log(userNovo.nome);
userNovo.idade = 24;
console.log(userNovo.idade);
console.log(userNovo.mostrarNomeUsuario());
console.log("-------------------------------");
class Car {
    marca;
    motor;
    isLigado;
    constructor(marca, motor) {
        this.marca = marca;
        this.motor = motor;
        this.isLigado = false;
    }
    ligarMotor() {
        this.isLigado = true;
    }
}
//herança 
class fusca extends Car {
}
