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

Comment.belongsTo(User, {
  foreignKey: "comment",
  onDelete: "CASCADE",
  hooks: true,
});

Comment.belongsTo(Post, {
  foreignKey: "comment",
  hooks: true,
});

Post.belongsTo(User, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
  hooks: true,
});

// Export the modules
module.exports = { User, Post, Comment };
