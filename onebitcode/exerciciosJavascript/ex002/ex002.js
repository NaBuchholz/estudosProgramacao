/*
Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/
const nameCar1 = prompt('Digite o nome do primeiro carro');
const speedCar1 = +prompt('Digite a velocidade de ' + nameCar1);
const nameCar2 = prompt('Digite o nome do segundo carro');
const speedCar2 = +prompt('Digite a velocidade de ' + nameCar2);

if (speedCar1 > speedCar2) {
	alert(
		`${nameCar1} tem a velocidade maior que ${nameCar2} por ${
			speedCar1 - speedCar2
		} km`
	);
} else if (speedCar1 === speedCar2) {
	alert(`As velocidades de ${nameCar1} e ${nameCar2} são iguais!`);
} else if (speedCar1 < speedCar2) {
	alert(
		`${nameCar1} tem a velocidade menor que ${nameCar2} por ${
			speedCar2 - speedCar1
		} km`
	);
} else {
	alert('Dados insuficientes, tente novamente');
}


/*Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/
