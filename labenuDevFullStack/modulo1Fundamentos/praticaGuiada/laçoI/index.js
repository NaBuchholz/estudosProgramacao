/* Vamos criar um sistema em que a pessoa será solicitada a inserir vários números, um após o outro.


Quando digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números indicados.

Ex.: Vamos supor que ele coloque:  10, 3, 50, 7, 0. 
O resultado deve ser: 70 */

/* let numero = +prompt('Digite um número');

let resultadoSoma = 0;

while (numero !== 0) {
	resultadoSoma = resultadoSoma + numero;
	numero = +prompt('Digite um número');
}

console.log(resultadoSoma); */

/* Vamos escrever um programa que recebe um número por input de usuário.
Esse programa deve escrever os números de 0 até o valor que foi digitado pela pessoa.
Para isso, vamos utilizar um laço for que roda por X vezes, onde X é o número digitado. */

/* numero = +prompt('Digite um número');

for (let i = 0; i <= numero; i++) {
	console.log(i);
} */

/* Vamos criar um array com 7 números, e utilizar um for para percorrer os índices deste array, imprimindo no console a cada linha:
“O número do índice ${indice} é ${numero[indice]}” */

/* const array = [5, 8, 10, 213, 4, 9, 100];

for (let i = 0; i < array.length; i++) {
	console.log(`O número do índice ${i} é ${array[i]}`);
} */

// Exercicio de fixação
/* 1. Utilizando o laço while, escreva um código que recebe um prompt esperando seu tipo de usuário. O tipo de usuário é representado pelas letras abaixo:
“A”: Administrador;
“B”: Usuário comum;
“C”: Usuário assinante

Enquanto o valor passado for diferente da letra que representa “Administrador”, o laço deve se repetir, exibindo a mensagem: “Acesso negado.”
Quando o valor for igual ao da letra que representa “Administrador”, o laço deve parar, e a mensagem “Boas-vindas, admin!” deve ser impressa. */

/* let userType = prompt(
	`Digite seu tipo de usuário\n“A”: Administrador\n“B”: Usuário comum\n“C”: Usuário assinante`
).toUpperCase;

while (userType !== 'A') {
	alert('Acesso Negado');
	userType = prompt(
		`Digite seu tipo de usuário\n“A”: Administrador\n“B”: Usuário comum\n“C”: Usuário assinante`
	).toUpperCase;
}
 */
function mostraTabuada(numero) {
	for (let i = 1; i <= 10; i++) {
		console.log(`${numero}x${i}=${numero * i}`);
	}
}

// mostraTabuada(2);

(mostraArray = () => {
	let arrayDeStrings = ['Nathalia', 'eu', 'tex'];
	console.log(`Meu array normal ${arrayDeStrings}`);
	for (let i = 0; i < arrayDeStrings.length; i++) {
		console.log(`Meu array em caixa alta!!\n${arrayDeStrings[i].toUpperCase()}`);
	}
})();
