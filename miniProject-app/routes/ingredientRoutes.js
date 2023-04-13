const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
   
    Controllers.ingredientController.getIngredients(req,res);
})

router.post('/create', (req, res) => {
    console.log('test')
    Controllers.ingredientController.createIngredients(req.body, res)
})

router.put('/put', (req, res) => {
    Controllers.ingredientController.updateIngredients(req, res)
})
router.delete('/delete', (req, res) => {
    Controllers.ingredientController.deleteIngredients(req, res)
})
module.exports = router;