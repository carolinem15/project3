const router = require("express").Router();
const favRoutes = require("./favapi");

// Book routes
router.use("/favorites", favRoutes);

module.exports = router;