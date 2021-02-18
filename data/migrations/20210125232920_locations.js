exports.up = function (knex) {
  return knex.schema.createTable('locations', (tbl) => {
    tbl.increments('id').notNullable().unique().primary();
    tbl.string('lat').notNullable();
    tbl.string('lon').notNullable();
    tbl.string('refid').notNullable().unique();
    tbl.string('name');
    tbl.string('crime_data');
    tbl.integer('population');
    tbl.integer('cost_of_living');
    tbl.integer('rental_rates');
    tbl.integer('walk_score');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('locations');
};
