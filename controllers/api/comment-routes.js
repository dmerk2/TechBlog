// const router = require("express").Router();
// const { Comment } = require("../../models");
// const withAuth = require("../../utils/auth");

// // GET /api/comments
// router.get("/", (req, res) => {
//   Comment.findAll()
//     .then((dbCommentData) => res.json(dbCommentData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // POST /api/comments
// router.post("/", withAuth, (req, res) => {
//   // expects {comment_text: "This is the comment", user_id: 1, post_id: 2}
//   // check the session
//   if (req.session) {
//     Comment.create({
//       comment_text: req.body.comment_text,
//       post_id: req.body.post_id,
//       user_id: req.session.user_id,
//     })
//       .then((dbCommentData) => res.json(dbCommentData))
//       .catch((err) => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }
// });

// // DELETE /api/users/1
// router.delete("/:id", (req, res) => {
//   Comment.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Comment.findAll({
    include: [{ model: Comment }],
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
