/*array:
let geral = ['megadrive', 'playstation', 'psx2', 104, 105.798, new Date(),];
//forEach percorre a matriz através de um laço de repetiçao onde se passa um funçao anonima.
geral.forEach(function(value, index){
    console.log(index, value);
});*/

//this é um comando interno que faz referencia a um atributo, a um metodo

/*
Atributos e Métodos - uma classe é um conjunto atributos e métodos:
Atributos são as informações que contém aquilo que foi armazenado
Métodos são é como chamamos para executar os atributos
*/

//instacia - é quando o objeto representa uma classe.

// quanto mais inteligente for sua classe, mais limpor será seu código.


/* 
let celular = function(){
    this.cor = "prata";
    this.ligar = function()
    {
        console.log("ligação para o celular!");
        return "ligando!";
    }
}

let objeto = new celular();

console.log(objeto.ligar());
*/

class celular {
    constructor(){
        this.cor = "prata";
    }
    ligar(){
        console.log("ligação para o celular!");
        return "ligando!"; 
    }
}

let objeto = new celular();

console.log(objeto.ligar());