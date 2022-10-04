const express = require("express");
const passport = require("passport");
const router = express.Router();
const articleController = require("../../controllers/api/article_controller");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  articleController.create
);
router.delete(
  "/destroy/:id",
  passport.authenticate("jwt", { session: false }),
  articleController.destroy
);
router.get("/all-articles", articleController.getAllArticles);

module.exports = router;
