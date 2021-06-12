// Route to login user. (In this case, create an token);
const jwt = require("jsonwebtoken");
const db = require("../models/index");
var bcrypt = require("bcrypt");

const Userregister = db.userregister;
let refreshTokens = [];

exports.loginUser = async (req, res) => {
  // validation
  const userData = req.body;
  // console.log(user);

  if (!userData) {
    return res.status(404).json({ message: "Body empty" });
  }

  Userregister.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        let userid = { email: req.body.email };
        let accessToken = jwt.sign(userid, "access", { expiresIn: "20s" });
        let refreshToken = jwt.sign(userid, "refresh", { expiresIn: "7d" });
        refreshTokens.push(refreshToken);

        return res.status(201).json({
          accessToken,
          refreshToken,
        });
      } else {
        res.send("Wrong password");
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
};

exports.refreshTokenfun = (req, res, next) => {
  const refreshToken = req.body.token;
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.json({ message: "Refresh token not found, login again" });
  }

  // If the refresh token is valid, create a new accessToken and return it.
  jwt.verify(refreshToken, "refresh", (err, user) => {
    if (!err) {
      const accessToken = jwt.sign({ username: user.name }, "access", {
        expiresIn: "20s",
      });
      return res.json({ success: true, accessToken });
    } else {
      return res.json({
        success: false,
        message: "Invalid refresh token",
      });
    }
  });
};
