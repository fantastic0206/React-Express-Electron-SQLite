const express = require("express");
const router = express.Router();
const note = require('../controllers/note');

router.post("/create", note.createData);
router.get("/getNoteData", note.getNoteDatas);
router.post("/update/:Id", note.updateData);
router.post("/search", note.searchDatas);

module.exports = router;
