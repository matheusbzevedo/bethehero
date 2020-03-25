require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    app = express(),
    routes = require('./routes');

app
.use(cors())
.use(express.json())
.use(routes);

app.listen(process.env.port, () => console.log(`Rodando na porta ${process.env.port}`));