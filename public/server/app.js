const express = require("express");

const cors = require("cors");
const path = require('path');

const test = require("./routes/test");
const note = require("./routes/note");

var server = express();

server.use(cors());

server.use(express.urlencoded({ extended: true }));
server.use('/public',express.static(path.join(__dirname, './../')));

/**
 * Middlewares
 */
server.use(express.json());

/**
 * Routes
 */
server.use("/api/test", test);
server.use("/api/note", note);

module.exports = server;
