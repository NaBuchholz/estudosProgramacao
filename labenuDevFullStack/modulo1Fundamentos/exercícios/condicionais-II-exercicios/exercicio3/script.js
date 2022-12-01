//código a ser reescrito
const nome = 'José';

const idade = 17;
/* 
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
 */
//reescrevendo

nome === 'José' ? console.log('Oi, Zé!') : console.log('Olá, ' + nome);

idade >= 18
	? console.log('pode tirar carteira de motorista!')
	: console.log('Ainda não pode tirar carteira de motorista');
