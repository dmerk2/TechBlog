const { User } = require("../models");

const userData = [
  {
    username: 'lernantino',
    email: "lernantino@gmail.com",
    password: 'password12345'
  },
  {
    username: 'sal',
    email: 'sal@hotmail.com',
    password: "password12345"
  },
  {
    username: 'booYa',
    email: 'BooYa@aol.com',
    password: 'password12345'
  },
  {
    username: 'mike',
    email: "mike@aol.com",
    password: 'password12345'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
