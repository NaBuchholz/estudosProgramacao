/* Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ``` */

const usuarioNome = prompt('Digite seu nome');
const comida1 = prompt('Comida favorita doce');
const comida2 = prompt('Comida favorita salgada');
const comida3 = prompt('Comida favorita agridoce');

console.log(
	`Estas são as comidas favoritas de ${usuarioNome}\n- ${comida1}\n- ${comida2}\n- ${comida3}`
);
