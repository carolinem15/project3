const router = require("express").Router();
const favRoutes = require("./favapi");

// favorite routes
router.use("/favorite", favRoutes);

module.exports = router;