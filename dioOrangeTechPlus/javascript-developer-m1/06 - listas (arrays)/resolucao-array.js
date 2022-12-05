// 1) Crie um programa que dado um número imprima a sua tabuada.
function mostraTabuada(numero) {
	for (let i = 1; i <= 10; i++) {
		console.log(`${numero}x${i}=${numero * i}`);
	}
}

console.log(mostraTabuada(5));

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

let listaDeNumeros = [1, 58, 10, 11, 13, 20, 223];

imprimirPar = () => {
	for (let numero of listaDeNumeros) {
		if (numero % 2 === 0) {
			console.log(`${numero} é par!`);
		}
	}
};

imprimirPar();
// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

let listaDeNomes = ['Veronica', 'Alex', 'Caio', 'vanessa'];

listaDeNomes = listaDeNomes.map((letras) => {
	return letras.toUpperCase();
});

console.log(listaDeNomes);
imprimeNomesComV = () => {
	for (const nome of listaDeNomes) {
		if (nome[0] === 'V') {
			console.log(`'V' de ${nome}`);
		}
	}
};

console.log(imprimeNomesComV(listaDeNomes));

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
listaDeNumeros = [10];

preencheListaPar = (num1, num2) => {
	while (num1 <= num2) {
		if (num1 % 2 === 0) {
			listaDeNumeros.push(num1);
		}
		num1++;
	}
	// Enquanto o último valor da lista não for 50 adicione valores pares  os valores pares dela
	return listaDeNumeros;
};

console.log(preencheListaPar(10, 50));
// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//    Ex de lista = [2, 7, 3, 8, 10, 4]
const mediaAlunos = [2, 7, 3, 8, 10, 4];
let mediasRec = [];

//com forEach
mediaAlunos.forEach((media) => {
	if (media < 5) {
		mediasRec.push(media);
	}
});

console.log(mediasRec);

//com for of
for (const recuperacao of mediaAlunos) {
	if (recuperacao < 5) {
		console.log(recuperacao);
	}
}

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//    Ex de lista de notas = [2, 7, 3, 8, 10, 4]
const notas = [10, 2, 7, 3, 8, 9, 4];
const maiorNota = Math.max.apply(null, notas);

console.log(maiorNota);
