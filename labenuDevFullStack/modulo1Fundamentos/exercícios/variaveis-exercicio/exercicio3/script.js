//1 e 2
const usuarioNome = prompt('Digite seu nome completo');
const dataNasD = Number(prompt('Dia de Nascimento'));
const dataNasM = Number(prompt('Mês de Nascimento'));
const dataNasA = Number(prompt('Ano de Nascimento'));
const endereco = prompt(`Endereço`);
const cpf = prompt('CPF');
const ensino = prompt('Escolaridade');
const cnh = alert('Possui CNH?') === true;
const filhos = Number(prompt('Quantidade de filhos'));
const emprego = prompt('Qual seu cargo?');
const salario = prompt('Salário atual');
const comissão = alert('recebe comissão?') === true;
const sComissão = prompt('se sim, quanto? caso contrário digite 0');
const anoAdmissao = Number(prompt('Ano de admissão'));

//3
console.log(
	typeof usuarioNome,
	typeof dataNasD,
	typeof dataNasM,
	typeof dataNasA,
	typeof endereco,
	typeof cpf,
	typeof ensino,
	typeof cnh,
	typeof filhos,
	typeof emprego,
	typeof salario,
	typeof comissão,
	typeof anoAdmissao
);

//4
console.log(
	`Nome:${usuarioNome}\nData de Nascimento:${dataNasD}/${dataNasM}/${dataNasA}\nEndereço:${endereco}\nCPF${cpf}\nEscolaridade:${ensino}\nCNH:${cnh}\nFilhos:${filhos}\nCargo:${emprego}\nSalário:${salario}\nComissão:${comissão}\nValor comissão:${sComissão}\nAno de admissão:${anoAdmissao}`
);
