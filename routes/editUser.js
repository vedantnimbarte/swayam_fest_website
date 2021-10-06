var express = require("express")
var router = express.Router();
var connection = require("../connection")

router.get("/", function (req, res) {
    connection.query(`SELECT * FROM registrations WHERE id = ${req.query.id}`, (err, result, fields) => {
    if (err);
        if (req.cookies.swayam_data) {
        console.log(result[0].name)
      res.render('userInfo', {data: result[0], name: req.cookies.swayam_data})
    } else {
      res.redirect("/")
    }
  })
})

router.post("/", function (req, res) {
  console.log(req.body.status)
  console.log(req.query.id)
    connection.query(`UPDATE registrations SET status = '${req.body.status}' WHERE id=${req.query.id}`, (err, result, fields) => {
    if (err);
        if (req.cookies.swayam_data) {
      res.redirect(`/editInfo?id=${req.query.id}`)
    } else {
      res.redirect("/")
    }
  })
})
module.exports = router;