const express = require('express');
const router = express.Router();


router.get('/favoritosss', function (req, res, next) {
    res.render("favoritos/favoritosss");
        })

module.exports = router;