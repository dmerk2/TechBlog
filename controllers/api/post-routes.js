const router = require("express").Router();
const { Post } = require("../../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [{ model: Post }],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(500).json({ message: "No post!" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [Post],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(500).json({ message: "No post!" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
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

module.exports = router;
