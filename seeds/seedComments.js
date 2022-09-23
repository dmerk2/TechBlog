const { Comment } = require("../models");

const commentData = [
  {
    name: "Mike",
    comment: "Nice Post",
    date: "July 1, 2022"
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;