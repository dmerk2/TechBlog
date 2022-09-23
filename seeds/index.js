const seedUsers = require('./seedUsers');
const seedPosts = require("./seedPosts");
const seedComments = require("./seedComments");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  process.exit();
};

seedAll();
