/*
Você será responsável por criar um programa, utilizando seus conhecimento em JavaScript, 
que calcula o IMC de um indivíduo e alerta o usuário se ele tem maior risco ao contrair 
o COVID-19 (true) caso o valor do IMC for maior ou igual do que 30 ou menor risco, 
IMC menor do que 30 (false).
• Será necessário o usuário entrar com os dados de altura (m) e peso (kg).
• Calcular o IMC
• Alertar o usuário o resultado (true ou false)
*/

function calcula_imc() {
    let altura = document.imcForm.altura.value;
    let peso = document.imcForm.peso.value;
    let calculo = (peso/altura ** 2);
    let resultado = Math.round(calculo);
    
 
    // if(calculo < 30) {
    // alert("Falso - Sobrepeso, está fora do risco de contrair Covid19 e o seu IMC é: " + resultado);
    // } else if(calculo >= 30 && calculo < 39.9) {
    // alert("Obesidade, tem risco de contrair Codiv19 e o seu IMC é: " + resultado);
    // } else {
    // alert("Obesidade Grave, tem risco alto de contrair Codiv19 e o seu IMC é: " + resultado);
    // }
    let isResultado = resultado >= 30 ? true : false;
    alert ("você" + isResultado + "no grupo de risco");

    let isResultado = resultado >= 30 ? "esta" : "não esta";
    alert ("você" + isResultado + "no grupo de risco");