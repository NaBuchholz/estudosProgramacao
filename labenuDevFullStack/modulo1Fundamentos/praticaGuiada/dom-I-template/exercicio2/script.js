const nome = document.getElementById('nome');
const endereco = document.getElementById('endereco');
const email = document.getElementById('email');
console.log(nome.value, endereco.value, email.value);

const cadastro = { nome: nome.value, endereco: endereco.value, email: email.value };
console.log(cadastro);

const limpaImputs = () => {
	nome.value = '';
	endereco.value = '';
	email.value = '';
};
