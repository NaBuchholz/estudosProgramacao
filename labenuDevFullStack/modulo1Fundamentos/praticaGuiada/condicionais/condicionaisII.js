//if aninhados

// let idadeDependente = 14;

/* 
idadeDependente >=13
idadeDependente <= 17
*/

/* if (idadeDependente >= 13) {
	if (idadeDependente <= 17) {
		console.log('Pode ter o cartão de dependente');
	} else {
		console.log('O limite de idade é 17 anos');
	}
} else {
	console.log('Para ter o cartão, o dependente precisa ter entre 13 e 17 anos');
}
 */
//operadores lógicos

/* if (idadeDependente >= 13 && idadeDependente <= 17) {
	console.log('Pode ter o cartão de dependente');
} else {
	console.log(
		'Para ter o cartão, o dependente precisa ter entre 13 e 17 anos '
	);
}
 */
//ternário

/* let chuva = true;

chuva ? console.log('leva sombrinha') : console.log('pode deixar a sombrina');

idadeDependente === 13
	? console.log('pode ter cartão')
	: console.log('consulte opções');

//Switch-case

let escolhaUsuario;

switch (escolhaUsuario) {
	case 1:
		console.log('Fácil');
		break;
	case 2:
		console.log('Black');
		break;
	case 3:
		console.log('Platinum');
		break;
	case 4:
		console.log('Master Gold');
		break;
	default:
		console.log('Ecolha uma das opções');
		break;
} */
//pode deixar o cartão como variável e ao invés de console.log só atribui a variável cartão a string com o tipo dele ex.: cartão = "Master Gold"

//Exercício de fixação

const numeroInput = +prompt('Digite um número');

function ehDivisivel(numeroInput) {
	if (numeroInput % 2 === 0 && numeroInput % 3 === 0) {
		numeroInput === 30
			? console.log('Acertou')
			: console.log('não foi desta vez!');
		switch (numeroInput) {
			case 6:
				console.log('Numero 6');
				break;
			case 12:
				console.log('Numero 12');
				break;
			case 18:
				console.log('Numero 18');
				break;
			case 24:
				console.log('Numero 24');
				break;
			case 30:
				console.log('Numero 30');
				break;
			default:
				console.log('Numero é maior que 30 ou menor que 6');
				break;
		}
		return 'divisivel por 2 e 3';
	} else if (numeroInput % 2 === 0 || numeroInput % 3 === 0) {
		return 'divisivel por 2 ou 3';
	} else {
		return 'não divisivel por 2 e 3';
	}
}

console.log(ehDivisivel(numeroInput));
