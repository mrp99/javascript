/*Dois jogadores de basquete estão discutindo qual time tem maior número médio de pontos feitos em nos últimos 4 jogos.
O Los Angeles Lakers nos últimos 4 jogos fez: 89, 120, 103 e 100 pontos.
O Golden State Warriors nos últimos 4 jogos fez: 97, 105, 110 e 99 pontos.
O Cleveland Cavaliers também quis entrar na disputa. Os pontos dos últimos 4 jogos são 90,
117, 108, 89.
Lembre que
Você tem como objetivo calcular a média de pontos dos times e alertar o usuário qual é o time que tem a
maior média. Existem várias formas de fazer, então tente fazer utilizando o que mais achou legal durante a
aula, se desafiem a dar o melhor de vocês.
*/
let x, y, z;
let lakers = 89+120+103+100;
let warriors = 97+105+110+99;
let cavaliers = 90+117+108+89.
x = lakers/4;
y = warriors/4;
z = cavaliers/4;
console.log(x, y, z);
//como é um comando por linha nao precisa colocar {}
if(x > y)
  alert("O time com maior média de pontos: " + x + " é Lakers");
 else if (y < x && y > z)
    alert("O time com maior média de pontos: " + y + " é Warriors");
    else 
      alert("O time com maior média de pontos: " + z + " é Cavaliers");
    



