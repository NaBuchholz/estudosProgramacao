let sacolao = [];

frutas = [
	{
		nome: 'Melão',
		preco: 3.7,
		disponibilidade: true,
	},
	{
		nome: 'Abacaxi',
		preco: 5.0,
		disponibilidade: false,
	},
	{
		nome: 'Pera',
		preco: 8.45,
		disponibilidade: true,
	},
];

console.log(frutas); //Array de frutas: [object Object]=> o template string era o problema

sacolao.push(frutas);

console.log(sacolao);
