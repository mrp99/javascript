/*function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
}
let result = calc(4,2,"%");
console.log(result);*/

/*arrow function:
let calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}
let result = calc(5,2,"%");
console.log(result)*/

//window como nome próprio já diz tudo que mexe na janela do navegador

/*window.addEventListener('focus', event =>{
    console.log('focus');
});

document.addEventListener('click', event =>{
    console.log('click');
});*/

let agora = new Date ();

console.log(agora.getDate());
console.log(agora.getFullYear());
console.log(agora.getMonth());
console.log(agora.toLocaleDateString('pt-BR'));

