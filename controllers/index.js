const router = require("express").Router();

const apiRoutes = require("./api");
const dasbhoardRoutes = require("./dashboard-routes");
const homeRoutes = require("./home-routes");

// these routes are prefixed with '/api'
router.use("/api", apiRoutes);
router.use("/dashboard", dasbhoardRoutes);
router.use("/home", homeRoutes);

module.exports = router;
