const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/article", require("./articles"));


module.exports = router;
