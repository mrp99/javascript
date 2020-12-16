/*Verificando padrões com Regex 
- depois da definição do padrão por meio do regex;
- utilizandoo metodo test() para verificar se o padrão é retornado;
- a resposta esperar para o teste é true ou false;
*/
const reg1 = new RegExp('bola');
 console.log(reg1.test("Tem bola?"));
 console.log(reg1.test("Não tem!"));

 const reg2 = /bola/;

 let text = 'Tem bola na cesta!';

 console.log(reg2.test("Tem bola?"));
 console.log(reg2.test("Não tem!"));
 console.log(reg2.test(text));

 console.log(/quadrado/.test('onde tem um quadrado'));
 console.log(/quadrado/.test('1241352562462quadrado124235346y479'));
