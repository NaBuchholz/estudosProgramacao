const pokemon1 = {
	nome: 'Bulbasaur',
	tipo: 'Grama',
	nivel: 5,
};

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

let pokemonCopia = { ...pokemon1, nome: 'Squirtle', tipo: 'Água' };

//console.log(pokemonCopia);

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.

pokemon1.ataques = [];

//c-) crie um objeto de `ataque` com a estrutura abaixo e o adicione no array `ataques` utilizando `**push()**`

let ataque = [
	{
		nome: 'Investida',
		dano: 40,
		tipo: 'Normal',
		precisao: 100,
	},
];

pokemon1.ataques.push(ataque);

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original;

pokemonCopia = {
	...pokemon1.ataques,
};

console.log(pokemon1);
console.log('A cópia', pokemonCopia);

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**; no array de `ataques`

pokemon1.ataques.push([{ nome: 'Folha de Navalha', dano: 45, tipo: 'Grama' }]);

//e) para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array.
pokemonCopia.ataques.push(
	//BUGconsertar essa parada de push
	{
		nome: 'Jato de Água',
		dano: 40,
		tipo: 'Água',
	}
);

//f) Imprima os dois objetos  do tipo pokemon no console.
/* console.log(pokemon1);
console.log('A cópia', pokemonCopia);
 */
