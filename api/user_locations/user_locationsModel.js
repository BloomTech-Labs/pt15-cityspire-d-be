//const Knex = require('knex');
//const knexfile = require('../../config/knexfile');
const dbConfig = require('../../data/db-config');
const db = require('../../data/db-config');

const find = async () => {
  return await dbConfig('user_locations');
};

const findById = async (id) => {
  return db('user_locations').where('userid', id).select('*');
};

const findLocationsById = async (id) => {
  return db('locations as l')
    .join('profiles as p', 'p.id', 'l.refid')
    .where('p.id', id)
    .select('p.*', 'l.lat');
};

// const findLocationsById = async (id) => {
//   return db('user_locations').select('*').from('locations').joinRaw('natural full join profiles').where('id',id)
// }

module.exports = {
  find,
  findById,
  findLocationsById,
};
