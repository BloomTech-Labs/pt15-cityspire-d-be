exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex('user_locations').insert([
    { userid: '00ulthapbErVUwVJy4x6', locationid: 1 },
    { userid: '00ulthapbErVUwVJy4x6', locationid: 2 },
    { userid: '00ultwew80Onb2vOT4x6', locationid: 2 },
  ]);
};
