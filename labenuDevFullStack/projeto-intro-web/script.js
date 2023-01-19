//Tópico escolhido para desenvolvimento: Países
//Características chave: Nome, População, Governo,Continente, Organizações internacionais, Idioma, Está em guerra?
class Country {
	constructor(
		countryName,
		countryPopulation,
		countryContinent,
		countryGovernment,
		countryIos,
		countryLenguage,
		inWar
	) {
		(this.countryName = countryName),
			(this.countryPopulation = countryPopulation),
			(this.countryContinent = countryContinent),
			(this.countryGovernment = countryGovernment),
			(this.countryIos = countryIos),
			(this.countryLenguage = countryLenguage),
			(this.inWar = inWar);
	}

	addCountry() {}
}
const brasil = new Country(
	'Brasil',
	213317639,
	'América',
	'República',
	['ONU', 'UNESCO'],
	['Português'],
	false
);
const canada = new Country(
	'Canada',
	38005238,
	'América',
	'Monarquia Constitucional',
	['UNESCO', 'OMS'],
	['Inglês', 'Francês'],
	false
);
const russia = new Country(
	'Russia',
	144526636,
	'Ásia',
	'Semipresidencialista',
	['OTAM'],
	['Russo'],
	true
);
// const globalWar = brasil.inWar && canada.inWar && russia.inWar;
// let averagePopulation =
// 	(brasil.countryPopulation + canada.countryPopulation + russia.countryPopulation) / 3;

const arrayCountries = [russia, brasil, canada];

verifyInWar = (Country) => {
	const arrayCountriesInWar = [];

	if (Country.inWar === true) {
		arrayCountriesInWar.push(Country);
	} else {
		alert('Esse pais não foi adicionado a lista');
	}
	return arrayCountriesInWar;
};

makeCountryReportLog = (Country) => {
	const report = `${Country.countryName.toUpperCase()}\npopulação: ${
		Country.countryPopulation
	}\ncontinente: ${Country.countryContinent}\nforma de governo: ${
		Country.countryGovernment
	}\norganizações internacionais: ${Country.countryIos}\nidiomas: ${
		Country.countryLenguage
	}\nesta em guerra? ${Country.inWar === true ? 'Sim' : 'Não'}`;
	return report;
};

automaticCountriesReport = (arrayCountries) => {
	return arrayCountries.forEach((country) => {
		console.log(makeCountryReportLog(country));
	});
};

const ucrania = new Country(
	'Ucrânia',
	41575748,
	'Europa',
	['República constitucional', 'semipresidencialista'],
	['ONU'],
	['Ucraniano'],
	true
);

arrayCountries.push(ucrania);

console.log(automaticCountriesReport(arrayCountries));

const inputSearch = document.querySelector('.search-container input');

const cards = document.querySelectorAll('.card h2');

// inputSearch.addEventListener('input', (event) => console.log(event.target.value.trim()));
const filterCountries = () => {
	if (inputSearch != '') {
		console.log('so far, so good, begining function filter countries');
		for (let card of cards) {
			let title = card.querySelector('country-name');
			title = title.valueOf.toUpperCase();
			let filterText = inputSearch.valueOf.toUpperCase().trim();
			if (!title.incluedes(filterText)) {
				card.style.display = 'none';
			} else {
				card.style.display = 'block';
			}
		}
	} else {
		for (let card of cards) {
			card.style.display = 'block';
		}
	}

	// outro modo sera?
	// arrayCountries.filter((country) => country.countryName.toUpperCase().includes(inputSearch));
};

const cardsContainer = document.querySelector('.cards-container');

function addArrayToCardsOnHtml(arrayCountries) {
	console.log('addcard ok');
	arrayCountries.forEach((item) => {
		console.log('foreach ok');
		const cardDiv = document.createElement('div');
		cardDiv.classList.add('card');
		cardsContainer.appendChild(cardDiv);

		const title = document.createElement('h2');
		title.classList.add('country-name');
		title.innerText = item.countryName;
		cardDiv.appendChild(title);

		const countryInfos = document.createElement('ul');
		cardDiv.appendChild(countryInfos);

		const population = document.createElement('li');
		population.innerHTML = item.countryPopulation;

		const continent = document.createElement('li');
		continent.innerText = item.countryContinent;
		const government = document.createElement('li');
		government.innerText = item.countryGovernment;
		const ios = document.createElement('li');
		ios.innerText = item.countryIos;
		const lenguage = document.createElement('li');
		lenguage.innerText = item.countryLenguage;
		const inWar = document.createElement('li');
		inWar.innerText = item.inWar;
		countryInfos.appendChild(population, continent, government, ios, lenguage, inWar);
	});
}

addCardsOnHtml(arrayCountries);
