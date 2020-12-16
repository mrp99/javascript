/****
 * Let, const, var
 */

//ES5
var nome5 = "Marcelino Roberto";
var idade5 = 36;
var nome5 = "Marcel Roberto";
console.log(nome5);

//ES6
const nome6 = "Marcelino Roberto";
let idade6 = 36;
//nome6 = "Marcel Roberto";

// //ES5
//  function passouSemDP5(passou){
//      if(passou){
//          var nome = "Eduardo Ruiz";
//      }
//      console.log(nome + " passou sem DP \\o/ ES5")
//  }

//  passouSemDP5(true);

//  //ES6
// function passouSemDP6(passou){
//     let nome;
//     const idade = 24;
//     if(passou){
//         nome = "Eduardo Ruiz";
//     }
//     console.log(nome + idade + " passou sem DP \\o/ ES6")
// }
// passouSemDP6(true);

// //Mais um exemplos
// let i = 9;
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }
// console.log(i);

/****
 * Strings: template e comparadores
 */

// let primeiroNome = "Marcel";
// let ultimoNome = "Roberto";
// const ano = 1984;

// //ES5
// console.log("Eu sou o " + primeiroNome + " " + ultimoNome + ", e nasci em " + ano);

// //ES6
// console.log(`Eu sou o ${primeiroNome} ${ultimoNome}, e nasci em ${ano}`);
// let nomeCompleto = `${primeiroNome} ${ultimoNome}`;
// let nomeCompletoPadraoUS = `${ultimoNome}, ${primeiroNome}`;
// console.log(`Eu sou o ${nomeCompletoPadraoUS}, e nasci em ${ano}`);

// //Funções comparadoras de String
// console.log(nomeCompleto.startsWith("Mar"));
// console.log(nomeCompleto.endsWith("to"));
// console.log(nomeCompleto.includes(" "));
// console.log(`${nomeCompleto}\n`.repeat(5));

/***
 * Arrow => functions
 */
/*
const anos = [1990, 1965, 1987, 1938, 2002];

//ES5
let idade5for = [];
for(let i = 0; i < anos.length; i++){
    idade5for.push(2020 - anos[i]);
}
console.log(idade5for);

let idade5map = anos.map(function(elemento){
    return 2020 - elemento;
});
console.log(anos);
console.log(idade5map);

//ES6
let idade6map = anos.map((elemento) => {
    return 2020 - elemento;
});

let idade6map1 = anos.map((elemento) => 2020 - elemento);

console.log(idade6map);
console.log(idade6map1);

let idade6map2 = anos.map((elemento, index) => {
    const ano = new Date().getFullYear();
    const idade = ano - elemento;
    return `Elemento ${index}: ${elemento} - ${idade}`;
});
console.log(idade6map2);

/****
 * Arrow function Prototype
 */
/*
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.meusAmigos = function(amigos){
    let saudacao = amigos.map(el => {
        return `${el}, bem vindo a aula!`;
    });
    console.log(saudacao);
}

let thyago = new Pessoa("Thyago", "Quintas");
thyago.meusAmigos(["João", "Marcela", "Felipe"]);
*/

/***
 * Destruction 
 */
/*
let array = ['Thyago', 33, true];
let nome = array[0];
let idade = array[1];

console.log(nome);
console.log(idade);

let fnArray = function(){
    return ['Thyago1', 33, true];
}

let [nom, idad, boleano] = fnArray();
console.log(nom);
console.log(idad);
console.log(boleano);
*/

let lakers = {
    nome: 'Lakers',
    pontos: [99,98,101,109],
    proximoJogo: '30/10/2020',
    a: true,
};

let {pontos: a, nome: b} = lakers;
console.log(a);
console.log(b);

function calcAnosParaAposentar(ano){
    const idade = new Date().getFullYear() - ano;
    return {
                idade : idade,
                ano : ano,
                tempoParaMeAposentar : 65-idade
            }
}

let { tempoParaMeAposentar } = calcAnosParaAposentar(1987);
console.log(tempoParaMeAposentar);
