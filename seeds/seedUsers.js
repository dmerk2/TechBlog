const { User } = require('../models');

const userData = [
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
