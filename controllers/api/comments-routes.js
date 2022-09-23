const router = require("express").Router();
const { Comment, Post } = require("../../models");

router.get("/", (req, res) => {
  Comment.findAll({
    include: [{ model: Comment, through: Post }],
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(500).json({ message: "No Comments" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Comment.findOne({
    where: {
      id: req.params.id,
    },
    include: [Comment, Post],
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(500).json({ message: "No Comments" });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Comment.create(req.body)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .then((commentIds) => res.status(200).json(commentIds))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Comment.destroy({
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
