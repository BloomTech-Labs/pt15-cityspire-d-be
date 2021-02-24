const express = require('express');
const axios = require('axios');
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

// router.get('/:id', (req, res) => {
//   //console.log(req.body);
//   /**
//    * Need to take in a user id and return locations via that
//    * if we use userLocs.findById it returns the location IDs
//    * We route that information into another set of requests to the location database
//    * we make the request one at a time until we have all locations, combine all the locations into an array
//    * return the array jsonified
//    */
//   userLocs
//     .findLocationsById(req.params)
//     .then((userLocs) => {
//       //console.log(res)
//       res.json(userLocs);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ message: 'Database failed to return locations' });
//     });
// });

router.get('/:id', (req, res) => {
  const locid = [];
  let locArray = [];

  userLocs
    .findById(req.params.id)
    .then((userLocs) => {
      let data = userLocs;
      //console.log(data)
      for (let i = 0; i < data.length; i++) {
        locid.push(parseInt(data[i].locationid));
      }
      axios
        .get(
          'http://cityspire-d-ds-01.eba-5qfhebrw.us-east-1.elasticbeanstalk.com/cities/'
        )
        .then((response) => {
          locArray = response.data;
          //console.log(locArray)
        })
        .then(() => {
          console.log(locid);
          var filteredData = locArray.filter((item) => locid.includes(item.id));
          //console.log(filteredData)
          res.status(200).json(filteredData);
        });
    })

    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

/*******************POSTS*********************** */

router.post('/:id', (req, res) => {
  const userloc = req.body;

  userLocs
    .add(userloc)
    .then(() => {
      res.status(201).json({ message: 'User location added' });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

/**********DELETES *********************/

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  userLocs
    .remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find record associated with thht ID' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
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
