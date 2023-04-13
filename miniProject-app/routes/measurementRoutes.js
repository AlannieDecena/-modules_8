const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
   
    Controllers.measurementController.getMeasurements(req,res);
})

router.post('/create', (req, res) => {
    Controllers.measurementController.createMeasurements(req.body, res)
})

router.put('/put', (req, res) => {
    Controllers.measurementController.updateMeasurements(req, res)
})
router.delete('/delete', (req, res) => {
    Controllers.measurementController.deleteMeasurements(req, res)
})
module.exports = router;