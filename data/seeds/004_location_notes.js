exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('location_notes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('location_notes').insert([
        {
          id: 1,
          user_id: '00ulthapbErVUwVJy4x6',
          location_id: 1,
          notes: 'Toronto',
        },
        {
          id: 2,
          user_id: '00ultwew80Onb2vOT4x6',
          location_id: 2,
          notes: 'San Antonio',
        },
        {
          id: 3,
          user_id: '00ultx74kMUmEW8054x6',
          location_id: 3,
          notes: 'Atlanta',
        },
      ]);
    });
};
