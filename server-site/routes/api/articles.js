const express = require("express");
const router = express.Router();
const articleController = require("../../controllers/api/article_controller");

router.post("/create", articleController.create);

module.exports = router;
