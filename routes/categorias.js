const express = require('express');
const router = express.Router();


router.get('/vercate', function (req, res, next) {
    res.render("categorias/vercate");
        })

module.exports = router;