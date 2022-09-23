const { Comment } = require("./index");

const commentData = [
  {
    name: "Mike",
    comment: "Nice Post",
    date: "July 1, 2022"
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;