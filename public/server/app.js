const express = require('express');

const test = require('./routes/test');

var server = express();

/**
 * Middlewares
 */
server.use(express.json());

/**
 * Routes
 */
server.use('/api/test', test);

module.exports = server;