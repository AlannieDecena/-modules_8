"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");

const storeCocktails = async () => {
    try {


    
    let response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    
    // console.log(response.data.drinks)
        const drinks = response.data.drinks;
        // const {idDrink, strDrink, strCategory, strInstructions} = drinks;

        for(let drink of drinks) {
            // formatDrink
            console.log(drink)

        const formatDrink ={
            id: drink.idDrink,
            drinkName: drink.strDrink,
            category: drink.strCategory,
            instructions: drink.strInstructions

        };

        let [newDrink, created ] = await Models.Cocktails.findOrCreate({
            where: {id: drink.idDrink},
            defaults: formatDrink

        })
        storeIngredients(newDrink, drink ) 
        }
    } catch (err) {
        console.log(err.message)
    }

}
const storeIngredients = async (newDrink, drink) => {
    let ingredients = [] 
    for (let propName in drink) {
        if (propName.startsWith('strIngredient') && drink[propName] ) {
            ingredients.push(drink[propName])
        }
    }

    for(let ingredient of ingredients) {
        const formatIngredient ={
            drinkId: newDrink.id,
            ingredient: ingredient
        };

        let [newingredient, created ] = await Models.Ingredients.findOrCreate({
            where: { [Op.and]: [{ ingredient: ingredient }, { drinkId: newDrink.id }]},
            defaults: formatIngredient

        })
        storeMeasurements(newDrink, drink,newingredient )
    }
}

const storeMeasurements = async (newDrink, drink, newingredient) => {
    let measurements = [] 
    console.log(measurements)
    for (let propName in measurements) {
        if (propName.startsWith('strMeasure') && drink[propName] ) { 
            measurements.push(drink[propName])
        }
    }

    for(let measurement of measurements) {
        console.log(measurement)
        const formatMeasurement ={
            drinkId: newDrink.id,
            ingredientId: newingredient.id,
            measurement: measurement
            
        };

        let [newMeasurement, created ] = await Models.Measurements.findOrCreate({
            where: { [Op.and]: [{ measurement: measurement }, { ingredientId: newingredient.id }, {drinkId: newDrink.id}] },
            defaults: formatMeasurement

        })
        
    }
}




module.exports = {
    storeCocktails
}