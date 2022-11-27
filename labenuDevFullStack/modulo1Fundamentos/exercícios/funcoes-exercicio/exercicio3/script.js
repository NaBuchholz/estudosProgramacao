// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

let num1;
let num2;
function soma(num1, num2) {
	return `A soma de ${num1} e ${num2} é igual a ${num1 + num2}`;
}
function sub(num1, num2) {
	return `A subtração de ${num1} e ${num2} é igual a ${num1 - num2}`;
}
function div(num1, num2) {
	return `A divisão de ${num1} e ${num2} é igual a ${num1 * num2}`;
}
function mult(num1, num2) {
	return `A multiplicação de ${num1} e ${num2} é igual a ${num1 / num2}`;
}

//b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

num1 = Number(prompt('Digite o primeiro número'));
num2 = Number(prompt('Digite o segundo número'));

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

soma(num1, num2);
sub(num1, num2);
div(num1, num2);
mult(num1, num2);

//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const resSoma = soma(num1, num2);
const resSub = sub(num1, num2);
const resDiv = div(num1, num2);
const resMult = mult(num1, num2);

console.log(`${resSoma}\n${resSub}\n${resDiv}\n${resMult}`);
