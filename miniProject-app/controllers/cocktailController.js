"use strict";
const Models = require("../models");


const getCocktails = (req, res) => {
    Models.Cocktails.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const createCocktails = (data, res) => {
    console.log('createIngredients')
    Models.Cocktails.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateCocktails = (req, res) => {
    Models.Cocktails.update(req.body, {
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
const deleteCocktails = (req, res) => {
    Models.Cocktails.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getCocktails, createCocktails, updateCocktails, deleteCocktails
}