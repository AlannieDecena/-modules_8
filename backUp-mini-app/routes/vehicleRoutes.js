
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/vehicleController");

router.get('/', (req, res) => {

    Controllers.getVechicles(req, res);
})

router.get('/:id', (req, res) => {
    Controllers.getVechiclesByID(req, res);
})

router.post('/create', (req, res) => {
    Controllers.createVechicles(req.body, res)
})

router.put('/put/:id', (req, res) => {
    console.log('test')
    Controllers.updateVechicles(req, res)
})
router.delete('/delete/:id', (req, res) => {
    Controllers.deleteVechicles(req, res)
})


module.exports = router;