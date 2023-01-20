//Tópico escolhido para desenvolvimento: Países
//Características chave: Nome, População, Governo,Continente, Organizações internacionais, Idioma, Está em guerra?

let arrayCountries = [
	{
		countryName: 'Brasil',
		countryPopulation: 213317639,
		countryContinent: 'América',
		countryGovernment: ['República'],
		countryIos: ['ONU', 'UNESCO'],
		countryLenguage: ['Português'],
		inWar: false,
		countryFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/749px-Flag_of_Brazil.svg.png',
	},
	{
		countryName: 'Canadá',
		countryPopulation: 38005238,
		countryContinent: 'América',
		countryGovernment: ['Monarquia Constitucional'],
		countryIos: ['UNESCO', 'OMS'],
		countryLenguage: ['Inglês', 'Francês'],
		inWar: false,
		countryFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png',
	},
	{
		countryName: 'Rússia',
		countryPopulation: 144526636,
		countryContinent: 'Ásia',
		countryGovernment: ['Semipresidencialista'],
		countryIos: ['ONU'],
		countryLenguage: ['Russo'],
		inWar: true,
		countryFlag:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png',
	},
];

arrayCountries.push({
	countryName: 'Ucrânia',
	countryPopulation: 41575748,
	countryContinent: 'Europa',
	countryGovernment: ['República constitucional', 'semipresidencialista'],
	ois: ['OTAM'],
	countryLenguage: ['Ucraniano'],
	inWar: true,
	countryFlag:
		'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1024px-Flag_of_Ukraine.svg.png',
});

let averageCountryPopulation =
	arrayCountries.reduce(
		(accumulator, currentValue) => accumulator + currentValue.countryPopulation,
		0
	) /
		arrayCountries.length -
	1;
let globalWar = arrayCountries.inWar === true ? 'Estão em guerra' : 'Não estão em guerra';

makeCountryReportLog = (arrayCountries) => {
	const report = `${arrayCountries.countryName.toUpperCase()}\npopulação: ${
		arrayCountries.countryPopulation
	}\ncontinente: ${arrayCountries.countryContinent}\nforma de governo: ${
		arrayCountries.countryGovernment
	}\norganizações internacionais: ${arrayCountries.countryIos}\nidiomas: ${
		arrayCountries.countryLenguage
	}\nesta em guerra? ${arrayCountries.inWar === true ? 'Sim' : 'Não'}`;
	return report;
};

automaticCountriesReport = (arrayCountries) => {
	return arrayCountries.forEach((country) => {
		console.log(makeCountryReportLog(country));
	});
};
automaticCountriesReport(arrayCountries);

console.log(
	`A média de habitantes é de ${averageCountryPopulation} e o estado atual de guerra entre TODOS eles é: ${globalWar}`
);

const inputSearch = document.querySelector('.search-container input');
let cardContainer = document.getElementById('cards-container');
let originalHtml = cardContainer.innerHTML;

inputSearch.addEventListener('input', () => {
	let filterCountries = arrayCountries.filter((item) => {
		return item.countryName.toLowerCase().includes(inputSearch.value.toLowerCase());
	});
	cardContainer.innerHTML = '';
	let createElement = '';
	for (const i of filterCountries) {
		createElement += `<div class="card">
		<img src="${i.countryFlag}" alt="Bandeira ${i.countryName}" class="img-flag">
		<h2 class="country-name">${i.countryName}</h2>
		<ul class="country-infos">
			<li><p>População: ${i.countryPopulation}</p></li>
			<li><p>Continente: ${i.countryContinent}</p></li>
			<li><p>Governo: ${i.countryGovernment}</p></li>
			<li><p>Organizações Internacionais: ${i.countryIos}</p></li>
			<li><p>Língua: ${i.countryLenguage}</p></li>
			<li><p>Está em guerra? ${i.inWar === true ? 'Sim' : 'Não'}</p></li>
		</ul>
		<button class="button-info">
			<a href="https://pt.wikipedia.org/wiki/${i.countryName}" target="_blank">Ver Detalhes</a>
		</button>
	</div>
		`;
	}
	cardContainer.innerHTML = createElement;

	if (inputSearch.value.length === 0) {
		cardContainer.innerHTML = originalHtml;
	}
});
