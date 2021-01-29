const express = require('express');

const Locs = require('./locationsModel.js');
//const db = require('../../data/db-config.js')
const router = express.Router();

/**************GETS*********** */

router.get('/', (req, res) => {
  console.log(req.body);
  Locs.find()
    .then((locs) => {
      res.json(locs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Database failed to return locations' });
    });
});

module.exports = router;
