const db = require("../config/db");

exports.createData = (req, res) => {
  var papperType = req.body.papperType ? req.body.papperType : "";
  var papperColor = req.body.papperColor ? req.body.papperColor : "";
  var title = req.body.title ? req.body.title : "";
  var content = req.body.content ? req.body.content : "";

  var insert =
    "INSERT INTO appnote (papperType, papperColor, title, content) VALUES (?, ?, ?, ?)";
  db.run(insert, [papperType, papperColor, title, content], (err, rows) => {
    if (err) {
      res.status(404).json({ message: err.message });
    } else {
      res.status(200).json({ message: "success" });
    }
  });
};

exports.getNoteDatas = (req, res) => {
  var select = "SELECT * FROM appnote";
  var params = [];

  db.all(select, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      message: "success",
      data: rows,
    });
  });
};

exports.updateData = (req, res) => {
  var noteId = req.params.Id;
  var papperType = req.body.papperType ? req.body.papperType : "";
  var papperColor = req.body.papperColor ? req.body.papperColor : "";
  var title = req.body.title ? req.body.title : "";
  var content = req.body.content ? req.body.content : "";

  var update = `UPDATE appnote SET "papperType" = '${papperType}', "papperColor" = '${papperColor}', "title" = '${title}', "content" = '${content}' WHERE "note_id" = '${noteId}'`;
  db.run(update, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "success" });
    }
  });
};

exports.searchDatas = (req, res) => {
  var searchKey = req.body.searchKey;

  var search = `SELECT * FROM appnote WHERE title LIKE '%${searchKey}%' OR content LIKE '%${searchKey}%'`;
  var params = [];

  db.all(search, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      message: "success",
      data: rows,
    });
  });
};
