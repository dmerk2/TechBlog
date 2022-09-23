const { Post } = require("../models");

const postData = [
  {
    title: "Blossoming Apricot",
    contents: "LedyX",
    username: "sdfj",
    date: 1,
    comment:
      "Branches with pink apricot blossoms against a blue background.",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
