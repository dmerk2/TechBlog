const { User } = require('../models');

const userData = [
  {
    username: 'lernantino@gmail.com',
    password: 'password12345'
  },
  {
    username: 'jDoggggg',
    password: "password12345"
  },
  {
    username: 'BooYa',
    password: 'password12345'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
