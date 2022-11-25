/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3;
const precoGasolina = 5;
const tipoCombustivel = "Etanol";
const kmPorLitro = 12;
const distanciaPercorrida = 1690;

if (tipoCombustivel === "Gasolina") {
  const valorGastoDaViagemGasolina =
    (distanciaPercorrida / kmPorLitro) * precoGasolina;
  console.log(valorGastoDaViagemGasolina.toFixed(2));
} else {
  const valorGastoDaViagemEtanol =
    (distanciaPercorrida / kmPorLitro) * precoEtanol;
  console.log(valorGastoDaViagemEtanol.toFixed(2));
}
