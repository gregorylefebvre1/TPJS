/*
* 3 Mode de déplacement (feet/pony/unicorn)
* Vitesse : 1 cases / seconde (feet), 2 cases / seconde (pony), 3 cases / seconde (unicorn)
* Durée de vie : 10 secondes (pony), 15 secondes (unicorn)
* */

const mongoose = require('mongoose');

const travelModeSchema = new mongoose.Schema({
    label: String,
    speed: {type: Number, required: true},
    lifetime: {type: Number, required: true},
    position: {
        x: Number,
        y: Number
    }
});

module.exports = {
    schema: travelModeSchema,
    model: mongoose.model('TravelMode', travelModeSchema),
};