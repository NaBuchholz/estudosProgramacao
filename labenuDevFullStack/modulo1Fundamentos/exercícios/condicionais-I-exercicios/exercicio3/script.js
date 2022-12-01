let nascionalidade = prompt('Digite sua nascionalidade').trim.toLowerCase();

function nascionalidadeUser(nascionalidade) {
	if (nascionalidade === 'brasileira') {
		return nascionalidade;
	} else if (nascionalidade === 'argentina') {
		return nascionalidade;
	} else if (nascionalidade === 'uruguaia') {
		return nascionalidade;
	} else if (nascionalidade === 'chilena') {
		return nascionalidade;
	} else if (nascionalidade === 'colombiana') {
		return nascionalidade;
	} else {
		return `${nascionalidade}: não encontrada!`;
	}
}

console.log(nascionalidadeUser(nascionalidade));
