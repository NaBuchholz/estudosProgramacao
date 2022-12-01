// modelo de objeto
const meuObjeto = {
	chave1: 2,
	chave2: 'string',
	chave3: true,
	chave4: [],
};

meuObjeto.novaChave = 'novoValor'; //notação de ponto
meuObjeto['novaChave'] = 'novoValor'; //notação de colchete

// Exercicío 1

const estudante = {
	nome: 'Vini',
	sobrenome: 'Oliveira',
	matricula: 32465,
	notas: [10, 5, 9],
};

estudante.modulo = 'Módulo1'; //notação de ponto
estudante['modulo'] = 'Módulo 1'; //notação de colchete

console.log('nome:', estudante.nome);
console.log('Segunda nota:', estudante.notas[1]);
console.log('Módulo:', estudante.modulo);

const novoEstudante = {
	...estudante,
	nome: 'Astrodev',
	notas: [...estudante.notas, 9],
	modulo: 'Módulo 2',
};

console.log(estudante, novoEstudante);

const estudantesLabenu = [estudante, novoEstudante];

console.log(estudantesLabenu);

//Exercicío de fixação

const carrinho = {
	nome: 'Laís',
	pagamento: ['cartão de crédito'],
	endereco: {
		rua: '',
		numero: 0,
		bairro: '',
		cidade: '',
		cep: '',
		estado: '',
	},
	compras: [
		{
			nomeProduto: '',
			preco: 0,
			qntd: 0,
		},
		{
			nomeProduto: '',
			preco: 0,
			qntd: 0,
		},
		{
			nomeProduto: '',
			preco: 0,
			qntd: 0,
		},
	],
};

console.log(
	'Itens no carrinho',
	carrinho.compras[0].qntd + carrinho.compras[1].qntd + carrinho.compras[2].qntd
);

const carrinhoPresente = {
	...carrinho,
};

carrinhoPresente.nome = 'Elenice';
carrinhoPresente.pagamento = 'Vale Presente';

console.log(carrinhoPresente);
