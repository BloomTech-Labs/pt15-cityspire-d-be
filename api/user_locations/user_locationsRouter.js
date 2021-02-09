const express = require('express');

const userLocs = require('./user_locationsModel.js');
const router = express.Router();

/**************GETS********** */

router.get('/', (req, res) => {
  console.log(req.body);
  userLocs
    .find()
    .then((userLocs) => {
      res.json(userLocs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Database failed to return locations' });
    });
});

router.get('/:id', (req, res) => {
  console.log(req.body);
  userLocs
    .findLocationsById(req.params.id)
    .then((userLocs) => {
      res.json(userLocs);

      console.log(userLocs[1].locationid);
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Database failed to return data' });
    });
});

module.exports = router;
