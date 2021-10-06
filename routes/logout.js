var express = require('express');
var router = express.Router();

router.get('/logout', function (req, res) {
    res.redirect("/")
})

module.exports = router;