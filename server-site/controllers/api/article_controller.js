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

module.exports.update = function (req, res) {
  // console.log(req.u);
  if (req.user) {
    Article.findById(req.params.id, function (err, article) {
      console.log(article);
      if (err) {
        return res.status(500).json({ msg: "Internal server Error****" });
      }
      if (article) {
        console.log("inside article", article);
        if (req.user.id == article.user) {
          Article.findByIdAndUpdate(req.params.id, {
            articleName: req.body.articleName,
            catagory: req.body.catagory,
            tag: req.body.tag,
            user: req.user.id,
          });
          return res
            .status(200)
            .json({ msg: "article successfully updated!!" });
        } else {
          return res.status(500).json({ msg: "unauthorized!! " });
        }
      } else {
        return res.status(200).json({ msg: "article not found!!" });
      }
    });
  } else {
    return res.status(500).json({ msg: "unauthorized!! " });
  }
};