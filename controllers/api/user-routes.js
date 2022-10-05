// const router = require("express").Router();
// const { User } = require("../../models");

// router.post("/login", async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     console.log("----- USER DATA ---- ");
//     console.log(userData);

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }
//     // POST /api/users/login
//     // router.post("/login", (req, res) => {
//     //   // expects {username: 'lernantino', password: 'password1234'}
//     //   User.findOne({
//     //     where: {
//     //       username: req.body.username,
//     //     },
//     //   }).then((dbUserData) => {
//     //     if (!dbUserData) {
//     //       res.status(400).json({ message: "No user with that username!" });
//     //       return;
//     //     }

//     //     // Verify user
//     //     const validPassword = dbUserData.checkPassword(req.body.password);

//     //     if (!validPassword) {
//     //       res.status(400).json({ message: "Incorrect password!" });
//     //       return;
//     //     }

//     //     req.session.save(() => {
//     //       // declare session variables
//     //       req.session.user_id = dbUserData.id;
//     //       req.session.username = dbUserData.username;
//     //       req.session.loggedIn = true;

//     //       res.json({ user: dbUserData, message: "You are now logged in!" });
//     //     });
//     //   });
//     // });
//     // POST /api/users/login
//     router.post("/login", (req, res) => {
//       // expects {username: 'lernantino', password: 'password1234'}
//       User.findOne({
//         where: {
//           email: req.body.email,
//         },
//       }).then((dbUserData) => {
//         if (!dbUserData) {
//           res.status(400).json({ message: "No user with that username!" });
//           return;
//         }

//         // Verify user
//         const validPassword = dbUserData.checkPassword(req.body.password);

//         if (!validPassword) {
//           res.status(400).json({ message: "Incorrect password!" });
//           return;
//         }

//         req.session.save(() => {
//           // declare session variables
//           req.session.user_id = dbUserData.id;
//           req.session.email = dbUserData.email;
//           req.session.loggedIn = true;

//           res.json({ user: dbUserData, message: "You are now logged in!" });
//         });
//       });
//     });
//     // Saving in the users session data
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // Signup Route
// router.post("/", (req, res) => {
//   console.log(req.body);

//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   }).then((dbUserData) => {
//     console.log(dbUserData);
//     console.log("******");
//     console.log(dbUserData.dataValues);

//     const { id, username } = dbUserData.dataValues;

//     req.session
//       .save(() => {
//         req.session.user_id = id;
//         req.session.username = username;
//         req.session.loggedIn = true;
//         res.json(dbUserData);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });
// });

// router.post("/logout", (req, res) => {
//   if (req.session.logged_in) {
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
    // POST /api/users/login
    // router.post("/login", (req, res) => {
    //   // expects {username: 'lernantino', password: 'password1234'}
    //   User.findOne({
    //     where: {
    //       username: req.body.username,
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
    //       req.session.username = dbUserData.username;
    //       req.session.loggedIn = true;

    //       res.json({ user: dbUserData, message: "You are now logged in!" });
    //     });
    //   });
    // });
    // POST /api/users/login
    router.post("/login", (req, res) => {
      // expects {username: 'lernantino', password: 'password1234'}
      User.findOne({
        where: {
          email: req.body.email,
        },
      }).then((dbUserData) => {
        if (!dbUserData) {
          res.status(400).json({ message: "No user with that username!" });
          return;
        }

        // Verify user
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
          res.status(400).json({ message: "Incorrect password!" });
          return;
        }

        req.session.save(() => {
          // declare session variables
          req.session.user_id = dbUserData.id;
          req.session.email = dbUserData.email;
          req.session.loggedIn = true;

          res.json({ user: dbUserData, message: "You are now logged in!" });
        });
      });
    });
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
