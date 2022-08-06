console.log("Olá TypeScript");



//Tipos primitivos 
// string, boolean, number, ...
let data = "10.12.2022"; 

let idade: number;
var nome: string  = "Joao Da Silva"; 
idade = 10;
const isAluno: boolean = true;

//Atribuindo um tipo de dado por inferência 
let idadeAluno = 10 
//idadeAluno = "sdfsdf"

//Tipos Object 
//Array 
const idades: number[] = [10, 14, 20, 5, 24];



console.log(idades);
console.log(typeof(idades));
console.log(idades.length);
idades.push(23);
//console.log(idades.toUpperCase());// <-- Gera erro de compilação 

//tupla (tuple)
let minhaTupla: [number, string, string[], number];

minhaTupla = [12, "Mariana", ["a", "c", "a"], 45];

//Objetos literais (Object Literals)
const user: {nome: string; idade: number} = {
    nome: "Joana", 
    idade: 18
}
user.idade = 20; 

console.log(user);

//Tipo Any (Evite Usar)
let varA: any = 0;
varA = "Oi";
varA = true; 
varA = []; 

//Union Type 
var id: string | number;
id = 200; 
id = "200"; 


//Type Alias 
type userIdType = string | number; 

var userId: userIdType; 
userId = 10; 
userId = "10"; 

//Literal Types
let estadoUser : "autenticado" | null | "deslogado" | boolean; 

estadoUser = null; 
estadoUser = "autenticado"; 
//estadoUser = "teste"; <--- isso gera erro... 

//Enum  <--- uma espécie de coleção de constantes que são aceitas em um determinado domínio
enum Tamanho {
    P = "Pequeno", 
    M = "Médio", 
    G = "Grande"
};

const camisa = {
    desc: "Camisa basica preta", 
    size: Tamanho.P
}; 

console.log(camisa.size);


enum Operacao {
    debitoCC = 5038,
    creditoCC  = 5039, 
    debidoP = 6038
}

let op = 5038; // <-- recebendo do BD ou API 


if (op == Operacao.debitoCC) {
    
}

//Interfaces 
interface ParametrosFuncoesMatematicas{
    n1 : number; 
    n2 : number; 
}

let teste: ParametrosFuncoesMatematicas; 

teste = {n1: 3, n2: 6}

let obj: {n1: number, n2: number} = {n1: 3, n2: 6}; 

let obj2: ParametrosFuncoesMatematicas = {n1: 3, n2: 6};

function somaNum(nums: ParametrosFuncoesMatematicas): number {
    return nums.n1 + nums.n2; 
}

var nums: ParametrosFuncoesMatematicas  = {n1: 3, n2: 4}

console.log(somaNum(nums));

function subtraiNum(nums: ParametrosFuncoesMatematicas): number {
    return nums.n1 - nums.n2; 
}

nums = {n1: 8, n2: 2}
console.log(subtraiNum(nums));


//Narrowing 
function facaAlgo(info: number | boolean): void{

    if (typeof info === "number") {
        console.log("O dado é numérico");
    } else {
        console.log("O dado é lógico");
    }
}

facaAlgo(6)
facaAlgo(true)


//Generics 
function exibirItensArray<T>(vetor: T[]){

    vetor.forEach(element => {
        console.log(`Item: ${element}`);
    });

}

var x1 = [0, 2, 4, 6]; 
var x2 = ["a", "b", "c"];
var x3 = [true, false, true]

exibirItensArray(x1); 
exibirItensArray(x3);


//Funções
//tipagem dos parâmetros
function soma(num1: number, num2: number) {
    return num1 + num2;
}


//tipagem do retorno 
function digaOla(nome: string): string{
    return "olá " + nome;
}
 
console.log(soma(2, 5));

console.log(digaOla("Fulano"));
  
//funções sem retorno (void) 
function gravarLog(msn: string):void {
    console.log(msn);
}

//funções com parâmetros opcionais 
function saudar(nome: string, saudacao?: string):void{
    if (saudacao) {
        console.log(`Olá ${saudacao} ${nome}`);
     // console.log("Olá" + saudacao +" " + nome);
    } else {
        console.log(`Olá ${nome}`); 
    }
}

saudar("Fulano", "Sr.")
saudar("Joana")

//Tipagem de elementos da tela (usando a interface HTML...Element)
//Input 
var entradaTela = document.getElementById("idIn") as HTMLInputElement; 
console.log(entradaTela.value);
entradaTela.value = "34"; 

//Botao
var botao = document.getElementById("idBt") as HTMLButtonElement;

botao.onclick = function(){
    console.log(entradaTela.value);   
}

//Botao com input 
var botaoInput = document.getElementById("idBt2") as HTMLInputElement; 

botaoInput.onclick = function(){
    if (opcao1.checked) {
        console.log("Opcao 1");
    } else {
        console.log("Opcao 2");   
    }
}

//Radio Button
var opcao1 = document.getElementById("idOp1") as HTMLInputElement; 
var opcao2 = document.getElementById("idOp2") as HTMLInputElement; 


//Classes
class Pessoa {
    nome: string; 
    idade: number;
    cpf?: string; 

    constructor(nome: string, idade: number, cpf?: string){
        this.nome = nome; 
        this.idade = idade; 
        this.cpf = cpf; 
    }

    mostrarNomeUsuario(): void{
        console.log(`O Nome do usuário é ${this.nome}`);  
    }

}


const userNovo = new Pessoa("José", 23); 

console.log("-------------------------------");
console.log(userNovo.nome);
userNovo.idade = 24; 
console.log(userNovo.idade);
userNovo.mostrarNomeUsuario();
console.log("-------------------------------");

//Interfaces em Classes 
interface IVeiculo {
    marca: string;
    motor: string; 
    isLigado: boolean; 

    ligarMotor(): void;   

}

class Car implements IVeiculo {
    marca: string;
    motor: string;
    isLigado: boolean;
  

    constructor(marca: string, motor: string){
        this.marca = marca;
        this.motor = motor; 
        this.isLigado = false; 
    } 

    ligarMotor(): void {
        this.isLigado = true; 
    }

    
}


//herança 
class Suv extends Car {
    volumePortaMalas: number;

    constructor(vol: number, marca: string, motor: string){
        super(marca, motor);
        this.volumePortaMalas = vol; 
    }

}

var ecoSport = new Suv(23, 'Ford', '2.0'); 

ecoSport.ligarMotor(); 