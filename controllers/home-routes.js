const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Using the withAuth function created in the utils folder
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    console.log(userData);

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // When rendering the homepage, the user is logged in and the session data begins
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// If the users session is still logged in, redirect them to the homepage
router.get('/login', (req, res) => {

  console.log(req);
  console.log(req.session);

  if (req.session.logged_in) {
    res.redirect('/');
    // return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('login');
})

module.exports = router;
