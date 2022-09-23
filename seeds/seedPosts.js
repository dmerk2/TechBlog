const { Post } = require("../models");

const postData = [
  {
    title: "OOP",
    content: "OOP is Object Oriented Programming",
    user_id: 1,
  },
  {
    title: "MVC",
    content: "Model View Controller",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;