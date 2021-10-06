var express = require('express');
var router = express.Router();
const connection = require("../connection")


/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query(`SELECT * FROM registrations WHERE status = "pending"`, (err, result, fields) => {
    if (err);
    if (req.cookies.swayam_data) {
      res.render('approval', { data: result, name: req.cookies.swayam_data })
    } else {
      res.redirect("/")
    }
  })
});

module.exports = router;
