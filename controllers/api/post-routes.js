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
  
});

module.exports = router;
