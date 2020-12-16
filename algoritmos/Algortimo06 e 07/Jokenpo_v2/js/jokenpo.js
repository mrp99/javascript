/*
Quando o jogador no botão jogar
1. o jogador pensa em qual opção ele vai querer colocar (pedra, papel, tesoura) -  randomico
2. jogador mostra na tela o que foi escolhido
3. comparar quem vai vencer.
    1. pedra vence tesoura.
    2. papel vence pedra.
    3. tesoura vence papel.
4. Mostrar quem é o vencedor.
*/

let player1 = {
    id: 1,
    nome: "Jogadaor 1",
    mao: ['pedra', 'papel', 'tesoura'],
    jogada: undefined,
    playerJogada: function () {
        this.jogada = Math.floor(Math.random()*3);
    },
    selecionandoMao: function () {
        return this.mao[this.jogada];
    },
    mostrarMao: function(){
        document.querySelector('#mao-player-1').textContent = this.selecionandoMao();
    }
}

let player2 = {
    id: 2,
    nome: "Jogadaor 2",
    mao: ['pedra', 'papel', 'tesoura'],
    jogada: undefined,
    playerJogada: function () {
        this.jogada = Math.floor(Math.random()*3);
    },
    selecionandoMao: function () {
        return this.mao[this.jogada];
    },
    mostrarMao: function(){
        document.querySelector('#mao-player-2').textContent = this.selecionandoMao();
    }
}

let jokenpo = {
    verificarVencedor: function() {
        player1.playerJogada();
        player1.mostrarMao();
        player2.playerJogada();
        player2.mostrarMao();
        vencedor = undefined;
        //pedra 
        if (player1.selecionandoMao() == "pedra" && player2.selecionandoMao() == "papel"){
            this.vencedor = player2.nome;
        } else if (player1.selecionandoMao() == "pedra" && player2.selecionandoMao() == "tesoura") {
            this.vencedor = player1.nome;
        } else if (player1.selecionandoMao() == "pedra" && player2.selecionandoMao() == "pedra") {
            this.vencedor = "Empate, não houve vencedor";
        // papel 
        } else if (player1.selecionandoMao() == "papel" && player2.selecionandoMao() == "tesoura") {
            this.vencedor  = player2.nome;
        } else if (player1.selecionandoMao() == "papel" && player2.selecionandoMao() == "pedra") {
            this.vencedor  = player1.nome;
        } else if (player1.selecionandoMao() == "papel" && player2.selecionandoMao() == "papel") {
            this.vencedor  = "Empate, não houve vencedor";
        //tesoura
        } else if (player1.selecionandoMao() == "tesoura" && player2.selecionandoMao() == "pedra") {
            this.vencedor  = player2.nome;
        } else if (player1.selecionandoMao() == "tesoura" && player2.selecionandoMao() == "papel") {
            this.vencedor  = player1.nome;
        } else if (player1.selecionandoMao() == "tesoura" && player2.selecionandoMao() == "tesoura") {
            this.vencedor  = "Empate, não houve vencedor";
        }
        //precisa chamar função resultadoVencedor no final da verificarVencedor
        this.resultadoVencedor();
    },
    
    resultadoVencedor: function() {
        document.querySelector('#resultado').textContent = this.vencedor;
    }
    
}
//escopo de variavel this é global
/* desafio ao inves de mandar o nome para tela, mandar imagem para tela
<img> trocando por src
https://pt.stackoverflow.com/questions/10881/como-substituir-o-src-de-uma-tag-img*/



