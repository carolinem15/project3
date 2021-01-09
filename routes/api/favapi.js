const router = require("express").Router();
const favController = require("../../controllers/favController");

// Matches with "/api/books"
router.route("/")
  .get(favController.findAll)
  .post(favController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(favController.findById)
  .put(favController.update)
  .delete(favController.remove);

module.exports = router;