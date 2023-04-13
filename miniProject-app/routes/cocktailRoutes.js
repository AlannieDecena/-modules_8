
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
   
    Controllers.cocktailController.storeCocktails(req,res);
})

router.post('/create', (req, res) => {
    Controllers.cocktailController.createcocktail(req.body, res)
})

router.put('/put', (req, res) => {
    Controllers.cocktailController.updatecocktail(req, res)
})
router.delete('/delete', (req, res) => {
    Controllers.cocktailController.deletecocktail(req, res)
})


module.exports = router;