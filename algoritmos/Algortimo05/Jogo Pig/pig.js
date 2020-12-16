let dado = {
    valor: 0,
    jogando: function(){
        this.valor = Math.floor(Math.random()*6)+1;
        this.imprimirValor();
    },
    imprimirValor: function(){
        document.querySelector('#dado').textContent=this.valor;//substitui o valor do texto do elemento html com id dado.
    }
};
let player1 = {
    id: 1,
    nome: 'Player1',
    pontos: 0,
    pontosTemporarios: 0,
    jogarODado: function(){
        // acessando função rodando do objeto (dado)
        dado.jogando();
        pig.verificaOValorDado();
    },
    parar: function(){
        this.adicionarNosPontos();
        pig.proximoJogador();
    }, 
    adiconarNosPontosTemporario: function(pontos){
        this.pontosTemporarios+=pontos;
        this.imprimirOsPontosTemporarios();
    },
    zerarOsPontosTemporarios: function(){
        this.pontosTemporarios=0;
        this.imprimirOsPontosTemporarios();
    },
    adicionarNosPontos: function(){
        this.pontos+=this.pontosTemporarios;
        this.imrpimirOsPontos();
    },
    imprimirOsPontosTemporarios: function(){
        document.querySelector('#jogador-'+this.id+'-pontosTemporarios').textContent=this.pontosTemporarios;
    },
    imrpimirOsPontos: function(){
        document.querySelector('#jogador-'+this.id+'-pontos').textContent = this.pontos;
    }
}
let player2 = {
    id: 2,
    nome: 'Player2',
    pontos: 0,
    pontosTemporarios: 0,
    jogarODado: function(){
        // acessando função rodando do objeto (dado)
        dado.jogando();
        pig.verificaOValorDado();
    },
    parar: function(){
        this.adicionarNosPontos();
        pig.proximoJogador();
    }, 
    adiconarNosPontosTemporario: function(pontos){
        this.pontosTemporarios+=pontos;
        this.imprimirOsPontosTemporarios();
    },
    zerarOsPontosTemporarios: function(){
        this.pontosTemporarios=0;
        this.imprimirOsPontosTemporarios();
    },
    adicionarNosPontos: function(){
        this.pontos+=this.pontosTemporarios;
        this.imrpimirOsPontos();
    },
    imprimirOsPontosTemporarios: function(){
        document.querySelector('#jogador-'+this.id+'-pontosTemporarios').textContent=this.pontosTemporarios;
    },
    imrpimirOsPontos: function(){
        document.querySelector('#jogador-'+this.id+'-pontos').textContent = this.pontos;
    }
}
let pig = {
    jogadores: [player1,player2],
    jogadorAtual: 0,
    playerAtual: function(){
        /*Acessando o array jogadores com a posiçao no array do jogador Player1 e Player2 -> posição 0 = player1 e 
          posição1 = player2.*/
        return this.jogadores[this.jogadorAtual];
    },
    proximoJogador: function(){
        //zerar os pontos temporarios.
        this.playerAtual().zerarOsPontosTemporarios();
        this.jogadorAtual++;
        //altere para o proximo jogador
        if (this.jogadorAtual == this.jogadores.length){
            this.jogadorAtual = 0;
        }
        document.querySelector('#jogador-atual').textContent = this.playerAtual().nome;
    },
    verificaOValorDado: function(){
        if(dado.valor == 1){
            this.proximoJogador();
        } else {
            // trazer o jogador seja Player1 ou Player2 e acessar os pontos temporarios e somar seus dados rodados 
            this.playerAtual().adiconarNosPontosTemporario(dado.valor);
        }

    }
}