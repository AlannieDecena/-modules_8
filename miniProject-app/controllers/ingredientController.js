"use strict";
const Models = require("../models");


const getIngredients = (res) => {
    Models.Ingredients.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const createIngredients = (data, res) => {
    console.log('createIngredients')
    Models.Ingredients.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateIngredients = (req, res) => {
    Models.Ingredients.update(req.body, {
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
const deleteIngredients = (req, res) => {
    Models.Ingredients.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getIngredients, createIngredients, updateIngredients, deleteIngredients
}