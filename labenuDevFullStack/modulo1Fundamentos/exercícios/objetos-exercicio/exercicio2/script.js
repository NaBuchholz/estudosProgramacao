const filme = {
	nome: 'Auto da Compadecida',
	ano: 2000,
	elenco: [
		'Matheus Nachtergaele',
		'Selton Mello',
		'Denise Fraga',
		'Virginia Cavendish',
	],
	transmissoesHoje: [
		{ canal: 'Telecine', horario: '21h' },
		{ canal: 'Canal Brasil', horario: '19h' },
		{ canal: 'Globo', horario: '14h' },
	],
};

// respostas aqui ⬇️

//a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

console.log('nome do **primeiro** ator/atriz', filme.elenco[0]);

//b) Qual o código para imprimir o nome do **último** ator/atriz?

console.log(
	'nome do **último** ator/atriz:',
	filme.elenco[filme.elenco.length - 1] // esse.length-1 sempre vai pegar o ultimo objeto do array, não impota o tamanho
);

//c) Qual o código para exibir o array com **todas** as transmissões de hoje?

console.log('Todas as transmissoes hoje', filme.transmissoesHoje);

//d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?

console.log(`Canal Brasil as ${filme.transmissoesHoje[1].horario} hoje.`);
