const { seedComments } = require("./index");

const commentData = [
  {
    title: "Great Post",
    author: "Mike"
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;