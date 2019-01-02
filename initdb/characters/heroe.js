/*
* 3 héros (Rick, Michonne, Daryl) -> à voir si on donne des caractéristiques
* Dimension 1 / 1 case
* Spawn aléatoire hors villes et fabriques de monture au début -> fonction
* Gagne 1 point de poutrage de zombie par zombie tué -> fonction
* Temps pour attaquer : 1 seconde
* Temps pour s'équiper d'une monture : 1 seconde
* */

const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:27027/SuperHeroesAndStuff', err => {
	if (err) {
		throw err;
	}
});

const heroeSchema = new mongoose.Schema({
	name: String,
	travelMode: {type: mongoose.Schema.Types.ObjectId, ref: 'travelMode'},
	kills: Number,
	position: {
		x: Number,
		y: Number
	}
});

const HeroeModel = mongoose.model('Heroe', heroeSchema);

const Daryl = new HeroeModel({
	name: 'Daryl',
	travelMode: undefined,
	kills: 0,
	position: {
		x: Math.floor(Math.random() * 50) + 1,
		y: Math.floor(Math.random() * 50) + 1
	}
});
const Rick = new HeroeModel({
	name: 'Rick',
	travelMode: undefined,
	kills: 0,
	position: {
		x: Math.floor(Math.random() * 50) + 1,
		y: Math.floor(Math.random() * 50) + 1
	}
});
const Michonne = new HeroeModel({
	name: 'Michonne',
	travelMode: undefined,
	kills: 0,
	position: {
		x: Math.floor(Math.random() * 50) + 1,
		y: Math.floor(Math.random() * 50) + 1
	}
});

module.exports = {
	Daryl,
	Rick,
	Michonne
};
