const nascionalidade = prompt('Digite sua nascionalidade').trim().toLowerCase();

function nascionalidadeUser(nascionalidade) {
	switch (nascionalidade) {
		case 'brasileira':
			console.log(nascionalidade);
			break;
		case 'argentina':
			console.log(nascionalidade);
			break;
		case 'uruguaia':
			console.log(nascionalidade);
			break;
		case 'chilena':
			console.log(nascionalidade);
			break;
		case 'colombiana':
			console.log(nascionalidade);
			break;
		default:
			console.log('Nascionalidade não encontrada');
			break;
	}
}

console.log(nascionalidadeUser(nascionalidade));
