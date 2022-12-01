const idade = +prompt('Qual é a sua idade?');
const ensinoMedio = confirm('Você terminou o ensino médio?');
const cursandoFaculdade = confirm('Você esta cursando alguma faculdade?');

function escolaridade(idade, ensinoMedio, cursandoFaculdade) {
	if (idade >= 18) {
		console.log('Maior de idade');
	} else {
		console.log('Menor de idade');
	}
	if (ensinoMedio) {
		console.log('Terminou o ensino médio');
	} else {
		console.log('Não terminou o ensino médio');
	}
	if (!cursandoFaculdade) {
		console.log('Não esta cursando faculdade');
	} else {
		console.log('Cursando Faculdade');
	}
	return 'Isso é tudo pessoal!';
}

console.log(escolaridade(idade, ensinoMedio, cursandoFaculdade));
