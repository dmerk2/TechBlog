const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comments");

User.hasMany(Post, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  hooks: true,
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  hooks: true,
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  hooks: true,
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
  hooks: true,
});

// Export the modules
module.exports = { User, Post, Comment };
