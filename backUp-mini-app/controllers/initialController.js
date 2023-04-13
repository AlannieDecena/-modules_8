"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");

const storePokemon = async () => {
    try {

    let response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    
        const pokes = response.data;
        console.log(response.data)

        for(let poke of pokes) {
        

        const formatPoke ={
            url: poke.url,
            Name: poke.name
        
        };

        let [newPoke, created ] = await Models.Pokemons.findOrCreate({
            where: {Name: poke.name},
            defaults: formatPoke

        })
       
        }
    } catch (err) {
        console.log(err.message)
    }

}




module.exports = {
    storePokemon
}