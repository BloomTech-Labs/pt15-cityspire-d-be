const dbConfig = require('../../data/db-config');
const db = require('../../data/db-config');

const find = async () => {
  return await dbConfig('user_locations');
};

const findById = async (id) => {
  return db('user_locations').where('userid', id).select('*');
};

const findLocationsById = async (id) => {
  return db('profiles as p')
    .where('p.id', id)
    .join('locations as l', 'l.id', 'p.id')

    .select('l.*');
};

module.exports = {
  find,
  findById,
  findLocationsById,
};
