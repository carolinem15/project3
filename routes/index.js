
///=====import favorite routes
const router = require("express").Router();
const apiRoutes = require("./api");
//router.use("/", favRoutes);
router.use("/api", apiRoutes);


module.exports = router;