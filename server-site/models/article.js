const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    articleName: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
