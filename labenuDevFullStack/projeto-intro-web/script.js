//Tópico escolhido para desenvolvimento: Países
//Características chave: Nome, População, Governo,Continente, Organizações internacionais, Idioma, Está em guerra?
const countryName = '';
const countryPopulation = 0;
const inWar = true;
const countryContinent = '';
let countryIos = [];
const countryLenguage = [];
let countryGovernment = '';

const countryName1 = 'Brasil';
const countryPopulation1 = 213317639;
const inWar1 = false;
const countryContinent1 = 'América';
let countryIos1 = ['ONU', 'UNESCO'];
const countryLenguage1 = ['Português'];
let countryGovernment1 = 'República';

const countryName2 = 'Canada';
const countryPopulation2 = 38005238;
const inWar2 = false;
const countryContinent2 = 'América';
let countryIos2 = ['UNESCO', 'OMS'];
const countryLenguage2 = ['Inglês', 'Francês'];
let countryGovernment2 = 'Monarquia constitucional';

const countryName3 = 'Russia';
const countryPopulation3 = 144526636;
const inWar3 = true;
const countryContinent3 = 'Ásia';
let countryIos3 = ['OTAM'];
const countryLenguage3 = ['Russo'];
let countryGovernment3 = 'Semipresidencialista';

let averagePopulation =
	(countryPopulation1 + countryPopulation2 + countryPopulation3) / 3;

console.log('Average Population: ' + averagePopulation);

const countryWar = inWar1 && inWar2 && inWar3;

console.log('Is everyone at war? ' + countryWar);

console.log(
	countryName1.toUpperCase() +
		'\nPopulation: ' +
		countryPopulation1 +
		'\nContinent: ' +
		countryContinent1 +
		'\nGovernment: ' +
		countryGovernment1 +
		'\nLenguage: ' +
		countryLenguage1 +
		'\nis in war? ' +
		inWar1 +
		'\nInternational Organization in: ' +
		countryIos1
);

console.log(
	countryName2.toUpperCase() +
		'\nPopulation: ' +
		countryPopulation2 +
		'\nContinent: ' +
		countryContinent2 +
		'\nGovernment: ' +
		countryGovernment2 +
		'\nLenguage: ' +
		countryLenguage2 +
		'\nis in war? ' +
		inWar2 +
		'\nInternational Organization in: ' +
		countryIos2
);

console.log(
	countryName3.toUpperCase() +
		'\nPopulation: ' +
		countryPopulation3 +
		'\nContinent: ' +
		countryContinent3 +
		'\nGovernment: ' +
		countryGovernment3 +
		'\nLenguage: ' +
		countryLenguage3 +
		'\nis in war? ' +
		inWar3 +
		'\nInternational Organization in: ' +
		countryIos3
);
