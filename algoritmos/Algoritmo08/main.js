function Perguntas (pergunta, respostas, respostaCorreta){
    //função que se torna um objeto
    this.pergunta =  pergunta;
    this.respostas =  respostas;
    this.respostaCorreta =  respostaCorreta;
}
//aqui é prototipo de acesso das função faz pergunta.
Perguntas.prototype.fazPergunta = function (){
    
    //acessando objeto Pergunta para acessar um propriedade do objeto respostas.
    console.log(this.pergunta);
    
    for (let i=0; i< this.respostas.length ;i++ ){
        
        console.log(i+": "+this.respostas[i]);
    }
}

Perguntas.prototype.verificaResposta =  function (resposta){
    
    if (resposta == this.respostaCorreta){
        
        console.log('você está correto!');
    } else {
        
        console.log('você errou, mais sorte na próxima vez!');
    }
}

Perguntas.prototype.executaPerguntas = function () {
    this.perguntas = [pergunta1, pergunta2, pergunta3, pergunta4];
    this.pergunta_randomica = Math.floor(Math.random()* this.perguntas.length);
    this.perguntas[this.pergunta_randomica].fazPergunta();
    this.resposta = parseInt(prompt('Qual é a resposta correta?'));
    this.perguntas[this.pergunta_randomica].verificaResposta(this.resposta);
}


if (this.perguntas[pergunta4] == 'sim'){
    break;
}


let pergunta1 = new Perguntas('Qual é fruta que é usado para se tornar um alcool fermentado?', 
                                ['uva', 'laranja', 'banana', 'tomate'], 0);

let pergunta2 = new Perguntas('Quais são os produtos do carro responsaveis pelo arrefecimento do motor?', 
                            ['Combustivel e Água', 'Oleo de freio e Água', 'Agua e Combustivel','Água', 'Oleo e Líquido de Arreficimento'], 
                            4);

let pergunta3 = new Perguntas('Quantas pessoas cabem num fusca?', 
                            ['Cinco', 'Quatro', 'Depende do Circo', 'Dois'], 3);



let pergunta4 =  new Perguntas('Deseja sair do Quizz?', ['Sim', 'Não'], 0);


executaPerguntas();

// let perguntas = [pergunta1, pergunta2, pergunta3];

// let pergunta_randomica = Math.floor(Math.random()*perguntas.length);

// perguntas[pergunta_randomica].fazPergunta();

// let resposta = parseInt(prompt('Qual é a resposta correta?'));

// perguntas[pergunta_randomica].verificaResposta(resposta);




