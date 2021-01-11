const router = require("express").Router();
const favRoutes = require("./favapi");

// Book routes
router.use("/", favRoutes);

module.exports = router;