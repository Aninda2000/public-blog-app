const Article = require("../../models/article");
module.exports.create = function (req, res) {
  if (req.user) {
    Article.create({
      articleName: req.body.articleName,
      catagory: req.body.catagory,
      tag: req.body.tag,
      user: req.user.id,
    });
    return res.status(200).json({ msg: "article created successfully" });
  } else {
    return res.status(500).json({ msg: "unauthorized!! " });
  }
};
