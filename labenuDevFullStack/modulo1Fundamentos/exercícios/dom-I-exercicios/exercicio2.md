# Exercício 2

Crie um campo label e um campo input na página HTML, e preencha o campo com o nome de mais uma fruta.
Depois disso, escreva **No DevTools** o código necessário para que seja possível imprimir o valor do input escrito no console.
Cole o comando aqui:
```jsx
const insereFruta = () => {
	const fruta4 = document.getElementById('fruta-4');

	frutas.push(document.getElementById('input-fruta').value);
	fruta4.innerHTML = frutas[3];
};
```