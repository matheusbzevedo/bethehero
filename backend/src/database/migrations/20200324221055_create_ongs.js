exports.up = (knex) => {
    return knex.schema.createTable('ongs', (t) => {
        t.string('id').primary();
        t.string('name').notNullable();
        t.string('email').notNullable();
        t.string('whatsapp').notNullable();
        t.string('city').notNullable();
        t.string('uf', 2).notNullable();
    });
};

exports.down = (knex) => knex.schema.dropTable('ongs');