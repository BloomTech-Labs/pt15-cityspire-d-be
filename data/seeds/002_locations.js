exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('locations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          id: 1,
          lat: '43.65',
          lon: '-79.38',
          name: 'Toronto',
          population: 2930000,
          refid: '1',
        },
        {
          id: 2,
          lat: '29.42',
          lon: '-98.49',
          name: 'San Antonio',
          population: 1508000,
          refid: '2',
        },
        {
          id: 3,
          lat: '33.74',
          lon: '-84.38',
          name: 'Atlanta',
          population: 488800,
          refid: '3',
        },
      ]);
    });
};
