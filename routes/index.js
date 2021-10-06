var express = require('express');
var router = express.Router();
const connection = require("../connection")

router.get("/", function (req, res) {
  res.redirect("/login")
})

/* GET home page. */
router.get('/home', function(req, res, next) {
  let totalCount = 0;
  let pendingCount = 0;
  let approvedCount = 0;
  connection.query(`SELECT * FROM registrations`, (err, result, fields) => {

    result.map((item) => {
      totalCount = totalCount + 1
      if (item.status === "pending") {
        pendingCount = pendingCount + 1
      }
      else if (item.status === "approved") {
        approvedCount = approvedCount + 1
      }
    })
    if (err);
    if (req.cookies.swayam_data) {
      res.render('index', {data: result, totalCount: totalCount, pendingCount: pendingCount, approvedCount: approvedCount, name: req.cookies.swayam_data})
    } else {
      res.redirect("/")
    }
  })
});

module.exports = router;
