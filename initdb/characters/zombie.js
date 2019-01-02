/*
* Dimension 1 / 1 case
* Spawn aléatoire à l'intérieur des villes
* Max zombie dans une ville : 25
* Temps pour spawn : 3 secondes
* Temps pour périr d'une attaque héroïque : 1 seconde
* */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const zombieSchema = new Schema({
    active: {type: Boolean, required: true},
    position: {
        x: Number,
        y: Number
    }
});

module.exports = {
    schema: zombieSchema,
    model: mongoose.model('Zombie', zombieSchema),
};