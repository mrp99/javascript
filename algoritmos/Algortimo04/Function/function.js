function escreva(){
	console.log("Olá, Programador!");
}
escreva();
//----------------------------------
function escrevaMensagem (mensagem){
	console.log(mensagem);
}
escrevaMensagem("Olá, mundo!?");
let msg = escrevaMensagem("Vão aprender e praticar mais funções?");
//-------------------------------
function fazerConta(x,b,z){
	return x+b-z;
}
let resultado = fazerConta(10,7,3);
console.log(fazerConta(10,7,3));
//-------------------------------
function somaTudo (numeros){
	let total = 0;
	for(let num of numeros){
		total = total + num;
	}
	return total;
}
//let arrayNum = [1,2,3,4,5,6,7,8,9,10] ;
let result = somaTudo([1,2,3,4,5,6,7,8,9,10]);
console.log('somaTudo', result);

function escreverEndereço (rua,cidade,pais, ...complementos){
	console.log(rua);
	console.log(cidade);
	console.log(pais);
	console.log(complementos);
} 
escreverEndereço('Rua sem pé e cabeça', 'São Bernardo do Campo', 'Brasil', 'estado de nao sei onde', 'casa do caramba', 'cep: 12345-6789');

(function autoExecuta(nome){
	console.log('executei', nome);
}('João Ninguém'));

//função Expressão
let subtDoisNumeros = function subtrai(x, y){
	return x-y;
};
console.log(subtDoisNumeros(10,5));

//função anonima
let multiplNum = function (x,y,z){
	return x*y*z;
};
console.log(multiplNum(10,5,2));
//--------------------------------------
function somaCallBack(a,b, fnCallback){
	return fnCallback(a+b);
}
let multNum = function(total){
	return total*2;
}
console.log(somaCallBack(10, 3, multNum));
console.log(somaCallBack(215, 5, function(total){
	return total ** 4;
}));
console.log(somaCallBack(25, 9, function(total){
	return total / 1.5;
}));

function escreveNome (nome = 'fulano', idade = 33){
	console.log(nome);
	console.log(idade);
}
escreveNome();

