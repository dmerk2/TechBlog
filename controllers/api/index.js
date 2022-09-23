const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./comments-routes');

router.use('/users', userRoutes);
router.use('/comments-routes', commentRoutes);

module.exports = router;
