exports.up = (knex) => {
    return knex.schema.createTable('incidents', (t) => {
        t.increments('id').primary();
        t.string('title').notNullable();
        t.string('description').notNullable();
        t.decimal('value', 2).notNullable();
        t.string('ong_id').notNullable();
        t.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = (knex) => knex.schema.dropTable('incidents');