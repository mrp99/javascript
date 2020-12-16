/*Dois jogadores de basquete estão discutindo qual time tem maior número médio de pontos feitos em nos últimos 4 jogos.
O Los Angeles Lakers nos últimos 4 jogos fez: 89, 120, 103 e 100 pontos.
O Golden State Warriors nos últimos 4 jogos fez: 97, 105, 110 e 99 pontos.
Você tem como objetivo calcular a média de pontos dos times e alertar o usuário qual é o time que tem a
maior média. Existem várias formas de fazer, então tente fazer utilizando o que mais achou legal durante a
aula, se desafiem a dar o melhor de vocês.
*/

let lakers = 89+120+103+100;
let warriors = 97+105+110+99;
let mediaLakers = lakers/4;
let mediaWarriors = warriors/4;
console.log(lakers, warriors, mediaLakers, mediaWarriors);
//operador ternario para duas variáveis
let resul = (mediaLakers >= mediaWarriors) ? ' Lakers' : 'Warriors';
alert("O time com maior média de pontos é" + resul);
console.log(resul);