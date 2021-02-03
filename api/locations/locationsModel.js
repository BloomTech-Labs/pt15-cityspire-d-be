const db = require('../../data/db-config.js');

module.exports = {
  find,
  findById,
};

function find() {
  return db('locations');
}

function findById(id) {
  return db('locations').where({ id }).first();
}
