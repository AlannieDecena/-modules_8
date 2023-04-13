"use strict";
const Models = require("../models");


const getPokemons = (res) => {
    Models.Pokemons.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const createPokemons = (data, res) => {
    console.log('createIngredients')
    Models.Pokemons.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updatePokemons = (req, res) => {
    Models.Pokemons.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const deletePokemons = (req, res) => {
    Models.Pokemons.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getPokemons, createPokemons, updatePokemons, deletePokemons
}