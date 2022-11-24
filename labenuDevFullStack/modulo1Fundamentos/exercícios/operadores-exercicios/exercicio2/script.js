//Resolução exercício 2

const _inputNumber1 = Number(prompt('Digite o primeiro número'), 10);
const _inputNumber2 = Number(prompt('Digite o segundo número'));

//Sem array
const _maiorQue = _inputNumber1 > _inputNumber2;
const _igualQue = _inputNumber1 === _inputNumber2;
const _number12 = (_inputNumber1 % _inputNumber2) % 2 === 0;
const _number21 = (_inputNumber2 % _inputNumber1) % 2 === 0;

console.log(
  `Seu primeiro número foi ${_inputNumber1}\nE o seu segundo número foi ${_inputNumber2}\nO primeiro numero é maior que segundo? - ${_maiorQue}\nO primeiro numero é igual ao segundo? - ${_igualQue}\nO primeiro numero é divisível pelo segundo? - ${_number12}\nO segundo numero é divisível pelo primeiro? - ${_number21}`
);

//Com array
// const _operadores = [
//   _inputNumber1 > _inputNumber2,
//   _inputNumber1 === _inputNumber2,
//   (_inputNumber1 % _inputNumber2) % 2 === 0,
//   (_inputNumber2 % _inputNumber1) % 2 === 0,
// ];

// console.log(_operadores);
