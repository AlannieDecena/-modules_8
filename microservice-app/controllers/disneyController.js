"use strict";
const axios = require('axios');


const getDisney = (res,req) => {
    axios.get('https://api.disneyapi.dev/characters')
    .then(response => {
        console.log(response.data);
        res.send(response.data )
    }).catch(err => {
        throw err
    })

}

const getDisneyId = (res,req) => {
    let id = req.params.id
    axios.get(`https://api.disneyapi.dev/characters/${id}`)
    .then(response => {
        console.log(response.data);
        res.send(response.data )
    }).catch(err => {
        throw err
    })
}


module.exports = {
    getDisney, getDisneyId
}