exports.up = function (knex) {
  return knex.schema.createTable('user_locations', (tbl) => {
    tbl
      .string('userid')
      .notNullable()
      .unsigned()
      .references('profiles.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('locationid')
      .notNullable()
      .unsigned()
      .references('locations.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.primary(['userid','locationid']);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_locations');
};
