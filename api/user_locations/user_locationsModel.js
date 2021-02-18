//const Knex = require('knex');
//const knexfile = require('../../config/knexfile');
//const knex = require('knex');
const dbConfig = require('../../data/db-config');
const db = require('../../data/db-config');

const find = async () => {
  return await dbConfig('user_locations');
};

const findById = async (id) => {
  return db('user_locations').where('userid', id).select('*');
};

const findLocationsById = async ({ id }) => {
  return db('locations')
    .innerJoin('user_locations', 'locations.refid', 'user_locations.locationid')
    .innerJoin('profiles', 'profiles.id', 'user_locations.userid')
    .where('profiles.id', id)
    .select('locations.*');
};

// const findLocationsById = async (id) => {
//   return db('user_locations').select('*').from('locations').joinRaw('natural full join profiles').where('id',id)
// }

module.exports = {
  find,
  findById,
  findLocationsById,
};
