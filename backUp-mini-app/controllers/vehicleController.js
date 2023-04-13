"use strict";
const Models = require("../models");


const getVechicles = (req, res) => {
    Models.Vehicles.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getVechiclesByID = (req, res) => {
    Models.Vehicles.findAll({where: { id: req.params.id }}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createVechicles = (data, res) => {
    console.log('createIngredients')
    Models.Vehicles.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateVechicles = (req, res) => {
    console.log('test')
    Models.Vehicles.update(req.body, {
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
const deleteVechicles = (req, res) => {
    Models.Vehicles.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getVechicles, getVechiclesByID, createVechicles, updateVechicles, deleteVechicles
}