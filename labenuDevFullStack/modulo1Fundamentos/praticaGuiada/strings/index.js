/* Vamos criar um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem:
A cor favorita de pessoa é cor;

Vamos fazer o programa duas vezes. Na primeira, com concatenação, e a segunda com Template Strings. */

/* let userName = prompt('QUal é o seu nome?');
let userFavColor = prompt('Qual sua cor favorita?');
let frase = 'A cor favorita de ' + userName + ' é ' + userFavColor;

console.log('Concatenação: ', frase);

console.log(`Template string: A cor favorita de ${userName} é ${userFavColor}`);
 */
//---------------------------------
/*
Agora, vamos alterar a forma com que o texto aparece.
Altere a primeira string para que a pessoa também envie sua citação favorita. Essa citação deve ser impressa entre aspas.
Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):
*/

/* userName = [
	prompt('QUal é o seu nome?'),
	prompt('Escreva uma citação favorita'),
];
userFavColor = `Nome: ${userName[0]}\nCor favorita: ${prompt(
	'Sua cor favorita é?'
)}`;
 */
/* const citacao = 'Confia no processo';

const fraseAlterada =
	'A cor favorita de ' +
	userName +
	' é ' +
	userFavColor +
	', minha citação favorita é:' +
	'"' +
	citacao +
	'"';

console.log(fraseAlterada);

console.log(
	`Template string: Meu nome é: ${userName}\nMinha cor favorita é: ${userFavColor}`
); */
//--------------------------------------------
/*
Vamos alterar a forma de nossa exibição de strings agora.
Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
Exiba no console quantos caracteres tem o nome da pessoa.
Cheque se o nome da pessoa possui a letra A
*/
/* const userNameUp = userName.toUpperCase;

const fraseAlterada1 =
	'Meu nome é ' +
	userNameUp +
	'\n' +
	' Existem ' +
	userNameUp.length +
	' caracteres' +
	'\n' +
	'meu nome possui a letra A? ' +
	userNameUp.includes('A');

console.log(fraseAlterada1);
 */
//-----------------------------------
//Exercicío de Fixação
/* 
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a mensagem no formato abaixo:
O e-mail emailDoUsuario foi cadastrado com sucesso. Boas vindas, nomeDoUsuario!*/

let dadosUsuario = [
	prompt('Digite seu nome'),
	prompt('Digite seu melhor email'),
];

/*
2. Adicione à mensagem anterior a quantidade de caracteres presente no nome da pessoa.
*/

console.log(
	`O e-mail ${
		dadosUsuario[1]
	} foi cadastrado com sucesso.\nBoas vindas, ${dadosUsuario[0].trim()}!\nSeu nome tem ${
		dadosUsuario[0].trim().length
	} caracteres`
);

/*
3. A seguir, faça o que se pede:
Substitua todas as letras R na frase criada, por letras X
Verifique se o e-mail da pessoa possui @, e imprima a resposta da checagem no console.
*/
let fraseNova = `O e-mail ${dadosUsuario[1]} foi cadastrado com sucesso.\nBoas vindas, ${dadosUsuario[0]}!`;

let fraseX = fraseNova.toLowerCase.replaceAll('r', 'x');

let verrificacao = dadosUsuario[1].includes('@');

console.log(verrificacao);
