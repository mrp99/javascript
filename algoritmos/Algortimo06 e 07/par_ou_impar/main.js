/* Jogo Par ou impar - para objeto (mundo real)
1.Decide entre Par ou Impar.
2.Pensa no numero que vai colocar(Random) - 0 a 5
3.Mostrar a mão, com o número de dedos que coloquei.
4.Contar quantos dedos tem na mão do player1 + player2
5.  Se o número for par, quem pediu par ganhou
    se o número for impar, quem pediu impar ganhou.
*/

let player1 = {
    id: 1,
    parOuImpar: undefined,
    cerebro: {
        dedos: 0,
        // this é uma referencia ao objeto cerebro e nao player, this é referencia atual outro objseto
        //- para acessar o jogador player.dedos
        pensarNumero: function() {
            this.dedos = Math.floor(Math.random()*6);
        },
        mostrarMao: function() {
            document.querySelector('#mao-player-1').textContent = this.dedos;
        }
    }
}


let player2 = {
    id: 2,
    parOuImpar: undefined,
    cerebro: {
        dedos: 0,
        // this é uma referencia ao objeto cerebro e nao player, this é referencia atual outro objseto
        //- para acessar o jogador player.dedos
        pensarNumero: function() {
            this.dedos = Math.floor(Math.random()*6);
        },
        mostrarMao: function() {
            document.querySelector('#mao-player-2').textContent = this.dedos;
        }
    }
}

let parOuImpar = {
    jogadores: [player1, player2],
    atribuiParOuImparAosPlayers: function (select) {
        //ver quem esta selecionado = select.selectedIndex (1=par, 2=impar) e ao selecionar(traz o valor do option do html)
        let value = (select[select.selectedIndex].value == "par");
        this.jogadores[0].parOuImpar = value;
        this.jogadores[1].parOuImpar = !value;
    },
    jogada: function (){
        if (this.jogadores[0].parOuImpar === undefined) {
            alert("selecione Par ou Impar");
            return;
        }
        this.jogadores[0].cerebro.pensarNumero();
        this.jogadores[1].cerebro.pensarNumero();

        this.jogadores[0].cerebro.mostrarMao();
        this.jogadores[1].cerebro.mostrarMao();

        let total = this.jogadores[0].cerebro.dedos+this.jogadores[1].cerebro.dedos;
        //console.log(total);
        if (total % 2 == 0){
            if (this.jogadores[0].parOuImpar) 
                alert("Jogador 1 venceu, total = "+total+"o valor é Par");
            else
                alert("Jogador 2 venceu, total = "+total+"o valor é Par");
        } else {
            if (this.jogadores[0].parOuImpar) 
                alert("Jogador 1 venceu, total = "+total+"o valor é Impar");
            else
                alert("Jogador 2 venceu, total = "+total+"o valor é Impar");
        }
    }   
}