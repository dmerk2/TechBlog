const { User } = require('../models');

const userData = [
  {
    name: 'John',
    username: 'jdog',
    password: "sdf"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
