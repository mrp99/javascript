/* =  atribuição */
/* ==  comparação de valor */
/* ===  comparação de valor e igualdade */

/* !==  diferente é uma comparaçao distinta de tipos de dados - 
number(10) é diferente(!==) de ("10")string = true*/
/* !=  diferente é uma comparaçao  distinta de valor - 
number(10) é diferente(!=) string("10") - false */

/*tipos de operadores- matemáticos*/
/*tipos de operadores- lógicos*/
/*tipos de operadores- incremental ou decremental*/
/*tipos de operadores- terceiario*/
/*
let cor = "amarelo";

if(cor === "verde"){
    console.log("siga!");
} else if(cor === "amarelo"){
    console.log("Atenção!");
} else {
    console.log("Pare!");
}
*/

let cor = "azul";

switch (cor) {
    case "verde":
        console.log("Siga!");
        break;

    case "amarelo":
        console.log("Atenção!");
        break;
    
    case "vermelho":
        console.log("Pare!");
        break;
    
    default:
        console.log("Não sei!");
}