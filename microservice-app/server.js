const express = require("express");
const app = express();
require("dotenv").config();


// parse requests of content-type -application/json
app.use(express.json());

let disneyRoutes = require('./routes/disneyRoutes')
app.use('/api/disney', disneyRoutes);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running onport ${PORT}.`);
});