const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// Matches with "/api/event"
router.route("/")
    .get(eventController.findAll)
    .post(eventController.create);

// Matches with "/api/event/:id"
router
    .route("/:id")
    .get(eventController.findById)
    .put(eventController.update)
    .delete(eventController.remove);

// Matches with "api/event/aritst/:artistID"
router
    .route("/artist/:artistID")
    .get(eventController.findByArtist);

// Matches with "api/event/user/:userID"
router
    .route("/user/:userID")
    .get(eventController.findByUser);

module.exports = router;
