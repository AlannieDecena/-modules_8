const express = require("express");
// const Controllers = require("./controllers");
const Controllers = require('./controllers')
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

// parse requests of content-type -application/json
app.use(express.json());

let pokeRoutes = require('./routes/pokeRoutes')
app.use('/api/poke', pokeRoutes)


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running onport ${PORT}.`);

Controllers.initialController.storePokemon()


});
