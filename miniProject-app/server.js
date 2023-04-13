const express = require("express");
// const Controllers = require("./controllers");
const Controllers = require('./controllers')
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

// parse requests of content-type -application/json
app.use(express.json());

let cocktailRoutes = require('./routes/cocktailRoutes')
app.use('/api/cocktail', cocktailRoutes)

let ingredientRoutes = require('./routes/ingredientRoutes')
app.use('/api/ingredient', ingredientRoutes)

let measurementRoutes = require('./routes/measurementRoutes')
app.use('/api/measurement', measurementRoutes)

// app.get("/", (req, res) => {
// res.json({ message: "Welcome to my MySqLDB application." });
// });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running onport ${PORT}.`);

Controllers.initialController.storeCocktails()
// Controllers.storeCocktails()

});