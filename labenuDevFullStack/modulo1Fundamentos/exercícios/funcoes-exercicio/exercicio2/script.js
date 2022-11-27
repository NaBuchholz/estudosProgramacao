//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

const somaNum = (n1 = 0, n2 = 0) => {
	return n1 + n2;
};
console.log('Seu resultado da soma é: ', somaNum(5, 8));

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo

const imprimeBoolean = (num1, num2) => {
	return 'O primeiro número é maior que o segundo? ', num1 >= num2;
};
console.log(imprimeBoolean(4, 8));

//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

const paridade = (valor) => {
	if (valor % 2 === 0) return 'É Par!';
	else {
		return 'Ímpar';
	}
};

console.log('Seu número é ímpar ou par? ', paridade(56987));

//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.

const salarioDesc = (nmr = 0) => {
	const valorInss = (nmr * 0.1).toFixed(2);
	return `O valor do salário líquido é: ${nmr - valorInss}`;
};

console.log(Number(salarioDesc(2653)));
