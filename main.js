/*
* Dimension 50 / 50 cases
* Valeurs cases :
* 0 : Case vide
* 1 : Ville
* 2 : Fabrique de monture
* 3 : Ville + Zombie
* 4 : Fabrique de monture + Poney
* 5 : Fabrique de monture + Licorne
* 6 : Héro + Fabrique de monture + Licorne
* 7 : Héro + Fabrique de monture + Poney
* 8 : Héro + Licorne + Ville + Zombie
* 9 : Héro + Poney + Ville + Zombie
* 10 : Héro + Ville + Zombie
* 11 : Héro + Fabrique de monture
* 12 : Héro + Licorne + Ville
* 13 : Héro + Poney + Ville
* 14 : Héro + Ville
* 15 : Héro + Licorne
* 16 : Héro + Poney
* 17 : Héro
*
* fonctions:
* spawn des zombies (position aléatoire dans une des 6 villes avec vérification si la case n'est pas déja occupée)
* spawn des montures (position aléatoire dans une des 6 fabrique avec vérification si la case n'est pas déja occupée)
* attaque du héro (si zombie dans range du héro, mort instant)
* héro s'équipe d'une monture
* héro perds sa monture
* évolution poney -> licorne
* déplacement du héro
* compteur de points de poutrage de zombie
* */
const mongoose = require('mongoose');

const town = require('areas/town');
const travelModeMaker = require('areas/travelModeMaker');
const zombie = require('character/zombie');
const travelMode = require('travelMode');
const heroe = require('character/heroe');

const zombieSpawn = function(){

};


