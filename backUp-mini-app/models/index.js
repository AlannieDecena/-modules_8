'use strict'

const Vehicles = require('./vehicles') //require the model

async function init() {
    await Vehicles.sync();
  
    
    //sync the model
};

init();
module.exports = {
    Vehicles //export the model
};

