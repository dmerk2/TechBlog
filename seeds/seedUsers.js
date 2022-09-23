const { User } = require('../models');

const userData = [
  {
    name: 'John',
    username: 'sal@hotmail.com',
    password: "password12345"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
