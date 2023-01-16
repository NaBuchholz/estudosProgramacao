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
const arrayCountries = [];

arrayCountries.push(brasil, canada, russia);

//teste

console.log(arrayCountries);

let averagePopulation =
	(brasil.countryPopulation + canada.countryPopulation + russia.countryPopulation) / 3;

const globalWar = brasil.inWar && canada.inWar && russia.inWar;

//Características chave: Nome, População, Governo,Continente, Organizações internacionais, Idioma, Está em guerra?
