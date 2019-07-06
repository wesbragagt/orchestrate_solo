const router = require("express").Router();
const peopleController = require("../../controllers/peopleController");

// Matches with "/api/people"
router.route("/")
    .get(peopleController.findAll)
    .post(peopleController.create);

// Matches with "/api/people/:id"
router
    .route("/:id")
    .get(peopleController.findById)
    .put(peopleController.update)
    .delete(peopleController.remove);

module.exports = router;
