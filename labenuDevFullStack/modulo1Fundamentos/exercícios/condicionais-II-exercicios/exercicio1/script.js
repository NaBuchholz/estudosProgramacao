const inputNumber = +prompt('Digite um número');

ehDivisivel23If = (inputNumber) => {
	if (inputNumber % 2 === 0) {
		inputNumber % 3 === 0
			? console.log(`${inputNumber} é divisível por 2 e 3!!`)
			: console.log(
					`A divisão de ${inputNumber} por 3 é: ${(inputNumber / 3).toFixed(
						2
					)}...`
			  );
		console.log(`${inputNumber} é divisível por 2!!`);
		if (inputNumber % 3 === 0) {
			console.log(`${inputNumber} é divisível por 3!!`);
		}
	} else {
		console.log(`${inputNumber} não é divisível por 2 ou 3!!`);
	}
	return 'Obrigado e volte sempre!!!';
};

console.log(ehDivisivel23If(inputNumber));

ehDivisivel23Logico = (inputNumber) => {
	console.log('------Lógico------');
	if (inputNumber % 2 === 0 || inputNumber % 3 === 0) {
		return `${inputNumber} é divisível por 2 ou 3!!`;
	} else {
		return `${inputNumber} NÃO divisível por 2 ou 3!!`;
	}
};

console.log(ehDivisivel23Logico(inputNumber));
