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
const globalWar = brasil.inWar && canada.inWar && russia.inWar;
let averagePopulation =
	(brasil.countryPopulation + canada.countryPopulation + russia.countryPopulation) / 3;
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

//testes
console.log(automaticCountriesReport(arrayCountries));

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

filterCountries = (Country, inputString) => {};
