/* A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo); */

let frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`;

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

const troca = frase.replace('verde', 'rosa').replace('azul', 'laranja');

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

const verificacao = [troca.includes('verde'), troca.includes('laranja')];

console.log(
	`A nova frase inclui rosa? ${verificacao[0]}\nA nova frase inclui laranja? ${verificacao[1]}`
);

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

/* um devaneio
frase =
	'Jorge tem uma casa verde e com portão azul, com os dizeres: ' +
	'"' +
	'BOAS VINDAS,' +
	' mas não deixe o gato sair' +
	'"';
 */

frase = frase.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR');

// console.log(frase);
