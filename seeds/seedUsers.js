const { User } = require('../models');

const userData = [
  {
    user_id: 4,
    username: 'lernantino',
    email: "lernantino@gmail.com",
    password: 'password12345'
  },
  {
    user_id: 2,
    username: 'sal',
    email: 'sal@hotmail.com',
    password: "password12345"
  },
  {
    user_id: 1,
    username: 'booYa',
    email: 'BooYa@aol.com',
    password: 'password12345'
  },
  {
    user_id: 3,
    username: 'mike',
    email: "mike@aol.com",
    password: 'password12345'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
