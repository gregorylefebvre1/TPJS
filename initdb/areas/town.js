/*
* 6 villes (Alexandria, The Hilltop, The Kingdom, The Sanctuary, Woodbury, The Jail)
* Dimension 5 / 5 cases
* Spawn aléatoire
* Chaque ville doit être espacée d'au moins 10 cases horizontales et verticales
* Ne peut pas chevaucher une fabrique de monture et inversement
* */

const mongoose = require('mongoose');
const async = require('async');

mongoose.connect('mongodb://192.168.99.100:27027/SuperHeroesAndStuff', { useNewUrlParser: true }, function(err) {
    if (err) { throw err; }
});

const townSchema = new mongoose.Schema({
    name: String,
    position: {
        x: Number,
        y: Number
    }
});

const TownModel = mongoose.model('Town', townSchema);
const townTab = [];

const alexandria = new TownModel({
    name: 'Alexandria',
    position: {
        x: 9,
        y: 7
    }
});
townTab.push(alexandria);

const hilltop = new TownModel({
    name: 'The Hilltop',
    position: {
        x: 9,
        y: 42
    }
});
townTab.push(hilltop);

const kingdom = new TownModel({
    name: 'The Kingdom',
    position: {
        x: 18,
        y: 27
    }
});
townTab.push(kingdom);

const sanctuary = new TownModel({
    name: 'The Sanctuary',
    position:{
        x: 33,
        y: 24
    }
});
townTab.push(sanctuary);

const woodbury = new TownModel({
    name: 'Woodbury',
    position: {
        x: 44,
        y: 7
    }
});
townTab.push(woodbury);

const jail = new TownModel({
    name: 'The Jail',
    position: {
        x: 44,
        y: 42
    }
});
townTab.push(jail);

async.mapLimit(townTab, 6, function (document, next) {
    document.save(next);
}, done).then(() => mongoose.connection.close());




