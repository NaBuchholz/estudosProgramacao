/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 */

class Carro {
	marca;
	cor;
	combustivelKM;

	constructor(marca, cor, combustivelKM) {
		this.marca = marca;
		this.cor = cor;
		this.combustivelKM = combustivelKM.toFixed(3);
	}

	calculaValorDaViagem(kmViagem, precoCombustivel) {
		const kmPorLitro = 5;
		return `O gasto médio de combustível é de ${(
			kmViagem *
			this.combustivelKM *
			precoCombustivel
		).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
	}
}

console.log((uno = new Carro('Volvo', 'Prata', 1 / 12)));

console.log(uno.calculaValorDaViagem(100, 5));

/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

//     IMC em adultos Condição:
//     - Abaixo de 18.5 Abaixo do peso;
//     - Entre 18.5 e 25 Peso normal;
//     - Entre 25 e 30 Acima do peso;
//     - Entre 30 e 40 Obeso;
//     - Acima de 40 Obsidade Grave;

class Pessoa {
	nome;
	peso;
	altura;

	constructor(nome, peso, altura) {
		this.nome = nome;
		this.altura = altura;
		this.peso = peso;
	}
	calculaImc() {
		return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
	}
	classificarImc() {
		const imc = this.calculaImc();

		if (imc < 18.5) {
			return `Seu IMC é ${imc} e você está abaixo do peso`;
		} else if (imc >= 18.5 && imc < 25) {
			return `Seu IMC é ${imc} e você está no peso normal`;
		} else if (imc >= 25 && imc < 30) {
			return `Seu IMC é ${imc} e você está acima do peso`;
		} else if (imc >= 30 && imc <= 40) {
			return `Seu IMC é ${imc} e você está obeso`;
		} else if (imc > 40) {
			return `Seu IMC é ${imc} e você está com obsidade grave`;
		} else {
			return `Seu IMC não foi encontrado, tente novamente!`;
		}
	}
}

const jose = new Pessoa('José', 80, 1.75);

console.log(jose);

console.log(jose.classificarImc());
