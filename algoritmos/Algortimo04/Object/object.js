let usuario = {
	nome: 'Juliana',
	idade: 26,
	youtuber: 'muitoLouco',
	utlimoNome: 'Carvalho'
};

delete usuario.youtuber;

usuario.hobbies = ['Programar', 'viajar', 'viver'];

console.log(usuario);
usuario.qualidades = {
	linguagem: ['javascript', 'php', 'go', 'python'],
	esporte: ['corridaDeRua', 'bicicleta', 'crossfit']
};

console.log(usuario);

let usuario2 = {
	digaOi(name){
		return `Olá ${name}`;
	}
};
console.log(usuario2);

let cor ='vermelho';

let usuario3 = {
	name: 'Sena',
	cor
};
// exemplo de merge de objeto:

let cadastroUsu = {
	nome: 'Mariana',
	idade: 30
};

let InfoExtra ={
	estado: 'SP',
	cidade: 'São Bernardo do Campo'
};

//let cadastroUniao = Object.assign({}, cadastroUsu, InfoExtra);
//spread(espanhando as prorpriedades)
let User1 = {
	...cadastroUsu,
	...InfoExtra,
	sexo: "F",
	profissao: 'Programador'
};

console.log(User1);
