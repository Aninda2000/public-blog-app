const User = require("../../models/user");
const jwt = require("jsonwebtoken");

module.exports.create = function (req, res) {
  User.findOne({ username: req.body.username }, function (err, docs) {
    if (err) {
      return res.status(500).json({ msg: "error in database" });
    }
    if (!docs) {
      User.create(req.body);
      return res.status(200).json({ msg: "user registration successful" });
    } else {
      return res.status(200).json({ msg: "username already exist" });
    }
  });
};

module.exports.createSession = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username or password",
      });
    }

    return res.status(200).json({
      message: "sign in succesful, here is your token, please keep it safe!",
      data: {
        token: jwt.sign(user.toJSON(), "aninda", { expiresIn: "10000000" }),
      },
    });
  } catch (err) {
    console.log("*******", err);
    return res.json(500, {
      message: "Internal Server Error !!",
    });
  }
};
