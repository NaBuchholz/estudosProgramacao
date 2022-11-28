let arrayNum = [1, 5698, 20, 265.5, 10];
let arrayStr = ['Hoje', 'Esta', 'Dia', 'Noite'];
let arrayVarios = ['Macarrão', 'Lasanha', 598, 6645, true];

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(arrayNum.length);
console.log(arrayStr.length);
console.log(arrayVarios.length);

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
//FIXDúvida sobre o console log e o que ele retorna.

/* const array1 = arrayNum.splice(1);

console.log(array1); */

//- Verifique se um item está incluído no primeiro array, e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.

console.log(arrayNum.includes(20));
console.log(arrayVarios.includes(false));
