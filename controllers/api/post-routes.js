const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

// Get api/posts
router.get("/", (req, res) => {
  //
  console.log("======================");
  Post.findAll({
    attributes: ["id", "post_text", "title"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      // {
      // model: Comment,
      // attributes: ['id', 'comment_text', 'post_id', 'user_id','created_at' ],
      // include: {
      // model: User,
      // attributes: ['username'],
      // }
      // }
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get api/posts/1
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "post_text"],
    include: [
      // {
      // model: Comment,
      // attributes: ['id', 'comment_text', 'post_id', 'user_id',],
      // include: {
      // model: User,
      // attributes: ['username']
      // }
      // },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST api/posts
router.post("/", withAuth, (req, res) => {
  // expects {title: 'spaced out is live', post_text: 'Blah, Blah, Blah', user_id: 1}
  Post.create({
    title: req.body.title,
    post_text: req.body.post_text,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update post post_text
router.put("/:id", withAuth, (req, res) => {
  // expects {title: 'spaced out is live', post_text: 'Blah, Blah, Blah', user_id: 1}
  Post.update(
    {
      post_text: req.body.post_text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete request
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
