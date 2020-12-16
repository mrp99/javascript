
let lakers = {
    nome: 'Lakers',
    pontos: [89, 120, 103, 100],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma = this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}
let goldenState = {
    nome: 'goldenState',
    pontos: [97, 105, 110, 99],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma = this.pontos[i];
        }
        return soma / this.pontos.length;
    }
}
let cleveLand = {
    nome: 'cleveLand',
    pontos: [90, 117, 100, 89],
    media: function () {
        let soma = 0;
        for (let i = 0; i < this.pontos.length; i++) {
            soma = this.pontos[i];
        }
        return  soma / this.pontos.length;
    }
}

let nba = {
        team : [lakers, goldenState, cleveLand],
        winner = function(){
            this.media();
            let campeao = this.team[0].media();
            for(i=1; i<this.team[i].media().length; i++){
                if(campeao.media() < this.team[i].media()){
                    campeao = this.team[i];
                }
            }
            console.log("O time campeão é: " + campeao.nome);
        }
        
    }




