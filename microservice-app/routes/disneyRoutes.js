let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js


router.get('/disney', (req, res) => {
    Controllers.disneyController.getDisney(res,req);
});

router.get('/disney/:id', (req, res) => {
    Controllers.disneyController.getDisneyId(res,req);
});



module.exports = router;