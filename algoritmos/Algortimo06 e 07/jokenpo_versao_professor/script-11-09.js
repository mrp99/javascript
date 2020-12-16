dado = {
    valorAtual: 0,
    geraNovoNumero: function () {
        this.valorAtual = Math.floor(Math.random() * 6) + 1;
    },
    atualizaNaTela: function () {
        document.querySelector('#dado').textContent = this.valorAtual;
    },
    dadoJogado: function () {
        this.geraNovoNumero();
        this.atualizaNaTela();
    }
}

player1 = {
    pontos: 0,
    pontosAtuais: 0,
    idJogador: 1,
    jogaODado: function () {
        dado.dadoJogado();
    },
    imprimePontosAtuais: function () {
        document.querySelector('#jogador-' + this.idJogador + '-pontosAtuais').textContent = this.pontosAtuais;
    },
    imprimePontos: function () {
        document.querySelector('#jogador-' + this.idJogador + '-pontos').textContent = this.pontos;
    },
    imprimeJogando: function () {
        $jogando = document.querySelector('#jogador-' + this.idJogador + '-jogando');
        $jogando.classList.remove('d-none');
        $jogando.classList.add('d-initial');
        $esperando = document.querySelector('#jogador-' + this.idJogador + '-esperando');
        $esperando.classList.remove('d-initial');
        $esperando.classList.add('d-none');
    },
    imprimeEsperando: function () {
        $esperando = document.querySelector('#jogador-' + this.idJogador + '-esperando');
        $esperando.classList.remove('d-none');
        $esperando.classList.add('d-initial');
        $jogando = document.querySelector('#jogador-' + this.idJogador + '-jogando');
        $jogando.classList.remove('d-initial');
        $jogando.classList.add('d-none');
    }
}

player2 = {
    pontos: 0,
    pontosAtuais: 0,
    idJogador: 2,
    jogaODado: function () {
        dado.dadoJogado();
    },
    imprimePontosAtuais: function () {
        document.querySelector('#jogador-' + this.idJogador + '-pontosAtuais').textContent = this.pontosAtuais;
    },
    imprimePontos: function () {
        document.querySelector('#jogador-' + this.idJogador + '-pontos').textContent = this.pontos;
    },
    imprimeJogando: function () {
        $jogando = document.querySelector('#jogador-' + this.idJogador + '-jogando');
        $jogando.classList.remove('d-none');
        $jogando.classList.add('d-initial');
        $esperando = document.querySelector('#jogador-' + this.idJogador + '-esperando');
        $esperando.classList.remove('d-initial');
        $esperando.classList.add('d-none');
    },
    imprimeEsperando: function () {
        $esperando = document.querySelector('#jogador-' + this.idJogador + '-esperando');
        $esperando.classList.remove('d-none');
        $esperando.classList.add('d-initial');
        $jogando = document.querySelector('#jogador-' + this.idJogador + '-jogando');
        $jogando.classList.remove('d-initial');
        $jogando.classList.add('d-none');
    }

}


pig = {
    jogadores: [player1, player2],
    jogadorAtual: 0,

    jogadorAtualJogaODado: function () {
        this.retornaJogadorAtual().jogaODado();
        this.verificaOValorDoDado();
    },
    jogadorAtualParaJogada: function () {
        this.retornaJogadorAtual().pontos += this.retornaJogadorAtual().pontosAtuais;
        this.retornaJogadorAtual().imprimePontos();
        this.proximoJogador();
    },
    retornaJogadorAtual: function () {
        return this.jogadores[this.jogadorAtual];
    },
    verificaOValorDoDado: function () {
        console.log(this.retornaJogadorAtual());
        if (dado.valorAtual == 1) {
            this.retornaJogadorAtual().imprimePontosAtuais();
            this.proximoJogador();
            this.mensagemNaTela("Você perdeu, é a vez do outro jogador");
        } else {
            this.retornaJogadorAtual().pontosAtuais += dado.valorAtual;
            this.retornaJogadorAtual().imprimePontosAtuais();
            this.mensagemNaTela("Você ganhou " + dado.valorAtual + " pontos.");
        }
    },
    proximoJogador: function () {
        this.retornaJogadorAtual().imprimeEsperando();
        this.retornaJogadorAtual().pontosAtuais = 0;
        this.retornaJogadorAtual().imprimePontosAtuais();
        this.jogadorAtual++;
        if (this.jogadorAtual == this.jogadores.length) this.jogadorAtual = 0;
        this.retornaJogadorAtual().imprimeJogando();
    },
    mensagemNaTela: function (mensagem) {
        document.querySelector('#mensagem').textContent = mensagem;
    }
}