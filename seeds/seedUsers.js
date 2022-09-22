const { seedUsers } = require('../models');

const userData = [
  {
    name: 'Printemps',
    starting_date: 'April 20, 2021 07:00:00',
    ending_date: 'June 21, 2021 17:00:00',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
