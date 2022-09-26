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
  {
    title: "JavaScript is awesome",
    content: "JS can do so many things",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;