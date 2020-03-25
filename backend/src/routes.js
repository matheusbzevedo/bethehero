const express = require('express'),
    router = express.Router(),
    OngController = require('./controllers/OngController'),
    IncidentController = require('./controllers/IncidentController'),
    ProfileController = require('./controllers/ProfileController'),
    SessionController = require('./controllers/SessionController');

router
.post('/sessions', SessionController.create);

router
.get('/ongs', OngController.index)
.post('/ongs', OngController.create);

router
.get('/profile', ProfileController.index);

router
.get('/incidents', IncidentController.index)
.post('/incidents', IncidentController.create)
.delete('/incidents/:id', IncidentController.delete);

module.exports = router;