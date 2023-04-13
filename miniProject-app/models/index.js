'use strict'
const Measurements = require('./measurements')
const Ingredients = require('./ingredients')
const Cocktails = require('./cocktails') //require the model

async function init() {
    await Cocktails.sync();
    await Ingredients.sync();
    await Measurements.sync();
    
    //sync the model
};

init();
module.exports = {
    Measurements,
    Ingredients,
    Cocktails //export the model
};

