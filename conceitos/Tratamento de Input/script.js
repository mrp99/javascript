function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Por favor, digite um valor valido para programa!")
    } else {
        return number;
    }
}

checarNumero(5);
checarNumero('salhd');

let number = prompt("Digite um numero!");

checarNumero(number);