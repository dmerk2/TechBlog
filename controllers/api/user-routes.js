// const router = require("express").Router();
// const { User, Post, Comment } = require("../../models");

// // GET /api/users
// router.get("/", (req, res) => {
//   // Access our User model and run .findAll() method)
//   User.findAll({
//     attributes: { exclude: ["password"] },
//   })
//     .then((dbUserData) => res.json(dbUserData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // GET /api/users/1
// router.get("/:id", (req, res) => {
//   User.findOne({
//     attributes: { exclude: ["password"] },
//     where: {
//       id: req.params.id,
//     },
//     include: [
//       {
//         model: Post,
//         attributes: ["id", "title", "post_text"],
//       },
//       // include the Comment model here:
//       {
//         model: Comment,
//         attributes: ["id", "comment_text"],
//         include: {
//           model: Post,
//           attributes: ["title"],
//         },
//       },
//     ],
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

// // POST /api/users
// router.post("/", (req, res) => {
//   // expects {username: 'lernantino', email:'bob@gmail.com password: 'password1234'}
//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   }).then((dbUserData) => {
//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.email = dbUserData.email;
//       req.session.loggedIn = true;

//       res.json(dbUserData);
//     });
//   });
// });

// // POST /api/users/login
// router.post("/login", (req, res) => {
//   // expects {username: 'lernantino', password: 'password1234'}
//   User.findOne({
//     where: {
//       email: req.body.email,
//     },
//   }).then((dbUserData) => {
//     if (!dbUserData) {
//       res.status(400).json({ message: "No user with that username!" });
//       return;
//     }

//     // Verify user
//     const validPassword = dbUserData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: "Incorrect password!" });
//       return;
//     }

//     req.session.save(() => {
//       // declare session variables
//       req.session.user_id = dbUserData.id;
//       req.session.email = dbUserData.email;
//       req.session.loggedIn = true;

//       res.json({ user: dbUserData, message: "You are now logged in!" });
//     });
//   });
// });

// // PUT /api/users/1
// router.put("/:id", (req, res) => {
//   // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData[0]) {
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

// // DELETE /api/users/1
// router.delete("/:id", (req, res) => {
//   User.destroy({
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

// // POST /api/users/logout

// router.post("/logout", (req, res) => {
//   // expects {username: 'lernantino', password: 'password1234'}
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;
const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log("----- USER DATA ---- ");
    console.log(userData);

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Saving in the users session data
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Signup Route
router.post("/", (req, res) => {
  console.log(req.body);

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then((dbUserData) => {
    console.log(dbUserData);
    console.log("******");
    console.log(dbUserData.dataValues);

    const { id, username } = dbUserData.dataValues;

    req.session
      .save(() => {
        req.session.user_id = id;
        req.session.username = username;
        req.session.loggedIn = true;
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;