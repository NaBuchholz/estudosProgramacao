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
//1
const _salarioBruto = 2000 + 45.5;


console.log(`O salário bruto de Fulano é: ${_salarioBruto}`);


const _vendasComissaoJan = 5784.5 * 0.1
const _vendasComissaoFev = 3418.41*0.1
const _vendasComissaoMar = 4124.1*0.1
const _vendasComissaoAbr = 1874*0.1
const _vendasComissaoMai = 7000*0.1
const _vendasComissaoJun = 9450*0.1

//2
console.log(`Fulano recebera de comissão em janeiro ${Number(_vendasComissaoJan)}`);

//3
const _inssJan = (_salarioBruto+_vendasComissaoJan) * 0.05;
console.log(`Fulano terá um desconto de ${Number(_inssJan).toFixed(2)}`);
//4
const _inssFev = (_salarioBruto+_vendasComissaoFev) * 0.05;
const _inssMar = (_salarioBruto+_vendasComissaoMar)*0.05
const _inssAbr = (_salarioBruto+_vendasComissaoAbr)*0.05
const _inssMai = (_salarioBruto+_vendasComissaoMai)*0.05
const _inssJun = (_salarioBruto+_vendasComissaoJun)*0.05

let _receitaSemestral = (((_salarioBruto+_vendasComissaoJan)-_inssJan)+((_salarioBruto+_vendasComissaoFev)-_inssFev)+((_salarioBruto+_vendasComissaoMar)-_inssMar)+((_salarioBruto+_vendasComissaoAbr)-_inssAbr)+((_salarioBruto+_vendasComissaoMai)-_inssMai)+((_salarioBruto+_vendasComissaoJun)-_inssJun))


console.log(`A receita Semestral de Fulano é:${Number(_receitaSemestral).toFixed(2)}`);

//5
console.log(`À média salarial de Fulano é: ${Number(_receitaSemestral/6).toFixed(2)}`);
