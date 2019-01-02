/*
* 6 fabriques de monture
* Dimension 2 / 2 cases
* Spawn aléatoire
* Chaque fabrique de monture doit être espacé d'au moins 10 cases horizontales et verticales
* Ne peut pas chevaucher une ville et inversement
* 4 emplacement pour monture par fabrique de monture
* Temps préparation d'un poney : 3 secondes
* Temps évolution poney à licorne : 6 secondes
* */

const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:27027/SuperHeroesAndStuff', err => {
	if (err) {
		throw err;
	}
});

const travelModeMakerSchema = new mongoose.Schema({
	name: String,
	position: {
		x: Number,
		y: Number
	}
});

const TravelModeMakerModel = mongoose.model('TravelModeMaker', travelModeMakerSchema);

const travelModeMaker1 = new TravelModeMakerModel({
	name: 'Carol',
	position: {
		x: 29,
		y: 10
	}
});
const travelModeMaker2 = new TravelModeMakerModel({
	name: 'Eugene',
	position: {
		x: 12,
		y: 16
	}
});
const travelModeMaker3 = new TravelModeMakerModel({
	name: 'Ezekiel',
	position: {
		x: 45,
		y: 20
	}
});
const travelModeMaker4 = new TravelModeMakerModel({
	name: 'Maggie',
	position: {
		x: 5,
		y: 30
	}
});
const travelModeMaker5 = new TravelModeMakerModel({
	name: 'Morgan',
	position: {
		x: 38,
		y: 34
	}
});
const travelModeMaker6 = new TravelModeMakerModel({
	name: 'Glenn',
	position: {
		x: 38,
		y: 34
	}
});

module.exports = {
	travelModeMaker1,
	travelModeMaker2,
	travelModeMaker3,
	travelModeMaker4,
	travelModeMaker5,
	travelModeMaker6
};
