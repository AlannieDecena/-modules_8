"use strict";
const Models = require("../models");


const getMeasurements = (res) => {
    Models.Measurements.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const createMeasurements = (data, res) => {
    Models.Measurements.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateMeasurements = (req, res) => {
    Models.Measurements.update(req.body, {
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
const deleteMeasurements = (req, res) => {
    Models.Measurements.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getMeasurements, createMeasurements, updateMeasurements, deleteMeasurements
}