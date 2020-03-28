require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    { errors } = require('celebrate'),
    app = express(),
    routes = require('./routes');

app
.use(cors())
.use(express.json())
.use(routes)
.use(errors());

module.exports = app;