let georgia = {
    nome: "Georgia",
    pontos: [99,100,101,102,104,105],
    media: function(){
        let soma = 0;
        for (let i=0; i<this.pontos.length; i++){
            soma+=this.pontos[i];
        }
        return soma/this.pontos.length;
    }
}

let newyork = {
    nome: "Newyork",
    pontos: [100,99,75,120,119,99],
    media: function(){
        let soma = 0;
        for (let i=0; i<this.pontos.length; i++){
            soma+=this.pontos[i];
        }
        return soma/this.pontos.length;
    }
}

let florida = {
    nome: "Florida",
    pontos: [85,80,75.125,111,98],
    media: function(){
        let soma = 0;
        for (let i=0; i<this.pontos.length; i++){
            soma+=this.pontos[i];
        }
        return soma/this.pontos.length;
    }
}

let texas = {
    nome: "Texas",
    pontos: [89.122,132,85,90,99],
    media: function(){
        let soma = 0;
        for (let i=0; i<this.pontos.length; i++){
            soma+=this.pontos[i];
        }
        return soma/this.pontos.length;
    }
}

let ncca = {
    teams = [georgia,newyork,florida,texas],
    winner: function(){
        let campeao = this.teams[0];//armazenamento o objeto (georgia)
        for (let i = 1; i < this.teams.length; i++) {
                if (this.teams[i].media() > campeao.media()){
                    campeao = this.teams[i];//armazenando objeto this.teams[i]
                }
        }
        console.log(campeao.nome+' é o campeao!');
    }
}
ncca.winner();



