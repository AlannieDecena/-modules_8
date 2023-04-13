'use strict'

const Pokemons = require('./pokemon') //require the model

async function init() {
    await Pokemons.sync();
  
    
    //sync the model
};

init();
module.exports = {
    Pokemons //export the model
};

