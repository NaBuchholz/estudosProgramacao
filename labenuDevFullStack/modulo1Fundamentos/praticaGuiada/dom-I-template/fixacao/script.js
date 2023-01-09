const paragrafo = document.getElementById('paragrafo');
console.log(paragrafo.innerHTML);

const imprimirValor = () => {
	console.log(document.getElementById('texto').value);
};

const mudarParagrafo = () => {
	paragrafo.innerHTML = document.getElementById('texto').value;
};
