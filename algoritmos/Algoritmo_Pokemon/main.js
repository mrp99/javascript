class Pokemon {
    constructor(idade,vida, velocidade) {
        this.idade = idade;
        this.vida = vida;
        this.velocidade = velocidade;
    }
}

class Planta extends Pokemon {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    recebeDano(tipo,dano){
        if (tipo === 'fogo'){
            dano = vida - (dano * 2);
        }
        console.log('recebi o dano do tipo' + tipo );
    } 
}

class bulbasaur extends Planta {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi folha navalia!");
    }
    ataque2(){
        console.log("ataque foi chicote de vinha!");
    }
    emitirSom(){
        console.log("o som emitdo é bulbasaur");
    }
}

class Ivysaur extends Planta {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi folha navalia!");
    }
    ataque2(){
        console.log("ataque foi chicote toxico");
    }
    emitirSom(){
        console.log("o som emitdo é Ivysaur");
    }
}

class Venusaur extends Planta {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi bomba de polen!");
    }
    ataque2(){
        console.log("ataque foi tufão solar");
    }
    emitirSom(){
        console.log("o som emitdo é Venusaur");
    }
}

class Fogo extends Pokemon {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    recebeDano(tipo,dano){
        if (tipo === 'água'){
            dano = vida - (dano * 2);
        }
        console.log('recebi o dano do tipo' + tipo );
    } 
}

class Charmander extends Fogo {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi presas de fogo");
    }
    ataque2(){
        console.log("ataque foi calda de chamas");
    }
    emitirSom(){
        console.log("o som emitdo é bulbasaur");
    }
}

class Charmeleon extends Fogo {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi presas de fogo");
    }
    ataque2(){
        console.log("ataque foi lancha chamas");
    }
    emitirSom(){
        console.log("o som emitdo é Charmeleon!");
    }
}

class Charizard extends Fogo {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi golpe de garra!");
    }
    ataque2(){
        console.log("ataque foi chama furacão");
    }
    emitirSom(){
        console.log("o som emitdo é Charizard");
    }
}

class Agua extends Pokemon {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    recebeDano(tipo,dano){
        if (tipo === 'água'){
            dano = vida - (dano * 2);
        }
        console.log('recebi o dano do tipo' + tipo );
    } 
}

class Squirtle  extends Agua {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi bolha");
    }
    ataque2(){
        console.log("ataque foi chuva borrifante");
    }
    emitirSom(){
        console.log("o som emitdo é Squirtle");
    }
}

class Wartortle extends Agua {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi água corte");
    }
    ataque2(){
        console.log("ataque foi Cachoeira");
    }
    emitirSom(){
        console.log("o som emitdo é Wartortle!");
    }
}

class Blastoise extends Agua {
    constructor(idade, vida, velocidade){
        super(idade, vida, velocidade);
    }
    ataque1(){
        console.log("ataque foi Tormenta Poderosa");
    }
    ataque2(){
        console.log("ataque foi Porrifada de Foguete");
    }
    emitirSom(){
        console.log("o som emitdo é Blastoise");
    }
}
