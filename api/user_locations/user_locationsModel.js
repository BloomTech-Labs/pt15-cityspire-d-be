//const Knex = require('knex');
//const knexfile = require('../../config/knexfile');
//const knex = require('knex');
const dbConfig = require('../../data/db-config');
const db = require('../../data/db-config');

const find = async () => {
  return await dbConfig('user_locations');
};

const findById = async (id) => {
  return db('user_locations').where('userid', id);
};

const findLocationsById = async ({ id }) => {
  return db('locations')
    .innerJoin('user_locations', 'locations.refid', 'user_locations.locationid')
    .innerJoin('profiles', 'profiles.id', 'user_locations.userid')
    .where('profiles.id', id)
    .select('locations.*');
};

async function add(locid) {
  const [id] = await db('user_locations').insert(locid, 'id');
  return findById(id);
}

function remove(id) {
  return db('user_locations').where('id', id).del();
}

// const findLocationsById = async (id) => {
//   return db('user_locations').select('*').from('locations').joinRaw('natural full join profiles').where('id',id)
// }

module.exports = {
  find,
  findById,
  findLocationsById,
  add,
  remove,
};
