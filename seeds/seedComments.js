const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    comment_text: "Nice Post",
    post_id: 1,
    comment_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;