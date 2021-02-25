exports.up = function (knex) {
  // return knex.schema.createTable('user_locations', (tbl) => {
  //   tbl
  //     .string('userid')
  //     .notNullable()
  //     .unsigned()
  //     .references('profiles.id')
  //     .onDelete('CASCADE')
  //     .onUpdate('CASCADE');
  //   tbl
  //     .string('locationid')
  //     .notNullable()
  //     .unsigned()
  //     .references('locations.refid')
  //     .onDelete('CASCADE')
  //     .onUpdate('CASCADE');

  //   tbl.primary(['userid', 'locationid']);
  // });

  return knex.schema.createTable('user_locations', (tbl) => {
    tbl.increments('id').notNullable().unique().primary();
    tbl.string('userid').notNullable();
    tbl.integer('locationid').notNullable().unsigned();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_locations');
};
