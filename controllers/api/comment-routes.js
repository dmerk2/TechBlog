const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// router.get("/", (req, res) => {
//   Comment.findAll({
//     include: [{ model: Comment }],
//   })
//     .then((dbCommentData) => {
//       if (!dbCommentData) {
//         res.status(500).json({ message: "No Comments" });
//         return;
//       }
//       res.json(dbCommentData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// GET /api/comments
router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
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
    include: [Comment],
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
