const express = require("express");
const router = express.Router();
const test = require('../controllers/test');

// router.get("/", function (req, res) {
//   var sql = "select * from user";
//   var params = [];

//   db.all(sql, params, (err, rows) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.status(200).json({
//       message: "success",
//       data: rows,
//     });
//   });
//   // res.send('Electron + React + Express + Sqlite');
// });

router.get("/", test.getData);

module.exports = router;
