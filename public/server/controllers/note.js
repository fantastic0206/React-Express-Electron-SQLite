const express = require("express");
const multer = require("multer");

const db = require("../config/db");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).array("file", 10);

exports.createData = (req, res) => {
  var papperType = req.body.papperType ? req.body.papperType : "";
  var papperColor = req.body.papperColor ? req.body.papperColor : "";
  var title = req.body.title ? req.body.title : "";
  var content = req.body.content ? req.body.content : "";
  // var path = req.files.file ? req.files.file[0].path : "";
  // var imageName = req.files.file ? req.files.file[0].originalname : "";

  var insert =
    "INSERT INTO notes (papperType, papperColor, title, content) VALUES (?, ?, ?, ?)";
  db.run(insert, [papperType, papperColor, title, content], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "success" });
    }
  });

  // upload(req, res, function (err) {
  //   console.log(req.body.file.files);
  //   if (err instanceof multer.MulterError) {
  //     // A Multer error occurred when uploading.
  //     res.status(400).json({ message: err.message });
  //     return;
  //   } else if (err) {
  //     // An unknown error occurred when uploading.
  //     res.status(400).json({ message: err.message });
  //   }
  //   // console.log(req.files.file);

  //   // Everything went fine.
  //   var papperType = req.body.papperType ? req.body.papperType : "";
  //   var papperColor = req.body.papperColor ? req.body.papperColor : "";
  //   var title = req.body.title ? req.body.title : "";
  //   var content = req.body.content ? req.body.content : "";
  //   var path = req.files.file ? req.files.file[0].path : "";
  //   var imageName = req.files.file ? req.files.file[0].originalname : "";

  //   var insert =
  //     "INSERT INTO notes (papperType, papperColor, title, content, imagePath, imageName) VALUES (?, ?, ?, ?, ?, ?)";
  //   db.run(
  //     insert,
  //     [papperType, papperColor, title, content, path, imageName],
  //     (err, rows) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         res.status(200).json({ message: "success" });
  //       }
  //     }
  //   );
  // });
};

exports.getNoteDatas = (req, res) => {
  var select = "SELECT * FROM notes";
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
  // var path = req.files.file ? req.files.file[0].path : "";
  // var imageName = req.files.file ? req.files.file[0].originalname : "";

  var update = `UPDATE notes SET "papperType" = '${papperType}', "papperColor" = '${papperColor}', "title" = '${title}', "content" = '${content}' WHERE "note_id" = '${noteId}'`;
  db.run(update, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ message: "success" });
    }
  });
  // upload(req, res, function (err) {
  //   if (err instanceof multer.MulterError) {
  //     // A Multer error occurred when uploading.
  //     res.status(400).json({ message: err.message });
  //     return;
  //   } else if (err) {
  //     // An unknown error occurred when uploading.
  //     res.status(400).json({ message: err.message });
  //   }

  //   // Everything went fine.
  // });
};

exports.searchDatas = (req, res) => {
  var searchKey = req.body.searchKey;

  var search = `SELECT * FROM notes WHERE title LIKE '%${searchKey}%' OR content LIKE '%${searchKey}%'`;
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
