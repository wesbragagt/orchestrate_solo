const router = require("express").Router();
const apiRoutes = require("./api");
const loginRoutes = require("./loginRegister");

// API Routes
router.use("/api", apiRoutes);
router.use("/", loginRoutes);


module.exports = router;
