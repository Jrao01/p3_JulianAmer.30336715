const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
            res.render("compras/vistauser" );       
});



module.exports = router;