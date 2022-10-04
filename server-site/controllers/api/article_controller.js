const Article = require("../../models/article");
module.exports.create = function (req, res) {
  console.log(req.user);
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

module.exports.destroy = async function (req, res) {
  try {
    let article = await Article.findById(req.params.id);

    if (article.user == req.user.id) {
      article.remove();
      return res.status(200).json({
        data: {
          article_id: req.params.id,
        },
        message: "Article deleted",
      });
    } else {
      return res.status(404).json({ msg: "unauthorized request!!" });
    }
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error !!" });
  }
};

module.exports.getAllArticles = function (req, res) {
  Article.find({}, function (err, articles) {
    if (err) {
      return res.status(500).json({ msg: "Internal Server Error !!" });
    }
    return res
      .status(200)
      .json({ msg: "all Articles fetched successfully", data: articles });
  });
};
