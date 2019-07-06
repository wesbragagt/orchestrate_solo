const router = require("express").Router();
const venueController = require("../../controllers/venueController");

// Matches with "/api/venue"
router.route("/")
    .get(venueController.findAll)
    .post(venueController.create);

// Matches with "/api/venue/:id"
router
    .route("/:id")
    .get(venueController.findById)
    .put(venueController.update)
    .delete(venueController.remove);

module.exports = router;
