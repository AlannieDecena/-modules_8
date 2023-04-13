
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/pokeController");

router.get('/', (req, res) => {
   
    Controllers.getPokemons(req,res);
})

router.post('/create', (req, res) => {
    Controllers.createPokemons(req.body, res)
})

router.put('/put', (req, res) => {
    Controllers.updatePokemons(req, res)
})
router.delete('/delete', (req, res) => {
    Controllers.deletePokemons(req, res)
})


module.exports = router;