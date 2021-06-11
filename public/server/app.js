const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const path = require("path");

const test = require("./routes/test");
const note = require("./routes/note");

var server = express();

server.use(cors());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

server.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
server.use(bodyParser.json({ limit: "50mb", extended: true }));

// server.use(express.urlencoded({ extended: true }));
server.use("/public", express.static(path.join(__dirname, "./../")));

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
