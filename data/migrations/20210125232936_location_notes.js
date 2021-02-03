exports.up = function (knex) {
  return knex.schema.createTable('location_notes', (tbl) => {
    tbl.increments('id').notNullable().unique().primary();
    tbl.string('notes').notNullable();
    tbl
      .string('user_id')
      .notNullable()
      .unsigned()
      .references('profiles.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('location_id')
      .notNullable()
      .unsigned()
      .references('locations.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('location_notes');
};
