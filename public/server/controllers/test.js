const express = require("express");

const db = require("../config/db");

exports.getData = (req, res) => {
//   console.log(req.body);
  var sql = "select * from user";
  var params = [];

  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      message: "success",
      data: rows,
    });
  });
}
