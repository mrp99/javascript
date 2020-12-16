function saudaçao(nome){
    if(typeof nome != 'string'){
        throw new Error("o valor digitado precisar ser caracter do tipo string!");
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudaçao("Marcel");
saudaçao(5);

console.log("teste!");