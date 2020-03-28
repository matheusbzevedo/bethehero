const knex = require('knex'),
    configuration = require('./../../knexfile'),
    config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development,
    connection = knex(config);
    
module.exports = connection;