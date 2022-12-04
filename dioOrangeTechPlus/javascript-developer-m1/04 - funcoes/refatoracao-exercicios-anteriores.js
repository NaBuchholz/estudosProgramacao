/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

3 variáveis:

1 - Preço do combustível
2 - Gasto médio de combustível do carro por KM
3 - Distância em KM da viagem. 

 */

function calculaValorGastoDaViagem(distanciaPercorrida, kmPorLitro, precoCombustivel) {
	return `Você ira pagar ${((distanciaPercorrida / kmPorLitro) * precoCombustivel).toLocaleString(
		'pt-BR',
		{
			style: 'currency',
			currency: 'BRL',
		}
	)} nesta viagem!!!`;
}

console.log(
	`-----Exercício valor gasto de combustível-----\n${calculaValorGastoDaViagem(15, 2, 5.5)}\n`
);

// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

function calculaViagemTotalGasto(kmPorLitros, distanciaEmKm, tipoCombustivel) {
	const litrosConsumidos = distanciaEmKm / kmPorLitros;
	const precoEtanol = 3;
	const precoGasolina = 5;
	if (tipoCombustivel === 'etanol') {
		return `O preço total do combustível ${tipoCombustivel} gasto é de ${(
			litrosConsumidos * precoEtanol
		).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
	} else if (tipoCombustivel === 'gasolina') {
		return `O preço total do combustível ${tipoCombustivel} gasto é de ${(
			litrosConsumidos * precoGasolina
		).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
	} else {
		return 'Dados invalidos';
	}
}

console.log(calculaViagemTotalGasto(8, 125.4, 'etanol'));
//     1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

//     Média = (nota 1 + nota 2 + nota 3) / 3;

//     Classificação:
//     - Média menor que 5, reprovação;
//     - Média entre 5 e 7, recuperação;
//     - Média acima de 7, passou de semestre;
//

function calculaMediaEscolar(nota1, nota2, nota3) {
	const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
	console.log('--------Exercício 1--------\n');

	if (media < 5) {
		return `Sua média foi ${media}: Reprovado 😥`;
	} else if (media >= 5 && media <= 7) {
		return `Sua média foi ${media}: Recuperação ❗`;
	} else {
		return `Sua média foi ${media}: Aprovado 😂`;
	}
}
console.log(calculaMediaEscolar(5, 9, 10));

//     2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

//     Formula do IMC:
//     IMC = peso / (altura * altura)

//     Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

//     IMC em adultos Condição:
//     - Abaixo de 18.5 Abaixo do peso;
//     - Entre 18.5 e 25 Peso normal;
//     - Entre 25 e 30 Acima do peso;
//     - Entre 30 e 40 Obeso;
//     - Acima de 40 Obsidade Grave;

function calculaImc(altura, peso) {
	return (peso / Math.pow(altura, 2)).toFixed(2);
}

function mostraCondicaoDePeso(calculaImc) {
	if (calculaImc < 18.5) {
		return `Seu IMC é ${calculaImc} e você está abaixo do peso`;
	} else if (calculaImc >= 18.5 && calculaImc < 25) {
		return `Seu IMC é ${calculaImc} e você está no peso normal`;
	} else if (calculaImc >= 25 && calculaImc < 30) {
		return `Seu IMC é ${calculaImc} e você está acima do peso`;
	} else if (calculaImc >= 30 && calculaImc <= 40) {
		return `Seu IMC é ${calculaImc} e você está obeso`;
	} else if (calculaImc > 40) {
		return `Seu IMC é ${calculaImc} e você está com obsidade grave`;
	} else {
		return `Seu IMC não foi encontrado, tente novamente!`;
	}
}

console.log(`\n--------Exercício 2--------\n\n${mostraCondicaoDePeso(calculaImc(1.7, 55))}`);

//     3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
//     Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

//     Código Condição de pagamento:
//     1- À vista Débito, recebe 10% de desconto;
//     2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
//     3- Em duas vezes, preço normal de etiqueta sem juros;
//     4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

console.log('\n--------Exercício 3--------\n');

function aplicaDesconto(precoEtiqueta, desconto) {
	return precoEtiqueta - precoEtiqueta * (desconto / 100);
}

function calculaPrecoTotal(precoEtiqueta, condicaoDePagamento) {
	if (condicaoDePagamento === 1) {
		return `Você pagará ${aplicaDesconto(precoEtiqueta, 10).toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})} nesta peça!`;
	} else if (condicaoDePagamento === 2) {
		return `Você pagará ${aplicaDesconto(precoEtiqueta, 15).toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})} nesta peça!`;
	} else if (condicaoDePagamento === 3) {
		return `Você pagará ${precoEtiqueta.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})} nesta peça!`;
	} else if (condicaoDePagamento === 4) {
		return `Você pagará ${(precoEtiqueta + precoEtiqueta * 0.1).toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})} nesta peça!`;
	} else {
		return 'Forma de pagamento não detectada, tente novamente';
	}
}

console.log(calculaPrecoTotal(120, 2));
