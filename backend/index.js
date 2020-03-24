require('dotenv').config();

const express = require('express'),
    app = express();

app.listen(process.env.port, () => console.log(`Rodando na porta ${process.env.port}`));