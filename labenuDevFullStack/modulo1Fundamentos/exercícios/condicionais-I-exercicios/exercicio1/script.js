function ehPar(num) {
	if (num % 2 === 0) {
		return 'O número é par'; // return sempre dentro do if
	} else {
		return 'O número é ímpar';
	}
}

const num = 7;

console.log(ehPar(num));
//Porque me da um segundo valor undefined ali também?? o código não deveria parar de executar se a condição for atendida?? PRECISA SEMPRE DE UM RETURN PARA A FUNÇÃO, SE DENTRO DO IF ELE PARA O RESTO DA EXECUÇÃO.
