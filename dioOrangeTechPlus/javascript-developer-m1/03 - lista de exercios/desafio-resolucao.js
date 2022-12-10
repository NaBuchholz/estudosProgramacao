/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
console.log('--------Exercício 1--------\n');
const nota1 = 0;
const nota2 = 4.5;
const nota3 = 7.5;
const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if (media < 5) {
	console.log(`Sua média foi ${media}: Reprovado 😥`);
} else if (media >= 5 && media <= 7) {
	console.log(`Sua média foi ${media}: Recuperação ❗`);
} else {
	console.log(`Sua média foi ${media}: Aprovado 😂`);
}

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsidade Grave;
*/
console.log('\n--------Exercício 2--------\n');
const altura = 1.7;
const peso = 30.5;
const imc = (peso / Math.pow(altura, 2)).toFixed(2);

if (imc < 18.5) {
	console.log(`Seu imc é ${imc} e você está abaixo do peso`);
} else if (imc >= 18.5 && imc < 25) {
	console.log(`Seu imc é ${imc} e você está no peso normal`);
} else if (imc >= 25 && imc < 30) {
	console.log(`Seu imc é ${imc} e você está acima do peso`);
} else if (imc >= 30 && imc <= 40) {
	console.log(`Seu imc é ${imc} e você está obeso`);
} else if (imc > 40) {
	console.log(`Seu imc é ${imc} e você está com obsidade grave`);
} else {
	console.log(`Seu imc não foi encontrado, tente novamente!`);
}

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1- À vista Débito, recebe 10% de desconto;
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
console.log('\n--------Exercício 3--------\n');
const precoEtiqueta = 100;
let precoTotal;
const condicaoDePagamento = 4;

if (condicaoDePagamento === 1) {
	console.log(
		`Você pagará ${(precoEtiqueta - precoEtiqueta * 0.1).toLocaleString(
			'pt-BR',
			{
				style: 'currency',
				currency: 'BRL',
			}
		)}`
	);
} else if (condicaoDePagamento === 2) {
	console.log(
		`Você pagará ${(precoEtiqueta - precoEtiqueta * 0.15).toLocaleString(
			'pt-BR',
			{
				style: 'currency',
				currency: 'BRL',
			}
		)}`
	);
} else if (condicaoDePagamento === 3) {
	console.log(
		`Você pagará ${precoEtiqueta.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		})}`
	);
} else if (condicaoDePagamento === 4) {
	console.log(
		`Você pagará ${(precoEtiqueta + precoEtiqueta * 0.1).toLocaleString(
			'pt-BR',
			{
				style: 'currency',
				currency: 'BRL',
			}
		)}`
	);
} else {
	console.log('Forma de pagamento não detectada, tente novamente');
}
