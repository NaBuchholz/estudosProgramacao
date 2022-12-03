/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

 3 variáveis:

 1 - Preço do combustível
 2 - Gasto médio de combustível do carro por KM
 3 - Distância em KM da viagem. 

 */

const precoCombustivel = 5.8;
const kmPorLitro = 12;
const distanciaPercorrida = 1690;

const valorGastoDaViagem =
  (distanciaPercorrida / kmPorLitro) * precoCombustivel;

console.log(valorGastoDaViagem.toFixed(2));
