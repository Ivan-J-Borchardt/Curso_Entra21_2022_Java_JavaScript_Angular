console.log("Olá TypeScript");

//Tipos primitivos 
// string, boolean, number, ...
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
//console.log(idades.toUppesCase());// <-- Gera erro de compilação 

//tupla (tuple)
let minhaTupla: [number, string, string[], number];

minhaTupla = [12, "Mariana", ["a", "c", "a"], 45];

//Objetos literais (Object Literals)
const user: {nome: string; idade: number} = {
    nome: "Joana", 
    idade: 18 
}

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
function saudar(nome: string, saudacao?: string):void {

    if (saudacao) {
        console.log(`Olá ${saudacao} ${nome}`);
    } else {
        console.log(`Olá ${nome}`); 
    }
    
    
}

saudar("Fulano", "Sr.")
saudar("Joana")

