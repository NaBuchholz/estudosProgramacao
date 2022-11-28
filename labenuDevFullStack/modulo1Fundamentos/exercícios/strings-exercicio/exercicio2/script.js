const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

/*
A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;

b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

c) Substitua os traços `________` por “sticioso”.
*/

let novaString = minhaString.trim().replaceAll('________', 'sticioso');

console.log(novaString);

novaString = novaString.replaceAll(" ","")

// console.log(novaString);

console.log(
	`Quantidade de caracteres vazios\nAntes: ${minhaString.length}\nDepois: ${novaString.length}`
);
