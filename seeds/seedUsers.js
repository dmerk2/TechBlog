const { User } = require('../models');

const userData = [
  {
    user_id: 4,
    username: 'lernantino@gmail.com',
    password: 'password12345'
  },
  {
    user_id: 2,
    username: 'sal@hotmail.com',
    password: "password12345"
  },
  {
    user_id: 1,
    username: 'BooYa@aol.com',
    password: 'password12345'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
