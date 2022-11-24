/*
Parte 1
Operações
*/

const _operacaoA = 5 >= 20 && 5 < 2;
console.log(`5 é maior que 20 e também é menor que 2? ${_operacaoA}`);

const _operacaoB = 5 === 5 || 5 === '5';
console.log(`5 é igual a 5 ou é igual a “5”? ${_operacaoB}`);

const _operacaoC = !(20 > 50);
console.log(`negação de (vinte é maior que cinquenta): ${_operacaoC}`);
const _operacaoD = !(20 > 50 || 50 > 60);
console.log(
  `negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) ${_operacaoD}`
);

// Parte 2

const _vendasComissao = [5784.5, 3418.41, 4124.1, 1874, 7000, 9450] * 0.1;
const _inss = _salarioBruto * 0.05;
console.log(_salarioBruto);

//1
const _salarioBruto = 2000 + 45.5;

//2
console.log(_vendasComissao[0]);

//3
console.log((_vendasComissao[0] + _salarioBruto - _inss).toFixed(2));

//4 - Isso não serve agora
console.log();
