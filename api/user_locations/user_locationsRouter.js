const express = require('express');

const userLocs = require('./user_locationsModel.js');
//const locs = require('../locations/locationsModel.js');
const router = express.Router();
//let data = [];
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
  //console.log(req.body);
  /**
   * Need to take in a user id and return locations via that
   * if we use userLocs.findById it returns the location IDs
   * We route that information into another set of requests to the location database
   * we make the request one at a time until we have all locations, combine all the locations into an array
   * return the array jsonified
   */
  userLocs
    .findLocationsById(req.params)
    .then((userLocs) => {
      //console.log(res)
      res.json(userLocs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Database failed to return locations' });
    });
});

module.exports = router;

// function searchData (object,id) {
//   let outArr = [];
//   const objectWithValues = Object.values(object);
//   const arrayOfNames = Object.getOwnPropertyNames(object);
//   console.log(objectWithValues)
//   //console.log(objectWithValues.length)
//   for (let i = 0; i<objectWithValues.length; i++){
//     console.log(objectWithValues[i].locationid)
//     outArr.push(
//       locs.findById(objectWithValues[i])
//     )

//   }
//   console.log('RESULTS = ' + json(outArr)
// }
