const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentRoutes = require('./comments-routes');
const postRoutes = require('./post-routes');

// router.use('/', postRoutes)
router.use('/post-routes', postRoutes);
router.use('/users', userRoutes);
router.use('/comments-routes', commentRoutes);

module.exports = router;