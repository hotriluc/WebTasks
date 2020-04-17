//jshint esversion:6

const superheroes= require('superheroes');
const supervillains = require('supervillains');

var mySuperHero = superheroes.random();
var mySuperVillains = supervillains.random();

console.log(mySuperHero +" is going to save you from "+mySuperVillains);
