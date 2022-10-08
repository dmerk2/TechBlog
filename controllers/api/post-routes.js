const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// GET /api/post
router.get("/", (req, res) => {
  Post.findAll()
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Post.create(req.body)
    .then((post) => {
      res.status(200).json(post);
    })
    .then((postIds) => res.status(200).json(postIds))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  if (req.session) {
    Comment.create(req.body)
      .then((comment) => {
        res.status(200).json(comment);
      })
      .then((commentIds) => res.status(200).json(commentIds))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
