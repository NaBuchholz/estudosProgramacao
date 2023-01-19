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

const arrayCountries = [russia, brasil, canada];

const cardsContainer = document.querySelector('.cards-container');

function addCardsOnHtml(arrayCountries) {
	console.log('addcard ok');
	arrayCountries.forEach((item) => {
		console.log('foreach ok');
		const cardDiv = document.createElement('div');
		cardDiv.classList.add('card');

		cardsContainer.appendChild(card);
	});
}

addCardsOnHtml(arrayCountries);
