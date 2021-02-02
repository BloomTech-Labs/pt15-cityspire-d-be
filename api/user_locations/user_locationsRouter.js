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

module.exports = router;
