// Vamos criar alguns arrays, e refletir a respeito.
// Crie um array com 3 itens do tipo String
const arrayDeStrings =["Bruno", "Tião","Dandara"]
// Crie um array com 3 itens do tipo Number
const arrayNumero = [15,36,56987]
// Crie um array com uma String, um número e um booleano;
const arrayPrimitivo = ["Leitura",1564,true]
// Crie um array com apenas um valor. Um número.
const array1Valor = [5]
// Crie um array sem nenhum valor dentro.
const arrayVazio = []

//console.table()visualização em tablela do array

console.table(arrayDeStrings)
console.table(arrayNumero)
console.table(arrayPrimitivo)
console.table(array1Valor)
console.table(arrayVazio)

// Vamos tentar acessar índices específicos dos arrays da última prática.
// Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
console.log("Checagem de length:",arrayDeStrings.length);
// Verifique se o terceiro array inclui cada um dos itens;
console.log(arrayPrimitivo.includes("Leitura"));
console.log(arrayPrimitivo.includes(1564));
console.log(arrayPrimitivo.includes(true));

console.log(arrayPrimitivo.includes("não existe no array"));
// No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho.
console.log(array1Valor[0]);

// Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
const novoArrayCopia = arrayDeStrings
console.log("Array cópia",novoArrayCopia);
console.log(arrayDeStrings);
// Faça push() de uma nova string no array copiado
novoArrayCopia.push("Labenu")
console.table(novoArrayCopia);
// Imprima os dois arrays. Há diferença?
console.log("Array original",arrayDeStrings);
console.log("Array com push",novoArrayCopia);
//criam uma referência por isso push no copia é tbm push no original (estão na mesma posição na memória)
// Como podemos ajustar?
const consertoArrayCopia = arrayDeStrings.slice()
consertoArrayCopia.push("Labenu")
console.log(consertoArrayCopia);
// Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
consertoArrayCopia.splice(2,2)
//(i,n) > indice e numero de elementos que quer apagar
console.table(consertoArrayCopia)

// 1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.
const exercicioPratica = [6564,236,1,12,5]
// 2. Depois disso, crie uma cópia deste array utilizando o método slice().
const copiaArrayExercicioPratica = exercicioPratica.splice()
// 3. No array copiado:
// Remova o último item 

consertoArrayCopia.pop()

// Em seguida adicione o número 6 no fim do array.

copiaArrayExercicioPratica.push(6)

// Depois, remova o número que está no índice 2 array.

copiaArrayExercicioPratica.splice(2,1)

// Por fim, imprima os dois arrays.