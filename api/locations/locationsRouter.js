const express = require('express');
const axios = require('axios');
const Locs = require('./locationsModel.js');

//const db = require('../../data/db-config.js')
const router = express.Router();

// const requestOptions = {
//   headers: { accept: 'application/json' },
// };

// const getById = (id) => {};

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

router.get('/all', (req, res) => {
  axios
    .get(
      'http://cityspire-d-ds-01.eba-5qfhebrw.us-east-1.elasticbeanstalk.com/cities/'
    )
    .then((response) => {
      console.log(response);
      let data = response.data;
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error fetching API', error: err });
    });
});

router.get('/:id', (req, res) => {
  axios
    .get(
      'http://cityspire-d-ds-01.eba-5qfhebrw.us-east-1.elasticbeanstalk.com/cities/'
    )
    .then((response) => {
      console.log(response);
      let data = response.data;
      res.status(200).json(data[req.params.id - 1]);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error fetching API', error: err });
    });
});

// router.get('/all',(req,res)=>{
//   fetch('https://cityspire-d-ds-01.eba-5qfhebrw.us-east-1.elasticbeanstalk.com/cities',{
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json'}
//   })
//   .then(response => {
//     data= response.data
//   })
//   .then(thing => {
//     res.status(200).json(data)
//   })
//   .catch(err=>{
//     res.status(500).json({message: 'Error fetching API', error:err})
//   })
// })

module.exports = router;
