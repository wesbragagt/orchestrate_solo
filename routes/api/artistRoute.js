const router = require("express").Router();
const artistController = require("../../controllers/artistController");

// Matches with "/api/artist"
router
    .route("/")
    .get(artistController.findAll)
    .post(artistController.create);

// Matches with "/api/artist/:id"
router
    .route("/:id")
    .get(artistController.findById)
    .put(artistController.update)
    .delete(artistController.remove);

module.exports = router;
