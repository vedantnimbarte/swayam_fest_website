var express = require('express');
var router = express.Router();
var connection = require("../connection")
var cookieParser = require('cookie-parser')

var options = {
    maxAge: 1000 * 60 * 15,
}
/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('login')
});

router.post("/", function (req, res) {
    console.log(req.body)
    connection.query(`SELECT * FROM users WHERE userid = '${req.body.userid}' AND password='${req.body.password}'`, (err, result, fields) => {
        if (err);
        console.log(result[0].name)
        if (result.length == 0) {
            res.render("login", {error: "No user with this email and password available"})
        }
        res.cookie('swayam_data', `${result[0].name}`, options)
        res.redirect('/home')
        })
})

module.exports = router;
