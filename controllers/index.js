const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dasbhoardRoutes = require("./dashboard-routes");

// these routes are prefixed with '/api'
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dasbhoardRoutes);

module.exports = router;
