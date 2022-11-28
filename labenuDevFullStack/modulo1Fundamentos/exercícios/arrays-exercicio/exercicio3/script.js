let arrayNum = [1, 5698, 20, 265.5, 10];
let arrayStr = ['Hoje', 'Esta', 'Dia', 'Noite'];
let arrayVarios = ['Macarrão', 'Lasanha', 598, 6645, true];
//FIXRever arrays e as suas propriedades
// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

let arrayNumCopia;
let arrayStrCopia;
let arrayVariosCopia;

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;

{
	arrayNumCopia = arrayNum.unshift(8);

	console.log(
		`Este é o array original:${arrayNum}\nE este é o array cópia:${arrayNumCopia}`
	);
}
