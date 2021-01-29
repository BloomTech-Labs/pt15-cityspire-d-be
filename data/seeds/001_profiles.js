const faker = require('faker');

const profiles = [...new Array(5)].map((i, idx) => ({
  id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
  avatarUrl: faker.image.avatar(),
  email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
  name:
    idx === 0
      ? 'Test001 User'
      : `${faker.name.firstName()} ${faker.name.lastName()}`,
}));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: "00ulthapbErVUwVJy4x6",
          email: "llama001@maildrop.cc",
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar()
        },
        {
          id: "00ultwew80Onb2vOT4x6",
          email: "llama002@maildrop.cc",
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar()
        },
        {
          id: "00ultx74kMUmEW8054x6",
          email: "llama003@maildrop.cc",
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar()
        },
        {
          id: "00ultwqjtqt4VCcS24x6",
          email: "llama004@maildrop.cc",
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar()
        },
        {
          id: "00ultwz1n9ORpNFc04x6",
          email: "llama005@maildrop.cc",
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar()
        },
        {
          id: "00u13omswyZM1xVya4x7",
          email: "llama006@maildrop.cc",
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar()
        },
        {
          id: "00u13ol5x1kmKxVJU4x7",
          email: "llama007@maildrop.cc",
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar()
        },
        {
          id: "00u13oned0U8XP8Mb4x7",
          email: "llama008@maildrop.cc",
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          avatarUrl : faker.image.avatar()
        }
      ]);
    });
};
